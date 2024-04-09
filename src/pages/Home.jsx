import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <Link
          className="rounded-md bg-primary-clr-indigo px-3 py-2 text-white"
          to="/dashboard"
        >
          Go to Dashboard
        </Link>
      </div>
    </>
  );
};

export default Home;
