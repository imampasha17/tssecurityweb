import { Camera, Lock, CreditCard, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import cctvCamera1 from "@/assets/cctv-camera-1.jpg";
import cctvCamera2 from "@/assets/cctv-camera-2.jpg";
import smartPayPhoneRed from "@/assets/smart-pay-phone-red.png";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg opacity-90">
              Comprehensive security solutions designed to protect what matters most
            </p>
          </div>
        </div>
      </section>

      {/* CCTV Service */}
      <section id="cctv" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Camera className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">CCTV Surveillance</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">CCTV Camera Installation & Services</h2>
              <p className="text-muted-foreground mb-6">
                Protect your property with our state-of-the-art CCTV surveillance systems.
                We offer reliable surveillance solutions for homes, offices, retail stores,
                and industrial facilities.
              </p>
              
              <div className="space-y-3 mb-6">
                {[
                  "HD & 4K Resolution Cameras",
                  "Night Vision Capability",
                  "Remote Mobile Monitoring",
                  "Motion Detection Alerts",
                  "Cloud & Local Storage Options",
                  "Professional Installation",
                  "Dedicated Technical Support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/quote">
                <Button className="bg-accent hover:bg-accent/90">
                  Get Quote for CCTV
                </Button>
              </Link>
            </div>

            <div className="animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={cctvCamera1} 
                  alt="CCTV Camera Installation" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <img 
                  src={cctvCamera2} 
                  alt="HD CCTV Camera" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Smart Pay Boxes Service */}
      <section id="payboxes" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
                <CreditCard className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-accent">Payment Solutions</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Smart Card Payphone and Coin Boxes</h2>
              <p className="text-muted-foreground mb-6">
                Secure card-based payphone solutions for colleges and hostels. Our smart card payphones 
                allow students and residents to make calls conveniently with prepaid card systems.
              </p>
              
              <div className="space-y-3 mb-6">
                {[
                  "Card Based System",
                  "Prepaid Card Integration",
                  "Coin Acceptor Support",
                  "Easy Recharge Options",
                  "Call Rate Management",
                  "Usage Tracking & Reports",
                  "Maintenance & Support Included"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/quote">
                <Button className="bg-accent hover:bg-accent/90">
                  Get Quote for Pay Boxes
                </Button>
              </Link>
            </div>

            <div className="animate-scale-in">
              <img 
                src={smartPayPhoneRed} 
                alt="Smart Card Pay Phone Box" 
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Every security need is unique. Contact us to discuss a tailored solution for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Contact Us
              </Button>
            </Link>
            <Link to="/quote">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
