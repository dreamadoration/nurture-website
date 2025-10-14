import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import { validateSchema } from "@/helper/Validation"
import LoaderData from "@/helper/Loader"
import { toast } from "react-toastify"

export default function Contact() {
   const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
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
    subject: [{ type: "required" }],
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
      const response = await fetch(window.Configs.contact_API, {
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

      setFormData({ name: "", email: "", subject: "", message: "" });

      // ✅ Toast message
      toast.success("Message sent successfully!", { position: "top-center" });
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

    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[50vh] bg-gradient-to-br from-[#003366] via-[#004080] to-[#0059b3] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 font-rubik text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-4 md:mb-6 text-sm font-medium bg-white/20 text-white border border-white/30 px-4 py-1 rounded-[6px]">
            Let's Connect
          </Badge>
          <h1 className="text-4xl font-heebo md:text-6xl font-extrabold mb-2 md:mb-6 text-white drop-shadow-lg">
            Meeting all your pharma training needs
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-rubik text-white/90 leading-relaxed">
            We provide online training tailored for pharmaceutical companies, delivered by top
            industry experts and designed to ensure effective, practical learning.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-10 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reach out to us via phone, email, or visit our office. We’re here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Address */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-heebo">Visit Us</h3>
                <p className="font-rubik text-muted-foreground"> 701 ARS SIGNATURE HOMES SARJAPUR
BENGALURU- 562125</p>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-heebo">Call Us</h3>
                <p className="text-xl font-rubik"><a href="tel:9711303396">9711303396</a></p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-heebo">Email Us</h3>
                <p className="font-rubik text-lg"><a href="mailto:support@nurtureorg.com">support@nurtureorg.com</a></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="w-full">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left - Form with Blue BG */}
          <div className="bg-gradient-to-br from-blue-900 to-cyan-800 flex items-center">
            <div className="w-full max-w-xl mx-auto px-6 py-16 text-white">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-blue-100 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-5" onSubmit={handleForm}>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name *"
                   value={formData.name}
                    required
                   onChange={handleChange}
                  className="h-12 bg-white/95 text-black border border-gray-300 rounded-[6px] px-4 shadow-sm focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400 transition-all"
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email *"
                   value={formData.email}
                    required
                   onChange={handleChange}
                  className="h-12 bg-white/95 text-black border border-gray-300 rounded-[6px] px-4 shadow-sm focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400 transition-all"
                />
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject *"
                  onChange={handleChange}
                   value={formData.subject}
                    required
                  className="h-12 bg-white/95 text-black border border-gray-300 rounded-[6px] px-4 shadow-sm focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400 transition-all"
                />
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your Message *"
                   value={formData.message}
                   onChange={handleChange}
                  className="bg-white/95 text-black border border-gray-300 rounded-[6px] px-4 py-3 shadow-sm ffocus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400 transition-all"
                />
                <Button
                  size="lg"
                  type= "submit"
                  className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-[6px] py-6 text-lg transition-all shadow-lg hover:shadow-xl focus-visible:outline-0 focus-visible:ring-0 focus:border-gray-400"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Right - Map */}
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.658962624548!2d77.772228574545!3d12.865290017201188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae73bc62440c9d%3A0x757572f2918546e4!2sARS%20Signature%20Homes%20Phase%201!5e0!3m2!1sen!2sin!4v1760419831090!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
        </>
  )
}
