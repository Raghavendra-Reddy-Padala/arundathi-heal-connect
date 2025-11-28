import { Doctor } from "@/types";

export const doctors: Doctor[] = [
  {
    id: "dr-rajesh-kumar",
    name: "Dr. Rajesh Kumar",
    specialization: "Cardiologist",
    experience: 15,
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      timeStart: "10:00",
      timeEnd: "14:00",
    },
    consultationFee: 800,
    recommendedFor: ["heart-pain", "general-checkup"],
    image: "https://th.bing.com/th/id/OIP.QCsaaEFPX8i_NXhnBg3MjwHaHa?w=196&h=196&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    specialization: "Pediatrician",
    experience: 12,
    availability: {
      days: ["Tuesday", "Thursday", "Saturday"],
      timeStart: "09:00",
      timeEnd: "13:00",
    },
    consultationFee: 600,
    recommendedFor: ["child-health", "general-checkup"],
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"
  },
  {
    id: "dr-amit-patel",
    name: "Dr. Amit Patel",
    specialization: "Orthopedic Surgeon",
    experience: 18,
    availability: {
      days: ["Monday", "Wednesday", "Friday"],
      timeStart: "15:00",
      timeEnd: "18:00",
    },
    consultationFee: 900,
    recommendedFor: ["bone-pain"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
  },
  {
    id: "dr-lakshmi-reddy",
    name: "Dr. Lakshmi Reddy",
    specialization: "General Physician",
    experience: 10,
    availability: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      timeStart: "10:00",
      timeEnd: "17:00",
    },
    consultationFee: 500,
    recommendedFor: ["fever-infections", "general-checkup", "other"],
    image: "https://th.bing.com/th/id/OIP.fp7wDN-wp5mcgv7GVAnmIAHaHa?w=144&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: "dr-suresh-gupta",
    name: "Dr. Suresh Gupta",
    specialization: "Gastroenterologist",
    experience: 14,
    availability: {
      days: ["Tuesday", "Thursday", "Saturday"],
      timeStart: "14:00",
      timeEnd: "18:00",
    },
    consultationFee: 750,
    recommendedFor: ["digestive-issues"],
    image: "https://th.bing.com/th/id/OIP.uwH0meYO3rCsxeXEXTcqBwAAAA?w=176&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: "dr-vikram-singh",
    name: "Dr. Vikram Singh",
    specialization: "Pulmonologist",
    experience: 16,
    availability: {
      days: ["Monday", "Wednesday", "Thursday"],
      timeStart: "09:00",
      timeEnd: "13:00",
    },
    consultationFee: 850,
    recommendedFor: ["respiratory"],
    image: "https://th.bing.com/th/id/OIP.hn7sSs_oqQUyNjsn3IlklQAAAA?w=187&h=188&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: "dr-kavita-desai",
    name: "Dr. Kavita Desai",
    specialization: "Endocrinologist",
    experience: 11,
    availability: {
      days: ["Tuesday", "Wednesday", "Thursday"],
      timeStart: "10:00",
      timeEnd: "14:00",
    },
    consultationFee: 800,
    recommendedFor: ["diabetes", "general-checkup"],
    image: "https://th.bing.com/th/id/OIP.3TGFxeJb8ewXb92_MUdriQHaHa?w=219&h=219&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: "dr-deepak-verma",
    name: "Dr. Deepak Verma",
    specialization: "ENT Specialist",
    experience: 12,
    availability: {
      days: ["Tuesday", "Thursday", "Friday", "Saturday"],
      timeStart: "10:00",
      timeEnd: "15:00",
    },
    consultationFee: 700,
    recommendedFor: ["respiratory", "other"],
    image: "https://th.bing.com/th/id/OIP.sIRzurPdbmILO6zYs02n-wHaGZ?w=253&h=219&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: "dr-divya-chopra",
    name: "Dr. Divya Chopra",
    specialization: "Nutritionist & Dietician",
    experience: 7,
    availability: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      timeStart: "10:00",
      timeEnd: "18:00",
    },
    consultationFee: 500,
    recommendedFor: ["diabetes", "digestive-issues", "general-checkup"],
    image: "https://th.bing.com/th/id/OIP.chDvFokYt4fIVKbDxE4IhAAAAA?w=185&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: "dr-meera-nair",
    name: "Dr. Meera Nair",
    specialization: "Gynecologist",
    experience: 13,
    availability: {
      days: ["Tuesday", "Thursday", "Friday", "Saturday"],
      timeStart: "10:00",
      timeEnd: "15:00",
    },
    consultationFee: 700,
    recommendedFor: ["other", "general-checkup"],
    image: "https://th.bing.com/th/id/OIP.ELtrdDOEOwgNeIPAw2RndAHaHa?w=171&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: "dr-venkat-rao",
    name: "Dr. Venkat Rao",
    specialization: "Dermatologist",
    experience: 9,
    availability: {
      days: ["Monday", "Wednesday", "Friday", "Saturday"],
      timeStart: "11:00",
      timeEnd: "16:00",
    },
    consultationFee: 650,
    recommendedFor: ["other", "general-checkup"],
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
  },
  {
    id: "dr-srinivas-reddy",
    name: "Dr. Srinivas Reddy",
    specialization: "Neurologist",
    experience: 20,
    availability: {
      days: ["Tuesday", "Thursday", "Friday"],
      timeStart: "14:00",
      timeEnd: "18:00",
    },
    consultationFee: 1000,
    recommendedFor: ["other"],
    image: "https://th.bing.com/th/id/OIP.Rnw5cedm5nASbPr8ooPDeQHaHa?w=170&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: "dr-anitha-kumar",
    name: "Dr. Anitha Kumar",
    specialization: "Psychiatrist",
    experience: 8,
    availability: {
      days: ["Monday", "Tuesday", "Wednesday", "Friday"],
      timeStart: "10:00",
      timeEnd: "15:00",
    },
    consultationFee: 800,
    recommendedFor: ["other"],
    image: "https://th.bing.com/th/id/OIP.3OQLUt-Db9r-IMXRjjpW5wHaHa?w=208&h=208&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: "dr-ramesh-naidu",
    name: "Dr. Ramesh Naidu",
    specialization: "Urologist",
    experience: 15,
    availability: {
      days: ["Monday", "Wednesday", "Thursday", "Saturday"],
      timeStart: "09:00",
      timeEnd: "13:00",
    },
    consultationFee: 850,
    recommendedFor: ["other"],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop"
  },
];

export const concernToDoctorMapping: Record<string, string[]> = {
  "fever-infections": ["dr-lakshmi-reddy", "dr-deepak-verma"],
  "heart-pain": ["dr-rajesh-kumar"],
  "bone-pain": ["dr-amit-patel"],
  "digestive-issues": ["dr-suresh-gupta", "dr-divya-chopra"],
  "respiratory": ["dr-vikram-singh", "dr-deepak-verma"],
  "diabetes": ["dr-kavita-desai", "dr-divya-chopra"],
  "child-health": ["dr-priya-sharma"],
  "general-checkup": ["dr-lakshmi-reddy", "dr-divya-chopra", "dr-kavita-desai", "dr-venkat-rao"],
  other: ["dr-lakshmi-reddy", "dr-meera-nair", "dr-deepak-verma", "dr-venkat-rao", "dr-srinivas-reddy", "dr-anitha-kumar", "dr-ramesh-naidu"],
};