import React from 'react';

class CardComponent extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.imageUrl} alt="img 1"/> 
            </div> 
        );
    }
}

export default CardComponent;