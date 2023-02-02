import {create} from 'zustand'

const StoreCart = create((set)=>({
    cart:0,
    cartItems:[],
    cartPrice:0,
    addCart:(item)=>set((state)=>({
        cart: state.cart += 1,
        cartItems: [...state.cartItems,item],
        cartPrice: Math.round(state.cartPrice += item.price),
    })),
    delCart:(data,id)=>set((state)=>({
        cart: state.cart -= 1,
        cartItems: state.cartItems.filter((itm,index)=>{
            // console.log(itm)
            return index!==id;
        }),
        cartPrice: Math.round(state.cartPrice -= data.price)
    })),
    emptyCart: ()=>set(()=>({
        cartItems:[],
        cartPrice:0,
        cart:0
    }))
}))

export default StoreCart;


// const CartStore=create((set)=>({
//     cart:0,
//     addCart:()=>set((state)=>({
//         cart:state.cart += 1
//     }))
// }))