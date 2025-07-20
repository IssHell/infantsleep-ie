import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services: React.FC = () => {
  const services = [
    {
      title: "Newborn Sleep Support",
      description: "Gentle guidance for establishing healthy sleep patterns from day one",
      price: "From $299",
      features: ["0-4 months", "Gentle methods", "Family support"]
    },
    {
      title: "Infant Sleep Training",
      description: "Customized sleep solutions for babies 4-12 months",
      price: "From $399",
      features: ["4-12 months", "Personalized plan", "Follow-up support"]
    },
    {
      title: "Toddler Sleep Solutions",
      description: "Addressing sleep challenges for growing toddlers",
      price: "From $349",
      features: ["12+ months", "Behavioral support", "Parent coaching"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-warm-600 to-warm-800 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-warm-700 max-w-3xl mx-auto">
            Tailored sleep solutions for every stage of your child's development
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-warm-50">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-warm-800 group-hover:text-warm-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-warm-700 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-3xl font-bold text-warm-600">{service.price}</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-warm-100 text-warm-700 hover:bg-warm-200">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;