import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Calendar
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_85jrga2', // You'll need to replace with your EmailJS service ID
        'template_p24zpys', // You'll need to replace with your EmailJS template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
          to_email: 'trylooop3@gmail.com'
        },
        'MlDZ-ITH93vUuqhEt' // You'll need to replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "trylooop3@gmail.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "+91 9994920208",
      subtitle: "Mon-Sat, 9 AM - 6 PM "
    },
    
    {
      icon: Clock,
      title: "Office Hours",
      description: "Monday - Friday",
      subtitle: "9:00 AM - 6:00 PM EST"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Get In</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your tech journey? We're here to help you every step of the way. 
            Reach out to us and let's discuss how we can transform your career goals into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medium border-border/50 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center">
                <MessageCircle className="h-6 w-6 text-primary mr-3" />
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 9994920208" 
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of Interest</Label>
                    <Select value={formData.interest} onValueChange={(value) => handleInputChange('interest', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your area of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="c">C</SelectItem>
                        <SelectItem value="cpp">C++</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                        <SelectItem value="java">Java</SelectItem>
                        <SelectItem value="webdev">Web Development</SelectItem>
                        <SelectItem value="ml">Machine Learning</SelectItem>
                        <SelectItem value="ai">Artificial Intelligence</SelectItem>
                        <SelectItem value="uiux">UI/UX</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your goals and how we can help you achieve them..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-all duration-300 group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're always excited to hear from passionate learners and industry professionals. 
                Whether you have questions about our programs or want to discuss partnership opportunities, 
                we're here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-medium transition-all duration-300 border-border/50 hover:border-primary/20"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium">{info.description}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
{/* 
            <div className="bg-gradient-primary/10 rounded-2xl p-8">
              <h4 className="text-xl font-bold mb-4 text-foreground">Quick Actions</h4>
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-primary/5 transition-all duration-300"
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  Schedule a Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-primary/5 transition-all duration-300"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Join Our Community Discord
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start hover:bg-primary/5 transition-all duration-300"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Request a Callback
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;