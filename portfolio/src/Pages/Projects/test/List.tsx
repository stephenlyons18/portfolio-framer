import React from 'react';
import { items } from './data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
interface cardProps {
    id: string;
    title: string;
    category: string;
    theme: string;
}
const Card: React.FC<cardProps> = (cardProps) => {
    return (
        <li className={`card ${cardProps.theme}`}>
            <div className="card-content-container">
                <motion.div
                    className="card-content"
                    layoutId={`card-container-${cardProps.id}`}
                >
                    <motion.div
                        className="card-image-container"
                        layoutId={`card-image-container-${cardProps.id}`}
                    >
                        <img
                            className="card-image"
                            src={`images/${cardProps.id}.jpg`}
                            alt=""
                        />
                    </motion.div>
                    <motion.div
                        className="title-container"
                        layoutId={`title-container-${cardProps.id}`}
                    >
                        <span className="category">{cardProps.category}</span>
                        <h2>{cardProps.title}</h2>
                    </motion.div>
                </motion.div>
            </div>
            <Link to={cardProps.id} className={`card-open-link`} />
        </li>
    );
};
interface listProps {
    selectedId: string;
}
export const List: React.FC<listProps> = (listProps) => {
    return (
        <ul className="card-list">
            {items.map((card) => (
                <Card
                    key={card.id}
                    {...card}
                    isSelected={card.id === listProps.selectedId}
                />
            ))}
        </ul>
    );
};
