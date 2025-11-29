import {
    Flex,
    IconButton,
} from '@hope-ui/solid';
import {
    Link,
} from '@tanstack/solid-router';
import BlurOn from '@suid/icons-material/BlurOn';
import Explore from '@suid/icons-material/Explore';

export const NavigationRail = () => {
    return <Flex
        direction='column'
        gap="$2"
    >
        <Link to="/scanner">
            {({ isActive }) => (
                <IconButton
                    icon={<Explore />}
                    aria-label="Scanner"
                    variant="ghost"
                    color={isActive ? '$primary9' : '$white2'}
                />
            )}
        </Link>

        <Link to="/satellite">
            {({ isActive }) => (
                <IconButton
                    aria-label="Location"
                    icon={<BlurOn />}
                    variant="ghost"
                    color={isActive ? '$primary9' : '$white2'}
                />
            )}
        </Link>
    </Flex>;
};
