import { useGame } from '../hooks/useGame';
import { MaterialsSummary } from './MaterialsSummary';
import { VerticalDivider } from './VerticalDivider';

export const HeaderNavigation = () => {
    const { satellite } = useGame();
    const explored = () => satellite.exploredArea / satellite.totalArea;

    return (
        <header class="flex flex-col p-2 px-4 pt-2 items-center border-b border-gray-700">
            <div class="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center text-center sm:text-left">
                <h6 class="text-base sm:text-lg font-semibold">{satellite.name}</h6>
                <VerticalDivider class="hidden sm:block" />
                <span class="text-sm sm:text-base">{`Explored area: ${explored()}%`}</span>
            </div>

            <MaterialsSummary
                materials={satellite.materials}
                change={satellite.estimatedProduction}
            />
        </header>
    );
};
