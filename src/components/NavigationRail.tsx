import {
    Link,
} from '@tanstack/solid-router';
import BlurOn from '@suid/icons-material/BlurOn';
import Explore from '@suid/icons-material/Explore';

export const NavigationRail = () => {
    return <nav class="flex flex-row md:flex-col gap-2 justify-center md:justify-start border-t md:border-t-0 md:border-r border-gray-700 py-2 md:py-0 bg-[#0a0a0a] md:bg-transparent">
        <Link to="/scanner">
            {({ isActive }) => (
                <button
                    class={`p-3 md:p-2 rounded hover:bg-gray-700 ${isActive ? 'text-blue-500' : 'text-gray-300'}`}
                    aria-label="Scanner"
                >
                    <Explore />
                </button>
            )}
        </Link>

        <Link to="/satellite">
            {({ isActive }) => (
                <button
                    class={`p-3 md:p-2 rounded hover:bg-gray-700 ${isActive ? 'text-blue-500' : 'text-gray-300'}`}
                    aria-label="Location"
                >
                    <BlurOn />
                </button>
            )}
        </Link>
    </nav>;
};
