import {
    Link,
} from '@tanstack/solid-router';
import BlurOn from '@suid/icons-material/BlurOn';
import Explore from '@suid/icons-material/Explore';

export const NavigationRail = () => {
    return <div class="flex flex-col gap-2">
        <Link to="/scanner">
            {({ isActive }) => (
                <button
                    class={`p-2 rounded hover:bg-gray-700 ${isActive ? 'text-blue-500' : 'text-gray-300'}`}
                    aria-label="Scanner"
                >
                    <Explore />
                </button>
            )}
        </Link>

        <Link to="/satellite">
            {({ isActive }) => (
                <button
                    class={`p-2 rounded hover:bg-gray-700 ${isActive ? 'text-blue-500' : 'text-gray-300'}`}
                    aria-label="Location"
                >
                    <BlurOn />
                </button>
            )}
        </Link>
    </div>;
};
