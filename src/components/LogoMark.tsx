type LogoMarkProps = {
  size?: number;
  cardColor?: string;
  checkColor?: string;
};

export default function LogoMark({
  size = 26,
  cardColor = "#162B42",
  checkColor = "#3B8793",
}: LogoMarkProps) {
  return (
    <svg
      viewBox="-3 -4 82 78"
      width={size}
      height={size}
      fill="none"
      aria-hidden="true"
    >
      <g stroke={cardColor} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M46 40 L46 55 Q46 66 35 66 L19 66 Q8 66 8 55 L8 39 Q8 28 19 28 L33 28" />
        <path d="M56 28 A10 10 0 0 0 46 18" strokeWidth="5" />
        <path d="M64 28 A18 18 0 0 0 46 10" strokeWidth="5" />
        <path d="M72 28 A26 26 0 0 0 46 2" strokeWidth="5" />
      </g>
      <path
        d="M17 48 L26 57 L38 41"
        stroke={checkColor}
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
