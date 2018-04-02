import React, { Component } from 'react';
import { connect } from 'react-redux';
import Routes from './Routes';
import './index.css';

@connect(null, null)
export default class App extends Component {
    componentDidMount() {
        //this.props.connectToProxy();
    }

    componentWillUnmount() {
        //this.props.disconnectFromProxy();
    }

    render() {
        return <Routes />;
    }
}
