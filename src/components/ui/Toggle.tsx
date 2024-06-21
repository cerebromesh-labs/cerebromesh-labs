import React, { MouseEvent } from 'react';

type ToggleProps = {
    clicked: boolean;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
};

const Toggle: React.FC<ToggleProps> = ({ clicked, onClick, className }) => {
    return (
        <button className={`grid gap-[4px] cursor-pointer lg:hidden ${className ? className : ''}`} onClick={onClick}>
            <span
                className="w-[10px] h-[3px] bg-white rounded-[5px]"
                style={{
                    transition: '0.25s ease',
                    transform: clicked ? 'translate(1px, 3px) rotate(45deg)' : 'none',
                }}
            />
            <span
                className="w-[20px] h-[3px] bg-white rounded-[5px]"
                style={{
                    transition: '0.25s ease',
                    transform: clicked ? 'rotate(-45deg)' : 'none',
                }}
            />
            <span
                className="w-[10px] h-[3px] bg-white rounded-[5px] ml-auto"
                style={{
                    transition: '0.25s ease',
                    transform: clicked ? 'translate(-1px, -3px) rotate(45deg)' : 'none',
                }}
            />
        </button>
    );
};

export default Toggle;