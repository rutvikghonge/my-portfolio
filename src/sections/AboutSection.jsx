import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Displaying an illustration or photo placeholder here */}
                        <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                            <span className="text-gray-400 dark:text-gray-500 text-6xl">📸 Photo</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 text-lg text-gray-600 dark:text-gray-300"
                    >
                        <p>
                            Hello! I'm <span className="font-semibold text-gray-900 dark:text-white">Rutvik</span>, an impassioned
                            <strong className="text-blue-600 dark:text-blue-400 font-semibold px-1">MERN Stack Developer</strong>
                            with a knack for creating intuitive, dynamic user experiences. I thrive on translating complex problems into
                            elegant, performant web applications.
                        </p>
                        <p>
                            My expertise centers around MongoDB, Express.js, React, and Node.js.
                            Alongside my MERN foundation, I also have experience as a
                            <strong className="font-semibold text-gray-900 dark:text-white px-1">Vue.js Developer</strong>,
                            giving me a versatile perspective on frontend architectures.
                        </p>
                        <p>
                            I am continually expanding my technical horizons, possessing
                            <strong className="font-semibold text-gray-900 dark:text-white px-1">basic Golang</strong> knowledge
                            for backend efficiency, and hands-on experience designing robust relational databases with
                            <strong className="font-semibold text-gray-900 dark:text-white px-1">PostgreSQL</strong>.
                        </p>
                        <p>
                            Whether it's crafting responsive UIs, architecting secure RESTful APIs, or optimizing database queries,
                            I am dedicated to writing clean, maintainable code and delivering high-quality digital products.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
