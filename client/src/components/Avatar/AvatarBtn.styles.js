import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    avatar: {
        height: '1.75em',
        width: '1.75em'
    },
    accountCircle: {
        height: '1.3em',
        width: '1.3em',
        color: theme.PRIMARY,
    }
}));