//all configs related to URL 
const urlConfig = {
    clientUrl: 'http://localhost:4201/',
    serverUrl : 'http://localhost:5000/',
    cartApiUrl: 'addToCart',
    categoriesUrl: 'categories',
    bannersUrl: 'banners',
    productsUrl: 'products',
    cartcompUrl: 'myCart',
    productcompUrl: 'plp',
    logincompUrl: 'login',
    registercompUrl: 'register',
    homecompUrl: 'home',
    
}

//all configs related to response code

const codeConfig = {
    responseSuccess:'200',
}

//all configs related to error messages

const errorConfig = {
    ErrorRetrievingData :'Error while retrieving data: ',
}

//Labels and texts

const labelConfig = {
    SabkaBazaar : 'SabkaBazaar',
    home : 'Home Page',
    Offer: 'Offers',
    Of: 'of',
    Next: 'Next',
    Prev: 'Prev',
    Explore: 'Explore ',
    CatNav: 'category navigation',
    Products: 'products',
    Buy: 'Buy now @',
    MyCart: 'My Cart',
    AddToCart: 'Add to Cart',
    SelectCategory: 'Select a Category',
}

export {
    urlConfig,codeConfig,errorConfig,labelConfig
}