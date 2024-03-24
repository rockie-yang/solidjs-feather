export default function ZapOff(props) {
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
            <polyline points="12.41 6.75 13 2 10.57 4.92"/>
            <polyline points="18.57 12.91 21 10 15.66 10"/>
            <polyline points="8 8 3 14 12 14 11 22 16 16"/>
            <line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
    );
}