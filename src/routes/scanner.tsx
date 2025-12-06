import { createFileRoute } from '@tanstack/solid-router'
import { useGame } from '../hooks/useGame';
import { For, Show } from 'solid-js';
import { Card } from '../components/Card';
import { ResourceIndicator } from '../components/ResourceIndicator';

export const Route = createFileRoute('/scanner')({
  component: RouteComponent,
})

function RouteComponent() {
    const { satellite } = useGame();

    return <div class="grid grid-cols-3 gap-2 p-2 max-h-full w-full">
        <Card title="Operations">
            <button
                class="border border-blue-500 text-blue-500 hover:bg-blue-500/10 px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={satellite.scanStatus.scanning}
                onClick={satellite.startScan}
            >
                <Show
                    when={satellite.scanStatus.scanning}
                    fallback="Scan area"
                >
                    {`Scanning... (${Math.round(satellite.scanStatus.progress)}%)`}
                </Show>
            </button>
        </Card>

        <Card title="Discovered resources">
            <For each={satellite.totalSatelliteResources.resources}>
                {resource => <ResourceIndicator resource={resource} />}
            </For>
        </Card>
    </div>;
}
