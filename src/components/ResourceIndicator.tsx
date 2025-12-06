import { Resource } from '../models/types/ResourceSet';
import { FormatNumber } from './FormatNumber';

interface ResourceIndicatorProps {
    resource: Resource;
}

export const ResourceIndicator = (props: ResourceIndicatorProps) => {
    return <>
        <span class="text-blue-500">
            {props.resource.type}
        </span>
        <FormatNumber
            value={props.resource.amount}
            type={props.resource.type}
        />
    </>;
};
