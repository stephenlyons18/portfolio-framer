import { motion } from "framer-motion"

// Learn more: https://www.framer.com/docs/guides/code-components/

export default function MotionDiv(props: { text: any; onTap: any; style: any; whileTap: any; }) {
    const { text, onTap, style, whileTap } = props

    // "...style" enables switching between auto & fixed sizing
    // Learn more: https://www.framer.com/docs/guides/auto-sizing
    return (
        <motion.div style={{ ...style, ...containerStyle }}>
            <motion.div
                style={squareStyle}
                onTap={onTap}
                whileTap={whileTap}
            >
                {text}
            </motion.div>
        </motion.div>
    )
}

MotionDiv.defaultProps = {
    text: "Tap",
}

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    margin: 50,
}

const squareStyle = {
    
    padding: 30,
    color: "white",
    fontWeight: 600,
    borderRadius: 15,
    backgroundColor: "#09F",
    width: "max-content",
    whiteSpace: "pre-wrap",
    flexShrink: 0,
}
