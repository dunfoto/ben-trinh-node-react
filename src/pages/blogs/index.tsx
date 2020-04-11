import React, { useEffect, useState } from 'react';
import axios from 'common/axios';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Zoom } from '@material-ui/core';
import { BlogsProps } from 'common/type';
import Waiting from 'components/Waiting';
import defaultImg from 'assets/img/default.png';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '20px 20px'
    },
});

const BlogsComponent = React.memo(() => {
    const classes = useStyles();
    const [blogs, setBlogs] = useState<BlogsProps[]>([]);

    useEffect(() => {
        loadBlog();
    }, [])

    const loadBlog = async () => {
        const res = await axios.get('/blogs');
        return setBlogs(res.data);
    }

    return (
        <div className="container">
            <Waiting isOpen={blogs.length === 0} />
            {blogs.map(blog => (
                <Zoom key={blog._id} in={true}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={`img${blog._id}`}
                                height="250"
                                image={blog.previewImgTop === "" ? defaultImg : blog.previewImgTop}
                                title="title"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {blog.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {blog.summary}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to={`/blogs/${blog._id}`} style={{ textDecoration: 'none' }}>
                                <Button size="small" color="primary">
                                    Go go go
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Zoom>
            ))}
        </div>
    );
});

export default BlogsComponent;