import React from 'react';
import Link from "next/link";

const ErrorState = () => {
    return (
        <div
            className="bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center min-h-screen text-gray-200">
            <h2 className="text-2xl font-semibold">Error while fetching data</h2>
            <p className="mt-2 text-center text-gray-300">
                Check your internet connection or try again later
            </p>
            <Link href="/" className="mt-5 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all">
                Back to home
            </Link>
        </div>
    );
};

export default ErrorState;