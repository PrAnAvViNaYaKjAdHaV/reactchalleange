import { createContext, useReducer } from 'react';

export const AuthContext = createContext()



const reducer = (state, action) => {
    switch (action.type) {
        case 'Login':
            return { userAuth: action.payload };
        case 'Logout':
            return { userAuth: action.payload };
    }
}


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, { userAuth: null });

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
