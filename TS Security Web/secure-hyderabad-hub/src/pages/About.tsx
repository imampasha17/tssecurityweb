import { Shield, Target, Eye, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About T S Security Solutions</h1>
            <p className="text-lg opacity-90">
              Leading security technology provider in Hyderabad, committed to protecting
              what matters most to you.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in the heart of Hyderabad, T S Security Solutions has established itself
                  as a trusted name in the security systems industry. Based in Gurramguda–Turkayamjal,
                  Rangareddy District, we serve homes, businesses, and institutions across the region.
                </p>
                <p>
                Our journey began with a simple vision: to make advanced security technology
                accessible and reliable for everyone. Today, we're proud to be at the forefront
                of security innovation, offering cutting-edge CCTV surveillance and smart 
                payment solutions.
                </p>
                <p>
                  What sets us apart is our commitment to customer satisfaction and our expertise
                  in implementing security solutions tailored to each client's unique needs. From
                  residential complexes to commercial establishments, we've helped countless
                  clients secure their premises with confidence.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="animate-scale-in">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                      <p className="text-muted-foreground">
                        To make Hyderabad safer through intelligent security technology,
                        providing reliable protection and peace of mind to every client we serve.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-scale-in" style={{ animationDelay: "150ms" }}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Eye className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                      <p className="text-muted-foreground">
                        A future where every home and business is protected with smart
                        innovation, making security accessible, reliable, and effective for all.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in">
                <div className="inline-flex p-6 bg-background rounded-full mb-4 shadow-lg">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Staying ahead with cutting-edge security technology and solutions
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{ animationDelay: "100ms" }}>
                <div className="inline-flex p-6 bg-background rounded-full mb-4 shadow-lg">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-muted-foreground">
                  Dependable support and service to ensure your security is never compromised
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{ animationDelay: "200ms" }}>
                <div className="inline-flex p-6 bg-background rounded-full mb-4 shadow-lg">
                  <Target className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
                <p className="text-muted-foreground">
                  Tailored solutions and dedicated service for every client's unique needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Expertise</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "CCTV Camera Installation & Maintenance",
                "HD & IP Camera Systems",
                "Smart Payment Solutions",
                "Security Consultation",
                "System Integration",
                "Technical Support"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-4 bg-muted rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Serving Hyderabad & Surrounding Areas</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Based in Gurramguda–Turkayamjal, Rangareddy District, we provide security
            solutions throughout Hyderabad and the Telangana region.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
