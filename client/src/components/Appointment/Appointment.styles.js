import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    radio: {    
        flexDirection: 'row',
        justifyContent: 'center'
    },
}));

export const HeaderStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        width: '100%',
        textAlign: "center",
        backgroundColor: theme.palette.background.paper,
      },
      tab: {
        textAlign: "center"
      }
}))