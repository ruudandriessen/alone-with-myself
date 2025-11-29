import { Flex, HopeProvider } from '@hope-ui/solid';
import {
    createRootRoute,
    Outlet,
} from '@tanstack/solid-router';
import { HeaderNavigation } from '../components/HeaderNavigation';
import { NavigationRail } from '../components/NavigationRail';
import { IntlProvider } from '../pages/IntlProvider';

const RootLayout = () => (
    <>
        <HopeProvider config={{
             initialColorMode: 'system'
        }}>
            <IntlProvider locale="en-US">
                <Flex direction={'column'}>
                    <HeaderNavigation />
                    <Flex
                        padding="$2"
                        gap='$2'
                        height={'100%'}
                    >
                        <NavigationRail />
                        <Outlet />
                    </Flex>
                </Flex>
            </IntlProvider>
        </HopeProvider>
    </>
);

export const Route = createRootRoute({ component: RootLayout });
