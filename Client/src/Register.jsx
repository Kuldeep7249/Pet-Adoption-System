import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`${process.env.REACT_APP_API_URL}/user/register`, { name, email, password })
            .then(result => {
                console.log(result.message);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/');
                } else {
                    alert("Registered successfully! Please Login to proceed.");
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    };
    return (
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center" style={{ backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}>
            <div className="bg-white p-4 rounded shadow" style={{ width: '100%', maxWidth: '400px' }}>
                
                <h2 className="mb-4 text-center text-primary">Register as Pet Parent</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label htmlFor="name" className="form-label"><strong>Name</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter your name"
                            onChange={(event) => setName(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="email" className="form-label"><strong>Email Address</strong></label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter email"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter password"
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register As Pet Parent</button>
                </form>

                <div className="text-center mt-3">
                    <p className="mb-2">Already have an account?</p>
                    <Link to='/' className="btn btn-outline-secondary w-100">Login As Pet Parent</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
