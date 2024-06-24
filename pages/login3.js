import React from 'react';

const Login3 = () => {
    return (
        <div className="bg-blue-500 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter password"
                        />
                    </div>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-gray-700">Remember me</label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                    >
                        Submit
                    </button>
                    <div className="text-right mt-4">
                        <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login3;
