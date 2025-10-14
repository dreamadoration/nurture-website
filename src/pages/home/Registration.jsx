import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Loader from "@/helper/Loader";
import LoaderData from "@/helper/Loader";
import { validateSchema } from "@/helper/Validation";

export default function Registration() {
   const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    company_name: "",
    select_package: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //Validation function
   const validationSchema = {
    name: [{ type: "required" }],
    email: [
      { type: "required" },
      { type: "email" },
    ],
    phone_number: [
      { type: "required" },
      { type: "phone" },
    ],
    company_name: [{ type: "required" }],
  };

  const handleForm = async (e) => {
    e.preventDefault();
     const errors = validateSchema(validationSchema, formData);
    if (Object.keys(errors).length > 0) {
      const firstError = Object.values(errors)[0];
      toast.error(firstError, { position: "top-center" });
      return;
    }
     setLoading(true);

    try {
      const response = await fetch(window.Configs.registration_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
       setLoading(false);
      toast.success("Registration successful!", { position: "top-center" });
      setFormData({ name: "", email: "", phone_number: "", company_name: "" });
    } catch (error) {
      console.error("Error:", error);
       setLoading(false);
       toast.error("Something went wrong. Please try again.", {
        position: "top-center",
      });
    }
  };

  return (
    <>
     <LoaderData show={loading} />
     
    <section id="registration" className="relative w-full bg-blue-900 text-white">
      <div className="relative w-full py-10 px-6 md:py-20 lg:px-20 flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* LEFT: Heading + Subheading */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-heebo font-extrabold mb-6 leading-snug">
            The Right Solution
            <span className="block text-blue-300 font-rubik">For Your Needs</span>
          </h2>
          <p className="text-lg leading-relaxed font-rubik text-blue-100">
            Empower your team with customized training that fits your goals, culture, and budget.
            Partner with Nurture for a truly personalized, impactful learning experience.
            <span className="block mt-4 text-blue-300 font-bold text-2xl">
              Register for a FREE Demo
            </span>
          </p>
        </div>

        {/* RIGHT: Registration Form */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://industrie.rstheme.com/html/assets/images/bg/contact-bg-03.png')",
              }}
            />
            <div className="absolute inset-0 bg-blue-900/70" />

            {/* Form Content */}
            <div className="relative z-10 p-8">
              <h3 className="text-3xl font-bold mb-6 font-heebo text-center text-white">
                Start Your Journey
              </h3>

              <form className="space-y-6" onSubmit={handleForm}>
                <InputField
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                <InputField
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
                <InputField
                  name="phone_number"
                  type="tel"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                />
                <InputField
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleChange}
                  placeholder="Company Name"
                  required
                />

                <Button
                  type="submit"
                  className="bg-gradient-to-r font-rubik from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500
                             text-white font-semibold cursor-pointer text-lg py-6 px-10 rounded-[6px] shadow-lg 
                             hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 w-full"
                >
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

/* Reusable InputField component */
function InputField({ name, value, onChange, placeholder, type = "text" }) {
  return (
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="w-full bg-transparent border-b border-blue-300 text-white py-2 
      placeholder-white focus:outline-none focus:border-blue-400 
      transition-colors duration-200"
    />
  );
}
