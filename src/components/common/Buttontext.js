import React from 'react'
import Button from "@material-ui/core/Button";

function Buttontext(props) {
    return (
        <Button variant={props.variant} color={props.color} size={props.size}>
            {props.buttontext}
        </Button>
    )
}

export default Buttontext
