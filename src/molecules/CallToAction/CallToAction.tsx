import { ReactNode } from 'react';
import { ArrowRightIcon, SymbolIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import styles from './styles.module.scss';

import Button, { ButtonRootProps } from '../../atoms/Button';
import Link, { Props as LinkProps } from '../../atoms/Link';
import Icon from '../../atoms/Icon';

type ButtonProps = ButtonRootProps & {
  loading?: boolean;
}

interface Props {
  /**
   * @default 'primary'
   */
  appearance?: 'primary' | 'secondary' | 'tertiary';
  small?: boolean;
  children: ReactNode;
}

function CallToAction(props: Props & LinkProps): JSX.Element
function CallToAction(props: Props & ButtonProps): JSX.Element
function CallToAction(props: Props & (ButtonProps | LinkProps)) {
  const {
    small,
    children,
    appearance = 'primary',
  } = props;

  if (hasHref(props)) {
    return (
      <Link className={clsx(styles.base, {
        [styles.primary]: appearance === 'primary',
        [styles.secondary]: appearance === 'secondary',
        [styles.small]: small,
      })} {...props}>
        {children}
        <Icon size={small ? 'sm' : 'md'} className={clsx({
          [styles['primary-icon']]: appearance === 'primary',
          [styles['secondary-icon']]: appearance === 'secondary',
        })}>
          <ArrowRightIcon />
        </Icon>
      </Link>
    )
  }

  const {
    disabled,
    loading,
  } = props;

  return (
    <Button.Root
      disabled={disabled}
      className={clsx(styles.base, {
        [styles.primary]: appearance === 'primary',
        [styles.secondary]: appearance === 'secondary',
        [styles.small]: small,
      })}
    >
      {!!loading && (
        <Button.Icon size={small ? 'sm' : 'md'} className={styles.loading}>
          <SymbolIcon />
        </Button.Icon>
      )}
      <Button.Text>{children}</Button.Text>
      {!loading && (
        <Button.Icon size={small ? 'sm' : 'md'} className={clsx({
          [styles['primary-icon']]: appearance === 'primary',
          [styles['secondary-icon']]: appearance === 'secondary',
        })}>
          <ArrowRightIcon />
        </Button.Icon>
      )}
    </Button.Root>
  );
}

export default CallToAction;

function hasHref(props: ButtonProps | LinkProps): props is LinkProps {
  return "href" in props;
}
