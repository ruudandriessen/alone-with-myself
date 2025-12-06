import { JSX } from 'solid-js';

type ButtonProps = {
    onClick?: (e: MouseEvent) => void;
    disabled?: boolean;
    progress?: number;
    fullWidth?: boolean;
    children?: JSX.Element;
};

export const Button = (props: ButtonProps) => {
    return <button
        class={`border border-blue-500 text-blue-500 hover:bg-blue-500/10 h-14 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed ${props.fullWidth ? 'w-full' : ''}`}
        onClick={props.onClick}
        disabled={props.disabled}
    >
        {props.children}
    </button>;
};
