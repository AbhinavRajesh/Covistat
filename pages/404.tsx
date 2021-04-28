import { useEffect } from "react";
import Router from "next/router";

const custom404 = () => {
  useEffect(() => {
    Router.push("/");
  }, []);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-white font-semibold text-xl">Invalid Route</h1>
      <p className="text-base text-white font-medium">Redirecting...</p>
    </div>
  );
};

export default custom404;
