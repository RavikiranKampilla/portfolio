import { GraduationCap, Calendar, MapPin } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "KL University",
      location: "Hyderabad, Telangana",
      period: "2023 - 2027",
      status: "Currently Pursuing",
      description: "Pursuing comprehensive education in computer science fundamentals, software engineering, and emerging technologies.",
      highlights: ["Data Structures & Algorithms", "Software Engineering", "Database Management", "Web Development"]
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "Narayana Junior College",
      location: "India",
      period: "2021 - 2023",
      status: "Completed",
      description: "Specialized in Mathematics, Physics, and Chemistry with a focus on analytical thinking and problem-solving.",
      highlights: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    },
    {
      degree: "Secondary School (Class X)",
      institution: "All Saints Model High School",
      location: "India",
      period: "2020 - 2021",
      status: "Completed",
      description: "Strong foundation in core subjects with excellent academic performance.",
      highlights: ["Mathematics", "Science", "English", "Social Studies"]
    }
  ];

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600">My academic journey and achievements</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <GraduationCap className="text-blue-600" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                      <h4 className="text-lg text-blue-600 font-medium mb-3">{edu.institution}</h4>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          edu.status === "Currently Pursuing" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{edu.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
