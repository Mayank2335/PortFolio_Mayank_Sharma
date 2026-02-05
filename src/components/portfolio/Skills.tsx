import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'programming' | 'ai' | 'tools';

interface Skill {
  name: string;
  category: SkillCategory[];
}

const skills: Skill[] = [
  // Frontend
  { name: 'HTML', category: ['frontend'] },
  { name: 'CSS', category: ['frontend'] },
  { name: 'JavaScript', category: ['frontend', 'programming'] },
  { name: 'React.js', category: ['frontend'] },
  { name: 'Redux', category: ['frontend'] },
  { name: 'Tailwind CSS', category: ['frontend'] },
  // Backend
  { name: 'Node.js', category: ['backend'] },
  { name: 'Express.js', category: ['backend'] },
  { name: 'MongoDB', category: ['backend'] },
  { name: 'JWT Auth', category: ['backend'] },
  { name: 'Google OAuth', category: ['backend'] },
  // Programming
  { name: 'Java', category: ['programming'] },
  { name: 'C++', category: ['programming'] },
  { name: 'DSA', category: ['programming'] },
  // AI
  { name: 'Prompt Engineering', category: ['ai'] },
  { name: 'RAG Systems', category: ['ai'] },
  { name: 'Gen AI', category: ['ai'] },
  // Tools
  { name: 'Git & GitHub', category: ['tools'] },
  { name: 'Postman', category: ['tools'] },
  { name: 'VS Code', category: ['tools'] },
  { name: 'Figma', category: ['tools'] },
];

const categories: { value: SkillCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'programming', label: 'Programming' },
  { value: 'ai', label: 'AI' },
  { value: 'tools', label: 'Tools' },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category.includes(activeCategory));

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="mono text-primary">02.</span>
            <h2 className="section-heading">Skills & Technologies</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-primary text-primary-foreground glow-sm'
                    : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="flex flex-wrap gap-3"
          >
            {filteredSkills.map((skill, index) => (
              <motion.span
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="skill-badge cursor-pointer hover:border-primary/50 transition-colors"
              >
                {skill.name}
              </motion.span>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 glass-card p-8"
          >
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Tech Stack Focus
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-primary font-medium mb-2">Primary Stack</h4>
                <p className="text-muted-foreground">
                  MERN (MongoDB, Express.js, React.js, Node.js) with Redux for state 
                  management and Tailwind CSS for modern styling.
                </p>
              </div>
              <div>
                <h4 className="text-primary font-medium mb-2">Exploring</h4>
                <p className="text-muted-foreground">
                  Generative AI integration, RAG pipelines, system design patterns, 
                  and advanced authentication mechanisms.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;