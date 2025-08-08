import {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from './AuthProvider.jsx';

const PublicRoute = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext);

    if (isLoggedIn) {
        return <Navigate to ="/dashboard" />;
    }
    else {
        return children;
    }
    
}

export default PublicRoute;