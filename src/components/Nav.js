import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Image from ".././img/concert.jpg";

const styles = makeStyles({
    background:{
        backgroundImage:`url(${Image})`,
        height:"100vh",
        backgroundSize:"cover",
        backgroundPosition:"center",
        display:"flex",
        justifyContent:"center",
        "& ul":{
            listStyle:"none",
            color:"white",
            width:"60%",
            height:"20vh",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            fontSize:"20px",
        },
        "& li":{
            width:100,
            height:50,
        },
        "& li:hover" :{
            borderBottomColor:"white",
            cursor:"pointer",
            textDecoration:"underline",
        }
    },
});

function Nav() {
    const classes = styles();

    return (
            <nav className={classes.background}>
                <ul>
                    <li>About</li>
                    <li>Band List</li>
                    <li>Contact</li>
                </ul>
            </nav>
    )
}

export default Nav
