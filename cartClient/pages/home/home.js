import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData} from  '../../utility/Actions/cartAction/action';
import {urlConfig,screenConfig,labelConfig} from '../../static/conf/constants';
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
        let update={}
        if(props.banners.length && !state.banners.length){
            update.banners = props.banners;
        }
        
        if(props.categories.length && !state.categories.length){
            update.categories = props.categories;
        }
    
        return Object.keys(update).length?update:null;
    }
  
    componentDidMount(){
        this.props.fetchData(urlConfig.categoriesUrl);
        this.props.fetchData(urlConfig.bannersUrl);
    }
    render(){
        return (
            <React.Fragment>
                <main className='home'>
                    <Banner banner={this.state.banners} />
                    <section className='home_cat'>
                    {
                        this.state.categories.map((cat,index) => <ShowCategory index={index} key={cat.id} item={cat} />)
                    }
                    </section>
                </main>
            </React.Fragment>
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