import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.scss';
import Accordion from '../common/Accordion';
import { getCategories, filterProductsByCategory, resetFilter } from '../../actions/PlpActions';
import Cta from '../common/Cta';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resetFilterData: false
        }
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getCategories());
    }

    filterProductsData = (categoryid) => {
        const { dispatch } = this.props;
        dispatch(filterProductsByCategory(categoryid));
    }

    reset = () => {
        const { dispatch } = this.props;
        this.setState({
            resetFilterData: true
        })
        dispatch(resetFilter());
    }

    render() {
        const { categories } = this.props;
        return (
            <section className="categories">
                <h4>Categories</h4>
                <Accordion accordionData={categories} onClickAccordion={this.filterProductsData} resetFilter={this.state.resetFilterData}/>
                <Cta color="info" ctaText="Reset" ctaType="button" onClickHandler={this.reset} className="reset-categories"/>
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