import { Badge } from "@/components/ui/badge"

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Industry Expertise",
      description:
      "Our team of experts brings years of hands-on experience in the pharmaceutical industry, ensuring that our solutions are relevant, practical, and impactful."
    },
    {
      title: "Personalized Approach",
      description:
        "Whether you're an individual looking to upskill or a company looking to improve team performance, we create customized programs that address your specific needs. We tailor our training programs to meet the specific needs of each",
    },
    {
      title: "End-to-End Support",
      description:
        "From initial consultation to post-training follow-up, we provide ongoing support to ensure that our clients achieve long-term success.",
    },
    {
      title: "Support Beyond Training",
      description:
        "We provide ongoing guidance support, helping entrepreneur connect with industries best minds and continue their overall development.",
    },
    {
      title: "Integrity",
      description:
        "We believe in fostering trust, honesty, and transparency in everything we do.",
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in both our training programs and the outcomes we achieve for our trainees.",
    },
    {
      title: "Innovation",
      description:
        "We are committed to staying ahead of the curve by continually adapting our training to the latest industry trends and advancements.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in working closely with our clients to understand their unique needs and goals, ensuring personalized and impactful solution.",
    },
  ]

  return (
    <section className="py-8 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
            <Badge className="mb-4 font-heebo text-md bg-blue-100 text-blue-800 hover:bg-blue-200">We don’t just train - we transform</Badge>
           <h2 className="text-4xl md:text-5xl font-heebo font-bold mb-6 text-gray-900">
            Why Choose
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {" "}Us
            </span>
          </h2>
        </div>

        {/* Benefits in Two Columns */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/60 hover:shadow-lg transition-all duration-300 hover:translate-x-1"
            >
              <div
                className="flex-shrink-0 w-10 h-10 text-white bg-gradient-to-br from-blue-700 to-cyan-400 rounded-full flex items-center justify-center font-bold text-sm shadow-lg group-hover:scale-110 transition-transform duration-300"
               
              >
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-bold font-heebo text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 font-rubik leading-relaxed text-md">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
