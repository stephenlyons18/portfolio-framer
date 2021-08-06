import { motion } from "framer-motion"


// Learn more: https://www.framer.com/docs/guides/code-components/

export default function Home() {
    

    return (
        <motion.div style={containerStyle}>
            Hello
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
    background: "linear-gradient(to right, #A5FECB, #20BDFF, #5433FF)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


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
