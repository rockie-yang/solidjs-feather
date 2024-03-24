export default function ArrowRightCircle(props) {
    const { 
        size="1em",
        fill="none",
        stroke="currentColor",
        strokeWidth=2,
        strokeLinecap="round",
        strokeLinejoin="round"
    } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={size}
            height={size}
            viewBox="0 0 24 24" 
            fill={fill}
            stroke={stroke}
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
        >
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 16 16 12 12 8"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
    );
}