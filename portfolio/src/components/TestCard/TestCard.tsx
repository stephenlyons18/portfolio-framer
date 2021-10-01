import React, useState from 'react'
import { AnimateSharedLayout, motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const TestCard = () => {
    const [selectedId, setSelectedId] = useState(null)
    return (
        <motion.div>
            <AnimateSharedLayout type="crossfade">
            {items.map( item: React.FC => (
                <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
                </motion.div>
            ))}
            
            <AnimatePresence>
                {selectedId && (
                <motion.div layoutId={selectedId}>
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.h2>{item.title}</motion.h2>
                    <motion.button onClick={() => setSelectedId(null)} />
                </motion.div>
                )}
            </AnimatePresence>
            </AnimateSharedLayout>
        </motion.div>
    )
}

export default TestCard
