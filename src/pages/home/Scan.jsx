import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HowToScan = () => {
  const steps = [
    {
      number: "01",
      title: "Open your UPI or Banking App",
      description:
        "Launch Google Pay, PhonePe, Paytm, or any other UPI-enabled banking application on your smartphone.",
    },
    {
      number: "02",
      title: "Scan the QR code",
      description:
        "Use your app's scanner to scan the QR code displayed below for secure payment processing.",
    },
    {
      number: "03",
      title: "Enter the amount and add your Company Name: [Your Company Name] in the notes.",
      description:
        "Enter the payment amount and add your Company Name: [Your Company Name] in the notes section.",
    },
    {
      number: "04",
      title: "Confirm Payment",
      description:
        "Review all details and confirm the payment to complete your transaction securely.",
    },
  ];

  return (
    <section id="training" className="relative py-10 md:py-20 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://elite-themes.com/html/medicoz/images/icons/pattern-3.png"
          alt="Modern pharmaceutical laboratory"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10 ">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-16">
          <Badge className=" md:w-auto text-sm mb-4 font-heebo md:text-md bg-blue-100 text-blue-800 hover:bg-blue-200">
            Scan QR Code
          </Badge>

          <h2 className="text-4xl md:text-5xl font-heebo font-bold mb-3 md:mb-6 text-gray-900">
            Complete Your Payment{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              in One Scan
            </span>
          </h2>
          <p className="text-lg md:text-xl font-rubik text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Scan the QR code below to complete your payment securely.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* QR Code */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-lg bg-white p-8 text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center border-2 border-dashed border-blue-300">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-sm text-gray-600">QR Code</p>
                  <p className="text-xs text-gray-500 mt-1">Scan to Pay</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-700 mb-2">
                  ✅ <strong>Steps to Pay:</strong>
                </p>
                <p className="text-xs text-gray-500">
                  Secure payment powered by UPI
                </p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="p-6 border-white rounded-[10px] border-l-5 border-l-[#00a8e2] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 text-gray-900">
                      {step.title}
                    </h3>

                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToScan;
