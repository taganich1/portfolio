'use client';
import React, { FC } from 'react';

import { BallCanvas } from './canvas';
import { technologies } from '@/constants';

const Tech: FC = () => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10 z-40 mt-32 mb-36">
            {technologies.map((technology) => (
                <div className="w-28 h-28" key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
    );
};

export default Tech;
