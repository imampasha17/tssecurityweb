import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Camera, Lock, CreditCard, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `Location: ${formData.location}\nService: ${formData.service}\n\n${formData.message}`,
          service: formData.service,
          type: 'quote'
        }
      });

      if (error) throw error;

      toast.success("Quote request received! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", location: "", service: "", message: "" });
    } catch (error) {
      console.error('Error sending quote request:', error);
      toast.error("Failed to send request. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get a Free Quote</h1>
            <p className="text-lg opacity-90">
              Tell us about your security needs and we'll provide a customized solution
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Benefits */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Request a Quote?</h2>
                <p className="text-muted-foreground mb-8">
                  Get a personalized security solution tailored to your specific needs and budget.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: CheckCircle,
                    title: "Free Consultation",
                    description: "Expert advice at no cost"
                  },
                  {
                    icon: CheckCircle,
                    title: "Site Survey",
                    description: "On-site assessment included"
                  },
                  {
                    icon: CheckCircle,
                    title: "Custom Solution",
                    description: "Tailored to your requirements"
                  },
                  {
                    icon: CheckCircle,
                    title: "Transparent Pricing",
                    description: "No hidden costs"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-secondary/10 rounded-lg shrink-0">
                      <item.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Services */}
              <div className="grid grid-cols-1 gap-4 pt-8">
                <h3 className="font-semibold mb-2">Our Services:</h3>
                {[
                  { icon: Camera, name: "CCTV Installation" },
                  { icon: CreditCard, name: "Smart Pay Boxes" }
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                    <service.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="animate-scale-in">
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Request Your Quote</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98483 08866"
                      />
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium mb-2">
                        Location *
                      </label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        placeholder="City, Area"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service Needed *
                      </label>
                      <Select onValueChange={handleServiceChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cctv">CCTV Installation</SelectItem>
                          <SelectItem value="paybox">Smart Pay Boxes</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                          <SelectItem value="other">Other / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Additional Details
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your property, number of cameras needed, special requirements, etc."
                        rows={5}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      By submitting this form, you agree to be contacted by our team
                      regarding your security needs.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "How quickly will I receive my quote?",
                  answer: "We typically respond within 24 hours with a preliminary quote. For detailed quotes requiring site visits, we'll schedule a convenient time within 2-3 business days."
                },
                {
                  question: "Is the site survey really free?",
                  answer: "Yes! We provide free site surveys for all quote requests in the Hyderabad area. This helps us understand your needs and provide accurate pricing."
                },
                {
                  question: "Do you offer installation warranty?",
                  answer: "Absolutely. All our installations come with a comprehensive warranty. Equipment warranty varies by manufacturer (typically 1-3 years), and our installation workmanship is guaranteed."
                },
                {
                  question: "Can I customize my security system?",
                  answer: "Yes! Every security need is unique. We work with you to design a system that fits your specific requirements and budget."
                }
              ].map((faq, index) => (
                <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
