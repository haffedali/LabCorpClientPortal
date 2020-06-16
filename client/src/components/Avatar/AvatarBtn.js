import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { useStyles } from './AvatarBtn.styles';
import { history } from '../../navigation'



const AvatarBtn = (props) => {
    const classes = useStyles(props);

    const avatarBtnClicked = (page) => {
        history.push(page);
    };
    
    return (
        <IconButton aria-label="Avatar Button" onClick={() => { avatarBtnClicked(props.page) }}>
            {props.avatarSrc ? 
                <Avatar alt="Avatar" src={props.avatarSrc} className={classes.avatar} /> : 
                <AccountCircleIcon className={classes.accountCircle} />
            }
        </IconButton>
    )
}

export default AvatarBtn;