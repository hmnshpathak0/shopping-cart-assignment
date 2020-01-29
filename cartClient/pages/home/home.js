import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData} from  '../../utility/Actions/cartAction/action';
import {urlConfig,screenConfig,labelConfig} from '../../static/conf/constants';
import '../../utility/templates/molecules/banners/banner'
import Banner from '../../utility/templates/molecules/banners/banner';
import ShowCategory from '../../utility/templates/molecules/showCategory/showCategory';
import './home.scss';
import MyCart from '../myCart/myCart';

class Home extends Component{
    constructor(){
        super();
        this.state={
            categories: [],
            banners: [],
            screenSize: '',
            cartOpen: false,
        }

    }
    //if all the values are same then return false
    static getDerivedStateFromProps(props,state){
        let update={}
        if(props.banners.length && !state.banners.length){
            update.banners = props.banners;
        }
        
        if(props.categories.length && !state.categories.length){
            update.categories = props.categories;
        }
        if(props.screenSize && props.screenSize!=state.screenSize){
            update.screenSize = props.screenSize;
        }
        if(props.cartOpen != state.cartOpen)
            update.cartOpen = props.cartOpen
    
        return Object.keys(update).length?update:null;
    }
  
    componentDidMount(){
        this.props.fetchData(urlConfig.categoriesUrl);
        this.props.fetchData(urlConfig.bannersUrl);
    }
    render(){
        const isCartModal = this.state.screenSize==screenConfig.ScreenLaptop && this.state.cartOpen

        return (
            <React.Fragment>
            <main className={'home '+ (isCartModal?'home--light':'')} aria-label={labelConfig.Home}>
              <Banner banner={this.state.banners} />
            <section className='home_cat'>
                {this.state.categories.map((cat,index) => 
                        <ShowCategory index={index} key={cat.id} item={cat} />
            )
        }
            </section>
              
            </main>
            {
               isCartModal &&  <MyCart/>

            }
            </React.Fragment>
          );
        }
}
const mapStateToProps = (state) => {
    return {
      categories: state.updateData.categories,
      banners: state.updateData.banners,
      cartOpen: state.updateData.cartOpen,
    }
  }
  export default connect(mapStateToProps, { fetchData })(Home);