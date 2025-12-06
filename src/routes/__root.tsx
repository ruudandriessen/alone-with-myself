import {
    createRootRoute,
    Outlet,
} from '@tanstack/solid-router';
import { HeaderNavigation } from '../components/HeaderNavigation';
import { NavigationRail } from '../components/NavigationRail';
import { IntlProvider } from '../pages/IntlProvider';

const RootLayout = () => (
    <IntlProvider locale="en-US">
        <div class="flex flex-col h-screen">
            <HeaderNavigation />
            <div class="flex flex-col-reverse md:flex-row gap-2 p-2 pb-0 md:pb-2 flex-1 overflow-hidden">
                <NavigationRail />
                <div class="flex-1 overflow-auto p-2 md:p-0">
                    <Outlet />
                </div>
            </div>
        </div>
    </IntlProvider>
);

export const Route = createRootRoute({ component: RootLayout });
