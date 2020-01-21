import React from 'react';
import {connect} from 'react-redux'; 
import SideNav from '../../utility/templates/organisms/sideNav/sideNav';
import CatMenu from '../../utility/templates/molecules/catMenu/catMenu';
import './ProductDetails.scss';
import ProductItem from '../../utility/templates/molecules/productItem/productItem';
import {fetchData} from '../../utility/Actions/cartAction/action';
import {urlConfig} from '../../static/conf/constants'
class ProductDetails extends React.Component{
    constructor(){
        super();
        this.state={
            category: {},
            categories: [],
            products: [],
            catproducts: [],
        }
    }



    //mapping the props to state
    static getDerivedStateFromProps(props,state){
    
        if(!state.categories.length){
            return{
                category: props.category,
                categories: props.categories,
            }
            
        }else if(!state.products.length){
           return { 
                    products: props.products,
                    catproducts: props.category.id ?props.products.filter(item => props.category.id==item.category):props.products,
           }
        }else if(props.category.id && props.category.id!=state.category.id){
            return {
                category:props.category,
                catproducts: state.products.filter(item => props.category.id==item.category),
            }
        }
    }

    componentDidMount(){
        
        //call the Products API to fetch all products
        this.props.fetchData(urlConfig.productsUrl);
        if(!this.state.categories.length){
            this.props.fetchData(urlConfig.categoriesUrl)
        }
    
    }

    componentDidUpdate(){
        if(!this.state.categories.length){
            this.props.fetchData(urlConfig.categoriesUrl)
        }
    
    }
    render(){
        return(
            <main className='cat_products'>
                <aside className='cat_menu'>
                    <SideNav categories={this.state.categories} />
                </aside>
                <div className='cat_dropdown_div'> 
                <CatMenu category={this.state.category} categories={this.state.categories}/>
                </div>
                <section className='cat_products_items'>
                {
                  this.state.catproducts.map(product => <ProductItem key={product.id} item={product}/>)

                }  
                
                </section>

            </main>
        )
    }
}
const mapStateToProps = state => {
    return {
        categories : state.updateData.categories,
        category : state.updateData.category,
        products: state.updateData.products,
    }
};

         
export default connect(mapStateToProps,{fetchData})(ProductDetails);