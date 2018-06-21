import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

class MainContentBlock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            randomNumber: null,
            isWorking: true
        };
        this.randomGenerator = this.randomGenerator.bind(this);
        this.generateRandom = this.generateRandom.bind(this);
        this.switchGenerator = this.switchGenerator.bind(this);
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            if(this.state.isWorking) {
                this.setState({randomNumber: this.randomGenerator()});
            }
        }, 2500);
    }

    componentWillMount(){
        if(this.state.isWorking){
            this.generateRandom();
            clearInterval(this.interval);
        }
    }

    randomGenerator(){
        return Math.floor(Math.random() * 1000);
    }

    generateRandom(){
        this.setState({randomNumber: this.randomGenerator()});
    }

    switchGenerator(){
        this.setState({
            isWorking: !this.state.isWorking
        });
    }

    render(){
        return(
            <Col xs={12} md>
                <Row center={'md'} className={'randomBox'}>
                <Col xs={12} md={12} className={'randomLabel'}>
                    <label>Random Number: <p className={'randomNumber'}>{this.state.randomNumber}</p></label>
                </Col>
                <Col xs={12} md={12} className={'randomButtons'}>
                    <button className={'button forceRand'} onClick={ this.generateRandom }>Force Rand</button>
                    <button className={`button ${this.state.isWorking ? 'stop':'start'}`} onClick={ this.switchGenerator }>
                        {this.state.isWorking ? 'Stop' : 'Start'}
                    </button>
                </Col>
                </Row>
            </Col>
        )
    }
}
export default MainContentBlock;