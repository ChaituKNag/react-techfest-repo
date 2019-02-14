import React from 'react';
import { Link, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Hero from '../Hero';

const Heroes = ({ match }) => (
    <div>
        <h2>Heroes</h2>
        <ul>
            <li>
                <Link to={`${match.url}/ironman`}>Ironman</Link>
            </li>
            <li>
                <Link to={`${match.url}/drstrange`}>Dr. Strange</Link>
            </li>
            <li>
                <Link to={`${match.url}/blackpanther`}>Black Panther</Link>
            </li>
        </ul>

        <Route path={`${match.url}/:heroId`} render={
            ({ match }) => {
                const { heroId } = match.params; 
                switch(heroId) {
                    case 'ironman': 
                        return <Hero message="How many did we win! 🤷‍"/>
                    case 'drstrange': 
                        return <Hero message="We're in the Endgame now! 🎢"/>
                    case 'blackpanther':
                        return <Hero message="Wakanda Forever 🤪"/>
                    default: return null;
                }
            }
        } />
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a HERO.</h3>}
        />
    </div>
);

Heroes.propTypes = {
    match: PropTypes.object
}

export default Heroes;