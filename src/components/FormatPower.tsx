import BoltIcon from '@suid/icons-material/BoltOutlined';
import { Show } from 'solid-js';

import { FormatChange } from './FormatChange';
import { FormatNumber } from './FormatNumber';

interface FormatPowerProps {
    amount: number;
    change?: number;
    disabled?: boolean;
}

export const FormatPower = (props: FormatPowerProps) => {
    const color = () => props.disabled ? 'text-gray-500' : 'text-yellow-500';

    return (
        <span class={`${color()} flex items-center`}>
            <FormatNumber
                value={props.amount}
                compact
            />
            <BoltIcon fontSize='inherit' />

            <Show when={props.change != null}>
                <FormatChange
                    value={props.change!}
                />
            </Show>
        </span>
    );
};
