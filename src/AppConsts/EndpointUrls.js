const prefix='http://localhost:4567',endPointUrl=()=>(
    {
        'getUser':prefix+'/api/user/$userId',
        'productsList':prefix+'/api/product',
        'productInfo':prefix+'/api/product/description/$id',
        'addTocart':prefix+'/api/cart/',
        'getCart':prefix+'/api/cart/$userId',
        'checkoutOrder':prefix+'/api/order'
    }
)

export default endPointUrl();