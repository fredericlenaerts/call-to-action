import { Children, cloneElement, ReactNode } from 'react';
import { match } from 'ts-pattern';

export interface Props {
    /**
     * @default 'md'
     */
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    children: ReactNode;
}

function Icon({ size = 'md', className, children }: Props) {
    const iconSize = match(size)
        .with('sm', () => 16)
        .with('md', () => 24)
        .with('lg', () => 40)
        .exhaustive();
    return (
        Children.map(Children.toArray(children), (child) =>
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            cloneElement(child as any, { width: iconSize, height: iconSize, className })
        )
    );
}

export default Icon;
