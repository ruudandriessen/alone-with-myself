import { useGame } from '../hooks/useGame';
import { MaterialsSummary } from './MaterialsSummary';
import { VerticalDivider } from './VerticalDivider';

export const HeaderNavigation = () => {
    const { satellite } = useGame();
    const explored = () => satellite.exploredArea / satellite.totalArea;

    return (
        <div class="flex flex-col p-2 px-4 pt-2 items-center">
            <div class="flex gap-2 items-center">
                <h6 class="text-lg font-semibold">{satellite.name}</h6>
                <VerticalDivider />
                <span>{`Explored area: ${explored()}%`}</span>
            </div>

            <MaterialsSummary
                materials={satellite.materials}
                change={satellite.estimatedProduction}
            />
        </div>
    );
};
