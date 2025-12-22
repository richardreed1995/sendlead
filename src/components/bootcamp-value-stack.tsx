import { CheckCircle, Clock, FileText, Video, Bot, Users } from "lucide-react";

export default function BootcampValueStack() {
  const valueItems = [
    {
      title: "30-Minute Consultation Call",
      description: "Personal strategy session to customise the bootcamp to your specific business needs",
      icon: Clock
    },
    {
      title: "Daily Templates & Worksheets",
      description: "Ready-to-use templates for each day of the bootcamp to accelerate your implementation",
      icon: FileText
    },
    {
      title: "Video Training Library",
      description: "Comprehensive video library with step-by-step tutorials for every strategy",
      icon: Video
    },
    {
      title: "Custom GPTs",
      description: "AI-powered tools specifically designed to speed up your implementation time",
      icon: Bot
    },
    {
      title: "Private Community Access",
      description: "Join our exclusive community of successful finance brokers for ongoing support",
      icon: Users
    },
    {
      title: "Instant Access & Updates",
      description: "Get immediate access to all materials and receive updates as we improve the system",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative z-10 mx-auto max-w-xl space-y-4 text-center md:space-y-8 mb-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Everything You Get in This Bootcamp</h2>
          <p className="text-muted-foreground text-base md:text-lg">A complete system for finance brokers</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <IconComponent className="h-8 w-8 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
