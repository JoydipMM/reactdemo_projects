


// action creator is a function which returns an object 

export const updateLoader = (value) => {
    return{
        type: 'UPDATE_LOADER',
        payload: value
    }
}

export const updateError = (value) => {
    return{
        type: 'UPDATE_ERROR',
        payload: value
    }
}

export const updateData = (value) => {
    return{
        type: 'UPDATE_DATA',
        payload: value
    }
}


export const updateCart = (value) =>{
    return{
        type: 'UPDATE_CART',
        payload: value
    }
}


export const removeFromCart = (value) => {
    return{
        type: "REMOVE_CART",
        payload: value
    }
}