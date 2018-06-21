import React from 'react';
import { Grid, Row } from 'react-flexbox-grid'
import Header from './parts/Header'
import LeftSidebar from './parts/LeftSidebar'
import MainContentBlock from './parts/MainContentBlock'
import Footer from './parts/Footer'
import '../styles/App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showSidebar: false,
            buttonStyle: true
        };
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        this.setState({
            showSidebar: !this.state.showSidebar,
            buttonStyle: !this.state.buttonStyle
        });
    }

  render() {
    return (
      <Grid fluid className={'app'}>
          <Header toggleSidebar={this.toggleSidebar} buttonStyle={this.state.buttonStyle}/>
              <Row className={'content'}>
                <LeftSidebar showSidebar={this.state.showSidebar}/>
                <MainContentBlock />
              </Row>
          <Footer/>
      </Grid>
    );
  }
}

export default App;

