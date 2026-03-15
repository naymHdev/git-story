import { Variants } from "framer-motion";

export const navVariants: Variants = {
    hidden: { opacity: 0, y: -16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
            staggerChildren: 0.07,
            delayChildren: 0.1,
        },
    },
};

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: -8 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
};

export const mobileItemVariants: Variants = {
    hidden: { opacity: 0, x: 24 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.06,
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    }),
};