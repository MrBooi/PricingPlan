import React, { createContext, useReducer } from 'react';
import AppReducer from '../reducer/AppReducer'

// Initial state 
const initialState = {
    priceList: [
        {
            "id": "keytindjoopmsphbsfns",
            "price_plan": "Bronze",
            "decription": "Single Download",
            "offers": [
                "All items included",
                "1500 x 1000 px download",
                "No watermark in download",
                " Access to Premade Scenes ",
                " Never expires"
            ],
            "price": "R180.00",
        },
        {
            "id": "ghotindjoopmsphbsfns",
            "price_plan": "Silver",
            "decription": "4 Donwloads",
            "offers": [
                "All items included",
                "5184 x 3456 px download",
                " No watermarks — at all",
                " Access to Premade Scenes ",
                " Etsy integration"
            ],
            "price": "R250.00",
        },
        {
            "id": "boctindjoopmsphbsyhkp",
            "price_plan": "Gold",
            "decription": " Unlimited Downloads",
            "offers": [
                "Everything from Unlimited",
                "plus: 12 download credits for our area",
                " PSD Resources($134 value)",
                " 2 months extra included",

                "Discounted price($5.75/ mo)"
            ],
            "price": "R479.99",
        }
    ],
    subscribe_id =""
};

// Create context 
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions 
    function fetchPriceList() {
        dispatch({
            type: 'FETCH',
            payload: state.priceList
        });
    }

    function subscribe(id) {
        dispatch({
            type: 'SUBSCRIBE',
            payload: state.priceList

        })
    }


    return (
        <GlobalContext.Provider value={{
            priceList: state.priceList,
            fetchPriceList,
            subscribe
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

