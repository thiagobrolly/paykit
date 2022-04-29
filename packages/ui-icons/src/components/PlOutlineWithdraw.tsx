import { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}

export const PlOutlineWithdraw = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15.758 16.094"
    width={size}
    fill={color}
    {...props}
  >
    <path
      data-name="Caminho 2306"
      d="M10.059 12.925a.56.56 0 1 1 .732.846l-2.524 2.184a.859.859 0 0 1-.11.076l-.026.014a.6.6 0 0 1-.233.049.6.6 0 0 1-.233-.049l-.026-.014a.777.777 0 0 1-.112-.08l-2.555-2.217a.56.56 0 0 1 .73-.848l1.65 1.434v-5.2a.561.561 0 0 1 1.121 0v5.176z"
    />
    <path
      data-name="Caminho 2307"
      d="M10834.346 14929.4a.616.616 0 0 0-.615.615 1.235 1.235 0 0 1-1.233 1.232h-2.952a.615.615 0 1 0 0 1.23h2.952a2.467 2.467 0 0 0 2.464-2.463.618.618 0 0 0-.616-.614z"
      transform="translate(-10819.203 -14920.903)"
      style={{
        fillRule: 'evenodd',
      }}
    />
    <path
      data-name="Caminho 2308"
      d="M9951.054 13854.053a.617.617 0 0 0 .334.1.607.607 0 0 0 .518-.283 3.455 3.455 0 0 0 .561-1.875 3.115 3.115 0 1 0-6.217 0 3.369 3.369 0 0 0 .53 1.877.615.615 0 1 0 1.032-.67 2.17 2.17 0 0 1-.331-1.207 1.887 1.887 0 1 1 3.752 0 2.234 2.234 0 0 1-.363 1.211.614.614 0 0 0 .184.847z"
      transform="translate(-9941.479 -13846.242)"
      style={{
        fillRule: 'evenodd',
      }}
    />
    <circle
      data-name="Elipse 4"
      cx={0.615}
      cy={0.615}
      r={0.615}
      transform="translate(12.155 5.14)"
    />
    <circle
      data-name="Elipse 5"
      cx={0.615}
      cy={0.615}
      r={0.615}
      transform="translate(2.369 5.14)"
    />
    <path
      data-name="Caminho 2309"
      d="M9109.752 13416.2h-10.832a2.462 2.462 0 0 0-2.459 2.462v6.644a2.462 2.462 0 0 0 2.459 2.463h2.957a.616.616 0 0 0 0-1.232h-2.957a1.23 1.23 0 0 1-1.229-1.23v-6.644a1.232 1.232 0 0 1 1.229-1.232h10.832a1.234 1.234 0 0 1 1.232 1.232v3.566a.615.615 0 0 0 1.23 0v-3.566a2.465 2.465 0 0 0-2.462-2.463z"
      transform="translate(-9096.461 -13416.199)"
      style={{
        fillRule: 'evenodd',
      }}
    />
  </svg>
);
