'use client';
import React, {
    ChangeEvent,
    FC,
    FormEvent,
    useRef,
    useState,
    MutableRefObject,
} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Slide, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { styles } from '@/styles';
import { EarthCanvas } from './canvas';
import { slideIn } from '@/utils/motion';
import SectionWrapper from '@/hoc/SectionWrapper';
interface FormState {
    name: string;
    email: string;
    message: string;
}

const toastOptions: ToastOptions = {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    style: {
        border: '1px solid #7042f88b',
        borderRadius: '10px',
        color: '#b49bff',
        backgroundColor: 'rgb(21 16 48 / var(--tw-bg-opacity)',
    },
};

const emailServiceId: string = process.env
    .NEXT_PUBLIC_EMAIL_SERVICE_ID as string;
const emailTemplateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string;
const emailPublicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string;
const Contact: FC = () => {
    const formRef: MutableRefObject<HTMLFormElement | null> = useRef(null);
    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState<boolean>(false);
    const emailSuccessNotify = () =>
        toast.success('Successfully sent  🚀 ', toastOptions);
    const emailFailNotify = () =>
        toast.error(
            'Something went wrong! 🛑 You can contact me directly to anton.shvetsdev@gmail.com',
            toastOptions
        );

    const handleChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { target } = event;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!form.name || !form.email || !form.message) {
            toast.error('Please fill in all the fields', toastOptions);
            return;
        }

        setLoading(true);

        emailjs
            .send(
                emailServiceId,
                emailTemplateId,
                {
                    from_name: form.name,
                    to_name: 'Anton Shvets',
                    from_email: form.email,
                    to_email: 'anton.12345.123@gmail.com',
                    message: form.message,
                },
                emailPublicKey
            )
            .then(
                () => {
                    setLoading(false);
                    emailSuccessNotify();
                    setForm({
                        name: '',
                        email: '',
                        message: '',
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    emailFailNotify();
                }
            );
    };

    return (
        <div
            className={`xl:mt-2 flex xl:flex-row flex-col-reverse gap-20 overflow-hidden max-[1279px]:px-20`}
        >
            <ToastContainer
                position="top-center"
                autoClose={5000}
                transition={Slide}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <motion.div
                variants={slideIn('left', 'tween', 0.2, 1)}
                className="flex-[0.7] bg-black-100 p-7 rounded-2xl z-40"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-8 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Name
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your email
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className="bg-tertiary py-3 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Message
                        </span>
                        <textarea
                            rows={3}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <button
                        type="submit"
                        className="button-send py-2.5 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary relative"
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </motion.div>
            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] z-40"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, 'contact');
