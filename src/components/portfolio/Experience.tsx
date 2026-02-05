import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Code, Rocket, Target, Zap } from 'lucide-react';

const experiences = [
  {
    icon: GraduationCap,
    title: 'Kalvium Software Engineering Program',
    description: 'Intensive, industry-focused computer science curriculum with hands-on project development and real-world problem solving.',
    highlights: ['Milestone-based learning', 'Industry mentorship', 'Project-first approach'],
  },
  {
    icon: Code,
    title: 'Daily Coding Practice',
    description: 'Consistent practice in Data Structures & Algorithms with Java and C++, building a strong foundation for efficient problem-solving.',
    highlights: ['DSA with Java & C++', 'Sorting & recursion', 'Stacks, queues & more'],
  },
  {
    icon: Rocket,
    title: 'Full Stack Development',
    description: 'Building production-grade applications with the MERN stack, from database design to frontend deployment.',
    highlights: ['MERN stack mastery', 'Authentication systems', 'RESTful APIs'],
  },
  {
    icon: Target,
    title: 'System Design Exposure',
    description: 'Learning scalable architecture patterns and best practices for building maintainable, enterprise-grade applications.',
    highlights: ['Scalability patterns', 'Database optimization', 'API design'],
  },
  {
    icon: Zap,
    title: 'Generative AI Exploration',
    description: 'Diving into the cutting edge of AI with practical projects in prompt engineering, RAG systems, and AI integration.',
    highlights: ['RAG pipelines', 'Prompt engineering', 'Function calling'],
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