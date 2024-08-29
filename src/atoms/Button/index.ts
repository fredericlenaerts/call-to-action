import Icon, { Props as IconProps } from '../Icon';
import Root, { Props as RootProps } from './Root';
import Text, { Props as TextProps } from './Text';

const Button = {
  Root,
  Icon,
  Text,
};

export default Button;
export type ButtonRootProps = RootProps;
export type ButtonIconProps = IconProps;
export type ButtonTextProps = TextProps;
