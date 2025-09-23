
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, Lightbulb, Users, Heart } from "lucide-react"

export default function ValuesPage() {
  const coreValues = [
    {
      icon: CheckCircle,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards in all our interactions, ensuring transparency and honesty in every aspect of our work.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, continuously improving our services and exceeding expectations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace innovative approaches and cutting-edge methodologies to deliver the most effective training solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of collaboration, working closely with our clients to achieve shared goals and mutual success.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
            <section className="relative  h-[40vh] md:h-[50vh] bg-gradient-to-br from-[#003366] via-[#004080] to-[#0059b3] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 text-sm font-heebo font-medium bg-white/20 text-white border border-white/30 px-4 py-1 rounded-full">
            We exist to spark change, empower minds, and build excellence
          </Badge>
          <h1 className="text-4xl md:text-6xl font-heebo font-extrabold mb-6 text-white drop-shadow-lg">
            Our Values & Mission
          </h1>
          <p className="text-lg md:text-xl font-rubik max-w-3xl mx-auto text-white/90 leading-relaxed">
            Guiding principles that drive our commitment to pharmaceutical excellence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heebo text-foreground mb-6">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground font-rubik leading-relaxed">
                Our mission is to deliver exceptional training and consulting services that drive measurable results for
                pharmaceutical companies and professionals with the skills, knowledge, and confidence they need to
                succeed in the pharmaceutical industry. We aim to make a tangible difference in the careers of our
                trainees and in the quality of healthcare by producing competent, ethical, and professional experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heebo mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground font-rubik max-w-2xl mx-auto">
              We foster a culture that is consistent with our mission. We bring that integrity to our products,
              customers, work environment, and the community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-200 rounded-[10px] flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-xl font-semibold font-heebo text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground font-rubik leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold font-heebo">Social Impact</h2>
          </div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-rubik text-balance">
            Nurture is on a mission to forge futures in pharma.
          </p>
        </div>
      </section>
    </div>
  )
}
