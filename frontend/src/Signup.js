import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [values, setValues] = useState ({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.values]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded  w-25'>
                <h2>Sign Up</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="repeat password"><strong>Repeat password</strong></label>
                        <input type='password' placeholder='Repeat Password' className='form-control rounded-0'/>
                    </div>
                    <button className='btn btn-success w-100'>Sign up</button>
                    <p>If you already have an account yet</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
