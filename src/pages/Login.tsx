import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VideoHero from '../asset/img/exercises.jpg'

export default function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

    useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 900,
        easing: 'ease-in-sine',
        delay: 100,
      });
    }, []);

  useEffect(() => {
    const auth = localStorage.getItem('users');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();
        console.log(result, 'result');

        if (result.auth) {
          localStorage.setItem('token', JSON.stringify(result?.auth));
          navigate('/');
        } else {
          setErrors({ password: 'Please enter correct details' });
          setError('Invalid email or password');
        }
      } catch (error) {
        setError(error, 'An error occurred during login. Please try again.');
      } finally {
        setSubmitting(false);
      }
    },
  });

  const { handleSubmit, handleChange, values, touched, errors, isSubmitting } = formik;

  return (
  <div className="landing-page">
      <div className="flex items-center justify-center h-screen px-4 py-12 bg-gray-100 sm:px-6 lg:px-8 landing-header">
         <img src={VideoHero} alt="abc" id="landing-video"  />
      <div className="w-full max-w-md p-5 space-y-8 bg-white rounded shadow landing-content" data-aos="fade-right">
        <div>
          <div className="flex justify-center">
            <Dumbbell className="w-12 h-12 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900" data-aos="flip-down">
            Sign in to your account
          </h2>
        </div>
        {error && (
        <div
          className="relative px-4 py-3 text-red-700 bg-red-100 border border-red-400 rounded"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="-space-y-px rounded-md shadow-sm">
          <div className='mb-3'>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
              value={values.email}
              onChange={handleChange}
            />
            {touched.email && errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          <div className='mt-3'>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {touched.password && errors.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
        </div>

        <div className="text-sm text-center">
          <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Don't have an account? Sign up
          </Link>
        </div>
      </form>
      </div>
    </div>
  </div>
  );
}