import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { BookingData } from "@/types";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { User, Calendar, Clock, IndianRupee, Mail, Phone } from "lucide-react";

interface BookingSummaryProps {
  data: BookingData;
  onBack: () => void;
  onConfirm: () => void;
}

const PLATFORM_FEE = 50;

export const BookingSummary = ({ data, onBack, onConfirm }: BookingSummaryProps) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const navigate = useNavigate();

  const doctor = data.selectedDoctor;
  const totalAmount = (doctor?.consultationFee || 0) + PLATFORM_FEE;

  const handleConfirm = async () => {
    if (!termsAccepted) {
      toast.error("Please accept the terms and conditions");
      return;
    }

    setIsConfirming(true);
    
    // Simulate API call
    setTimeout(() => {
      const appointmentId = `APT${Date.now()}`;
      
      toast.success("Appointment Confirmed!", {
        description: `Your appointment ID is ${appointmentId}`,
        duration: 5000,
      });
      
      onConfirm();
      setIsConfirming(false);
      
      // Navigate to home after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 1500);
  };

  if (!doctor || !data.appointmentDate || !data.appointmentTime) {
    return null;
  }

  return (
    <Card className="p-6 md:p-8 shadow-[var(--shadow-card)]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Confirm Your Appointment</h2>
        <p className="text-muted-foreground">Please review the details before confirming</p>
      </div>

      <div className="space-y-6">
        {/* Patient Info */}
        <div className="border rounded-lg p-5 bg-muted/30">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-foreground">
            <User className="h-5 w-5 text-primary" />
            Patient Information
          </h3>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-muted-foreground">Name:</span>
              <span className="ml-2 font-medium text-foreground">{data.fullName}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Age:</span>
              <span className="ml-2 font-medium text-foreground">{data.age} years</span>
            </div>
            <div>
              <span className="text-muted-foreground">Gender:</span>
              <span className="ml-2 font-medium text-foreground capitalize">{data.gender}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Blood Group:</span>
              <span className="ml-2 font-medium text-foreground">{data.bloodGroup}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium text-foreground">{data.contactNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium text-foreground">{data.email}</span>
            </div>
          </div>
        </div>

        {/* Doctor Info */}
        <div className="border rounded-lg p-5 bg-muted/30">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-foreground">
            <User className="h-5 w-5 text-primary" />
            Doctor Details
          </h3>
          <div className="space-y-2 text-sm">
            <p className="text-lg font-semibold text-foreground">{doctor.name}</p>
            <p className="text-primary">{doctor.specialization}</p>
            <p className="text-muted-foreground">{doctor.experience} years experience</p>
          </div>
        </div>

        {/* Appointment Details */}
        <div className="border rounded-lg p-5 bg-muted/30">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-foreground">
            <Calendar className="h-5 w-5 text-primary" />
            Appointment Details
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-foreground">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{format(data.appointmentDate, "EEEE, MMMM d, yyyy")}</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">{data.appointmentTime}</span>
            </div>
          </div>
        </div>

        {/* Payment Summary */}
        <div className="border rounded-lg p-5 bg-primary/5 border-primary/20">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-foreground">
            <IndianRupee className="h-5 w-5 text-primary" />
            Payment Summary
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-foreground">
              <span>Consultation Fee:</span>
              <span className="font-medium">₹{doctor.consultationFee}</span>
            </div>
            <div className="flex justify-between text-foreground">
              <span>Platform Fee:</span>
              <span className="font-medium">₹{PLATFORM_FEE}</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between text-lg font-bold text-foreground">
              <span>Total Amount:</span>
              <span className="text-primary">₹{totalAmount}</span>
            </div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
          <Checkbox
            id="terms"
            checked={termsAccepted}
            onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
            className="mt-1"
          />
          <label htmlFor="terms" className="text-sm text-foreground cursor-pointer">
            I agree to the terms and conditions. I understand that I should arrive 10 minutes before
            my appointment time and carry my ID proof and any relevant medical documents.
          </label>
        </div>
      </div>

      <div className="flex justify-between pt-6 mt-6 border-t">
        <Button type="button" variant="outline" onClick={onBack} disabled={isConfirming}>
          Back
        </Button>
        <Button
          variant="success"
          onClick={handleConfirm}
          disabled={!termsAccepted || isConfirming}
          size="lg"
        >
          {isConfirming ? "Confirming..." : "Confirm Booking"}
        </Button>
      </div>
    </Card>
  );
};
