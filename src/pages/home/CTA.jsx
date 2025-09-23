import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-16 left-16 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-16 right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left: Heading + Subheading */}
          <div className="lg:col-span-2 text-left">
       <h2 className="text-5xl lg:text-5xl font-heebo font-extrabold text-white leading-tight">
Meeting all your pharma training needs
            </h2>
            <p className="text-lg text-blue-200 mt-3">
              We provide online training tailored for pharmaceutical companies, delivered by top
industry experts and designed to ensure effective, practical learning.
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="flex lg:justify-end justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 
                         text-white font-bold px-10 py-5 text-lg rounded-xl 
                         shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              Contact Us
              <Phone className="ml-3 w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
