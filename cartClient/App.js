import React, {Component} from 'react';
import ReactDOM from 'react-dom';
/**
 * THis component is the main parent component of cart App
 */
export default class Cartapp extends React.Component {
    constructor(){
        super();
    }
    render(){
       return(
       <div>Initialising Shopping Cart......</div>
       )
    }
}

ReactDOM.render(<Cartapp/>, document.getElementById('app'));