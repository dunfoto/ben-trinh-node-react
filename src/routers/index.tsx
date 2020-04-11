import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from 'pages/homePage';
import Resume from 'pages/resume';

const Routes = React.memo(() => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/resume" component={Resume} />
        </Switch>
    )
});


export default Routes;