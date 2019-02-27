import React from 'react';

import './index.scss';
import Accordion from '../common/Accordion';

class Categories extends React.Component {
    render() {
        const { } = this.props;
        return (
            <section className="categories">
                <h4>Categories</h4>
                <Accordion></Accordion>
            </section>
        );
    }
}

export default Categories;