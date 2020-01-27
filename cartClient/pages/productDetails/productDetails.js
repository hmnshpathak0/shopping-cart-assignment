import React from 'react';
import {connect} from 'react-redux'; 
import SideNav from '../../utility/templates/organisms/sideNav/sideNav';
import CatMenu from '../../utility/templates/molecules/catMenu/catMenu';
import './ProductDetails.scss';
import ProductItem from '../../utility/templates/molecules/productItem/productItem';
import {fetchData} from '../../utility/Actions/cartAction/action';
import {SET_CART} from '../../utility/Actions/cartAction/types'
import {urlConfig} from '../../static/conf/constants'
class ProductDetails extends React.Component{
    constructor(){
        super();
        this.state={
            category: {},
            categories: [],
            products: [],
            catproducts: [],
            cart:[],
            cartStatus:'',

        }
    }



    //mapping the props to state
    static getDerivedStateFromProps(props,state){
        console.log(props.cart)
        let update = {};
        if(!state.categories.length && props.categories.length){
            update.categories = props.categories;
        }

        if(!Object.keys(state.category).length && Object.keys(props.category).length){
            update.category = props.category;
            if(state.products.length){
                update.catproducts = props.products.filter(item => props.category.id==item.category)
            }
        }
        
        if(!state.products.length && props.products.length){
            update.products = props.products;
            update.catproducts = props.products;
        }
        
        if(props.category.id && props.category.id!=state.category.id){
            update.catproducts = props.products.filter(item => props.category.id==item.category);
            if(props.cart.length){
                update.cart = props.cart;
            }
        }

        
            update.cart = props.cart;

        return Object.keys(update).length?update:null;
    }

    componentDidMount(){
        
        //call the Products API to fetch all products
        this.props.getRequest(urlConfig.productsUrl);
        if(!this.state.categories.length){
            this.props.getRequest(urlConfig.categoriesUrl)
        }
        this.props.getRequest(urlConfig.cartApiUrl);
    
    
    }

    componentDidUpdate(){
        if(!this.state.categories.length){
            this.props.getRequest(urlConfig.categoriesUrl)
        }
    
    }

    addToCart = (item) => {
        const cartItem = Object.assign({},item)
        cartItem.quantity = 1;
        this.props.addItem(cartItem)
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
                  this.state.catproducts.map(product => <ProductItem handler={this.addToCart} key={product.id} item={product}/>)

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
        cart: state.updateData.cart,
    }
};

const mapDispatcherToProps = dispatch => {
    return {
        getRequest: (url) => dispatch(fetchData(url)),
        addItem: (item) => dispatch({
            type: SET_CART,
            payload: item,
        })
    }
}
         
export default connect(mapStateToProps,mapDispatcherToProps)(ProductDetails);