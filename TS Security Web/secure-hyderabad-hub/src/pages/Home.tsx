import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, CreditCard, Shield, CheckCircle, Star } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Camera,
      title: "CCTV Surveillance",
      description: "High-definition cameras for homes and businesses with remote monitoring",
      link: "/services#cctv",
    },
    {
      icon: CreditCard,
      title: "Smart Card Payphones",
      description: "Card-based payphone solutions for colleges and hostels",
      link: "/services#payboxes",
    },
  ];

  const values = [
    { icon: Shield, title: "Innovation", description: "Cutting-edge security technology" },
    { icon: CheckCircle, title: "Reliability", description: "Dependable support and service" },
    { icon: Star, title: "Trust", description: "Serving Hyderabad with excellence" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Pvt Ltd",
      text: "Excellent service! The CCTV installation was seamless and the team was very professional.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Green Valley Apartments",
      text: "We installed their CCTV system for our residential complex. Highly recommended!",
      rating: 5,
    },
    {
      name: "Anil Reddy",
      company: "Metro Mall",
      text: "The smart pay boxes have improved our payment collection significantly. Great innovation!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">Trusted Security Partner in Hyderabad</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Guarding Your World,<br />
              <span className="text-secondary">One Innovation at a Time</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Professional CCTV installations and smart payment solutions
              for homes, offices, and industries across Hyderabad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-lg w-fit mb-4 group-hover:animate-glow-pulse">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Link to={service.link} className="text-primary hover:text-secondary font-medium inline-flex items-center gap-2">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground">Built on three core pillars</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="inline-flex p-6 bg-background rounded-full mb-4 shadow-lg">
                  <value.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Google Reviews</h2>
            <p className="text-muted-foreground">See what our customers say on Google</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Star className="h-8 w-8 fill-accent text-accent" />
                    <span className="text-4xl font-bold">4.8</span>
                    <span className="text-muted-foreground text-lg">/ 5.0</span>
                  </div>
                  <p className="text-muted-foreground mb-6">Based on Google Business reviews</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border rounded-lg p-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 italic">{testimonial.text}</p>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <a 
                    href="https://www.google.com/search?q=T+S+Security+Solutions+Hyderabad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="gap-2">
                      View All Reviews on Google
                      <Star className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Space?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free consultation and quote for your security needs today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Get Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
