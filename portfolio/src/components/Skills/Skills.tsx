import React from 'react';
import { motion } from 'framer-motion';
import './Skills.scss';
export const Skills = () => {
    return (
        <motion.div
            className="skillsContainer"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            {skills.map((skill) => {
                return (
                    <motion.div key={skill.skill}>
                        <motion.h3 className="skillText">
                            {skill.skill}
                        </motion.h3>
                        <motion.div
                            className="skillsBar"
                            variants={skillVariants}
                            initial="closed"
                            animate="full"
                            custom={skill}
                        />
                    </motion.div>
                );
            })}
        </motion.div>
    );
};
const skills = [
    {
        skill: 'JavaScript',
        level: '90%',
    },
    {
        skill: 'Python',
        level: '75%',
    },
    {
        skill: 'HTML5',
        level: '85%',
    },
    {
        skill: 'Linux / Kali Linux',
        level: '70%',
    },
    {
        skill: 'Java',
        level: '65%',
    },
    {
        skill: 'TypeScript',
        level: '85%',
    },
    {
        skill: 'React.js',
        level: '80%',
    },
];
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 5,
            staggerChildren: 1,
        },
    },
};
const skillVariants = {
    closed: { width: '0px' },
    full: (skill) => ({
        width: skill.level,
        transition: {
            duration: 5,
            type: 'spring',
            stiffness: 566,
            damping: 32,
            mass: 3.9,
        },
    }),
};
