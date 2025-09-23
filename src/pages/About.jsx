import { Badge } from "@/components/ui/badge"
import { Heart, Lightbulb, Target, Users } from "lucide-react"
import memberImage from  "../assets/images/about-image.png"
import existImage from  "../assets/images/whyWeexist.jpg"
import CTA from "./home/CTA"

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh]  bg-gradient-to-br from-[#003366] via-[#004080] to-[#0059b3] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 px-8"></div>
        <div className="relative z-10 font-rubik text-center max-w-4xl mx-auto px-10">
          <Badge className="mb-6 text-xs sm:text-sm md:text-base font-medium bg-white/20 text-white border border-white/30 px-3 sm:px-4 py-1 rounded-full text-center break-words max-w-full">
  We exist to spark change, empower minds, and build excellence
</Badge>

          <h1 className="text-4xl font-heebo md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
            Transforming Lives Through Learning
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-rubik text-white/90 leading-relaxed">
            Your Partner in Pharma Excellence – Driving success through specialized training, 
            strategic consulting, and innovative solutions.
          </p>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#0059b3]/10 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#0059b3]" />
              </div>
              <h2 className="text-3xl font-heebo font-bold">A Note from our Founder</h2>
            </div>
            <blockquote className="text-lg italic font-rubik border-l-4 border-[#0059b3] pl-6 text-gray-700 leading-relaxed">
              “We envision a world where anyone, anywhere has the power to transform their lives through learning.
              Trust Nurture to deliver a worry-free training experience that drives lasting results for your organization.”
            </blockquote>
            <p className="text-gray-700 leading-relaxed font-rubik">
              <span className="font-semibold text-slate-700">At Nurture, growth is most powerful when it’s intentional.</span> 
              That’s why we offer tailored online training solutions designed not just to meet checkboxes, but to truly empower teams.
            </p>
            <p className="text-gray-700 leading-relaxed font-rubik">
              Whether through our core offerings or fully customized programs, our mission is to deliver impactful, results-driven training.
            </p>
            <div className="pt-2">
              <p className="font-semibold text-lg text-[#0059b3] font-heebo">– MOHD IMRAN KHAN</p>
              <p className="text-sm text-gray-500 font-rubik">Founder & CEO, Nurture</p>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={memberImage}
                alt="Mohd Imran Khan - Founder of Nurture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 font-heebo">Our Vision</h2>
          <p className="text-gray-600 max-w-3xl font-rubik mx-auto mb-12">
            We envision a world where anyone, anywhere has the power to transform their lives through learning.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
              <Lightbulb className="w-full h-10 text-yellow-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 font-heebo">Innovation</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-rubik">
                Learning is the engine of progress, sparking ideas that drive industries forward.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
              <Users className="w-full h-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 font-heebo">Collaboration</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-rubik">
                Knowledge unites people, creating opportunities for communities to thrive.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center shadow-sm hover:shadow-md transition">
              <Target className="w-full h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 font-heebo">Impact</h3>
              <p className="text-gray-600 text-sm leading-relaxed font-rubik">
                Every lesson learned opens doors, reshapes lives, and builds stronger societies.
              </p>
            </div>
          </div>
          <p className="italic text-xl text-[#0059b3] font-medium mt-10">
            “When we learn, we grow. And when we grow, we move forward — together.”
          </p>
        </div>
      </section>

      {/* Why We Exist */}
       <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-1">
              {/* <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-600 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-200 rounded-full"></div> */}
              <img
                src={existImage}
                alt="Pharmaceutical professionals in training"
                className="relative z-10 w-full h-[440px] object-cover rounded-xl shadow-xl "
              />
            </div>
            <div className="space-y-6 lg:order-2">
              <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
               <Lightbulb className="w-6 h-6 yellow-400" />
              </div>
                <h2 className="text-3xl font-heebo font-bold text-foreground">Why We Exist</h2>
              </div>
              <div className="space-y-6 font-rubik">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <p className="text-base text-foreground leading-relaxed">
                    Founded by a team of seasoned professionals with extensive experience in the pharmaceutical sector,
                    NURTURE was created to bridge the gap between industry challenges and effective solutions.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <p className="text-base text-foreground leading-relaxed">
                    With a deep understanding of the complexities of the pharmaceutical landscape, we realized that
                    continuous learning and expert guidance are key to driving progress. Our goal is to empower
                    pharmaceutical professionals, organizations, and teams to thrive in an ever-evolving industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  )
}
