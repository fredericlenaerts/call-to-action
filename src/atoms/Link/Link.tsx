import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import clsx from "clsx";
import styles from './styles.module.scss'

export type Props = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

function Link({ className, ...props }: Props) {
    return (
        <a className={clsx(styles.link, className)} {...props} />
    )
}

export default Link;
