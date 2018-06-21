import React from 'react';
import { Row, Col } from 'react-flexbox-grid'

class Header extends React.Component{
    render(){
        return(
            <Row className={'header'}>
                <Col xs={12} md={4}>
                    <button className={ `button toggleButton ${this.props.buttonStyle ? 'show':'hide'}`} onClick={this.props.toggleSidebar}>
                        Sidebar
                    </button>
                </Col>
                <Col xs={12} md>
                    <h1 className={'headerText'}>
                        Static header
                    </h1>
                </Col>
            </Row>
        )
    }
}
export default Header