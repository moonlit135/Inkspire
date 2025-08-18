const recentStories = [
  {
    id: 4,
    title: "The Last Message",
    writer: "Alex Thompson",
    excerpt: "The final transmission changed everything we knew about the universe...",
    date: "Aug 5, 2023",
    applauseCount: 721,
  },
  {
    id: 5,
    title: "Beneath the Surface",
    writer: "Nina Patel",
    excerpt: "What they found beneath the ancient ruins defied all scientific explanation...",
    date: "Aug 3, 2023",
    applauseCount: 689,
  },
  {
    id: 6,
    title: "The Clockmaker's Secret",
    writer: "Henry Wilson",
    excerpt: "Every clock in the shop told a different time, and each held a secret...",
    date: "Aug 1, 2023",
    applauseCount: 654,
  }
];

const topStories = [
    {
      id: 1,
      title: "The Last Light",
      writer: "Sarah Johnson",
      excerpt: "As the sun set for the last time, she made her choice...",
      date: "Aug 15, 2023",
      applauseCount: 1287,
      medal: "🥇",
     
    },
    {
      id: 2,
      title: "Midnight Train",
      writer: "Michael Chen",
      excerpt: "The train's whistle echoed through the empty station...",
      date: "Aug 12, 2023",
      applauseCount: 945,
      medal: "🥈",
      
    },
    {
      id: 3,
      title: "The Forgotten Key",
      writer: "Emma Williams",
      excerpt: "The key had been in the drawer for as long as I could remember...",
      date: "Aug 10, 2023",
      applauseCount: 823,
      medal: "🥉",
      
    }
  ];

const risingVoices = [
  {
    id: 'rv1',
    name: 'Aisha Khan',
   
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    excerpt: 'Her stories explore the intersection of culture and identity in modern cities.',
    
  },
  {
    id: 'rv2',
    name: 'Carlos Mendez',
    
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    excerpt: 'Master of micro-fiction, painting vivid pictures in just a few hundred words.',
    
  },
  {
    id: 'rv3',
    name: 'Priya Patel',
    
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    excerpt: 'Blends mythology with futuristic concepts in her thought-provoking narratives.',
    
  },
  
];

const latestCollections = [
  {
    id: 'lc1',
    title: 'Urban Echoes',
    author: 'Marcus Chen',
    cover: '/images/mini1.jpg',
    description: 'Tales from the city that never sleeps',
  
  },
  {
    id: 'lc2',
    title: 'Midnight Whispers',
    author: 'Sarah Johnson',
    cover: '/images/mini2.jpg',
    description: 'Short stories for the night owls',
    
  },
  {
    id: 'lc3',
    title: 'Forgotten Realms',
    author: 'David Kim',
    cover: '/images/mini3.jpg',
    description: 'Exploring worlds beyond imagination',
    
  },
  {
    id: 'lc4',
    title: 'Coffee Shop Chronicles',
    author: 'Emma Wilson',
    cover: '/images/mini1.jpg',
    description: 'Stories brewed to perfection',
    
  },
  {
    id: 'lc5',
    title: 'The Last Train',
    author: 'James Rodriguez',
    cover: '/images/mini2.jpg',
    description: 'Journeys that change lives',
    
  },
  {
    id: 'lc6',
    title: 'Between the Lines',
    author: 'Priya Patel',
    cover: '/images/mini3.jpg',
    description: 'Stories that read between the lines',
    
  }
];

const shortstoriesCollections = [
  {
    id: 'sc1',
    title: 'Tales from the Dark Side',
    author: 'Elena Rodriguez',
    cover: '/images/mini1.jpg',
    description: 'A chilling collection of horror stories that will keep you up at night',
    
    genres: 'Horror, Thriller',
    rating: 4.8
  },
  {
    id: 'sc2',
    title: 'Love in the Time of Coffee',
    author: 'Marcus Chen',
    cover: '/images/mini2.jpg',
    description: 'Heartwarming romantic encounters in everyday coffee shops',
    
    genres: 'Romance, Contemporary',
    rating: 4.6
  },
  {
    id: 'sc3',
    title: 'The Detective Files',
    author: 'Olivia Pierce',
    cover: '/images/mini3.jpg',
    description: 'Mysteries that will challenge even the most astute readers',
    
    genres: 'Mystery, Crime',
    rating: 4.9
  },
  {
    id: 'sc4',
    title: 'Cosmic Wanderers',
    author: 'Raj Patel',
    cover: '/images/mini1.jpg',
    description: 'Science fiction adventures across distant galaxies',
    
    genres: 'Sci-Fi, Adventure',
    rating: 4.7
  },
  {
    id: 'sc5',
    title: 'The Last Laugh',
    author: 'Jenny Thompson',
    cover: '/images/mini2.jpg',
    description: 'Hilarious takes on modern life and its absurdities',
    
    genres: 'Humor, Satire',
    rating: 4.5
  },
  {
    id: 'sc6',
    title: 'Historical Echoes',
    author: 'Thomas Wright',
    cover: '/images/mini3.jpg',
    description: 'Fictional accounts based on real historical events',
    
    genres: 'Historical Fiction',
    rating: 4.8
  },
  {
    id: 'sc7',
    title: 'Urban Legends',
    author: 'Sophia Martinez',
    cover: '/images/mini1.jpg',
    description: 'Modern myths and legends from the city streets',
    
    genres: 'Urban Fantasy, Horror',
    rating: 4.4
  },
  {
    id: 'sc8',
    title: 'The Last Frontier',
    author: 'Dmitri Petrov',
    cover: '/images/mini2.jpg',
    description: 'Survival stories from Earth\'s most remote locations',
    
    genres: 'Adventure, Survival',
    rating: 4.9
  }
];

export { topStories, risingVoices, latestCollections, shortstoriesCollections };
export default topStories;