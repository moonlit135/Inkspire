// Editor's Picks - Top 3 featured books
const editorsPicks = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    coverImage: "/images/cover1.jpg",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    rating: 4.5,
    category: "Fiction"

  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverImage: "/images/cover2.jpg",
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish.",
    rating: 4.8,
    category: "Mystery"
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    coverImage: "/images/cover3.jpg",
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.",
    rating: 4.7,
    category: "Science Fiction"
  }
];

// All Books Collection - 14 books total (including the 3 editor's picks)
const collectionBooks = [
  ...editorsPicks, // Includes the first 3 books from editor's picks
  {
    id: 4,
    title: "The Song of Achilles",
    author: "Madeline Miller",
    coverImage: "/images/cover4.jpg",
    description: "A tale of gods, kings, immortal fame, and the human heart, The Song of Achilles is a dazzling literary feat that brilliantly reimagines Homer's enduring masterwork, The Iliad.",
    rating: 4.6,
    category: "Thriller"
  },
  {
    id: 5,
    title: "The House in the Cerulean Sea",
    author: "TJ Klune",
    coverImage: "/images/cover5.jpg",
    description: "A magical island. A dangerous task. A burning secret. Linus Baker leads a quiet, solitary life. At forty, he lives in a tiny house with a devious cat and his old records.",
    rating: 4.5,
    category: "Science Fiction"
  },
  {
    id: 6,
    title: "Piranesi",
    author: "Susanna Clarke",
    coverImage: "/images/cover6.jpg",
    description: "Piranesi's house is no ordinary building: its rooms are infinite, its corridors endless, its walls are lined with thousands upon thousands of statues.",
    rating: 4.3,
    category: "Thriller"
  },
  {
    id: 7,
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    coverImage: "/images/cover7.jpg",
    description: "A Life No One Will Remember. A Story You Will Never Forget. France, 1714: in a moment of desperation, a young woman makes a Faustian bargain to live forever.",
    rating: 4.4,
    category: "Mystery"
  },
  {
    id: 8,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    coverImage: "/images/cover8.jpg",
    description: "Four septuagenarians meet weekly to investigate unsolved murders in this witty mystery about friendship, aging, and the enduring appeal of crime solving.",
    rating: 4.2,
    category: "Romance"
  },
  {
    id: 9,
    title: "The Vanishing Half",
    author: "Brit Bennett",
    coverImage: "/images/cover1.jpg",
    description: "The Vignes twin sisters will always be identical. But after growing up together in a small, southern black community and running away at age sixteen, it's not just the shape of their daily lives that is different as adults.",
    rating: 4.3,
    category: "Romance"
  },
  {
    id: 10,
    title: "The Four Winds",
    author: "Kristin Hannah",
    coverImage: "/images/cover2.jpg",
    description: "An epic novel of love and heroism and hope, set against the backdrop of one of America's most defining eras—the Great Depression.",
    rating: 4.6,
    category: "Science Fiction"
  },
  {
    id: 11,
    title: "The Sanatorium",
    author: "Sarah Pearse",
    coverImage: "/images/cover3.jpg",
    description: "An imposing, isolated hotel high in the Swiss Alps is the last place Elin Warner wants to be. But she's taken time off from her job as a detective, so when she receives an invitation out of the blue to celebrate her estranged brother's recent engagement, she has no choice but to accept.",
    rating: 3.9,
    category: "Romance"
  },
  {
    id: 12,
    title: "The Push",
    author: "Ashley Audrain",
    coverImage: "/images/cover4.jpg",
    description: "A tense, page-turning psychological drama about the making and breaking of a family—and a woman whose experience of motherhood is nothing at all what she hoped for—and everything she feared.",
    rating: 4.2,
    category: "Mystery"
  },
  {
    id: 13,
    title: "The Last Thing He Told Me",
    author: "Laura Dave",
    coverImage: "/images/cover4.jpg",
    description: "Before Owen Michaels disappears, he manages to smuggle a note to his beloved wife of one year: Protect her. Despite her confusion and fear, Hannah Hall knows exactly to whom the note refers—Owen's sixteen-year-old daughter, Bailey.",
    rating: 4.3,
    category: "Thriller"
  }
];

// Export both arrays for use in different components
export { editorsPicks, collectionBooks };

