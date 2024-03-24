export default function Voicemail(props) {
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
            <circle cx="5.5" cy="11.5" r="4.5"/>
            <circle cx="18.5" cy="11.5" r="4.5"/>
            <line x1="5.5" y1="16" x2="18.5" y2="16"/>
        </svg>
    );
}