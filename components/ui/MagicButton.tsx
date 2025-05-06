import React from 'react'

export const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string;
    icon?: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
}) => {
    return (
        <button className="relative inline-flex h-10 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8AB4F8_0%,#7C3AED_40%,#3B82F6_75%,#8AB4F8_100%)]


" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
    )
}

export default MagicButton;