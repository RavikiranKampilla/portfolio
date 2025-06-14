
import { Code, BookOpen, Target, Users } from "lucide-react";

export const About = () => {
  const skills = [
    "JavaScript", "Java", "C", "React", "Node.js", "HTML/CSS",
    "Git", "SQL", "MongoDB", "Linux Commands", "Data Structures", "Algorithms"
  ];

  const interests = [
    {
      icon: Code,
      title: "Software Development",
      description: "Passionate about creating innovative solutions and learning new technologies"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always eager to expand knowledge and stay updated with industry trends"
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Enjoy tackling complex challenges and finding efficient solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Believe in the power of teamwork and effective communication"
    }
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a dedicated Computer Science student with a passion for technology and innovation. 
            Currently pursuing my degree at KL University Hyderabad, I'm focused on building a strong 
            foundation in software development and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-4">
              My academic journey began at All Saints Model High School, where I developed a strong 
              foundation in mathematics and science. I continued my education at Narayana Junior College, 
              where I specialized in science subjects and discovered my passion for computer science.
            </p>
            <p className="text-gray-600">
              Currently, I'm pursuing my Bachelor's degree in Computer Science at KL University Hyderabad, 
              expected to graduate in 2027. I'm actively involved in various projects and continuously 
              working on improving my technical skills.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {interests.map((interest) => (
            <div key={interest.title} className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <interest.icon className="text-blue-600" size={32} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{interest.title}</h4>
              <p className="text-gray-600 text-sm">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
