import { cn } from "@/lib/utils";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClasseName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id: number;
    img?: string;
    imgClasseName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    return (
        <div
            className={cn(
                "group/bento relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
                className,
            )}
            style={{
                background: 'linear-gradient(90deg, rgba(10, 10, 20, 0.6) 0%, rgba(20, 20, 40, 0.6) 50%, rgba(10, 10, 30, 0.6) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
                borderRadius: '16px',
            }}
        >
            <div className={`${id === 6} && 'flex justify-center h-full'`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClasseName, 'object-cover object-center')}
                        />
                    )}
                </div>
            </div>

            <div className="transition duration-200 group-hover/bento:translate-x-2">

                <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
                    {title}
                </div>
                <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
};
