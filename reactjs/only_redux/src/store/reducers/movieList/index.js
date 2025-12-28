

const initialState = {
    //cart: [],
    cart: {},
    movies:[],
    isLoading: false,
    error: null
}
function movieListReducer(state = initialState, action) {
    console.log(action) 
    /* with this we can see the action 
    {type: 'UPDATE_LOADER', payload: true} 
    {type: 'UPDATE_ERROR', payload: null}
    {type: 'UPDATE_LOADER', payload: false}
    */
   // this means we are getting the actions in the reducer

   switch(action?.type) {
        case 'UPDATE_LOADER': {
            return {...state, isLoading: action.payload}
        }
        case 'UPDATE_ERROR': {
            return {...state, error: action.payload}
        }
        case 'UPDATE_DATA': {
            return {...state, movies: action.payload}
        }
        case 'UPDATE_CART': {
            //return {...state, cart: action.payload}
            const oldState = {...state}
            //oldState.cart.push(action.payload) // this line make a copy of cart from initialState and push the movie data in new array. So every time we click on add to cart button, it shows the movie data in new array
            //oldState.cart = [...oldState.cart, action.payload] // here first we speed the cart array and then we push the new movie data in new array. But here is a issue that if we click on add to cart button multiple times, it will add same the movie data in new array multiple times
            
            // solution
            oldState.cart = {...oldState.cart};
            //oldState.cart[action?.payload.id] = action.payload // Dynamic Property Accessor. this privent add same item multiple times

            // now I want to add count of single movie in cart
            const key = action?.payload.id;
            if(oldState?.cart[key]?.count) {
                oldState.cart[key].count += 1;
            } else {
                oldState.cart[key]={}
                oldState.cart[key].count = 1;
                oldState.cart[key].payload = action.payload;
            }

            return oldState

            // return {...state, cart: [...state.cart, action.payload]} // it is a short hand for update the state
        }
        case "REMOVE_CART": {
            const newCart = { ...state.cart }
            delete newCart[action.payload]

            return {
                ...state,
                cart: newCart
            }
        }
        default: {
            return state;
        }
    }
    // return state; // remove this
}

export default movieListReducer;