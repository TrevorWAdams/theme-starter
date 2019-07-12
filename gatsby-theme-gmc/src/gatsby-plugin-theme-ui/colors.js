const primary = [
  `hsla(226, 100%, 97%, 1)`,
  `hsla(226, 93%, 88%, 1)`,
  `hsla(226, 93%, 79%, 1)`,
  `hsla(226, 87%, 62%, 1)`,
  `hsla(227, 85%, 48%, 1)`,
  `hsla(227, 100%, 40%, 1)`,
  `hsla(227, 100%, 34%, 1)`,
  `hsla(228, 100%, 26%, 1)`,
]

const secondary = [
  `hsla(104, 82%, 97%, 1)`,
  `hsla(104, 82%, 87%, 1)`,
  `hsla(104, 80%, 76%, 1)`,
  `hsla(104, 77%, 59%, 1)`,
  `hsla(104, 84%, 45%, 1)`,
  `hsla(104, 100%, 36%, 1)`,
  `hsla(104, 100%, 29%, 1)`,
  `hsla(104, 100%, 21%, 1)`,
]

const highlight = [
  `hsla(337, 100%, 97%, 1)`,
  `hsla(335, 82%, 87%, 1)`,
  `hsla(336, 80%, 76%, 1)`,
  `hsla(338, 77%, 59%, 1)`,
  `hsla(340, 84%, 45%, 1)`,
  `hsla(341, 100%, 36%, 1)`,
  `hsla(343, 100%, 29%, 1)`,
  `hsla(334, 100%, 21%, 1)`,
]

const gray = [
  `hsla(0, 0%, 90%, 1)`,
  `hsla(0, 0%, 80%, 1)`,
  `hsla(0, 0%, 70%, 1)`,
  `hsla(0, 0%, 60%, 1)`,
  `hsla(0, 0%, 50%, 1)`,
  `hsla(0, 0%, 40%, 1)`,
  `hsla(0, 0%, 30%, 1)`,
  `hsla(0, 0%, 20%, 1)`,
]

const black = `hsla(0, 0%, 10%, 1)`

const white = `hsla(0, 0%, 90%, 1)`

export default {
  text: black,
  background: white,
  primary,
  secondary,
  muted: gray[3],
  highlight,
  prism: {
    background: `#011627`,
    comment: `#809393`,
    string: `#addb67`,
    var: `#d6deeb`,
    number: `#f78c6c`,
    constant: `#82aaff`,
    punctuation: `#c792ea`,
    className: `#ffc98b`,
    tag: `#ffa7c4`,
    boolean: `#ff5874`,
    property: `#80cbc4`,
    namespace: `#b2ccd6`,
    highlight: `hsla(207, 95%, 15%, 1)`,
  },
  header: {
    text: white,
    background: primary[7],
  },
  footer: {
    text: white,
    background: primary[7],
  },
  sidebar: {
    text: primary[7],
    background: primary[1],
  },
  sidepane: {
    text: primary[7],
    background: gray[1],
  },
  modes: {
    dark: {
      text: white,
      background: black,
      primary,
      secondary,
      muted: gray[3],
      highlight,
      header: {
        text: white,
        background: primary[7],
      },
      footer: {
        text: white,
        background: primary[7],
      },
      sidebar: {
        text: primary[1],
        background: primary[5],
      },
      sidepane: {
        text: white,
        background: gray[7],
      },
    },
  },
}
