import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'pages/homePage';
import Resume from 'pages/resume';
import Blogs from 'pages/blogs';
import BlogDetail from 'pages/blogDetail';

const Routes = React.memo(() => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/blogs/:id" component={BlogDetail} />
        </Switch>
    )
});


export default Routes;