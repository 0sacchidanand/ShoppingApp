import * as TYPE from './type'

var initState = {
    cart:[],
    my_orders:[],
}
export default  reducer = (state = initState , action) => {
    switch (action.type){
        case TYPE.ADD_TO_CART:
            return{
                ...state,
                cart:[
                    ...state.cart,
                    {
                        ...action.payload,
                        QTY:1,
                    }
                ]
            }
    }
}