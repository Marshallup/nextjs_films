import { AnimationProps, MotionAdvancedProps } from 'framer-motion';

export interface MainPromoListProps {
    title: string;
    data: string[];
    variants?: AnimationProps['variants'];
    animate?: AnimationProps['animate'];
    custom?: MotionAdvancedProps['custom'],
}