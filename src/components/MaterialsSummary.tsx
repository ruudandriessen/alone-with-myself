import { Materials } from '../models/types/Materials';
import { FormatMass } from './FormatMass';
import { FormatPower } from './FormatPower';

interface ResourceSetSummaryProps {
    materials: Materials;
    disabled?: boolean;
    change?: Materials;
}

export const MaterialsSummary = (props: ResourceSetSummaryProps) => {
    return <div class="flex gap-2">
        <FormatMass
            amount={props.materials.mass}
            change={props.change?.mass}
            disabled={props.disabled}
        />
        <FormatPower
            amount={props.materials.power}
            change={props.change?.power}
            disabled={props.disabled}
        />
    </div>;
};
