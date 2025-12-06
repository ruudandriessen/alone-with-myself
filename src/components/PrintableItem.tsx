import { PrintableInstance } from '../models/PrintableUnion';
import { Printers } from '../models/Printers';
import { Materials } from '../models/types/Materials';
import { Button } from './Button';
import { MaterialsSummary } from './MaterialsSummary';
import { VerticalDivider } from './VerticalDivider';

interface PrintableItemProps {
    printable: PrintableInstance;
    printableCount: number;
    storage: Materials;
    spentMass: (amount: number) => void;
    printers: Printers;
}

export const PrintableItem = (props: PrintableItemProps) => {
    const disabled = () => props.printable.maxAffordable(props.storage) < props.printableCount;

    const materialCost = () => ({
        mass: props.printable.cost * props.printableCount,
        power: props.printable.powerUsage * props.printableCount,
    });

    return <Button
        disabled={disabled()}
        fullWidth
        onClick={() => {
            props.spentMass(
                props.printable.cost * props.printableCount,
            );
            props.printers.addPrintTask({
                printable: props.printable,
                count: props.printableCount,
            });
        }}
    >
        <div class="flex flex-row gap-2 items-center">
            {`${props.printable.id} (${props.printable.amount})`}

            <VerticalDivider />
            Cost:
            <MaterialsSummary
                disabled={disabled()}
                materials={materialCost()}
            />
        </div>
    </Button>;
};
