import {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from './AuthProvider.jsx';

const PrivateRoute = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext);

    if (!isLoggedIn) {
        return <Navigate to ="/login" />;
    }
    else {
        return children;
    }
    
}

export default PrivateRoute;