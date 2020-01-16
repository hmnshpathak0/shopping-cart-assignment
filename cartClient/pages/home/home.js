import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData} from  '../../utility/Actions/cartAction/action';
import {urlConfig,labelConfig} from '../../static/conf/constants';
import {compareFields} from '../../utility/utils/utils';
import '../../utility/templates/molecules/banners/banner'
import Banner from '../../utility/templates/molecules/banners/banner';
import ShowCategory from '../../utility/templates/molecules/showCategory/showCategory';
import './home.scss';

class Home extends Component{
    constructor(){
        super();
        this.state={
            categories: [],
            banners: [],
        }

    }
    //if all the values are same then return false
    static getDerivedStateFromProps(props,state){
        console.log(props.category)
         let bannerFlag = false;
         let categoriesFlag = false;
        
        if(!state.banners.length){
            bannerFlag = true
        }else if(state.banners.length && compareFields(props.banners,state.banners)){
            bannerFlag = true
        }

        if(!state.categories.length){
            categoriesFlag = true
         }else if(state.categories.length && compareFields(props.categories,state.categories)){
             categoriesFlag = true
         }
         //returning the values if change is there
        if(bannerFlag){
            if(categoriesFlag){
                return {
                    categories:props.categories,
                    banners: props.banners
                }
            }else{
               return{ 
                   banners: props.banners,
               }
            }
        }else if(categoriesFlag){
            return{
                categories: props.categories
            }
        }
        return null;
    }
  
    componentDidMount(){
        this.props.fetchData(urlConfig.categoriesUrl);
        this.props.fetchData(urlConfig.bannersUrl);
    }
    render(){
        return (
            <main className='home' aria-label={labelConfig.Home}>
              <Banner banner={this.state.banners} />
            <div className='home_cat'>
                {this.state.categories.map((cat,index) => 
                        <ShowCategory index={index} key={cat.id} item={cat} />
            )
        }
            </div>
              
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