import {
    createRootRoute,
    Outlet,
} from '@tanstack/solid-router';
import { HeaderNavigation } from '../components/HeaderNavigation';
import { NavigationRail } from '../components/NavigationRail';
import { IntlProvider } from '../pages/IntlProvider';

const RootLayout = () => (
    <IntlProvider locale="en-US">
        <div class="flex flex-col">
            <HeaderNavigation />
            <div class="flex gap-2 p-2 h-full">
                <NavigationRail />
                <Outlet />
            </div>
        </div>
    </IntlProvider>
);

export const Route = createRootRoute({ component: RootLayout });
