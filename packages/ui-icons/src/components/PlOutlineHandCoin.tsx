import { SVGProps } from 'react';

export interface SVGRProps {
  color?: string;
  size?: number;
}
export const PlOutlineHandCoin = ({
  color = '#215aff',
  size = 25,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18.241 16.286"
    width={size}
    fill={color}
    {...props}
  >
    <g data-name="Grupo 4045">
      <path
        data-name="Caminho 3809"
        d="M10.73 5.637a1.046 1.046 0 0 0-1.045-1.045h-.76a.475.475 0 1 1 0-.95h.95a.285.285 0 0 1 .285.285.285.285 0 0 0 .57 0 .856.856 0 0 0-.855-.855H9.59v-.475a.285.285 0 1 0-.57 0v.475h-.095a1.045 1.045 0 1 0 0 2.089h.76a.475.475 0 1 1 0 .95h-.95a.285.285 0 0 1-.285-.285.285.285 0 1 0-.57 0 .856.856 0 0 0 .855.855h.285v.475a.285.285 0 0 0 .57 0v-.475h.095a1.046 1.046 0 0 0 1.045-1.044z"
      />
      <path
        data-name="Elipse 41"
        d="M9.327 1.157a3.759 3.759 0 1 0 3.759 3.759 3.764 3.764 0 0 0-3.759-3.759m0-1.157a4.916 4.916 0 1 1-4.916 4.916A4.916 4.916 0 0 1 9.327 0z"
      />
      <path
        data-name="Caminho 3810"
        d="M9.013 16.176c-.2-.051-.657-.192-1.231-.37-.911-.282-2.806-.869-3.149-.886a2.481 2.481 0 0 0-1.163.571v.052a.578.578 0 0 1-.578.578H.578A.578.578 0 0 1 0 15.543v-5.402a.578.578 0 0 1 .578-.578h2.314a.578.578 0 0 1 .578.578 3.909 3.909 0 0 1 2.51-.549 4.967 4.967 0 0 1 1.538.509 3.547 3.547 0 0 0 1.519.444c1.2 0 1.978.021 2.521.066a2.4 2.4 0 0 1 1.494.884c.031.04.06.079.088.12a27.99 27.99 0 0 1 2.613-1.252 1.772 1.772 0 0 1 2.454.852.577.577 0 0 1 0 .4.572.572 0 0 1-.235.325c-.078.049-.6.4-1.2.8-1.493 1-3.75 2.5-4.444 2.927a4.447 4.447 0 0 1-2.328.619 4.14 4.14 0 0 1-.987-.11zm-8.145-.923H2.6v-4.822H.868zm7.256-.552c.536.166 1 .31 1.173.353a3.456 3.456 0 0 0 2.419-.374c.677-.417 3.013-1.974 4.409-2.9l.644-.429a1.119 1.119 0 0 0-.6.092 29.474 29.474 0 0 0-2.687 1.307 1.942 1.942 0 0 1-.019.2.49.49 0 0 1-.23.325c-.188.094-4.117-.059-4.252-.064a.434.434 0 0 1 .013-.867h.014c.028 0 2.431.073 3.578.1a1.1 1.1 0 0 0-.211-.411 1.557 1.557 0 0 0-.887-.558c-.518-.044-1.273-.063-2.448-.063a4.279 4.279 0 0 1-1.884-.525 4.24 4.24 0 0 0-1.279-.434 3.139 3.139 0 0 0-2.406.744v2.916a2.369 2.369 0 0 1 1.165-.35 20.847 20.847 0 0 1 3.488.939z"
      />
    </g>
  </svg>
);
