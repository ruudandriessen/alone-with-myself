import { JSX } from 'solid-js';

interface CardProps {
    children: JSX.Element;
    title: string;
}

export const Card = (props: CardProps) => {
    return <div class="flex flex-col gap-2 border border-gray-600 p-3 sm:p-4">
        <h6 class="text-base sm:text-lg font-semibold">
            {props.title}
        </h6>
        {props.children}
    </div>;
};
