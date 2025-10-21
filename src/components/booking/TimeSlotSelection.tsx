import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { BookingData } from "@/types";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface TimeSlotSelectionProps {
  data: Partial<BookingData>;
  onNext: (data: Partial<BookingData>) => void;
  onBack: () => void;
}

const generateTimeSlots = (startTime: string, endTime: string): string[] => {
  const slots: string[] = [];
  const [startHour, startMin] = startTime.split(":").map(Number);
  const [endHour, endMin] = endTime.split(":").map(Number);

  let currentHour = startHour;
  let currentMin = startMin;

  while (currentHour < endHour || (currentHour === endHour && currentMin < endMin)) {
    slots.push(`${String(currentHour).padStart(2, "0")}:${String(currentMin).padStart(2, "0")}`);
    currentMin += 30;
    if (currentMin >= 60) {
      currentMin = 0;
      currentHour++;
    }
  }

  return slots;
};

export const TimeSlotSelection = ({ data, onNext, onBack }: TimeSlotSelectionProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(data.appointmentDate);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(data.appointmentTime);

  const doctor = data.selectedDoctor;

  if (!doctor) {
    return null;
  }

  const availableDays = doctor.availability.days;
  const timeSlots = generateTimeSlots(
    doctor.availability.timeStart,
    doctor.availability.timeEnd
  );

  const isDayAvailable = (date: Date) => {
    const dayName = format(date, "EEEE");
    return availableDays.includes(dayName);
  };

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      onNext({
        appointmentDate: selectedDate,
        appointmentTime: selectedTime,
      });
    }
  };

  return (
    <Card className="p-6 md:p-8 shadow-[var(--shadow-card)]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Choose Date & Time</h2>
        <p className="text-muted-foreground">
          Select an available slot with {doctor.name}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">Select Date</h3>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            disabled={(date) => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              return date < today || !isDayAvailable(date);
            }}
            className="rounded-md border shadow-sm pointer-events-auto bg-card"
          />
          <div className="mt-4 text-sm text-muted-foreground">
            <p className="font-medium mb-1">Available Days:</p>
            <p>{availableDays.join(", ")}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-foreground">Select Time Slot</h3>
          {!selectedDate ? (
            <p className="text-muted-foreground text-sm">Please select a date first</p>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((slot) => (
                <Button
                  key={slot}
                  variant={selectedTime === slot ? "default" : "outline"}
                  className={cn(
                    "h-auto py-3",
                    selectedTime === slot && "ring-2 ring-primary ring-offset-2"
                  )}
                  onClick={() => setSelectedTime(slot)}
                >
                  {slot}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-6 mt-6 border-t">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={!selectedDate || !selectedTime}
          size="lg"
        >
          Next: Review Booking
        </Button>
      </div>
    </Card>
  );
};
