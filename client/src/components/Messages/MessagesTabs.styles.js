import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    messagesBody: {
        color: theme.DRAWER_TEXT_ACTIVE,
    },
    messagesTabsAppbar: {
        backgroundColor: theme.MSG_TABS_CONTAINER,
        color: theme.PRIMARY
    }

}))