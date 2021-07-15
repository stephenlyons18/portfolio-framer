import { motion } from "framer-motion"

// Learn more: https://www.framer.com/docs/guides/code-components/

export default function Home(props: { text: any; onTap: any; style: any }) {
    const { text, onTap, style } = props

    // "...style" enables switching between auto & fixed sizing
    // Learn more: https://www.framer.com/docs/guides/auto-sizing
    return (
        <motion.div style={{ ...style, ...containerStyle }}>
            <motion.div
                style={squareStyle}
                onTap={onTap}
                whileTap={{
                    scale: 1.25,
                    rotate: 90,
                    backgroundColor: "#07F",
                }}
            >
                {text}
            </motion.div>
        </motion.div>
    )
}

Home.defaultProps = {
    text: "Tap",
}

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
}

const squareStyle = {
    margin: 50,
    padding: 50,
    color: "white",
    fontWeight: 600,
    borderRadius: 25,
    backgroundColor: "#09F",
    width: "max-content",
    whiteSpace: "pre-wrap",
    flexShrink: 0,
}
