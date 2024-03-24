export default function ArrowMessageSend(props) {
    const {
        size = "1em",
        fill = "none",
        stroke = "currentColor",
        strokeWidth = 2,
        strokeLinecap = "round",
        strokeLinejoin = "round"
    } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             width={size}
             height={size}
             viewBox="0 0 24 24"
             fill={fill}
             stroke={stroke}
             strokeWidth={strokeWidth}
             strokeLinecap={strokeLinecap}
             strokeLinejoin={strokeLinejoin}>
            <circle cx="12" cy="12" r="10" fill="#0B93F6" stroke="#0B93F6"/>
            <polyline points="16 12 12 8 8 12" fill="transarent" stroke="white"/>
            <line x1="12" y1="16" x2="12" y2="8" stroke="white"/>
        </svg>
    );
}