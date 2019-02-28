import React from 'react';

import './index.scss';
import { UncontrolledCollapse } from 'reactstrap';
import { Link } from 'react-router-dom';

class Accordion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeId: {
                "electronics": false,
                "television": false
            }
        }
        this.setActiveElement = this.setActiveElement.bind(this);
    }
    setActiveElement(id){
        const activeId = this.state.activeId;
        activeId[id] = !activeId[id];
        this.setState({
            activeId
        });
    }
    render() {
        const { } = this.props;
        return (
            <section className="accordion">
                <ul className="list-unstyled accordion-list">
                    <li>
                        <Link to="/" id="electronics" className={this.state.activeId['electronics']? "active" : ""} onClick={() => this.setActiveElement('electronics')}>Electronics</Link>
                        <ul className="list-unstyled child">
                            <li>
                                <UncontrolledCollapse toggler="#electronics">
                                    <Link to="/" id="television" className={this.state.activeId['television']? "active" : ""} onClick={() => this.setActiveElement('television')}>Telivision</Link>
                                    <ul className="list-unstyled child">
                                        <li>
                                            <UncontrolledCollapse toggler="#television">
                                                <Link to="/">Smart TV</Link>
                                            </UncontrolledCollapse>
                                        </li>
                                    </ul>
                                </UncontrolledCollapse>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/">Men</Link>
                    </li>
                    <li>
                        <Link to="/">Women</Link>
                    </li>
                </ul>
            </section>
        );
    }
}

export default Accordion;