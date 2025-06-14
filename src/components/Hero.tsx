
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="/my_photo.jpg"
              alt="Ravikiran Kampilla"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl border-4 border-white"
            />
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Ravikiran
            <span className="text-blue-600"> Kampilla</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Computer Science Student at KL University Hyderabad | Passionate about Technology & Innovation | Class of 2027
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:ravikirankampilla@gmail.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ravikiran-kampilla-08743132a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/RavikiranKampilla?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
          
          <a 
            href="/Ravikiran_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2 shadow-lg"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};
