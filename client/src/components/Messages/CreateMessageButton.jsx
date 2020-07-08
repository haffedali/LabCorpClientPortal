import React, { useState, useEffect } from "react";

import {Button} from '@material-ui/core'

const CreateMessageButton = ({handleClick}) => {
    return(
    <Button variant="contained" color="primary">
        Create
    </Button>
    )
}

export default CreateMessageButton;