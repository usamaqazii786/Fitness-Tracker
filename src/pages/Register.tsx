import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dumbbell } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useFormik } from "formik";
import * as Yup from "yup";
import AOS from 'aos';
import 'aos/dist/aos.css';
import VideoHero from '../asset/img/exercises.jpg'

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

     useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 900,
          easing: 'ease-in-sine',
          delay: 100,
        });
      }, []);

  // Formik setup with validation schema
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setError(""); // Clear any previous errors
      try {
        let result = await fetch("http://localhost:5000/register", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (result.status === 403) {
          setError("Forbidden: Token missing or invalid");
        } else if (result.ok) {
          const response = await result.json();
          localStorage.setItem("users", JSON.stringify(response.result));
          localStorage.setItem("token", JSON.stringify(response.auth));
          navigate("/");
        } else {
          setError("Registration failed. Please try again.");
        }
      } catch (err) {
        setError(err,"An error occurred during registration. Please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
  <div className="landing-page">
      <div className="flex items-center justify-center h-screen px-4 py-12 bg-gray-100 sm:px-6 lg:px-8 landing-header">
      <img src={VideoHero} alt="abc" id="landing-video"  />
      <div className="w-full max-w-md p-5 space-y-8 bg-white rounded shadow landing-content"  data-aos="flip-right">
        <div data-aos="flip-up">
          <div className="flex justify-center">
            <Dumbbell className="w-12 h-12 text-indigo-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Create your account
          </h2>
        </div>
        {error && (
        <div
          className="relative px-4 py-3 mt-4 text-red-700 bg-red-100 border border-red-400 rounded"
          role="alert"
        >
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Full Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="mt-1 text-sm text-red-600">{formik.errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {formik.errors.password}
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white ${
              loading ? "bg-gray-400" : "bg-indigo-600"
            } border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </div>

        <div className="text-sm text-center">
          <Link
            to="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Already have an account? Sign in
          </Link>
        </div>
      </form>
      </div>
    </div>
  </div>
  );
}