import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BookingData } from "@/types";
import { PatientDetailsForm } from "@/components/booking/PatientDetailsForm";
import { SymptomsForm } from "@/components/booking/SymptomsForm";
import { DoctorSelection } from "@/components/booking/DoctorSelection";
import { TimeSlotSelection } from "@/components/booking/TimeSlotSelection";
import { BookingSummary } from "@/components/booking/BookingSummary";
import { ProgressIndicator } from "@/components/booking/ProgressIndicator";

const steps = [
  "Patient Details",
  "Symptoms",
  "Select Doctor",
  "Choose Time",
  "Confirm",
];

export default function Booking() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({});

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="bg-primary text-primary-foreground py-6 shadow-md">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold">Book an Appointment</h1>
          <p className="text-primary-foreground/80 mt-2">
            Complete the form to schedule your visit
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <ProgressIndicator steps={steps} currentStep={currentStep} />

        <div className="mt-8">
          {currentStep === 0 && (
            <PatientDetailsForm
              data={bookingData}
              onNext={(data) => {
                updateBookingData(data);
                nextStep();
              }}
            />
          )}

          {currentStep === 1 && (
            <SymptomsForm
              data={bookingData}
              onNext={(data) => {
                updateBookingData(data);
                nextStep();
              }}
              onBack={prevStep}
            />
          )}

          {currentStep === 2 && (
            <DoctorSelection
              data={bookingData}
              onNext={(data) => {
                updateBookingData(data);
                nextStep();
              }}
              onBack={prevStep}
            />
          )}

          {currentStep === 3 && (
            <TimeSlotSelection
              data={bookingData}
              onNext={(data) => {
                updateBookingData(data);
                nextStep();
              }}
              onBack={prevStep}
            />
          )}

          {currentStep === 4 && (
            <BookingSummary
              data={bookingData as BookingData}
              onBack={prevStep}
              onConfirm={() => {
                // Here you would typically submit to backend
                console.log("Booking confirmed:", bookingData);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
