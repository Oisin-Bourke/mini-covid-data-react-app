import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
  
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(2),
        width: theme.spacing(24),
        height: theme.spacing(24),
      }
    }
}));

export default function Country(props){
  const classes = useStyles();

  /*
  This changed :)
  Palette Tints of Dark Orange #FF8C00 hex color has 10 HEX, RGB codes colors:
HEX: #ff8c00 RGB: (255, 140, 0), HEX: #ff9819 RGB: (255, 152, 25), HEX: #ffa333 RGB: (255, 163, 51), HEX: #ffaf4d RGB: (255, 175, 77), HEX: #ffba66 RGB: (255, 186, 102), HEX: #ffc680 RGB: (255, 198, 128), HEX: #ffd199 RGB: (255, 209, 153), HEX: #ffddb3 RGB: (255, 221, 179), HEX: #ffe8cc RGB: (255, 232, 204), HEX: #fff4e6 RGB: (255, 244, 230).
Color scheme was created by colorswall
  */

  let colour = '';

  if(props.percentage >= .005 & props.percentage < .01){
    colour = '#fff4e6'
  } else if(props.percentage >= .01 & props.percentage < .015){
    colour = '#ffe8cc'
  } else if(props.percentage >= .015 & props.percentage < .02){
    colour = '#ffddb3'
  } else if(props.percentage >= .02 & props.percentage < .025){
    colour = '#ffd199'
  } else if(props.percentage >= .025 & props.percentage < .030){
    colour = '#ffc680'
  } else if(props.percentage >= .030 & props.percentage < .035){
    colour = '#ffba66'
  } else if(props.percentage >= .035 & props.percentage < .040){
    colour = '#ffaf4d'
  } else if(props.percentage >= .040 & props.percentage < .045){
    colour = '#ffa333'
  } else if(props.percentage >= .045 & props.percentage < .050){
    colour = '#ff9819'
  } else if(props.percentage >= .050 & props.percentage < .055){
    colour = '#ff8c00'
  } else  {
    colour = '#fafafa'
  }

    return (
      <div className={classes.root}>
        <Paper style={{background : colour }}  elevation={3}>
          <CardHeader
            avatar={<Avatar>{props.iso}</Avatar>}
                title={props.name}
          />
          <Divider />
              <CardContent>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    Population : {props.population}
                </Typography>
                <Typography color="textPrimary" gutterBottom>
                    Deaths : {props.deaths}
                </Typography>
                <Typography color="textPrimary" gutterBottom>
                  {props.percentage} %
                </Typography>
            </CardContent>
        </Paper>
      </div>
    )
}