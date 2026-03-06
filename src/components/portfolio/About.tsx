import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Cpu, Sparkles } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Building end-to-end web applications with the MERN stack',
  },
  {
    icon: Database,
    title: 'Backend Architecture',
    description: 'Designing robust APIs and database structures',
  },
  {
    icon: Cpu,
    title: 'System Design',
    description: 'Understanding scalable architecture patterns',
  },
  {
    icon: Sparkles,
    title: 'Generative AI',
    description: 'Exploring RAG systems and prompt engineering',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="mono text-primary">01.</span>
            <h2 className="section-heading">About Me</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a Computer Science student at <span className="text-foreground font-medium">Chitkara University, Baddi</span>, 
                pursuing a specialized CSE program in partnership with <span className="text-primary font-medium">Kalvium</span>. 
                I'm passionate about full-stack development and love building projects that solve real problems, moving beyond simple tutorials to create production-ready software.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I work extensively with the <span className="text-primary font-medium">MERN stack</span> (MongoDB, Express.js, 
                React, Node.js) and have a solid grasp of state management with Redux. I also implement secure authentication using JWT and OAuth, and design responsive UIs with Tailwind CSS.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm also exploring <span className="text-primary font-medium">Generative AI</span>, working with 
                RAG pipelines and prompt engineering to integrate AI capabilities into my applications.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                My coding foundation is built on <span className="text-foreground font-medium">Data Structures 
                & Algorithms</span> in Java and C++, ensuring I write efficient and optimized code.
              </p>
            </motion.div>

            {/* Highlight Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-5 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5"
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;