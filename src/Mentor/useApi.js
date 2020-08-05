import { useEffect, useReducer } from 'react';
import Reducer from './Reducer';


const useApi = () => {
    const INITIAL_STATE = {
        slides: [],
        samplesurprises: [],
        review: [],
        surprise: [],
        gift: [],
        teampics: [],
        cart: [],
        item:[]
    }
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
    useEffect(() => {
        fetch('https://jsonblob.com/api/bc8411a4-d70d-11ea-b135-f58535394d33').then(response => response.json()).then(json => {
            const { slides, samplesurprises, review, surprise, gift, teampics } = json

            dispatch({ type: 'API_SUCCESS', payload: { slides: [...slides], samplesurprises: [...samplesurprises], review: [...review], surprise: [...surprise], gift: [...gift], teampics: [...teampics] } })
        })
    }, []);
    const addToCart = (index) => {
        dispatch({ type: 'ADD_TO_CART', payload: { index } })
    }

    const deleteItem = (index) => {
        dispatch({ type: 'DELETE_ITEMS', payload: { index } })
    }
    const Item = (index) => {
        dispatch({
            type: 'ITEM',
            payload: { index }
        })
    }
    return {
        state,
        addToCart,
        deleteItem,
        Item
    }


}

export default useApi;
