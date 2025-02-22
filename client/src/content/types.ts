export interface Project {
  id: string;
  title: string;
  category: string;
  role: string;
  timeline: string;
  tools: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  images: {
    thumbnail: string;
    header: string;
    gallery: string[];
  };
}
