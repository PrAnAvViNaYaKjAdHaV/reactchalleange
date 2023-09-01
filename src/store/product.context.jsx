import { createContext, useReducer } from 'react';

export const ProductContext = createContext()



const reducer = (state, action) => {
    switch (action.type) {
        case 'products':
            return { products: action.payload };
    }
}


export const ProductContexttProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { products: null });

    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    )
}
