import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Award, BookOpen } from "lucide-react"
import CTA from "./home/CTA"
import member1 from "../assets/images/member1.jpg"
import member2 from "../assets/images/member2.jpg"
import member3 from "../assets/images/member3.jpg"
export default function TeamMember() {
  const teamMembers = [
    {
      name: "Mohd Imran Khan",
      position: "Co-founder & Chief of training Strategy and Client Success",
      image: member1,
      bio: "With over 15 years of experience in pharmaceutical sales and team leadership, Imran co-founded Nurture to bridge the gap between academic learning and real-world performance. A Pharmacy graduate, he’s worked closely with medical reps, doctors, and pharma leaders, giving him deep insight into what it takes to thrive in the industry.",
      bio1: "Imran is passionate about mentorship and practical training, having guided countless early-career professionals. At Nurture, he designs programs that blend real-world challenges with structured learning. Outside of work, he champions continuous learning, ethical selling, and strong human connections - the very principles Nurture is built on."
     
    },
        {
      name: "Noopur Sharma",
      position: "Co-founder & Director – Program Delivery & Pharmacovigilance",
      image: member3,
      bio: "With over 13 years of experience in pharmaceutical sales, marketing, and pharmacovigilance, Noopur blends academic rigor with practical industry insight. A Master’s in Pharmacy, she brings a dynamic, real-world approach to training that connects deeply with learners.",
      bio1: "At Nurture, Noopur leads the design and delivery of programs that prepare pharma professionals for the regulatory and commercial demands of the field. Her passion lies in strengthening knowledge around compliance and pharmacovigilance—critical yet often overlooked areas.",
      bio2: "Energetic, ethical, and execution-driven, she crafts sessions that are interactive, relevant, and grounded in real-life challenges, helping participants build confidence and competence from day one."
     
    },
        {
      name: "Anamika Tripathi",
      position: "Co-founder & Director – Compliance, Quality and Operations",
      image: member2,
      bio: "With 13 years of experience across quality control, teaching, and pharmaceutical sales, Anamika brings a rare 360-degree perspective to pharma training. A Master’s in Pharmacy and current PhD scholar, she combines academic depth with real-world insight.",
      bio1: "At Nurture, she designs programs that bridge classroom theory with industry expectations. Known for her structured thinking and empathetic teaching style, Anamika mentors professionals in compliance, communication, and ethics - skills essential for success in both field and factory roles."
     
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
        <section className="relative  h-[40vh] md:h-[50vh] bg-gradient-to-br from-[#003366] via-[#004080] to-[#0059b3] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 text-sm font-heebo font-medium bg-white/20 text-white border border-white/30 px-4 py-1 rounded-full">
           We are driven by our mission and fuelled by our team
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heebo font-extrabold mb-6 text-white drop-shadow-lg">
           Leadership and Team
          </h1>
          <p className="text-lg md:text-xl font-rubik max-w-3xl mx-auto text-white/90 leading-relaxed">
           A team of pharma and business experts dedicated to empowering professionals for the future workforce
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-10 bg-white">
.
    <div className="space-y-10">
      {teamMembers.map((member, index) => (
        <div className={`${
            index % 2 === 1 ? "bg-gray-50" : ""
          }`}>
        <div
          key={index}
          className={`grid lg:grid-cols-12 gap-10  max-w-7xl mx-auto items-center rounded-2xl p-8 `}
        >
          {/* Image */}
               <div className="lg:col-span-4">
                  <div className="bg-gray-100 rounded-lg p-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full lg:h-64 object-cover rounded-lg mb-2"
                    />
                  </div>
                </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold font-heebo text-gray-900">{member.name}</h3>
                <p className="text-lg font-semibold font-heebo text-blue-900 mb-4">
                  {member.position}
                </p>
                <div className="space-y-4 text-muted-foreground font-rubik leading-relaxed">
                <p>{member.bio}</p>
                 <p >{member?.bio1}</p>
                  {member.bio2 && (<p> {member.bio2} </p>)}
                  </div>
              </div>

            </div>
          </div>
        </div>
        </div>
      ))}
    </div>
</section>


<CTA />
    </div>
  )
}
