import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Heart,
  Target,
  Zap,
  BookOpen,
  Award,
  BarChart3,
  Lightbulb,
  Rocket,
  CheckCircle,
  Users,
  ArrowRight,
  Phone,
} from "lucide-react"
import CTA from "./home/CTA"


export default function NurtureBusiness() {


    const cardData = [
  {
    title: "High-Quality Content",
    icon: Award,
    description:
      "Save on training costs with tailored content and industry-recognized mentors",
    items: [
      "Learn directly from the best from the Industry",
      "Use curated academies for upskilling needs",
      "Balance workplace skills and technical skills training",
    ],
  },
  {
    title: "Improve ROI",
    icon: TrendingUp,
    description: "Get the most from your training programs",
    items: [
      "Offer employees real-time guidance and tailored suggestions",
      "Easily create custom courses that include company-specific content",
    ],
  },
  {
    title: "Engage Employees",
    icon: Heart,
    description:
      "Engage, retain, develop and promote continuous learning to boost employee engagement",
    items: [
      "Invest in employee advancement",
      "Speed up learning with support from our Coach",
      "Help employees earn recognized career credentials",
    ],
  },
  {
    title: "Explore Targeted Learning",
    icon: Target,
    description: "Ready to lead your company through change?",
    items: [
      "Accelerate your digital transformation",
      "Improve your company's agility",
      "Boost employee productivity and innovation",
      "Equip employees to drive growth",
    ],
  },
]


  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
            <section className="relative  h-[40vh] md:h-[50vh] bg-gradient-to-br from-[#003366] via-[#004080] to-[#0059b3] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 font-rubik text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 text-sm font-medium bg-white/20 text-white border border-white/30 px-4 py-1 rounded-full">
           Enterprise Solutions
          </Badge>
          <h1 className="text-4xl font-heebo md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
            Nurture for Business
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-rubik text-white/90 leading-relaxed">
            The transformative skill development solution for empowering your teams with the high-impact skills that
            drive innovation, competitiveness, and growth.
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">With Nurture for Business, you can:</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your workforce with cutting-edge training solutions designed for the pharmaceutical industry
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl p-0 transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert-Curated Programs</h3>
                <p className="text-muted-foreground">
                  Provide transformative learning with expert-curated, learning programs designed for maximum impact.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl p-0 transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Hands-On Learning</h3>
                <p className="text-muted-foreground">
                  Enable hands-on learning experiences to drive rapid skill acquisition and practical application.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-2xl p-0 transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Track & Measure</h3>
                <p className="text-muted-foreground">
                  Track and measure skill development and benchmark proficiency against industry peers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Empower Your Talent */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
             Transforming Talent into Business Impact
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div className="space-y-4">
              {[
                "Train teams with respected industry experts",
                "Enrich learning solutions with tailored paths",
                "Boost employee engagement with globally recognized mentors",
                "Customize scalable learning solutions efficiently",
                "Upskill effectively with content made and verified by learning and development experts",
                "Cut through content chaos with clear learning paths",
                "Foster a learning culture with flexible, engaging content",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-[10px] bg-blue-100 hover:bg-blue-200 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-blue-900 flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://industrie.rstheme.com/laboratory/wp-content/uploads/2024/03/project_02.jpg"
                  alt="Pharmaceutical professionals in training session"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-[#ddd]">
                <div className="text-2xl font-bold text-blue-900 font-rubik">95%</div>
                <div className="text-sm text-muted-foreground font-heebo">Success Rate</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-[#ddd]">
                <div className="text-2xl font-bold text-blue-900 font-rubik">50K+</div>
                <div className="text-sm font-heebo text-muted-foreground">Trained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-heebo">Everything You Need to Succeed</h2>
          </div>
         <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8">
      {cardData.map((card, index) => {
        const Icon = card.icon
        return (
          <Card
            key={index}
            className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${
              card.title === "Explore Targeted Learning"
                ? "lg:col-span-2 xl:col-span-1"
                : ""
            }`}
          >
            <CardContent className="p-8">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-cyan-600 rounded-[10px] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heebo">{card.title}</h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 font-rubik text-lg">
                {card.description}
              </p>

              {/* Items */}
              <div className="grid grid-cols-1 gap-4 font-heebo">
                {card.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-blue-100 rounded-[10px] hover:bg-blue-200 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-900" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
      
        </div>
      </section>

      {/* Accelerate Team Performance - Separate Blue Section */}
  <section className="py-18 bg-blue-900 text-white">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6 font-heebo">Accelerate Team Performance</h2>
      <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 font-rubik">
        Help employees master new skills and reach their goals with access to world-class learning programs from
        Nurture for Teams.
      </p>

      {/* Centered Button */}
      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-gradient-to-r cursor-pointer from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 
                     text-white font-bold px-10 py-5 text-lg rounded-xl 
                     shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center"
        >
          Start a Free Demo
          <ArrowRight className="ml-3 w-6 h-6" />
        </Button>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}
