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

export function DemoModal({ open, onOpenChange }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    package: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[Demo Request Submitted]", formData)
    onOpenChange(false)

    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      package: "",
      message: "",
    })
  }

  return (
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
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 text-gray-800 focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 mb-2 font-rubik">Company</Label>
              <Input
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="border border-gray-300 text-gray-800 focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400"
              />
            </div>
          </div>

          {/* Package */}
          <div>
            <Label className="text-sm font-medium text-gray-700 mb-2 font-rubik">Select Package</Label>
            <select
              name="package"
              value={formData.package}
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
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500
                       text-white font-semibold text-lg py-6 rounded-[6px] shadow-md hover:shadow-lg
                       transition-all duration-300 flex items-center justify-center gap-2"
          >
            Submit Request
            <ArrowRight className="w-5 h-5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
