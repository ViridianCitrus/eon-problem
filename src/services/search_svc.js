export const EXAMPLE_VIDEO_DATA = [
  {
    "uuid": "c071d1a3-d5e6-41dd-bf50-665e3d95dd78",
    "author": "John Doe",
    "title": "Introduction to JavaScript",
    "thumbnailSrc": "https://example.com/thumbnail1.jpg"
  },
  {
    "uuid": "7cbe9f09-3ef4-43b6-8f21-85ac64e7d9df",
    "author": "Jane Smith",
    "title": "Python Tips and Tricks",
    "thumbnailSrc": "https://example.com/thumbnail2.jpg"
  },
  {
    "uuid": "18f51efc-41a9-424a-a556-08e2ce57c688",
    "author": "Tech Guru",
    "title": "Mastering Data Science",
    "thumbnailSrc": "https://example.com/thumbnail3.jpg"
  },
  {
    "uuid": "685ad750-232a-43d2-b5c5-160c12210e71",
    "author": "Fitness Enthusiast",
    "title": "Full Body Workout Routine",
    "thumbnailSrc": "https://example.com/thumbnail4.jpg"
  },
  {
    "uuid": "57f0543e-77e3-441b-bf50-18f3116be1a1",
    "author": "Cooking with Chef",
    "title": "Delicious Dessert Recipes",
    "thumbnailSrc": "https://example.com/thumbnail5.jpg"
  },
  {
    "uuid": "bc870c7e-22bf-4e54-b7ed-098de4efc71b",
    "author": "Traveler's Journey",
    "title": "Exploring Exotic Islands",
    "thumbnailSrc": "https://example.com/thumbnail6.jpg"
  },
  {
    "uuid": "3cd3f058-df80-40f3-8973-af3c00eb63cd",
    "author": "Gaming Geek",
    "title": "Top 10 Video Games of All Time",
    "thumbnailSrc": "https://example.com/thumbnail7.jpg"
  },
  {
    "uuid": "07bc281f-bfc7-4b86-aeb3-3a51102a12f6",
    "author": "Art Lover",
    "title": "Creating Digital Art",
    "thumbnailSrc": "https://example.com/thumbnail8.jpg"
  },
  {
    "uuid": "0a9b7083-e7c2-4e0d-9a3d-0f396f689c3d",
    "author": "Fashionista",
    "title": "Summer Fashion Trends",
    "thumbnailSrc": "https://example.com/thumbnail9.jpg"
  },
  {
    "uuid": "5bb71a38-06b3-4a5b-a59a-097dd232cfcd",
    "author": "Nature Photographer",
    "title": "Capturing Wildlife in Action",
    "thumbnailSrc": "https://example.com/thumbnail10.jpg"
  },
  {
    "uuid": "54d24e6c-c9d7-4929-81d9-b5de6d7d1a09",
    "author": "Science Enthusiast",
    "title": "The Wonders of Space",
    "thumbnailSrc": "https://example.com/thumbnail11.jpg"
  },
  {
    "uuid": "e5e43b71-5d43-47a7-ae49-24b872b828a8",
    "author": "Music Maven",
    "title": "Rocking Concert Highlights",
    "thumbnailSrc": "https://example.com/thumbnail12.jpg"
  },
  {
    "uuid": "81abf75f-5021-4385-a2e6-1fc20fcd3d3e",
    "author": "DIY Guru",
    "title": "Crafting Home Decor",
    "thumbnailSrc": "https://example.com/thumbnail13.jpg"
  },
  {
    "uuid": "6b3671fc-7f75-45b3-a580-85d0f163096f",
    "author": "Bookworm Reads",
    "title": "Literary Classics",
    "thumbnailSrc": "https://example.com/thumbnail14.jpg"
  },
  {
    "uuid": "f6b1e22f-5b52-4f77-947b-6edf9c4c04d5",
    "author": "Health and Wellness",
    "title": "Yoga for Beginners",
    "thumbnailSrc": "https://example.com/thumbnail15.jpg"
  }
];



export function searchVideos(query) {
  return new Promise(resolve => setTimeout(() => {
    const ret = EXAMPLE_VIDEO_DATA.filter((d) => d.title.toLowerCase().includes(query.toLowerCase()) || d.author.toLowerCase().includes(query.toLowerCase()));
    resolve(ret);
  }, 1000));
}