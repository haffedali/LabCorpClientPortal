import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    header: {
        margin: theme.spacing(1),
        justifyContent: "center",

    },
    logo: {
        marginRight: '60%',
        height: '30%',
        width: '30%',
    },
  }));