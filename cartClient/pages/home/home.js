import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData} from  '../../utility/Actions/cartAction/action';
import {urlConfig,labelConfig} from '../../static/conf/constants';
import {compareFields} from '../../utility/utils/utils';
import '../../utility/templates/molecules/banners/banner'
class Home extends React.Component{
    constructor(){
        super();
        this.state={
            categories: [],
            banners: [],
        }

    }
    //if all the values are same then return false
    shouldComponentUpdate(props,state){
  
        if(this.state.categories.length && props.categories){
           return  compareFields(props.categories,this.state.categories)  
        }

        if(this.state.banners.length && props.banners.length){
            return compareFields(props.banners,this.state.banners)
        }
        return true;
    }

    componentDidUpdate(){
     
        this.setState({categories:this.props.categories})
        this.setState({banners:this.props.banners})
    }

    componentDidMount(){
        this.props.fetchData(urlConfig.categoriesUrl);
        this.props.fetchData(urlConfig.bannersUrl);
    }
    render(){
        return (
            <main className='home-container' aria-label={labelConfig.Home}>
              <Carousel items={this.state.banners} />
              
            </main>
          );
        }
}
const mapStateToProps = (state) => {
    return {
      categories: state.updateData.categories,
      banners: state.updateData.banners,
    }
  }
  export default connect(mapStateToProps, { fetchData })(Home);