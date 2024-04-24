import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export default function AuthContextProvider ({ children })  {
    const [authentication, setAuthentication] = useState({
        isAuth: false,
        loading: false,
        error: null,
        token: ""
    });

    return (
        <AuthContext.Provider value={{ authentication, setAuthentication }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
