import { Grid, Flex } from '@hope-ui/solid';
import { createFileRoute } from '@tanstack/solid-router'
import { createSignal } from 'solid-js';
import { Card } from '../components/Card';
import { MultipleSelector } from '../components/MultipleSelector';
import { PrintablesList } from '../components/PrintablesList';
import { useGame } from '../hooks/useGame';
import { PrintQueue } from '../components/PrintQueue';

export const Route = createFileRoute('/satellite')({
  component: RouteComponent,
})

function RouteComponent() {
  const { satellite } = useGame();
    const [ printableCount, setPrintableCount ] = createSignal(1);

    return <Grid
        gap="$2"
        padding="$2"
        templateColumns="repeat(2, 1fr)"
        templateRows="1fr"
        maxH="100%"
        width="100%"
    >
        <Card title="Printer control">
            <Flex
                direction='column'
                gap='$3'
            >
                <MultipleSelector
                    onChange={setPrintableCount}
                    value={printableCount()}
                />
                <PrintablesList
                    printables={satellite.printables}
                    printableCount={printableCount()}
                    storage={satellite.materials}
                    spentMass={satellite.spentMass}
                    printers={satellite.printers}
                />
            </Flex>
        </Card>
        <Card title="Print queue">
            <PrintQueue printers={satellite.printers} />
        </Card>
    </Grid>;
}
