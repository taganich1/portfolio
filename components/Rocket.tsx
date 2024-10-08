'use client';
import React, {
    FC,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from 'react';
import anime from 'animejs';

interface RocketComponentProps {
    isVisible: boolean;
    onLaunchComplete: () => void;
}

interface FlameElement extends SVGElement {
    style: CSSStyleDeclaration;
}

const RocketComponent: FC<RocketComponentProps> = ({
    isVisible,
    onLaunchComplete,
}) => {
    const rocketRef: MutableRefObject<SVGSVGElement | null> =
        useRef<SVGSVGElement | null>(null);
    const flamesRef = useRef<FlameElement[]>([]);
    const delay = 40;
    let now = Date.now();
    let then = Date.now();
    let elapsed = 0;
    const [animationCompleted, setAnimationCompleted] =
        useState<boolean>(false);

    const random = (min: number, max: number) =>
        Math.random() * (max - min) + min;

    useEffect(() => {
        if (isVisible && rocketRef.current) {
            // trigger the rocket animation when isVisible is true
            anime({
                targets: rocketRef.current,
                translateX: [
                    {
                        value: window.innerWidth,
                        duration: rocketDuration,
                        easing: 'linear',
                    },
                ],
                translateY: [
                    {
                        value: -window.innerHeight,
                        duration: rocketDuration,
                        easing: 'linear',
                    },
                ],
                complete: () => {
                    setAnimationCompleted(true);
                    onLaunchComplete(); // notify parent component that the animation is complete
                },
            });

            requestAnimationFrame(animeFlames);
            requestAnimationFrame(animeStars);
        }
    }, [isVisible, rocketRef.current]);

    // reset animationCompleted when isVisible changes
    useEffect(() => {
        if (isVisible) {
            setAnimationCompleted(false);
        }
    }, [isVisible]);

    const animeFlames = () => {
        now = Date.now();
        elapsed = now - then;

        if (elapsed > delay) {
            flamesRef.current.forEach((flame) => {
                flame.style.transform = `scale(${random(0.8, 1)}, ${random(
                    0.8,
                    1
                )})`;
            });

            then = Date.now();
        }

        requestAnimationFrame(animeFlames);
    };

    const createStar = () => {
        const star = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'circle'
        );
        star.setAttribute('r', String(random(4.5, 22.5)));
        star.setAttribute('cx', String(random(10, window.innerWidth / 2)));
        star.setAttribute(
            'cy',
            String(random(window.innerHeight / 2, window.innerHeight))
        );
        star.setAttribute('fill', '#898989');

        return star;
    };

    const animeStars = () => {
        let starDuration = 0;
        const randomStar = random(0, 5);
        if (randomStar > 4.8 && rocketRef.current) {
            const star = createStar();
            rocketRef.current.insertBefore(star, rocketRef.current.firstChild);

            const starSize = Number(star.getAttribute('r'));
            if (starSize < 7) {
                starDuration = 25000;
                star.style.opacity = String(random(0.5, 0.7));
            } else if (starSize < 10) {
                starDuration = 20000;
                star.style.opacity = String(random(0.6, 0.8));
            } else if (starSize < 18) {
                starDuration = 15000;
                star.style.opacity = String(random(0.7, 0.9));
            } else {
                starDuration = 10000;
                star.style.opacity = String(random(0.8, 0.95));
            }

            anime({
                targets: star,
                translateX: [
                    {
                        value: window.innerWidth,
                        duration: starDuration,
                        easing: 'linear',
                    },
                ],
                translateY: [
                    {
                        value: -window.innerHeight,
                        duration: starDuration,
                        easing: 'linear',
                    },
                ],
                complete: () => {
                    star.remove();
                },
            });
        }

        requestAnimationFrame(animeStars);
    };

    const rocketDuration = 5000; // Adjust the duration as needed

    useEffect(() => {
        anime({
            targets: rocketRef.current,
            translateX: [
                {
                    value: window.innerWidth,
                    duration: rocketDuration,
                    easing: 'linear',
                },
            ],
            translateY: [
                {
                    value: -window.innerHeight,
                    duration: rocketDuration,
                    easing: 'linear',
                },
            ],
        });

        requestAnimationFrame(animeFlames);
        requestAnimationFrame(animeStars);
    }, []);

    return isVisible ? (
        <div
            className={`o-main z-50 absolute top-0 left-0 w-full h-full ${
                isVisible ? 'visible' : ''
            }`}
        >
            <svg
                ref={rocketRef}
                className="c-rocket"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-450 -450 1500 1500"
            >
                <path
                    d="M359.828 328.707L246.761 378.84l37.333 56.533 52.267-48c-5.333-21.333 3.2-44.8 23.467-58.666z"
                    fill="#ced6e0"
                />
                <path
                    d="M305.428 512.173l65.067-65.067c23.467-23.467 36.267-55.467 36.267-88.533-33.067 0-65.067 12.8-88.533 36.267l-65.067 65.067 52.266 52.266z"
                    fill="#f3705a"
                />
                <path
                    d="M120.894 176.173l-42.667 53.333 56.533 36.267 50.133-113.067c-15.999 21.334-41.599 29.867-63.999 23.467z"
                    fill="#ced6e0"
                />
                <path
                    d="M.361 207.107l65.067-65.067c23.467-23.467 55.467-36.267 88.533-36.267 0 33.067-12.8 65.067-36.267 88.533l-65.067 65.067L.361 207.107z"
                    fill="#f3705a"
                />
                <g fill="#ffd15c">
                    <path d="M322.816 495.137l-17.347 17.347-52.042-52.041 17.348-17.348zM69.392 241.284L52.045 258.63.003 206.59l17.347-17.347z" />
                </g>
                <path
                    d="M208.361 415.107C551.828 284.973 510.228-3.027 511.294 1.24c4.267 1.067-283.733-39.467-413.867 302.933l110.934 110.934z"
                    fill="#f3f3f3"
                />
                <g fill="#415a6b">
                    <path d="M108.094 279.64c-3.2 8.533-6.4 16-9.6 24.533L209.428 414.04c8.533-3.2 17.067-6.4 24.533-9.6l-125.867-124.8z" />
                    <circle cx="302.228" cy="210.307" r="73.6" />
                </g>
                <circle cx="302.228" cy="210.307" r="55.467" fill="#8ad7f8" />
                <g fill="#55c0eb">
                    <path d="M340.628 249.773V170.84c-6.4-6.4-13.867-9.6-21.333-12.8v104.533c8.533-3.2 14.933-7.466 21.333-12.8zM294.761 155.907v108.8a25.992 25.992 0 0 0 12.8 0V154.84c-4.267 0-8.533 0-12.8 1.067z" />
                </g>
                <path
                    d="M332.094 33.24l146.133 146.133c4.267-8.533 7.467-17.067 10.667-24.533L356.628 23.64c-7.467 3.2-16 6.4-24.534 9.6z"
                    fill="#ffd15c"
                />
                <path
                    d="M488.894 154.84c32-86.4 22.4-155.733 22.4-153.6 2.133 0-67.2-8.533-153.6 22.4l131.2 131.2z"
                    fill="#f3705a"
                />
                <path
                    className="c-rocket__flame c-rocket__flame--power"
                    d="M137.961 455.64c-22.4 22.4-137.6 56.533-137.6 56.533s34.133-115.2 56.533-137.6c22.4-22.4 58.667-22.4 80 0 22.4 22.4 22.4 58.667 1.067 81.067z"
                    fill="#ffd15c"
                />
                <path
                    className="c-rocket__flame"
                    d="M137.961 421.507c-12.8 12.8-80 33.067-80 33.067s20.267-67.2 33.067-80c12.8-12.8 34.133-12.8 46.933 0 12.8 12.799 12.8 34.133 0 46.933z"
                    fill="#f7b64c"
                />
            </svg>
        </div>
    ) : null;
};

export default RocketComponent;
