import React from 'react';

import { useStyles } from './Profile.styles';

const Profile = (props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <h2>Profile.js</h2>
        </div>
    )
}

export default Profile;