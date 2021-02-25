import React from 'react';
import Typography from "@material-ui/core/Typography";

function Titletext(props) {
    return (
        <Typography variant={props.variant} color={props.color}>
            {props.text}
        </Typography>
    )
}

export default Titletext
