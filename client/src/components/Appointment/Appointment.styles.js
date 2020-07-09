import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        width: '100%',
        textAlign: "center",
    },
    header: {
        backgroundColor: theme.CALENDAR_BACKGROUND,
    },
    button: {
        color: theme.DRAWER_TEXT
    },
    calendar: {
        backgroundColor: theme.CALENDAR_BACKGROUND
    },
    radio: {
        display: 'block!important',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    paper: {
        backgroundColor: theme.CALENDAR_BACKGROUND,
        margin: `${theme.spacing(0.5)}px auto`,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.DRAWER_TEXT
    },
    grid: {
        padding: theme.spacing(2)
    }
    /*       tab: {
            textAlign: "center"
          } */
}));
