import React from 'react';
import Card from "@material-ui/core/Card"
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


function Bandlist(props) {
    return (
        <>
          {props.musiclist && props.musiclist.map((music) => 
           <Card>
               <CardContent>
                    <Typography>{music.text}</Typography>
                    <Typography>{music.videos}</Typography>
               </CardContent>
           </Card> 
          )}  
        </>
    )
}

export default Bandlist;
