import React, { FC } from 'react';

const Footer: FC = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] pt-20 mt-8">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className=" text-[15px] text-center">
                    &copy; 2024 Anton Shvets. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;
