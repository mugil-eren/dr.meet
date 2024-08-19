import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { authContext } from '../context/AuthContext';
import HashLoader from 'react-spinners/HashLoader.js';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:7000/get');

      const users = response.data;

      const userExists = users.some(user => 
        user.email === formData.email && user.password === formData.password
      );

      setLoading(false);

      if (userExists) {
        const user = users.find(user => user.email === formData.email);

        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
            user: user,
            token: 'dummy-token', // you can replace this with actual token if available
            role: user.role
          }
        });

        toast.success('Login successful');
        navigate('/home');
      } else {
        alert('User not present');
      }

    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      toast.error(error.message || 'Failed to login'); // Use error.message if available, or a default message
      setLoading(false);
    }
  };

  return (
    <section className='my-10'>
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello !   <span className='text-primaryColor'> Welcome</span> Back
        </h3>
        <form action="" onSubmit={submitHandler}>
          <div className="mb-5">
            <input
              type="email"
              name="email"
              placeholder='Email'
              onChange={handleInputChange}
              className='w-full px-4 py-3 border-b border0[#0066ff61] focus:outline-none focus:border-b-primaryColor text-base leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
              value={formData.email}
              required
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="password"
              placeholder='Password'
              onChange={handleInputChange}
              className='w-full px-4 py-3 border-b border0[#0066ff61] focus:outline-none focus:border-b-primaryColor text-base leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'
              value={formData.password}
              required
            />
          </div>

          <div className="mt-7">
            <button
              disabled={loading && true}
              type="submit"
              className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'
            >
              {loading ? <HashLoader size={35} color='#fff' /> : "Login"}
            </button>
          </div>

          <p className="mt-5 text-textColor text-center">
            Don't have an account?
            <Link to='/register' className='text-primaryColor font-medium ml-1'>Register</Link>
          </p>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              navigate("/home")
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </form>
      </div>
    </section>
  );
};

export default Login;
