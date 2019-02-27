const prefix='http://localhost:4567',endPointUrl=()=>(
    {
        'productsList':prefix+'/api/product',
        'productInfo':prefix+'/api/product/description/$id'
    }
)

export default endPointUrl();