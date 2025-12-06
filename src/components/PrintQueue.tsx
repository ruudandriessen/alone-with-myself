import {
    For,
    Show,
} from 'solid-js';

import { Printers } from '../models/Printers';

interface PrintQueueProps {
    printers: Printers;
}

export const PrintQueue = (props: PrintQueueProps) => {
    return <ul class="flex flex-col gap-2 overflow-scroll">
        <For each={props.printers.tasks}>
            {task => <li class="list-none">
                <div class="flex gap-2">
                    <span class="text-blue-400">
                        {task.count}
                    </span>
                    <span>
                        {task.printable.id}
                    </span>
                </div>
                <Show when={task.progressPercentage > 0}>
                    <div class="w-full bg-gray-700 rounded-full h-1">
                        <div
                            class="bg-blue-500 h-1 rounded-full transition-all"
                            style={`width: ${task.progressPercentage * 100}%`}
                        />
                    </div>
                </Show>
            </li>}
        </For>
    </ul>;
};
