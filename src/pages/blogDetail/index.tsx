import React, { useEffect, useState } from 'react';
import { BlogsProps } from 'common/type';
import axios from 'common/axios';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, CardContent, CardMedia, Zoom } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Waiting from 'components/Waiting';

interface BlogDetailProps {
    match: {
        params: {
            id: string;
        }
    }
}

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        border: 0,
        margin: '20px 20px',
        boxShadow: 'none'
    },
});

const initState = {
    _id: "",
    __v: 0,
    title: "",
    summary: "",
    description: "",
    createDate: "",
    status: "pending",
    previewImgTop: "",
    previewImgEnd: ""
}

const BlogDetail = React.memo((props: BlogDetailProps) => {
    const classes = useStyles();
    const [blog, setBlog] = useState<BlogsProps>(initState)

    useEffect(() => {
        loadBlog();
        // eslint-disable-next-line
    }, [])

    const loadBlog = async () => {
        try {
            const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://ben-trinh-api.herokuapp.com/blogs/${props.match.params.id}`)
            setBlog(res.data);
        } catch (err) {
            return Promise.reject(err);
        }
    }
    return (
        <div className="container">
            <Link to="/blogs" className="btn btn-primary rounded-circle c-button-back"><i className="fas fa-arrow-left"></i></Link>
            <Waiting isOpen={blog._id === ""} />
            <Zoom in={blog._id !== ""}>
                <div key={blog._id} className={classes.root}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {blog.title}
                        </Typography>
                        <i className="fas fa-calendar-alt mr-2"></i><i className="f-10">{blog.createDate}</i>
                        <Typography gutterBottom variant="h6" component="h4">
                            {blog.summary}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <span dangerouslySetInnerHTML={{ __html: blog.description }} />
                        </Typography>
                    </CardContent>
                    {Boolean(blog.previewImgEnd) && (
                        <CardMedia
                            component="img"
                            alt={`img${blog._id}`}
                            image={blog.previewImgEnd}
                            title="title"
                        />
                    )}
                </div >
            </Zoom>
        </div>
    );
});

export default BlogDetail;