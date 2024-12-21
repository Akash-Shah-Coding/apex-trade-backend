import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from 'react-router-dom';
import Loader from "../../common/Loader";
import { useAuth } from "../../hooks/useAuth";


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, user, isAuthLoading } = useAuth();
    const isLoading = useSelector((state) => state.auth.isLoading);
    const navigate = useNavigate();

    // Redirect logged-in users to the home page
    if (user) {
        navigate("/");
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
        login({ email, password });
    };

    if (isLoading || isAuthLoading) {
        return <Loader />; // Show loader while logging in
    }

    return (
        <main className="min-h-screen flex items-center justify-center bg-gray-900">
            <section className="my-5 mt-lg-6 mb-lg-5 w-full max-w-md p-6">
                <div className="text-center mb-6">
                    {/* You can add a logo or title here */}
                </div>
                <div className="bg-gray-800 shadow-lg rounded-lg p-8">
                    <div className="text-center mb-4">
                        <h3 className="text-2xl font-semibold text-white">Sign in to our platform</h3>
                    </div>
                    <form className="space-y-6" onSubmit={handleSignIn}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-200">Your Email</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="example@company.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-200">Your Password</label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FontAwesomeIcon icon={faUnlockAlt} className="text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 border-gray-600 rounded bg-gray-800"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-200">
                                    Remember me
                                </label>
                            </div>
                            <div className="text-sm">
                                <Link to="#" className="font-medium text-indigo-400 hover:text-indigo-300">
                                    Lost password?
                                </Link>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className="mt-6 text-center">
                        <div className="text-gray-400 mb-4">or login with</div>
                        <div className="flex justify-center space-x-4">
                            <button className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </button>
                            <button className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                                <FontAwesomeIcon icon={faTwitter} />
                            </button>
                            <button className="text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                                <FontAwesomeIcon icon={faGithub} />
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <span className="text-gray-400">Not registered? </span>
                        <Link to="/signup" className="text-indigo-400 hover:text-indigo-300">
                            Create account
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default SignIn;
