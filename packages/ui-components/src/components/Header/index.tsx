export interface HeaderProps {
  label: string;
}

export const Header = (props: HeaderProps) => {
  return (
    <div>
      {props.label}
      <p>ABACAXI</p>
    </div>
  );
};
