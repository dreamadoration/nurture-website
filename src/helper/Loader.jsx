import React from "react";
import { Loader, Loader2 } from 'lucide-react';
import logo from "../assets/images/logo.png";

const LoaderData = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-[99999]">
      <div className="relative flex items-center justify-center">
        {/* Spinning border icon */}
        <Loader2 className="w-24 h-24 text-blue-700 animate-spin" strokeWidth={1.5} />

        {/* Static logo centered */}
        <img
          src={logo}
          alt="Company Logo"
          className="absolute w-15 h-15 object-contain"
        />
      </div>
    </div>
  );
};

export default LoaderData;
