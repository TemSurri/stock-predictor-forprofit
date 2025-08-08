import React, {useState} from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../AuthProvider.jsx';



const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {isLoggedIn, setIsLoggedIn} = React.useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        const userData = {
            username, password
        }

        try{
            const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh)
            
            setIsLoggedIn(true);
            navigate('/dashboard');
        }catch(error) {
            console.error("Invalid Credentials", error.response.data)
            alert("Invalid Credentials");
        }finally {
            setLoading(false);
        }

    }
    return (
        <>
            <div className  = 'container mt-5'>
                <div className = "row">
                    <div className = "col-md-6 offset-md-3 light-dark p-5 rounded">
                        <h1 className = 'text-center'> Login </h1>

                        <form onSubmit = {handleLogin}>
                            <input type = 'text' className = 'form-control my-2' placeholder = "Username" value = {username} onChange={(e) => setUsername(e.target.value)}/>
                            <input type = 'password' className = 'form-control my-2' placeholder = "Password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
                           
                            {Loading ? (
                                <button className = 'btn btn-info w-100 d-block' type = 'submit' disabled > Please wait... </button>
                            ): (
                                <button className = 'btn btn-info w-100 d-block' type = 'submit'> Login </button>
                            )                        
                            }
                            

                        </form>

                    </div>
                </div>
            </div>
        </>
        
    )

}

export default Login;