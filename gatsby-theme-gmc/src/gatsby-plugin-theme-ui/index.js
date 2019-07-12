import merge from "lodash.merge"
import typography from "./typography"
import colors from "./colors"
import styles from "./styles"
import prism from "./prism"

export default merge({}, typography, {
  initialColorMode: `light`,
  colors,
  fonts: {
    body: `system-ui, sans-serif`,
    heading: `Montserrat, sans-serif`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: 1024,
    maxWidth: 1920
  },
  styles,
  prism,
})
