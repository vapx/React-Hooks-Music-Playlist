import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Image from ".././img/concert.jpg";
import Titletext from "../components/common/Titletext";
import Buttontext from "../components/common/Buttontext";


const styles = makeStyles({
    background:{
        backgroundImage:`url(${Image})`,
        height:"100vh",
        backgroundSize:"cover",
        display:"flex",
        flexDirection:"column", 
        
        "& nav":{
            width:"100vw",
            height:100,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
        },

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
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
        },
        "& li:hover" :{
            borderBottomColor:"white",
            cursor:"pointer",
            textDecoration:"underline",
        },"& div":{
            width:"100vw",
            height:"60vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",  
            color:"white",
            textTransform:"uppercase", 
            flexDirection:"column",
        },"& button" :{
            marginTop:"15px",
        }
    },
})

function Nav() {
    const classes = styles();

    return (
        <header className={classes.background}>
            <nav>
                <ul>
                    <li>About</li>
                    <li>Band List</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div>
                <Titletext variant="h4" text="Book best and great indie bands from us!"/>
                <Buttontext variant="contained" size="large" color="secondary" buttontext="Explore now!"/>
            </div>
        </header>
    )
}

export default Nav
