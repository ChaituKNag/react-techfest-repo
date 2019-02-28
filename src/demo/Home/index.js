import React from 'react';


import Products from '../Products';
import Category from '../Category';

import './index.scss';

import { Grid } from 'semantic-ui-react'


class Home extends React.Component {
 
    render() {
        return (
            <div className="wrapper-pad">
                <Grid columns='equal'>
                    <Grid.Column width={4}>
                        <Category></Category>
                    </Grid.Column>
                    <Grid.Column>
                        <Products></Products>
                    </Grid.Column>
                </Grid>
                
           </div>
        );
    }
}

export default Home;
