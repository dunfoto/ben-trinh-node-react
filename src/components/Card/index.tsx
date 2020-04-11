import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '20px 20px'
    },
});
interface ImgMediaCardProps {
    img: string;
    url: string;
    project?: string;
    title: string;
    description: string;
    ps?: string;
}

const ImgMediaCard = React.memo((props: ImgMediaCardProps) => {
    const classes = useStyles();
    const { img, url, title, description, project, ps } = props;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={`${title}_${project}`}
                    height="140"
                    image={img}
                    title="title"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Button size="small" color="primary">
                        Go to this site
                    </Button>
                </a>
                <i className="f-10">{ps}</i>
            </CardActions>
        </Card>
    );
});

export default ImgMediaCard;