import styled, { css } from 'styled-components';
import { HeadingProps } from '.';
import { theme, global } from '../../styles/theme';

const mediaFont = () => css`
  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.font.size.xxlarge};
  }
`;

const titleSize = {
  small: () => css`
    font-size: ${theme.font.size.small};
  `,
  medium: () => css`
    font-size: ${theme.font.size.medium};
  `,
  large: () => css`
    font-size: ${theme.font.size.large};
  `,
  xlarge: () => css`
    font-size: ${theme.font.size.xlarge};
  `,
  big: () => css`
    font-size: ${theme.font.size.big};
    ${mediaFont()};
  `,
};

const titleColor = {
  white: () => css`
    color: ${theme.color.white};
  `,
  gray: () => css`
    color: ${theme.color.title};
  `,
  black: () => css`
    color: ${theme.color.black_700};
  `,
  secondary: () => css`
    color: ${theme.color.secondary};
  `,
};

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<HeadingProps>`
  ${global};
  ${({
    color,
    size,
    uppercase,
    bold,
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
  }) => css`
    font-family: ${bold
      ? theme.font.family.defaultBold
      : theme.font.family.default} !important;
    ${titleColor[color!]()};
    ${titleSize[size!]()};
    ${titleCase(uppercase!)};
    margin: ${margin};
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
  `}
`;
