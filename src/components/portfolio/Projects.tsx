import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Full Stack E-Commerce Platform',
    description: 'A comprehensive e-commerce solution with complete user authentication, product management, shopping cart functionality, and order management system.',
    features: [
      'User authentication (JWT + Google login)',
      'Product management & search',
      'Cart & order management',
      'Cancel order feature',
      'Redux global state management',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'JWT'],
    github: 'https://github.com/Mayank2335',
    featured: true,
  },
  {
    title: 'Bhaad Suraksha Dal - Flood Alert System',
    description: 'A disaster safety system providing real-time flood data visualization and early warning alerts to help communities prepare for natural disasters.',
    features: [
      'Real-time flood data integration',
      'Risk level visualization',
      'Alert notification system',
      'Interactive maps',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'APIs'],
    github: 'https://github.com/Mayank2335',
    featured: true,
  },
  {
    title: 'MongoDB Entity-based Dataset',
    description: 'A creative database project exploring "Most Ridiculous Things People Ever Searched on Google" with structured collections and schema design.',
    features: [
      'Structured MongoDB collections',
      'Schema design patterns',
      'Dummy frontend component',
      'Data visualization',
    ],
    tech: ['MongoDB', 'Node.js', 'React'],
    github: 'https://github.com/Mayank2335',
    featured: false,
  },
  {
    title: 'Gen AI Course Project',
    description: 'Comprehensive exploration of Generative AI concepts including prompt engineering, RAG systems, and structured output generation.',
    features: [
      'System & user prompting',
      'RAG pipeline implementation',
      'Function calling',
      'Structured JSON output',
    ],
    tech: ['Python', 'LangChain', 'OpenAI', 'RAG'],
    github: 'https://github.com/Mayank2335',
    featured: true,
  },
];

const allTech = [...new Set(projects.flatMap(p => p.tech))];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.tech.includes(filter));

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-6">
            <span className="mono text-primary">03.</span>
            <h2 className="section-heading">Featured Projects</h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <p className="section-subheading mb-10">
            Real-world applications built from scratch, not just tutorial follow-alongs.
          </p>

          {/* Tech Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/50 text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </button>
            {allTech.slice(0, 8).map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  filter === tech
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                {tech}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`project-card relative ${
                  project.featured ? 'md:col-span-1' : ''
                } h-full border border-border/40 bg-card p-6 rounded-xl hover:shadow-lg hover:shadow-primary/5 transition-all`}
              >
                {project.featured && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <ul className="mb-6 space-y-1">
                  {project.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs mono text-primary bg-primary/10 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/Mayank2335" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;