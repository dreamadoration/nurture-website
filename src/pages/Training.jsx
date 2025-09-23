import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Video,
  Users,
  Calendar,
  Globe,
  CheckCircle,
  Monitor,
  MessageCircle,
  Clock,
} from "lucide-react"


export default function TrainingModePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
       <section className="relative  h-[40vh] md:h-[50vh] bg-gradient-to-br from-[#003366] via-[#004080] to-[#0059b3] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 font-rubik text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 text-sm font-medium bg-white/20 text-white border border-white/30 px-4 py-1 rounded-full">
           Live Interactive Training
          </Badge>
          <h1 className="text-4xl font-heebo md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
            Training Mode
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-rubik text-white/90 leading-relaxed">
            Experience real-time, interactive learning through live video sessions that combine convenience with engagement
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Intro Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
    
            <div className="relative">
              <img
                src="https://img.freepik.com/free-photo/teenage-girl-using-laptop-online-school_23-2148827432.jpg?semt=ais_hybrid&w=740"
                alt="Online Training Session"
                width={600}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg border-[#f9f9f9] shadow-lg p-4 border">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-sm font-rubik">Live Session Active</span>
                </div>
              </div>
            </div>
                    <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6  font-heebo">
                Live, Interactive Video Training
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-rubik">
                At My Nurture, we deliver all our training sessions through live,
                interactive video meetings using platforms like Google Meet or
                Microsoft Teams. Our approach combines convenience with
                engagement—allowing your team to learn in real time, ask
                questions, and actively participate, just like in a physical
                classroom.
              </p>
              <div className="flex flex-wrap font-rubik items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-blue-800" />
                  <span className="font-medium">Live Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-800" />
                  <span className="font-medium">Interactive Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-800" />
                  <span className="font-medium">Remote Access</span>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Benefits Section */}
          <section className="bg-gray-50 rounded-2xl py-20">
  <div className="p-8 max-w-7xl mx-auto px-4 md:p-12">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-heebo font-bold mb-8">What to Expect</h2>
        <div className="space-y-6">
          {[
            {
              icon: Monitor,
              title: "Live Instructor-Led Sessions",
              desc: "Delivered in real-time, enabling two-way interaction between trainers and participants",
            },
            {
              icon: Video,
              title: "Google Meet / Microsoft Teams",
              desc: "Easy access through trusted platforms—just click and join",
            },
            {
              icon: Calendar,
              title: "Onboarding & Meeting Links",
              desc: "Meeting links shared via email with all enrolled members in advance",
            },
            {
              icon: Globe,
              title: "Flexible & Remote-Friendly",
              desc: "Participants can join from anywhere—perfect for distributed teams",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              {/* Icon */}
              <item.icon className="w-6 h-6 text-blue-800 mt-0.5 flex-shrink-0" />

              {/* Text */}
              <div>
                <h4 className="font-semibold mb-1 font-heebo">{item.title}</h4>
                <p className="text-gray-600 font-rubik">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image with Badges */}
      <div className="relative">
        <img
          src="https://img.freepik.com/free-photo/team-meeting-online-conference-call-laptop_23-2148890424.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Interactive Training Benefits"
          width={500}
          height={400}
          className="rounded-lg shadow-lg"
        />

        {/* Live Q&A Badge */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-blue-800" />
            <span className="text-sm font-medium font-heebo">Live Q&A</span>
          </div>
        </div>

        {/* Session Time Badge */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-800" />
            <span className="text-sm font-medium font-heebo">2-4 Hour Sessions</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

          {/* CTA Section */}
          <section className="bg-blue-900 py-18 text-white">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-heebo font-bold mb-6">
              Ready to Experience Interactive Learning?
            </h2>
            <p className="text-lg  mb-8 max-w-2xl  font-rubik mx-auto">
              This online training mode ensures maximum involvement and fosters
              a collaborative learning environment tailored for professional
              growth.
            </p>
            <div className="flex flex-col sm:flex-row font-heebo gap-4 justify-center">
              <Button className="bg-white hover:bg-blue-700 hover:text-white rounded-[8px] py-2 cursor-pointer text-blue-900 font-semibold">
                Schedule Your Training
              </Button>
            </div>
          </div>
          </section>
        
      </section>
    </div>
  )
}
