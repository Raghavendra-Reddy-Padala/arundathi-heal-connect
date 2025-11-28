import React, { useState } from 'react';
import { Calendar, Clock, Award, IndianRupee, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from "react-router-dom";


interface Doctor {
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
  recommendedFor: string[];
  image?: string;
}

const doctors: Doctor[] = [
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
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1613730666953-b6cdcca5e3ca?w=400&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?w=400&h=400&fit=crop"
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
    image: "https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=400&h=400&fit=crop"
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
  }
];

const specializations = [
  "All Specializations",
  "Cardiologist",
  "Pediatrician",
  "Orthopedic Surgeon",
  "General Physician",
  "Gastroenterologist",
  "Pulmonologist",
  "Endocrinologist",
  "ENT Specialist",
  "Nutritionist & Dietician",
  "Gynecologist",
  "Dermatologist",
  "Neurologist",
  "Psychiatrist",
  "Urologist"
];

export const Doctors = () => {
      const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations");
  const [showFilters, setShowFilters] = useState(false);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialization = selectedSpecialization === "All Specializations" ||
                                 doctor.specialization === selectedSpecialization;
    return matchesSearch && matchesSpecialization;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Expert Doctors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with experienced healthcare professionals in Hyderabad. Book your consultation today.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by doctor name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialization
              </label>
              <select
              title='t'
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''}
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {/* Doctor Image */}
              <div className="h-64  flex items-center justify-center overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {doctor.specialization}
                </p>

                {/* Experience */}
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <Award className="w-5 h-5 text-blue-500" />
                  <span>{doctor.experience} years experience</span>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-2 text-gray-600 mb-3">
                  <Calendar className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Available:</p>
                    <p className="text-sm">{doctor.availability.days.join(", ")}</p>
                  </div>
                </div>

                {/* Timing */}
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-sm">
                    {doctor.availability.timeStart} - {doctor.availability.timeEnd}
                  </span>
                </div>

                {/* Consultation Fee */}
                <div className="flex items-center gap-2 text-gray-900 mb-4 pb-4 border-b border-gray-200">
                  <IndianRupee className="w-5 h-5 text-green-600" />
                  <span className="font-bold text-lg">₹{doctor.consultationFee}</span>
                  <span className="text-sm text-gray-500">consultation fee</span>
                </div>

                <Button
                 variant="hero"
              size="lg"
              onClick={() => navigate("/booking")}
                
                 className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Book Appointment
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No doctors found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedSpecialization("All Specializations");
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Doctors;