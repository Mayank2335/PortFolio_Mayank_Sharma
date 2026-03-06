import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Rocket, Target, Zap } from 'lucide-react';

const experiences = [
  {
    icon: GraduationCap,
    title: 'CSE at Chitkara University (with Kalvium)',
    description: 'Pursuing a specialized Computer Science Engineering degree that merges academic rigor with intensive, industry-aligned practical training.',
    highlights: ['Full Stack Specialization', 'Work-integrated learning', 'Real-world project delivery'],
  },
  {
    icon: Code,
    title: 'Data Structures & Algorithms',
    description: 'Building a robust problem-solving foundation through consistent practice in Java and C++, focusing on efficiency and optimization.',
    highlights: ['DSA with Java & C++', 'Algorithm optimization', 'Complex problem solving'],
  },
  {
    icon: Rocket,
    title: 'Full Stack Engineering',
    description: 'Develoing end-to-end, production-grade applications using the MERN stack, managing everything from database schema to responsive frontend interfaces.',
    highlights: ['MERN stack proficiency', 'Secure authentication', 'RESTful API design'],
  },
  {
    icon: Target,
    title: 'System Design & Architecture',
    description: 'Understanding and applying scalable architecture patterns to build maintainable, high-performance software systems.',
    highlights: ['Scalable architecture', 'Database optimization', 'Clean code principles'],
  },
  {
    icon: Zap,
    title: 'AI Engineering & Innovation',
    description: 'Actively building with Generative AI technologies, implementing RAG pipelines and custom prompt engineering to enhance application intelligence.',
    highlights: ['RAG implementation', 'Prompt engineering', 'AI integration'],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-6">
            <span className="mono text-primary">04.</span>
            <h2 className="section-heading">Learning Journey</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <p className="section-subheading mb-12">
            My path in software engineering — from fundamentals to cutting-edge AI.
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start gap-6 ${
                    index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center glow-sm z-10">
                    <exp.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-[calc(50%-4rem)] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-0' : 'md:pl-0'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-default"
                    >
                      <h3 className="text-lg font-semibold mb-2 text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {exp.description}
                      </p>
                      <ul className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="text-xs mono text-primary bg-primary/10 px-2 py-1 rounded"
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-4rem)]" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Learning approach callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 glass-card p-8 text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-foreground">
              My Learning Philosophy
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I believe in <span className="text-primary">learning by building</span>.
              Every concept I learn gets applied to a real project. This hands-on approach
              has helped me develop practical skills that go beyond theoretical knowledge,
              following an agile-style methodology with continuous iteration and improvement.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;