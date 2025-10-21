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
    recommendedFor: ["heart-pain", "chest-pain", "general-checkup"],
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
    recommendedFor: ["bone-pain", "joint-pain"],
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
    recommendedFor: ["fever", "infections", "general-checkup", "other"],
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
  },
];

export const concernToDoctorMapping: Record<string, string[]> = {
  "fever-infections": ["dr-lakshmi-reddy"],
  "heart-pain": ["dr-rajesh-kumar"],
  "bone-pain": ["dr-amit-patel"],
  "digestive-issues": ["dr-suresh-gupta"],
  "respiratory": ["dr-lakshmi-reddy"],
  "diabetes": ["dr-lakshmi-reddy"],
  "child-health": ["dr-priya-sharma"],
  "general-checkup": ["dr-lakshmi-reddy", "dr-rajesh-kumar"],
  other: ["dr-lakshmi-reddy"],
};
