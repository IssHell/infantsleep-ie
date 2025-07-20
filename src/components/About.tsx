import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Families Helped' },
    { icon: Award, number: '98%', label: 'Success Rate' },
    { icon: Clock, number: '5+', label: 'Years Experience' },
    { icon: Heart, number: '100%', label: 'Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-warm-50 to-warm-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-warm-600 to-warm-800 bg-clip-text text-transparent mb-6">
              About Ella Grace
            </h2>
            <p className="text-xl text-warm-700 max-w-3xl mx-auto leading-relaxed">
              Certified sleep consultant dedicated to helping families achieve peaceful, restorative sleep through gentle, evidence-based methods.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-warm-800">
                Transforming Sleep, One Family at a Time
              </h3>
              <p className="text-warm-700 text-lg leading-relaxed">
                With over 5 years of experience and advanced certifications in pediatric sleep consulting, I specialize in creating personalized sleep solutions that work for your unique family situation.
              </p>
              <div className="space-y-3">
                <Badge className="bg-warm-100 text-warm-700 hover:bg-warm-200 text-sm px-3 py-1">
                  Certified Pediatric Sleep Consultant
                </Badge>
                <br />
                <Badge className="bg-warm-200 text-warm-800 hover:bg-warm-300 text-sm px-3 py-1">
                  Gentle Sleep Training Specialist
                </Badge>
                <br />
                <Badge className="bg-warm-300 text-warm-900 hover:bg-warm-400 text-sm px-3 py-1">
                  Family Sleep Coach
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-warm-200 to-warm-300 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-warm-800">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <Heart className="w-12 h-12 text-warm-600" />
                  </div>
                  <p className="text-lg font-medium">Professional Photo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-warm-100 to-warm-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-warm-600" />
                    </div>
                    <div className="text-3xl font-bold text-warm-800 mb-2">{stat.number}</div>
                    <div className="text-warm-700 font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;