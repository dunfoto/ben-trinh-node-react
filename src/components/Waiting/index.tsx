import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
);

interface SimpleBackdropProps {
    isOpen: boolean;
}

const SimpleBackdrop = React.memo((props: SimpleBackdropProps) => {
    const classes = useStyles();
    const { isOpen } = props;
    return (
        <Backdrop className={classes.backdrop} open={isOpen}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
});

export default SimpleBackdrop;