interface VerticalDividerProps {
    class?: string;
}

export const VerticalDivider = (props: VerticalDividerProps) => <div class={`w-px h-5 bg-white/40 mx-2 ${props.class || ''}`} />;
