import React from 'react';
// import { ExampleDefault, IconUser } from '@thiago_brolly/ui-icons-b';
import { Heading } from '../Heading';
import { Separator } from '../Separator';
import * as S from './styles';

export type CardProps = {
  title?: string;
  subTitle?: string;
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'fullWidth' | 'auto';
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
} & React.HTMLAttributes<HTMLElement>;

export const Card = ({
  title = '',
  subTitle = '',
  children,
  size = 'auto',
  margin = '',
  marginTop = '',
  marginBottom = '',
  marginLeft = '',
  marginRight = '',
  ...props
}: CardProps) => (
  <S.Wrapper
    size={size}
    margin={margin}
    marginTop={marginTop}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    {...props}
  >
    {!!title && (
      <>
        {/* <IconUser size={100} color="green" /> */}
        <Heading bold color="black" size="xlarge">
          {title}
        </Heading>
        {!!subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
        <Separator color="#f0eff4" marginBottom="2rem" />
        {/* <ExampleDefault size={100} color="green" /> */}
      </>
    )}

    {children}
  </S.Wrapper>
);
