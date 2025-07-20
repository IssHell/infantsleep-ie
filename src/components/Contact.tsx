import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@sleepsolutions.com',
      link: 'mailto:hello@sleepsolutions.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '(555) 123-4567',
      link: 'tel:5551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Virtual Consultations Available',
      link: null
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri: 9AM-6PM',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your family's sleep? Let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First Name" className="border-gray-300 focus:border-purple-500" />
                <Input placeholder="Last Name" className="border-gray-300 focus:border-purple-500" />
              </div>
              <Input placeholder="Email Address" type="email" className="border-gray-300 focus:border-purple-500" />
              <Input placeholder="Phone Number" type="tel" className="border-gray-300 focus:border-purple-500" />
              <Textarea 
                placeholder="Tell us about your sleep challenges..." 
                rows={4} 
                className="border-gray-300 focus:border-purple-500"
              />
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Let's Connect
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm here to help your family achieve the peaceful sleep you deserve. Reach out today to schedule your free consultation.
              </p>
            </div>
            
            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const content = info.link ? (
                  <a href={info.link} className="text-purple-600 hover:text-purple-700 transition-colors">
                    {info.content}
                  </a>
                ) : (
                  <span className="text-gray-700">{info.content}</span>
                );
                
                return (
                  <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">{info.title}</div>
                        <div>{content}</div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;