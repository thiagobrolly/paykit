import * as S from './styles';

export interface HeadingProps {
  label: string;
}

export const Heading = (props: HeadingProps) => {
  return (
    <S.Wrapper>
      <div>{props.label}HeadingXX</div>
    </S.Wrapper>
  );
};
