import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [Loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegistration = async (e) => {
        setLoading(true);

        e.preventDefault();
        if (password.length < 8) {
            alert("Password mus be at least 8 characters long");
            setLoading(false);
            return;
        }

        if (password !== confirmPassword){
            alert("Passwords do not match");
            setLoading(false);
            return;
        }


        const userData = {
            username, email, password
        }

        try{
        const response = await axios.post('http://127.0.0.1:8000/api/v1/register/', userData)
        console.log("User Registered", response.data)
        navigate('/login');
        }
        catch(error){
            console.error("There was an error registering the user", error.response.data)
            if (error.response && error.response.status === 400) {
                const errors = error.response.data;
                if (errors.username) {
                    alert('Username Already Exists');
                }
                if (errors.email) {
                    alert('Email Already Exists');
                }     
        
        }} finally {
            setLoading(false);
        }

    }

    return (



            
        <>
            <div className  = 'container mt-5'>
                <div className = "row">
                    <div className = "col-md-6 offset-md-3 light-dark p-5 rounded">
                        <h1 className = 'text-center'> Create Account </h1>

                        <form onSubmit = {handleRegistration}>
                            <input type = 'text' className = 'form-control my-2' placeholder = "Username" value = {username} onChange={(e) => setUsername(e.target.value)}/>
                            <input type = 'email' className = 'form-control my-2' placeholder = "Email" value = {email} onChange={(e) => setEmail(e.target.value)}/>
                            <input type = 'password' className = 'form-control my-2' placeholder = "Password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
                            <input type = 'password' className = 'form-control my-2' placeholder = "Confirm Password" value = {confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                            {Loading ? (
                                <button className = 'btn btn-info w-100 d-block' type = 'submit' disabled > Please wait... </button>
                            ): (
                                <button className = 'btn btn-info w-100 d-block' type = 'submit'> Register </button>
                            )                        
                            }
                            

                        </form>

                    </div>
                </div>
            </div>
        </>

    )

}

export default Register