import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData} from  '../../core/Actions/cartAction/action';
import {urlConfig} from '../../static/conf/constants'
class Home extends React.Component{
    constructor(){
        super();

    }
    componentDidMount(){
        console.log(this.props.fetchData(urlConfig.categoriesUrl))
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
  export default connect(mapStateToProps, { fetchData })(Home);