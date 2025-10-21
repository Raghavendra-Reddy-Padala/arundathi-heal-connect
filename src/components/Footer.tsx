import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Arundathi Hospital</h3>
            <p className="text-primary-foreground/80 mb-4">
              Committed to providing exceptional healthcare services with compassion and excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@arundathihospital.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Hyderabad, Telangana 500001</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <div>
                  <p className="font-medium">OPD: Mon - Sat</p>
                  <p className="text-sm">9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-medium text-success-foreground bg-success/20 inline-block px-3 py-1 rounded">
                  Emergency: 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-primary-foreground/60 text-sm">
          <p>© 2024 Arundathi Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
