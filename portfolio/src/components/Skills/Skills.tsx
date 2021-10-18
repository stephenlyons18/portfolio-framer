import React from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';

export const Skills = () => {
    return (
        <motion.div>
            <AnimateSharedLayout>
                {skills.map((skill) => {
                    return (
                        <motion.div
                            className="skillsBar"
                            initial={{ width: '0px' }}
                            animate={{ width: skill.level }}
                        >
                            {skill.skill}
                        </motion.div>
                    );
                })}
                {/* <AnimatePresence>
                        {selectedId && <motion.img layoutId={selectedId} />}
                    </AnimatePresence> */}
            </AnimateSharedLayout>
        </motion.div>
    );
};
const skills = [
    {
        skill: 'JavaScript',
        level: '90px',
    },
    {
        skill: 'Python',
        level: '75px',
    },
    {
        skill: 'HTML',
        level: '85px',
    },
    {
        skill: 'Linux',
        level: '70px',
    },
    {
        skill: 'Java',
        level: '65px',
    },
    {
        skill: 'TypeScript',
        level: '85px',
    },
    {
        skill: 'React.js',
        level: '80px',
    },
];
// const skillsVariants = {
//     closed: {
//         width: 0,
//     },
//     open: {
//         width: item.skill,
//     },
// };
