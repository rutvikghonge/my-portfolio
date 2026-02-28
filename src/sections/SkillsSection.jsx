import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaVuejs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostgresql, SiGo } from 'react-icons/si';

const skills = [
    { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" />, category: 'Frontend' },
    { name: 'Vue.js', icon: <FaVuejs className="text-[#4FC08D]" />, category: 'Frontend' },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" />, category: 'Backend' },
    { name: 'Express.js', icon: <SiExpress className="text-gray-800 dark:text-gray-200" />, category: 'Backend' },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, category: 'Database' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" />, category: 'Database' },
    { name: 'Golang', icon: <SiGo className="text-[#00ADD8]" />, category: 'Backend (Basic)' },
    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" />, category: 'Tools' },
    { name: 'GitHub', icon: <FaGithub className="text-gray-800 dark:text-white" />, category: 'Tools' },
];

const SkillsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                        Tech Stack & Skills
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl dark:shadow-none dark:border dark:border-gray-700 flex flex-col items-center justify-center transition-all duration-300"
                        >
                            <div className="text-5xl mb-4">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-center">
                                {skill.name}
                            </h3>
                            <span className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                {skill.category}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
