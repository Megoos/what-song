import React, { Component } from 'react';
import io from 'socket.io-client';
import Events from '../constants/Events';
import Consts from '../constants/Constants'

class Layout extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        socket: null,
        user: null
      };
    }
  
    componentWillMount() {
      this.initSocket();
    }
  
    // подключение и инициализация сокета
    initSocket = () => {
      const socket = io(Consts.SOCKET_URL);
      socket.on('connect', () => {
        console.log('connected');
      });
      this.setState({ socket });
    };
  
  
    render() {
      //const { socket, user } = this.state;
      const { title } = this.props;
      return (
        <div className="container">
          {title}
        </div>
      );
    }
  }
  
  export default Layout;