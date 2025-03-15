import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ChevronDown, Code2, Briefcase, User2, Award, GraduationCap, Trophy, BookOpen, Phone, MapPin, AlignCenterVertical as Certificate } from 'lucide-react';

function Section({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={`py-20 flex items-center justify-center ${className}`}
    >
      {children}
    </motion.section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <Section className="relative min-h-screen">
        <div className="text-center">
          <motion.h1 
            className="text-6xl font-bold mb-6"
            style={{ scale }}
          >
            Mohit Sharma
          </motion.h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={20} className="text-blue-400" />
            <h2 className="text-2xl text-gray-300">Chandigarh, India</h2>
          </div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Phone size={20} className="text-blue-400" />
            <p className="text-xl text-gray-300">+91 6230661084</p>
          </div>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about competitive programming and web development. Eager to tackle complex coding challenges and continually enhance problem-solving skills.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/Mohit16360" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="http://www.linkedin.com/in/mohit-sharma-71b1b524a" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:mohitsh0192@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={32} />
          </motion.div>
        </div>
      </Section>

      {/* Education Section */}
      <Section className="bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap size={32} className="text-blue-400" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold">Bachelor of Engineering in Computer Science</h3>
              <p className="text-gray-300">Chandigarh University | 2022-Present</p>
              <p className="text-blue-400">CGPA: 8.08</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold">Intermediate</h3>
              <p className="text-gray-300">Himachal Pradesh Board of School Education | 2020</p>
              <p className="text-blue-400">Percentage: 87%</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold">Matriculation</h3>
              <p className="text-gray-300">Himachal Pradesh Board of School Education | 2018</p>
              <p className="text-blue-400">Percentage: 88.42%</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Code2 size={32} className="text-blue-400" />
            <h2 className="text-4xl font-bold">Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['C', 'C++', 'Java', 'Python', 'DSA', 'OOPS', 'SQL', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-400 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Problem Solving', 'Leadership', 'Adaptability', 'Communication', 'Decision Making'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-400 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section className="bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Briefcase size={32} className="text-blue-400" />
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Exercise Monitoring System</h3>
                <p className="text-gray-300 mb-4">A real-time push-up counting system with face detection, providing accurate tracking of exercise performance.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-400 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-blue-400 rounded-full text-sm">Mediapipe</span>
                  <span className="px-3 py-1 bg-blue-400 rounded-full text-sm">OpenCV</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Live Crypto Dashboard</h3>
                <p className="text-gray-300 mb-4">A live cryptocurrency market price website providing real-time updates and dynamic tracking of crypto assets.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-400 rounded-full text-sm">HTML</span>
                  <span className="px-3 py-1 bg-blue-400 rounded-full text-sm">CSS</span>
                  <span className="px-3 py-1 bg-blue-400 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-blue-400 rounded-full text-sm">API</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Certifications Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Certificate size={32} className="text-blue-400" />
            <h2 className="text-4xl font-bold">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Java Language Features offered by Infosys Springboard',
              'Multi-Core Computer Architecture offered by NPTEL',
              'Introduction to Databases from coursera',
              'NoSQL, Big Data, and Spark Foundations Specialization offered by Coursera'
            ].map((cert, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <Award className="text-blue-400 mb-4" size={24} />
                <p className="text-lg">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Coursework Section */}
      <Section className="bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen size={32} className="text-blue-400" />
            <h2 className="text-4xl font-bold">Coursework</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'Design and Analysis of Algorithms',
              'Operating System',
              'Computer Networks',
              'Database Management',
              'Software Engineering',
              'Theory of Computation'
            ].map((course, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-700 p-4 rounded-lg text-center"
              >
                <p className="text-lg">{course}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Achievements Section */}
      <Section>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Trophy size={32} className="text-blue-400" />
            <h2 className="text-4xl font-bold">Achievements</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gray-700 p-6 rounded-lg">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 transform hover:scale-105 transition-transform">
                  <Award className="text-blue-400 flex-shrink-0 mt-1" />
                  <span>Certificate of Recognition for Class Representative (Jan 2024 – May 2024)</span>
                </li>
                <li className="flex items-start gap-3 transform hover:scale-105 transition-transform">
                  <Award className="text-blue-400 flex-shrink-0 mt-1" />
                  <span>Geek of the section award for active participation (March 2024)</span>
                </li>
                <li className="flex items-start gap-3 transform hover:scale-105 transition-transform">
                  <Award className="text-blue-400 flex-shrink-0 mt-1" />
                  <span>Max Rating - Codeforces(1102) & CodeChef(1459)</span>
                </li>
                <li className="flex items-start gap-3 transform hover:scale-105 transition-transform">
                  <Award className="text-blue-400 flex-shrink-0 mt-1" />
                  <span>Solved more than 300+ problems on CodeChef and 100+ problems on Codeforces</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Mail size={32} className="text-blue-400" />
            <h2 className="text-4xl font-bold">Get In Touch</h2>
          </div>
          <div className="bg-gray-700 p-8 rounded-lg">
            <p className="text-xl mb-6">Feel free to reach out for opportunities or collaborations</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a href="mailto:mohitsh0192@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail size={20} />
                <span>mohitsh0192@gmail.com</span>
              </a>
              <a href="tel:+916230661084" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone size={20} />
                <span>+91 6230661084</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Chandigarh, India</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default App;