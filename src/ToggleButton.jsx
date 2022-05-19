import React from "react";
import "./App.scss";
import ReactDOM from 'react-dom';



class ToggleButton extends React.compoment{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {isOff: false};
      }
    handleClick() {
        this.setState({isOff: !this.state.isOff})
    }
    
    render () {
        const { isOff } = this.state;
        let title = this.state.isOff? "ON":"OFF";
       
             <button onClick={this.handleClick}>more {{ title }} </button>
        
    ;
    }
       
   
};

export default ToggleButton; 
