import React from 'react';

import LoginScreen from './login/LoginScreen';
import { connect } from 'react-redux';
import SplashScreen from './SplashScreen';
import HomeScreen from './home/HomeScreen';

@connect(state => ({ screen: state.navigation.currentScreen }), null)
export class Root extends React.Component {
    render() {
        switch (this.props.screen) {
            case 'SplashScreen':
                return <SplashScreen />;
            case 'LoginScreen':
                return <LoginScreen />;
            case 'HomeScreen':
                return <HomeScreen />;
            default:
                return <LoginScreen />;
        }
    }
}
