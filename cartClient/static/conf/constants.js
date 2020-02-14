//all configs related to URL 
const urlConfig = {
    clientUrl: 'http://localhost:4201/',
    serverUrl : 'http://localhost:5000/',
    cartApiUrl: 'addToCart',
    categoriesUrl: 'categories',
    bannersUrl: 'banners',
    productsUrl: 'products',
    loginUrl:'addToCart',
    registerUrl: 'addToCart',
    cartcompUrl: 'cart',
    productcompUrl: 'plp',
    logincompUrl: 'login',
    registercompUrl: 'register',
    homecompUrl: 'home',
    cartbannerImageUrl: '/static/images/lowest-price.png',
    logoImageUrlSmall: '/static/images/logo.png',
    logoImageUrlLarge: '/static/images/logo_2x.png',
    cartButtonUrl: '/static/images/cart.svg',
    
}
//all config related to screen size
const screenConfig= {
    ScreenTablet:'465px', /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
    ScreenMobile: '300px',
    ScreenLaptop:'769px',
    ScreenDesktop:'1025px', /* big landscape tablets, laptops, and desktops */
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
    MenuBar: 'Navigation Menu',
    Offer: 'Offers',
    Of: 'of',
    GoCart: 'Go to Cart',
    Next: 'Next',
    Prev: 'Prev',
    Explore: 'Explore ',
    CatNav: 'category navigation',
    Products: 'products',
    Buy: 'Buy now @',
    MyCart: 'My Cart',
    AddToCart: 'Add to Cart',
    SelectCategory: 'All Products',
    Login: 'Login',
    LoginMessage: 'Get Access to Orders,Whishlist and Recommendation',
    SignIn: 'SignUp',
    RegisterMessage: 'We dont share any personal details with anyone',
    ReduceQuantity: 'reduce quantity',
    IncreaseQuantity: 'increase quantity',
    MaxWidth: 'max-width:',
    MinWidth: 'min-width:',
    CartItem: 'Cart Item',
    Minus: '\u2212',
    Plus: '+',
    Multiply: 'x',
    RightArrow: '>',
    CartBanner: 'Cart Banner',
    CartBannerTitle: 'You will not get cheaper than this',
    CartPromoCode: 'Promo Code Can be applied on payment page',
    CartCheckout: 'Cart Checkout',
    CartPayment: 'Cart Payment',
    CartProceed: 'Proceed Checkout',
    Rupee: 'Rs.',
    CartEmptyMessage: 'No Item in your Cart',
    CartEmptyPromo: 'Your favourite items are just a click away',
    CartEmptyButtonText: 'Start Shopping',
    CloseCart: 'CloseCart',
    CloseCartButton: 'Close Cart Button',
    FooterMsg: 'CopyRight@ 2011-2018 Sabka Bazaar'
}

export {
    urlConfig,codeConfig,errorConfig,labelConfig,screenConfig
}