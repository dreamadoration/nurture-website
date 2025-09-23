import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative  h-[50vh] md:h-[60vh] bg-gradient-to-br from-[#003366] via-[#004080] to-[#0059b3] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 font-rubik text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 text-sm font-medium bg-white/20 text-white border border-white/30 px-4 py-1 rounded-full">
            Let's Connect
          </Badge>
          <h1 className="text-4xl font-heebo md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
            Meeting all your pharma training needs
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-rubik text-white/90 leading-relaxed">
            We provide online training tailored for pharmaceutical companies, delivered by top
            industry experts and designed to ensure effective, practical learning.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
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
                <p className="font-rubik text-muted-foreground">123 Pharma Excellence Drive</p>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-heebo">Call Us</h3>
                <p className="text-xl font-bold font-rubik">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-heebo">Email Us</h3>
                <p className="font-rubik text-lg">info@nurture-pharma.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Map (Full Width Section) */}
      <section className="w-full">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left - Form with Blue BG */}
          <div className="bg-gradient-to-br from-blue-900 to-cyan-800 flex items-center">
            <div className="w-full max-w-xl mx-auto px-6 py-16 text-white">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-blue-100 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <Input id="name" placeholder="Your Name *" className="h-12 bg-white text-black border-[#ddd]" />
                <Input id="email" type="email" placeholder="Your Email *" className="h-12 bg-white border-[#ddd] text-black" />
                <Input id="subject" placeholder="Subject *" className="h-12 bg-white text-black border-[#ddd]" />
                <Textarea id="message" rows={5} placeholder="Your Message *" className="bg-white text-black border-[#ddd]" />
                <Button size="lg" className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Right - Map */}
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635959542834!5m2!1sen!2sus"
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
  )
}
