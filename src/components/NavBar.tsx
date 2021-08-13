import styled from '@emotion/styled';
import {
    Tab,
    Tabs,
} from '@material-ui/core';
import {
    AllInclusive,
    AllOut,
    AttachMoney,
    BlurOn,
    Explore,
} from '@material-ui/icons';
import {
    useHistory,
    useLocation,
} from 'react-router-dom';

const StyledTabs = styled(Tabs)`
    border-bottom: 1px solid grey;
`;

export const NavBar = () => {
    const history = useHistory();
    const location = useLocation();

    const activeTab = location.pathname.substr(1);

    return <StyledTabs
        value={activeTab === '' ? 'system' : activeTab}
        onChange={(_, value) => {
            history.push(value);
        }}
        indicatorColor="primary"
        textColor="primary"
    >
        <Tab
            icon={<Explore />}
            value='scanner'
            aria-label="scanner" />
        <Tab
            icon={<BlurOn />}
            value='system'
            aria-label="system" />
        <Tab
            icon={<AttachMoney />}
            value='trade'
            aria-label="trade" />
        <Tab
            icon={<AllOut />}
            value='technology'
            aria-label="technology" />
        <Tab
            icon={<AllInclusive />}
            value='replicate'
            aria-label="replicate"
            disabled />
    </StyledTabs>;
};
