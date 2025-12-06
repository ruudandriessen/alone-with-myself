import { FormatNumber } from './FormatNumber';

interface FormatMassProps {
    value: number;
}

export const FormatChange = (props: FormatMassProps) => {
    const color = () => props.value > 0 ? 'text-green-500' : 'text-red-500';

    return (
        <span class={color()}>
            ({props.value! > 0 ? '+' : ''}
            <FormatNumber
                value={props.value!}
                compact
            />)
        </span>
    );
};
