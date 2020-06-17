import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    drawerIcon: {
        color: theme.DRAWER_TEXT,
    },

    listItemText: {
        '& span': {
            fontWeight: '500',
          }
    }

}));