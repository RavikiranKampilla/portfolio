import { Award, ExternalLink, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const Certificates = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const certificates = [
    {
      title: "MongoDB Associate Developer",
      issuer: "MongoDB",
      date: "Apr 2025",
      description: "Professional certification demonstrating proficiency in MongoDB development fundamentals, database design, and application development.",
      skills: ["MongoDB", "Database Design", "NoSQL", "Application Development"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop",
      verifyUrl: "https://www.credly.com/go/Ty3SOylN"
    },
    {
      title: "GitHub Foundations",
      issuer: "GitHub",
      date: "21 FEB 2025",
      expiryDate: "21 FEB 2028",
      description: "Professional certification validating expertise in GitHub fundamentals and version control best practices. Issued to Kampilla Ravikiran.",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=300&h=200&fit=crop",
      verifyUrl: "https://www.credly.com/go/I2ZaAQ3c"
    },
    {
      title: "Web Development Bootcamp",
      issuer: "FreeCodeCamp",
      date: "2023",
      description: "Full-stack web development including HTML, CSS, JavaScript, and React.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop"
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "GeeksforGeeks",
      date: "2023",
      description: "Advanced course on data structures, algorithms, and problem-solving techniques.",
      skills: ["DSA", "Problem Solving", "Algorithms"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop"
    },
    {
      title: "Database Management Systems",
      issuer: "edX",
      date: "2023",
      description: "Comprehensive study of database design, SQL, and database management concepts.",
      skills: ["SQL", "Database Design", "RDBMS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop"
    },
    {
      title: "Git and Version Control",
      issuer: "Udemy",
      date: "2022",
      description: "Essential skills for version control, collaboration, and project management.",
      skills: ["Git", "GitHub", "Version Control"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section id="certificates" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates & Achievements</h2>
          <p className="text-lg text-gray-600">Professional certifications and learning accomplishments</p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.slice(0, isExpanded ? certificates.length : 3).map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <Award className="text-yellow-600" size={20} />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-600 font-medium">{cert.issuer}</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {cert.date}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                      <ExternalLink size={16} />
                      <span>Verify Certificate</span>
                    </a>
                  ) : (
                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                      <ExternalLink size={16} />
                      <span>View Certificate</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {certificates.length > 3 && (
            <div className="absolute -bottom-16 right-0">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white 
                  hover:bg-blue-700 hover:scale-105 hover:shadow-lg transform transition-all duration-200 font-semibold"
              >
                {isExpanded ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp size={20} className="animate-bounce" />
                  </>
                ) : (
                  <>
                    <span>Show More</span>
                    <ChevronDown size={20} className="animate-bounce" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
