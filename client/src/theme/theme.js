import { createMuiTheme } from '@material-ui/core/styles';

import * as colors from '../assets/jss/colors';

const light = createMuiTheme({
    // Background
    BACKGROUND_000: colors.BACKGROUND_LIGHT_000, 
    BACKGROUND_001: colors.BACKGROUND_LIGHT_001,
    // Drawer
    DIVIDER: colors.SNOW_STORM[0],
    DRAWER_BACKGROUNG: colors.SNOW_STORM[2],
    DRAWER_BORDER: colors.SNOW_STORM[0],
    DRAWER_ITEM_HOVER: colors.SNOW_STORM[1],
    DRAWER_TEXT: colors.PRIMARY_LIGHT,
    DRAWER_TEXT_ACTIVE: colors.FROST[3],
    // MessagesTabs
    MSG_TABS_CONTAINER: colors.WHITE,
    MSG_TABS_TEXT: colors.PRIMARY_LIGHT,
    MSG_TABS_TABINDICATOR: colors.POLAR_NIGHT[2],
    // ProfileForm
    PROFILE_BOX_FILL: colors.SNOW_STORM[2],
    PROFILE_BOX_INDICATOR: colors.POLAR_NIGHT[3],
    // Global
    PRIMARY: colors.PRIMARY_LIGHT,
    // Material-UI Overrides
    overrides: {
        MuiListItem: {
          root: {
            '&$selected': {
                backgroundColor: colors.SNOW_STORM[0],
                color: colors.FROST[3]
            }
          },
        },
    },
});

const dark = createMuiTheme({
    // Background
    BACKGROUND_000: colors.BACKGROUND_DARK_000,
    BACKGROUND_001: colors.BACKGROUND_DARK_001,
    // Drawer
    DIVIDER: colors.POLAR_NIGHT[1],
    DRAWER_BACKGROUNG: colors.POLAR_NIGHT[0],
    DRAWER_BORDER: colors.POLAR_NIGHT[1],
    DRAWER_ITEM_HOVER: colors.BACKGROUND_DARK_001,
    DRAWER_TEXT: colors.SNOW_STORM[2],
    DRAWER_TEXT_ACTIVE: colors.FROST[1],
    // MessagesTabs
    MSG_TABS_CONTAINER: colors.POLAR_NIGHT[3],
    MSG_TABS_TEXT: colors.SNOW_STORM[2],
    MSG_TABS_TABINDICATOR: colors.SNOW_STORM[0],
    // ProfileForm
    PROFILE_BOX_FILL: colors.POLAR_NIGHT[1],
    PROFILE_BOX_INDICATOR: colors.POLAR_NIGHT[3],
    // Global
    PRIMARY: colors.PRIMARY_DARK,
    // Material-UI Overrides
    overrides: {
        MuiListItem: {
          root: {
            '&$selected': {
                backgroundColor: colors.POLAR_NIGHT[1],
                color: colors.FROST[1],
            },
          },
        },
    },
});

const theme = mode => (mode === 'dark' ? dark : light);

export default theme;