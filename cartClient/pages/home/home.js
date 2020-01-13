import React, { Component } from 'react';
import { connect } from 'react-redux';
import {postRequest} from  '../../core/Actions/cartAction/action';
import {urlConfig} from '../../static/conf/constants'
class Home extends React.Component{
    constructor(){
        super();

    }
    componentDidMount(){
        console.log("rendered")
        console.log(this.props.postRequest(urlConfig.categoriesUrl,{}))
    }
    render(){
        return(
            <div>
                Home
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      categories: state.updateData.categories,
    }
  }
  export default connect(mapStateToProps, { postRequest })(Home);