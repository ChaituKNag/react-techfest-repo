import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.scss';
import Accordion from '../common/Accordion';
import { getCategories, filterProductsByCategory } from '../../actions/PlpActions';

class Categories extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getCategories());
    }

    filterProductsData = (categoryid) => {
        const { dispatch } = this.props;
        dispatch(filterProductsByCategory(categoryid));
    }

    render() {
        const { categories } = this.props;
        return (
            <section className="categories">
                <h4>Categories</h4>
                <Accordion accordionData={categories} onClickAccordion={this.filterProductsData}></Accordion>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories: state.plpData.categories
    }
}

Categories.propTypes = {
    categories: PropTypes.array,
    dispatch: PropTypes.func
}

export default connect(mapStateToProps)(Categories);