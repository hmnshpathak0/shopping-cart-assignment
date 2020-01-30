import React from 'react';

function nativeClick(Component,className){

return class extends React.Component{
    constructor(){
        super();
        this.state={
            toggle: false
        }
    }
    triggerClick = (event) => {
        if(event.target.classList.value.indexOf(className)> -1){
            this.setState({toggle:!this.state.toggle})
           return;
        }
        this.setState({toggle:false})
    }

    componentDidMount(){
        window.addEventListener('click',this.triggerClick)
    }
    componentWillUnmount(){
        window.removeEventListener('click',this.triggerClick)
    }

    render(){
        return <Component toggle={this.state.toggle} {...this.props}/>
    }

}

}

export default nativeClick;