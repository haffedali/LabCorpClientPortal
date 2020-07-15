import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    radio: {
        display: 'block!important',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    root: {
        display: 'block',
        width: '100%',
        textAlign: "center",
        backgroundColor: theme.palette.background.paper,
    },
    /*       tab: {
            textAlign: "center"
          } */
}));
