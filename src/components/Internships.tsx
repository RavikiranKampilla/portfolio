import { Building, Calendar } from "lucide-react";

export const Internships = () => {
  const internships = [
    {
      title: "Network Security Associate Virtual Internship",
      organization: "Fortinet",
      platform: "via EduSkills, AICTE, National Internship Portal",
      duration: "10 weeks (July – September 2024)",
      description: "Completed virtual internship focusing on network security concepts and practices."
    },
    {
      title: "Android Developer Virtual Internship",
      organization: "Google for Developers",
      platform: "via EduSkills, AICTE, National Internship Portal",
      duration: "10 weeks (April – June 2025)",
      description: "Completed virtual internship covering Android app development, supported by the India Edu Program."
    }
  ];

  return (
    <section id="internships" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Internships</h2>
          <p className="text-lg text-gray-600">Professional experience and training</p>
        </div>

        <div className="space-y-6">
          {internships.map((internship, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Building className="text-blue-600" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {internship.title}
                  </h3>
                  <div className="mb-3">
                    <p className="text-blue-600 font-medium">{internship.organization}</p>
                    <p className="text-sm text-gray-600">{internship.platform}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Calendar size={16} />
                    <span>{internship.duration}</span>
                  </div>
                  
                  <p className="text-gray-600">{internship.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
