import React from 'react';
import {connect} from 'react-redux'; 
import SideNav from '../../utility/templates/organisms/sideNav/sideNav';
import CatMenu from '../../utility/templates/molecules/catMenu/catMenu';
import './ProductDetails.scss';
import ProductItems from '../../utility/templates/molecules/productItem/productItem';
import {fetchData} from '../../utility/Actions/cartAction/action'
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

    //this method is used to handle category change in menu
    changeCategory = (cat)  => {

    }

    getDerivedStateFromProps(props,state){
        if(!categories.length){
            
        }else if(props.category.id!=state.category.id){
            return {
                category:props.category,
                catproducts: state.products.filter(item => props.category.id==item.category)
            }
        }
    }

    componentDidMount(){
        
        
    
    }
    render(){
        return(
            <main className='cat_products'>
                <aside className='cat_menu'>
                    <SideNav categories={this.state.categories} handler={this.changeCategory}/>
                </aside>
                <section className='cat_dropdown'> 
                <CatMenu categories={this.state.categories}/>
                </section>
                <section className='cat_product_items'>
                    {
                    <ProductItems/>
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