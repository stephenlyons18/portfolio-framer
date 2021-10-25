import React from 'react';
import { motion } from 'framer-motion';
import './Skills.scss';
export const Skills = () => {
    return (
        <motion.div
            className="skillsContainer"
            variants={containerVariants}
            initial="closed"
            animate="show"
            exit="exit"
        >
            {skills.map((skill) => {
                return (
                    <motion.div key={skill.skill}>
                        <motion.h3 className="skillText">
                            {skill.skill} : {skill.level}%
                        </motion.h3>

                        <motion.div
                            className="skillsBar"
                            variants={skillVariants}
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
        level: '90',
    },
    {
        skill: 'Python',
        level: '75',
    },
    {
        skill: 'HTML5',
        level: '85',
    },
    {
        skill: 'Linux / Kali Linux',
        level: '70',
    },
    {
        skill: 'Java',
        level: '65',
    },
    {
        skill: 'TypeScript',
        level: '85',
    },
    {
        skill: 'React.js',
        level: '80',
    },
];
const containerVariants = {
    closed: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 },
};
const skillVariants = {
    closed: { width: '0px' },
    show: (skill) => ({
        width: (skill.level - 10).toString() + '%',
        transition: {
            type: 'spring',
            stiffness: 566,
            damping: 32,
            mass: 3.9,
        },
    }),
};
