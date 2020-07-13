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
    // Inner Drawer
    INNER_DRAWER: 'rgba(236, 239, 244, 0.3)',
    INNER_DRAWER_ITEM_HOVER: colors.SNOW_STORM[1],
    INNER_DRAWER_TEXT: colors.POLAR_NIGHT[0],
    INNER_DRAWER_TEXT_ACTIVE: colors.FROST[3],
    // Billing Content 
    BILLING_BACKGROUND: colors.WHITE,
    // MessagesTabs
    MSG_TABS_CONTAINER: colors.WHITE,
    MSG_TABS_TEXT: colors.PRIMARY_LIGHT,
    MSG_TABS_TABINDICATOR: colors.POLAR_NIGHT[2],
    // ProfileForm
    PROFILE_BOX_FILL: colors.WHITE,
    PROFILE_TEXT: colors.PRIMARY_LIGHT,
    PROFILE_BOX_INDICATOR: colors.POLAR_NIGHT[2],
    // TABLE_DIVIDER
    TABLE_DIVIDER: colors.FROST[1],
    // Invoices
    DUE_DATE: colors.AURORA[1],
    PAID: colors.AURORA[3],
    // Global
    PRIMARY: colors.PRIMARY_LIGHT,
    WHITE: colors.WHITE,
    HIGHLIGHT: colors.FROST[1],
    // MONEY: colors.AURORA[3],
    MONEY: colors.FROST[1],
    PRIORITY_1: colors.AURORA[0],
    PRIORITY_2: colors.AURORA[1],
    // Calendar
    CALENDAR_BACKGROUND: colors.SNOW_STORM[2],
    CALENDAR_ROW: colors.SNOW_STORM[3],
    // Button Primary
    BTN_PRIMARY: colors.FROST[3],
    BTN_PRIMARY_TXT: colors.WHITE,
    BTN_PRIMARY_BORDER: 'solid 1px rgba(0, 0, 0, 0)',
    
    // Button Secondary
    BTN_SECONDARY: colors.WHITE,
    BTN_SECONDARY_TXT: colors.FROST[3],
    BTN_SECONDARY_BORDER: `solid 1px ${colors.FROST[3]}`,
    
    BTN_SECONDARY_HOVER: colors.SNOW_STORM[2],
    BTN_SECONDARY_TXT_HOVER: colors.FROST[1],
    BTN_SECONDARY_BORDER_HOVER: `solid 1px ${colors.FROST[1]}`,
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
    // Inner Drawer
    INNER_DRAWER_TEXT: colors.WHITE,
    INNER_DRAWER_TEXT_ACTIVE: colors.FROST[1],
    INNER_DRAWER_ITEM_HOVER: colors.POLAR_NIGHT[3],
    // Billing Content 
    BILLING_BACKGROUND: colors.POLAR_NIGHT[0],
    // MessagesTabs
    MSG_TABS_CONTAINER: colors.POLAR_NIGHT[3],
    MSG_TABS_TEXT: colors.SNOW_STORM[2],
    MSG_TABS_TABINDICATOR: colors.SNOW_STORM[0],
    // ProfileForm
    PROFILE_BOX_FILL: colors.POLAR_NIGHT[2],
    PROFILE_TEXT: colors.SNOW_STORM[0],
    PROFILE_BOX_INDICATOR: colors.SNOW_STORM[0],
    // TABLE_DIVIDER
    TABLE_DIVIDER: colors.FROST[1],
    // Invoices
    DUE_DATE: colors.AURORA[2],
    PAID: colors.AURORA[3],
    // Global
    PRIMARY: colors.PRIMARY_DARK,
    WHITE: colors.WHITE,
    HIGHLIGHT: colors.FROST[1],
    // MONEY: colors.AURORA[3],
    MONEY: colors.FROST[1],
    PRIORITY_1: colors.AURORA[0],
    PRIORITY_2: colors.AURORA[1],
    // Calendar
    CALENDAR_BACKGROUND: colors.POLAR_NIGHT[2],
    CALENDAR_ROW: colors.POLAR_NIGHT[3],
    // Button Primary
    BTN_PRIMARY: colors.FROST[3],
    BTN_PRIMARY_TXT: colors.WHITE,
    BTN_PRIMARY_BORDER: 'solid 1px rgba(0, 0, 0, 0)',
    // Button Secondary
    BTN_SECONDARY: colors.POLAR_NIGHT[0],
    BTN_SECONDARY_TXT: colors.FROST[1],
    BTN_SECONDARY_BORDER: `solid 1px ${colors.FROST[1]}`,
    
    BTN_SECONDARY_HOVER: colors.POLAR_NIGHT[3],
    BTN_SECONDARY_TXT_HOVER: colors.FROST[1],
    BTN_SECONDARY_BORDER: `solid 1px ${colors.FROST[3]}`,
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