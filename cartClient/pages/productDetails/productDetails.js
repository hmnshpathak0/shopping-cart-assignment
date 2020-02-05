import React from 'react';
import {connect} from 'react-redux'; 
import SideNav from '../../utility/templates/organisms/sideNav/sideNav';
import CatMenu from '../../utility/templates/molecules/catMenu/catMenu';
import './ProductDetails.scss';
import ProductItem from '../../utility/templates/molecules/productItem/productItem';
import {fetchData} from '../../utility/Actions/cartAction/action';
import {urlConfig} from '../../static/conf/constants'
import { SET_CART,SAVE_CATEGORY } from '../../utility/Actions/cartAction/types';
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
            sameCat: false,

        }
    }



    //mapping the props to state
    static getDerivedStateFromProps(props,state){
        let update = {};
        if(!state.categories.length && props.categories.length){
            update.categories = props.categories;
        }
    
        
        
        if(!state.products.length && props.products.length){
            update.products = props.products;
            update.catproducts = props.products;
        }
        
        if(props.cart.length){
            update.cart = props.cart;
        }

        if(Object.keys(props.category).length){
            if(Object.keys(state.category).length && props.category.id == state.category.id){
                update.catproducts = props.products;
                return Object.keys(update).length?update:null;
            }
            update.category = props.category;
            update.catproducts = props.products.filter(item => item.category==props.category.id);
        }else{
            update.category= props.category;
            update.catproducts = props.products;
        }

        return Object.keys(update).length?update:null;
    }

    componentDidMount(){
        
        //call the Products API to fetch all products
        this.props.getRequest(urlConfig.productsUrl);
        if(!this.state.categories.length){
            this.props.getRequest(urlConfig.categoriesUrl)
        }
        this.props.getRequest(urlConfig.cartApiUrl);
        window.scrollTo(0, 0)
    
    }

    componentDidUpdate(){
        if(!this.state.categories.length){
            this.props.getRequest(urlConfig.categoriesUrl)
        }
    
    }

    toggleCatFlag = flag => {
        this.setState({sameCat:flag})
    }

    //adding the product item to cart if it doesnt exist in cart
    addToCart = (item) => {
        let product = this.state.cart.find(prod => prod.id == item.id)
        if(!product){
            const cartItem = Object.assign({},item)
            cartItem.quantity = 1;
            this.props.addItem(cartItem)
        }
    }

    componentWillUnmount(){
        this.props.saveCat();
    }
    render(){
        return(
            <main className='cat_products'>
                <aside className='cat_menu'>
                    <SideNav cat={this.props.category} sameCat={this.state.sameCat} handler={this.toggleCatFlag} categories={this.state.categories} />
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
        }),
        saveCat: () => dispatch( {
            type:SAVE_CATEGORY,
            payload: {}
        } )
    }
}
         
export default connect(mapStateToProps,mapDispatcherToProps)(ProductDetails);