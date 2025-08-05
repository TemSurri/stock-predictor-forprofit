import React, {useState, useContext} from 'react';


const AuthContext = React.createContext();

const AuthProvider = ({children}) => {


    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("accessToken") ? true : false
    );
    return (
        <AuthContext.Provider value = {{isLoggedIn, setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>

    )

}

export default AuthProvider;
export {AuthContext};