import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiLayers, FiLayout, FiSmartphone, FiTool } from 'react-icons/fi'
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobexd,
  SiElectron,
  SiExpo,
  SiFigma,
  SiFlutter,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSketch,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack
} from 'react-icons/si'

const skillCategories = [
  {
    title: "Frontend",
    icon: <FiCode size={24} />,
    skills: [
      { name: "React", icon: <SiReact />, level: 90 },
      { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
      { name: "TypeScript", icon: <SiTypescript />, level: 80 },
      { name: "JavaScript", icon: <SiJavascript />, level: 95 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 },
      { name: "Vue.js", icon: <SiVuedotjs />, level: 75 },
      { name: "Svelte", icon: <SiSvelte />, level: 70 },
    ]
  },
  {
    title: "Mobile",
    icon: <FiSmartphone size={24} />,
    skills: [
      { name: "React Native", icon: <SiReact />, level: 85 },
      { name: "Expo", icon: <SiExpo />, level: 80 },
      { name: "Flutter", icon: <SiFlutter />, level: 75 },
    ]
  },
  {
    title: "Backend",
    icon: <FiDatabase size={24} />,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs />, level: 85 },
      { name: "Python", icon: <SiPython />, level: 75 },
      { name: "MongoDB", icon: <SiMongodb />, level: 80 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 70 },
      { name: "GraphQL", icon: <SiGraphql />, level: 78 },
    ]
  },
  {
    title: "UI/UX Design",
    icon: <FiLayout size={24} />,
    skills: [
      { name: "Figma", icon: <SiFigma />, level: 92 },
      { name: "Sketch", icon: <SiSketch />, level: 85 },
      { name: "Adobe XD", icon: <SiAdobexd />, level: 80 },
      { name: "Photoshop", icon: <SiAdobephotoshop />, level: 75 },
      { name: "Illustrator", icon: <SiAdobeillustrator />, level: 70 },
    ]
  },
  {
    title: "JavaScript Tools",
    icon: <FiTool size={24} />,
    skills: [
      { name: "Electron.js", icon: <SiElectron />, level: 82 },
      { name: "Webpack", icon: <SiWebpack />, level: 78 },
      { name: "Vite", icon: <SiVite />, level: 85 },
    ]
  },
  {
    title: "Tools",
    icon: <FiTool size={24} />,
    skills: [
      { name: "Git", icon: <SiGit />, level: 90 },
      { name: "DevOps", icon: <FiLayers />, level: 65 },
    ]
  }
]

const SkillBar = ({ name, level, icon }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 font-medium text-slate-700">
          <span className="text-teal-600">{icon}</span>
          {name}
        </div>
        <span className="text-sm text-slate-500">{level}%</span>
      </div>
      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"
        ></motion.div>
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools in my career spanning web development, mobile app creation, and UX/UI design. 
            With expertise in JavaScript frameworks, design tools, and cross-platform development, I bring both technical and creative skills to my projects.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-md border border-blue-100 hover:border-teal-200 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-teal-50 text-teal-600 shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
              </div>
              <div>
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} icon={skill.icon} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills