import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
                            &copy; {currentYear} Rutvik. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com/Rutvik" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <FiGithub size={24} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/Rutvik" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <FiLinkedin size={24} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="https://wa.me/YourPhoneNumber" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 dark:hover:text-green-400 transition-colors">
                            <FaWhatsapp size={24} />
                            <span className="sr-only">WhatsApp</span>
                        </a>
                        <a href="mailto:rutvikghonge@gmail.com" className="text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-colors">
                            <FiMail size={24} />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
