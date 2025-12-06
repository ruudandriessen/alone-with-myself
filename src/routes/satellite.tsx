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

    return <div class="flex flex-col md:grid md:grid-cols-2 gap-2 w-full h-full">
        <Card title="Printer control">
            <div class="flex flex-col gap-3">
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
            </div>
        </Card>
        <Card title="Print queue">
            <PrintQueue printers={satellite.printers} />
        </Card>
    </div>;
}
