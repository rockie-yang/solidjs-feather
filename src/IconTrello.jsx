export default function Trello(props) {
    const { 
        size="1em",
        fill="none",
        stroke="currentColor",
        strokeWidth=2,
        strokeLinecap="round",
        strokeLinejoin="round"
    } = props;
    return (
        <svg 
            viewBox="0 0 24 24" 
            width={size}
            height={size}
         xmlns="http://www.w3.org/2000/svg" 
            fill={fill}
            stroke={stroke}
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <rect x="7" y="7" width="3" height="9"/>
            <rect x="14" y="7" width="3" height="5"/>
        </svg>
    );
}