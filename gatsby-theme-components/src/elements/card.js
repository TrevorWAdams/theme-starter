/** @jsx jsx */
import { jsx } from "theme-ui"

const Card = props => {
  return (
    <div
      {...props}
      sx={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        width: "100%",
        p: 1,
      }}
    />
  )
}

export default Card