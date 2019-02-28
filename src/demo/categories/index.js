import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, fetchCategories, fetchByCategory } from '../../store/actions';
import './category.css';

class Categories extends Component {

    componentDidMount() {
        this.props.fetchCategories();
    }

    renderChildren(data) {
        return <div className = "category-children" > { data.name } < /div>
    }

    filterByCategory(name) {
        this.props.fetchProducts().then(() => {
            this.props.fetchByCategory(name);
        });

    }

    renderGrandChildren(data) {
        return <div className = "category-grand-children"
        onClick = { this.filterByCategory.bind(this, data.name) } > { data.name } < /div>
    }

    render() {
        return ( <
            div className = "col-md-3 category-cart" >
            <
            h2 > Categories < /h2> <
            hr / > {
                this.props.categories.map((result, idx) => {
                        return ( <
                            div key = { idx } > {
                                result.parent == 0 ? < div className = "category-parent" > { result.name } < /div>: (result.parent-this.props.categories[idx-1].parent == this.props.categories[idx-1].id) ? this.renderChildren(result) : this.renderGrandChildren(result)}</div >
                            )
                        })
                } <
                /div>
            )
        }
    }

    function mapStateToProps(state) {
        return {
            categories: state.CategoriesReducer
        }
    }

    export default connect(mapStateToProps, { fetchProducts, fetchCategories, fetchByCategory })(Categories);