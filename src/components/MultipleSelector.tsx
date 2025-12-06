interface MultipleSelector {
    value: number;
    onChange: (value: number) => void;
}

export const MultipleSelector = (props: MultipleSelector) => {
    const buttonClass = (value: number) =>
        props.value === value
            ? 'bg-blue-500 text-white border border-blue-500 px-4 py-2'
            : 'bg-transparent text-blue-500 border border-blue-500 px-4 py-2 hover:bg-blue-500/10';

    return <div class="flex">
        <button
            class={`${buttonClass(1)} rounded-l`}
            onClick={() => props.onChange(1)}
        >
            1
        </button>
        <button
            class={`${buttonClass(10)} border-l-0`}
            onClick={() => props.onChange(10)}
        >
            10
        </button>
        <button
            class={`${buttonClass(100)} border-l-0`}
            onClick={() => props.onChange(100)}
        >
            100
        </button>
        <button
            class={`${buttonClass(1000)} border-l-0 rounded-r`}
            onClick={() => props.onChange(1000)}
        >
            1K
        </button>
    </div>;
};
