// import { CardActionArea } from '@material-ui/core';
// import { Typography } from '@material-ui/core';
import { CardPost } from './styled'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const PostCard = (props) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    console.log(props)

    return (
        <CardPost >
            <Card >
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" >
                            R
                        </Avatar>
                    }
                    title={props.title}
                    subheader={props.username}
                />

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.body}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton>
                        <ArrowDownwardIcon />
                    </IconButton>
                    <p>{props.voteSum}</p>
                    <IconButton>
                        <ArrowUpwardIcon />
                    </IconButton>
                    {!props.hideComment && (
                        <IconButton>
                            <QuestionAnswerIcon  onClick={props.onClick}/>
                        </IconButton>
                    )}
                </CardActions>
            </Card>
        </CardPost>
    )
}

export default PostCard;