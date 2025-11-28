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
    image: "data:image/webp;base64,UklGRrgJAABXRUJQVlA4IKwJAADwMgCdASq6ALoAPp1InkwlpCKiJZH6SLATiWdu3V9ztbu9z2O3t8WzD2nNnD3EzP/2/nh9gtdPoCfynzgc/T137Bn62emZ7Av3D9mr9hyhr5WpTA4ml7O2V4M37f6azniHHl3jOSYxyk9U8V7TPqborpSEj2S70Kb3MCXRgOQXxnOfPUL+3XOufTwDFdORu0YQFN55epCRza1bLa16lrh9uSbO7pGUaodZkIUE4YjpsCai+wWQ3VLtcM8ooLAf6pJJxmpHy4VuKWWPzypkAgkymMbtj5VC9BF4IoM2gbxz3E5ybPSE5qdiYXh8Qx2EYSVOREY7K6R5bAlE8mIIiY7pVoYGhK0bI0h76nnPG4CHSdpMXS9tfUUSn4ebar9q3lTaevQNrwsUouVtss8uPwJF63BJT+AJhQoi8SBwLuRbjxX/f3mQnbfdr/ftS1FzFvJP1eFJ5se1bhzegSQunzHZb7hS/uDODpkb/RKC2ubtJtGQ7rPLSMKIdkM11y6CAfvBa+qzmAfguTF29Lg3ljgmn3mIlnRw0vKN+kGeQa3tCAD++UMWQFzgAKOtGIyf3FxPTmtNw0+aZnXLu8KIMSi99SjsUo69BYnLY7WT8jQ7vboR0MI/linDgXJy8Lopk/H8tZvtfrLkrutRMMEYpAQRSX6aresmQ60oTbPxTWE/CLEDUKaOQMZtZLHpoByK5B7TYH1b7qUH1tNKwJie7HEax1g5pzoJFhFV+O5LXPQRHcRtmlBb3KYuBMbnGAQip18Vlh8Ge5NM5/gpRZtVpzDLmnfMLXVJ/LTkvsjZQh/k4AdKPPcDJuwDrTecByLrW9LlOmWbnGpvRR5rWJEuUKSUN7HPuy+vPLLFToAKGxmrWJd/yIOg0rUOQL05+vT1EKwcClq+WQdOY+G57OyCxmR5rY/P5c7MG0nM/895LwvPgqk1ceyENdRoqxTEJ07Oa+FdN7PelblId0Kk7MPUoccPNxuGVZcXNkU1OgfnJOgWKWJytLlw/OP5loIjQtxywuC6nQ2Xe+/dYXTQuHPjWj/TzFa/y5KUV3fJ0Ubx17VX2hdTXu3xhGxCaWDQ4PbUBkjOUZaXvNndTDzAL9IuAG2Jf5t5esnxIYHhtltEAlvHFTpeHev9zLd3feU6LZbK2egN1A19doSm/WswvvTVntAmFBOYzI56LZ9gP9iT9QYcfOZgmQ0W7gIdcfLD8YSou85anCq2G0nOaij8o53B3mZEHz3R4O476H6UetzbwGenpuYgjqQiapDqqRZMM50lFOS8gO0SLNAjg37VIJkZUQm+SFiwTYWLZKEhffv38Boncx7dYMFLFuyX9AwpsjrI+xSFmB2089hrtSdQcgytEkAhKWZo/uB23gA4tX+n6GoszY6c5PDoCQdTv7EuI5E4nJMjrgo3XbZnXWS9mryaG14gTu64OtLMUxq6fnpISYyh9/QC6g2evUYfIapUyBX0h9ibXrknA1LHSTS/oqLAQ2yGbz2SMic2ZqOmlF2k+SXbyPfNnP5U3xOwRxF+4/4PJ0YvJrp/Ba2y15OgXAVRvmECbbhtJu6z/EixtgKQQFHQs0dzqGzg26LrPHaP3sRQ6AfqQBuNacmV4rHvdre33xjo1tEqOOeAnHrOs6yMLYC4XP07P8GGfjMzgpiGki/WhMhmTqH+vCcDq69Be2av12kG7puJlQRIJPqCTthfUq5mAYmc+ANVqtK1Sd4FS2v8TrW8rUQxOT2v4Ej06zYYqcMpolVy97KYoucgd99oiu4BnL1x4ytNm0oKi31xw6gr2yM2AGhL2b+mDbJP3vIMz6BQCmfHfP+NJd9/1Sn5WWMTZVVK/1rL7nb3rWZGtZ4kma/6XLzaoxxbM4bQ04lM6q/yq+/8bkxmMwrIzyAI/bRf+E0Qu+z1KFGzG4AOBc1E4elAjG6/j8HttEk0eDyGy1CpgUSczT/Rvs+DG8KhEZxw2U7IqNh3JFO/87EdAo+IRyvoQcuM/8Gw9QrfHXVPowxXM0TWSrBEXcfUAJe8pyw7Oe6WRp9YhGA5d3nrPwzPkGyaNZCZ453crfblmp4GtYGLR7zuzungAJAXdqX/vAFBWTW5RikbzFj+DtdYIBZxScVe2hSyA+1OUdAa9R6dc4GwNoLLMLpM5VrCqGiUdW1jwwFjQOLCEJGMfBY5hM7GN7kzOwSvQ2ga4wPckJAvCaU1I+W2EL2Ndia1WD1WLvluLAAuB9G57ax9/nTZwCEz8XNzFmsP2nNCHuTRVF5kdJq01BNoFXRCx+aJvdrupH2STrgiqJb/D1cAaiSc8cmjQWgMSM+u5b6aB12fhkqSh9ADEzfipmpdz84jS7LCaPInhqh16eUObxvjkN1H3X6moAAcV14KVGFEDQUp7QI8wYo1Nj5pXgo9HqFnWnUmwuIiqJYUZ2NgionXmBjJ998OpDgLYvcTy3fbOjHuzGAJpXPoAUVK12VOnfLyKvVidS5jBafYPaHKo4dtuRGEn8HRbCTi6SPg7zkelxMYcZ7ZCWieFmGI9jeYkxFccOtA3LdI3UQuWlMeD6uPqa3DMF15p0oKMpvBkHYA0SSi6fnoLEDF+PYep4fA7Wpk47M0v363JKjZ59rDCpWfYjsayJ6cMItxZEgmb7thhQTGVhnw1iST9jTiIVv+zyx7rz5AUhC4pugvdp4H/9pFytuTmJAo49fFmI/mTygWpPdzmnqKSxKBJC7ZzYZRpdI/54pbZGZFqqXsdkrCscniV4zBGFTF8qU+qNrDi6CvU92Jf55rldZFMCLaA8qibvQvh/6Q/l1VSeILzkUoXXEztYVoiA1jq5Vzjle5ifoTrod4TTZgTZxeGifigTni4NH4pKcE37VQhwL1kD01HidfYeHsN29/CECXUabdN4DJf5FoWmSRJIi9sxxUNmzCsWp2u3Mool2ykjCu69BZH5CilaSi5KhxSOzZ/5se+31jBv/dr+11EgZvFpbyLPdKT5pvapXm4E9VE/ifx15dCkPOYQtyUh+r2ur5WM4hxjbxb0VddzBeM3ngbkU/2/R/5yDTzH2Fgp962SnxfLxeRS2R/qPS9oGtr4V1XB9IYQ/L6xODl3uXL76jW5JZXXQUYXMy42sQrR/R4FqjR2jc28w0o727pkW5WPME4cuC8lflHymiToZcNsDKzPyo0+eT1pL+Y7pfamtUrGsJ2Bx3FMj8BDdXGO2f6DYMwiZITVzaPuH5v11GgMChgyA3TVGen7Ys63iKrMb47CGlPmXoQ5QIIUrGpQEMesYLxYNTm20pA1KExy1V3+xYhm9PohwgrslK2AAA"
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
    image: "data:image/webp;base64,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"
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
    image: "data:image/webp;base64,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"
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