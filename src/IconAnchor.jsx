export default function Anchor(props) {
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
            <circle cx="12" cy="5" r="3"/>
            <line x1="12" y1="22" x2="12" y2="8"/>
            <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
        </svg>
    );
}