import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

export type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function Root({ className, ...props }: Props) {
  return (
    <button type="button" className={clsx(styles.root, className)} {...props} />
  );
}

export default Root;
