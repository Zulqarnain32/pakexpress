export const CartReducer = (state,action) => {
    const { shoppingCart,totalPrice,quantity } = state
   let product
    let updatedPrice;
    let updatedQuantity;
    let index;
    switch(action.type){
      
        case "ADD_TO_CART":
            // console.log("this is working");
        const check = shoppingCart.find(product =>  product.id == action.id);
           
         if(check){
            console.log("this item is already included");
            return state;
            
         } else {
            product = action.product;
            product["quantity"] = 1;
            updatedQuantity = quantity + 1;
            updatedPrice = totalPrice + product.price;
            return { shoppingCart: [product, ...shoppingCart],totalPrice:updatedPrice,quantity:updatedQuantity}
         }
         break;
         case "INCR":
            console.log("increase");
            product = action.cart;
            product.quantity = product.quantity + 1;
            // updatedPrice = quantity + product.quantity;
            updatedPrice = totalPrice + product.price;
            // updatedQuantity = quantity + product.quantity;
            updatedQuantity = quantity + 1;
            index = shoppingCart.findIndex(cart => cart.id === action.id);
            shoppingCart[index] = product;
             return {shoppingCart: [...shoppingCart],totalPrice:updatedPrice,quantity:updatedQuantity}
            break;

            case "DECR":
                product = action.cart;
            if(product.quantity > 1){
                console.log("dddddddecrease");
                updatedPrice = totalPrice - product.price;
                product.quantity = product.quantity - 1;
                updatedQuantity = quantity - 1;
            index = shoppingCart.findIndex(cart => cart.id === action.id);
            shoppingCart[index] = product;
             return {shoppingCart: [...shoppingCart],totalPrice:updatedPrice,quantity:updatedQuantity}
            }
            else {
             return state
            }
            break;
            case "DELETE":
                const filtered = shoppingCart.filter(product => product.id !== action.id) 
                product = action.cart;
                updatedQuantity = quantity - product.quantity;
                updatedPrice = totalPrice - product.price * product.quantity
                return {shoppingCart:[...filtered],totalPrice:updatedPrice,quantity:updatedQuantity}
        
        
        
        
        
        
                default:
         return state
    }

}