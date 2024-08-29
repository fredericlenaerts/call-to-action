import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
}

function Text({ children }: Props) {
  return <span>{children}</span>;
}

export default Text;
