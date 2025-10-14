import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import { toast } from "react-toastify"
import LoaderData from "@/helper/Loader"
import { validateSchema } from "@/helper/Validation"

export function DemoModal({ open, onOpenChange }) {
   const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company_name: "",
    phone_number: "",
    select_package: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
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
     select_package: [{ type: "required" }],
  };


  const handleSubmit = async(e) => {
    e.preventDefault()
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
        setLoading(false);
        console.log("Success:", data);
       toast.success("Thank you! Your demo request has been submitted successfully.", { position: "top-center" });
        setFormData({
      name: "",
      email: "",
      company_name: "",
      phone_number: "",
      select_package: "",
    })
      } catch (error) {
        console.error("Error:", error);
          setLoading(false);
         toast.error("Something went wrong. Please try again.", {
          position: "top-center",
        });
      }
    finally {
      onOpenChange(false)
    }
  }

  return (
    <>
     <LoaderData show={loading} />
  
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white rounded-2xl shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 font-heebo">
            Request a Demo
          </DialogTitle>
          <DialogDescription className="text-gray-600 font-rubik">
            Fill out the form below and we'll reach out within 24 hours to schedule your personalized demo.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-2">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 font-rubik">Name</Label>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 text-gray-800 focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 font-rubik">Email</Label>
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 text-gray-800 focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400"
              />
            </div>
          </div>

          {/* Phone & Company */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 font-rubik">Phone</Label>
              <Input
                name="phone_number"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone_number}
                onChange={handleChange}
                className="border border-gray-300 text-gray-800 focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 font-rubik">Company</Label>
              <Input
                name="company_name"
                placeholder="Company Name"
                value={formData.company_name}
                onChange={handleChange}
                className="border border-gray-300 text-gray-800 focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400"
              />
            </div>
          </div>

          {/* Package */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 font-rubik">Select Package</Label>
            <select
              name="select_package"
              value={formData.select_package}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-800 bg-white 
                         focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400"
              required
            >
              <option value="">Select a package</option>
              <option value="demo">Demo Package</option>
              <option value="basic">Basic Package</option>
              <option value="intermediate">Intermediate Package</option>
              <option value="advance">Advanced Package</option>
            </select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r cursor-pointer from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500
                       text-white font-semibold text-lg py-6 rounded-[6px] shadow-md hover:shadow-lg
                       transition-all duration-300 flex items-center justify-center gap-2"
          >
            Submit Request
            <ArrowRight className="w-5 h-5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
      </>
  )
}
