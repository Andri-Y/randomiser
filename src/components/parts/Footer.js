import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

class Footer extends React.Component{
    render(){
        return(
            <Row className={'footer'}>
                <Col xs md>
                    <footer>
                        <h1>
                            Sticky footer
                        </h1>
                    </footer>
                </Col>
            </Row>
        )
    }
}
export default Footer