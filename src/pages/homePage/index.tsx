import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, GridList, GridListTile } from '@material-ui/core';
import listImage from 'data/listImg.json';
import Card from 'components/Card';
import imgs from 'data/imgsProj.json';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: '100%',
            height: 'auto',
        },
    }),
);

const HomePagePages = React.memo(() => {
    const classes = useStyles();

    return (
        <div className="container c-container-carousel">
            <Grid
                container
                spacing={1}
                alignItems="center"
                justify="center"
            >
                <Grid item sm={6}>
                    <h3 className="style-font-introduce">Introduce my self</h3>
                </Grid>
                <Grid item sm={6}>
                    <div className={classes.root}>
                        <GridList spacing={2} className={classes.gridList} cols={3}>
                            {listImage.map((tile) => (
                                <GridListTile key={tile.src} cols={tile.cols || 1}>
                                    <img src={tile.src} alt={tile.src} />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                </Grid>
            </Grid>
            <hr />
            <Grid
                container
                alignContent="center"
                justify="center"
                className="mt-4"
            >
                <Card
                    img={imgs.gofix}
                    title="GOfix"
                    description="Description GOfix"
                    url="https://www.gofix.com.sg/"
                />
                <Card
                    img={imgs.merchfoundry}
                    title="MerchFoundry"
                    description="Description MerchFoundry"
                    url="https://merchfoundry.com/"
                />
                <Card
                    img={imgs.los}
                    title="TheLivingOS"
                    description="Description TheLivingOS"
                    url="https://los-web.vinova.sg/"
                    ps="Development"
                />
            </Grid>
        </div>
    );
});

export default HomePagePages;