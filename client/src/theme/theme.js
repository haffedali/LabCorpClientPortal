import { createMuiTheme } from '@material-ui/core/styles';

import * as colors from '../assets/jss/colors';

const light = createMuiTheme({
    BACKGROUND_000: colors.BACKGROUND_LIGHT_000, 
    BACKGROUND_001: colors.BACKGROUND_LIGHT_001,
    DIVIDER: colors.POLAR_NIGHT[1],
    DRAWER_BACKGROUNG: colors.POLAR_NIGHT[0],
    DRAWER_BORDER: colors.POLAR_NIGHT[1],
    DRAWER_TEXT: colors.SNOW_STORM[2],
    PRIMARY: colors.PRIMARY_LIGHT,
    overrides: {
        MuiListItem: {
          root: {
            '&$selected': {
                backgroundColor: colors.POLAR_NIGHT[1],
            }
          },
        },
    },
});

const dark = createMuiTheme({
    BACKGROUND_000: colors.BACKGROUND_DARK_000,
    BACKGROUND_001: colors.BACKGROUND_DARK_001,
    DIVIDER: colors.POLAR_NIGHT[1],
    DRAWER_BACKGROUNG: colors.POLAR_NIGHT[0],
    DRAWER_BORDER: colors.POLAR_NIGHT[1],
    DRAWER_TEXT: colors.SNOW_STORM[2],
    PRIMARY: colors.PRIMARY_DARK,
    overrides: {
        MuiListItem: {
          root: {
            '&$selected': {
                backgroundColor: colors.POLAR_NIGHT[1],
            }
          },
        },
    },
});

const theme = mode => (mode === 'dark' ? dark : light);

export default theme;