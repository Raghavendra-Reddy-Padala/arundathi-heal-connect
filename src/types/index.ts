export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  availability: {
    days: string[];
    timeStart: string;
    timeEnd: string;
  };
  consultationFee: number;
  image?: string;
  recommendedFor: string[];
}

export interface PatientDetails {
  fullName: string;
  age: number;
  gender: string;
  contactNumber: string;
  email: string;
  address: string;
  bloodGroup: string;
}

export interface BookingData extends PatientDetails {
  symptoms: string;
  primaryConcern: string;
  selectedDoctor?: Doctor;
  appointmentDate?: Date;
  appointmentTime?: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface Specialty {
  id: string;
  name: string;
  icon: string;
  description: string;
}
