export type ArticleNode = {
  id: string
  title: string
  slug: string
  subtitle?: string
  position: {
    x: number
    y: number
  }
  connections: string[]

}
export const articleNodes: ArticleNode[] = [
  {
    id: "everything-vibrates",
    title: "Everything Vibrates: The Hidden Language of Reality",

    slug: "everything-vibrates-the-hidden-language-of-reality",
    position: { x: 100, y: 260 },
    connections: [
      "quantum-physics-islam",
      "beyond-the-naked-eye",
      "dimensions-of-reality"
    ],
  },

  {
    id: "quantum-physics-islam",
    title: "Quantum Physics and Islam",
    slug: "quantum-physics-and-islam",
    position: { x: 420, y: 100 },
    connections: [
      "everything-vibrates",
      "question-of-consciousness",
      "dimensions-of-reality"
    ],
  },

  {
    id: "beyond-the-naked-eye",
    title: "Beyond the Naked Eye",
    slug: "beyond-the-naked-eye",
    position: { x: 420, y: 420 },
    connections: [
      "everything-vibrates",
      "the-design-of-our-sense",
      "question-of-consciousness"
    ],
  },

  {
    id: "question-of-consciousness",
    title: "The Question of Consciousness",
    slug: "the-question-of-consciousness",
    position: { x: 780, y: 80 },
    connections: [
      "quantum-physics-islam",
      "beyond-the-naked-eye",
      "dimensions-of-reality"
    ],
  },

  {
    id: "the-design-of-our-sense",
    title: "The Design of Our Senses",
    slug: "the-design-of-our-sense",
    position: { x: 760, y: 300 },
    connections: [
      "beyond-the-naked-eye",
      "question-of-consciousness"
    ],
  },

  {
    id: "dimensions-of-reality",
    title: "Dimensions of Reality",
    slug: "dimensions-of-reality",
    position: { x: 800, y: 520 },
    connections: [
      "everything-vibrates",
      "quantum-physics-islam",
      "fibonacci-geometry-of-life"
    ],
  },

  {
    id: "inner-alchemist",
    title: "The Inner Alchemist",
    slug: "the-inner-alchemist",
    position: { x: 1120, y: 280 },
    connections: [
      "fibonacci-geometry-of-life",
      "tarot-language-of-symbols"
    ],
  },

  {
    id: "fibonacci-geometry-of-life",
    title: "Fibonacci Sequence: The Geometry of Life",
    slug: "fibonacci-sequence-the-geometry-of-life",
    position: { x: 1140, y: 520 },
    connections: [
      "dimensions-of-reality",
      "inner-alchemist"
    ],
  },

  {
    id: "tarot-language-of-symbols",
    title: "Tarot as a Language of Symbols",
    slug: "tarot-as-a-language-of-symbols",
    position: { x: 1200, y: 70 },
    connections: [
      "inner-alchemist",
      "question-of-consciousness"
    ],
  },
]