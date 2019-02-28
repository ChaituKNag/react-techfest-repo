import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../store/actions';
import ProductTile from '../ProductTile';
import { Grid, Pagination, Icon } from 'semantic-ui-react'
class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('http://localhost:4567/api/product');   
    }

    constructor(props) {
        super(props);
        this.state = {
          currentPage: 1,
          productsPerPage: 12
        };
  
        this.handlePaginationChange = this.handlePaginationChange.bind(this);
      }

  

      handlePaginationChange(e, { activePage }) {
        this.setState({
            currentPage: Number(activePage)
          });
      }

    render() {
       const { currentPage, productsPerPage } = this.state;
        // Logic for displaying current products
      const indexOfLastproduct = currentPage * productsPerPage;
      const indexOfFirstproduct = indexOfLastproduct - productsPerPage;
      const currentproducts = this.props.items.slice(indexOfFirstproduct, indexOfLastproduct);

      const renderproducts = currentproducts.map((product) => {
        return (
            <Grid.Column key ={product.id}>
                    <ProductTile product={product} ></ProductTile>
            </Grid.Column>
        )
      });
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.items.length / productsPerPage); i++) {
          pageNumbers.push(i);
        }

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            
            <React.Fragment>
                <h3 className="prod-title">Products</h3> <span className="right-float"><Icon name='list' /> <Icon name='th' /></span>
                <ul>            
                        <Grid>
                        <Grid.Row columns={3}>       
                            {renderproducts}                        
                        </Grid.Row>
                        </Grid>             
                </ul>
                <Pagination totalPages={pageNumbers.length} onPageChange={this.handlePaginationChange} activePage={currentPage}/>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);




