import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookingData } from "@/types";

const symptomsSchema = z.object({
  symptoms: z.string().min(10, "Please describe your symptoms in detail (minimum 10 characters)"),
  primaryConcern: z.string().min(1, "Please select your primary concern"),
});

interface SymptomsFormProps {
  data: Partial<BookingData>;
  onNext: (data: Partial<BookingData>) => void;
  onBack: () => void;
}

export const SymptomsForm = ({ data, onNext, onBack }: SymptomsFormProps) => {
  const form = useForm<z.infer<typeof symptomsSchema>>({
    resolver: zodResolver(symptomsSchema),
    defaultValues: {
      symptoms: data.symptoms || "",
      primaryConcern: data.primaryConcern || "",
    },
  });

  const onSubmit = (values: z.infer<typeof symptomsSchema>) => {
    onNext(values);
  };

  return (
    <Card className="p-6 md:p-8 shadow-[var(--shadow-card)]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Symptoms & Chief Complaint</h2>
        <p className="text-muted-foreground">Help us understand your health concerns</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="symptoms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Describe Your Symptoms *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please describe what you're experiencing, when it started, severity, etc."
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="primaryConcern"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primary Concern *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your main concern" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-popover">
                    <SelectItem value="fever-infections">Fever & Infections</SelectItem>
                    <SelectItem value="heart-pain">Heart/Chest Pain</SelectItem>
                    <SelectItem value="bone-pain">Bone/Joint Pain</SelectItem>
                    <SelectItem value="digestive-issues">Digestive Issues</SelectItem>
                    <SelectItem value="respiratory">Respiratory Problems</SelectItem>
                    <SelectItem value="diabetes">Diabetes Management</SelectItem>
                    <SelectItem value="child-health">Child Health Concerns</SelectItem>
                    <SelectItem value="general-checkup">General Check-up</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={onBack}>
              Back
            </Button>
            <Button type="submit" size="lg">
              Next: Select Doctor
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};
