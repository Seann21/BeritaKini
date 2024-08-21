import { useState, useEffect } from 'react';

interface NewsData {
  title: string;
  pubDate: string;
  thumbnail: string;
  link: string;
  category: string;
}

interface Post {
  title: string;
  pubDate: string;
  thumbnail?: string;
  link: string;
  category: string;
}

const useFetchNews = () => {
  const [newsData, setNewsData] = useState<NewsData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch('https://api-berita-indonesia.vercel.app/cnn/terbaru');
        if (!response.ok) {
          throw new Error('Failed to fetch news data');
        }
        const data = await response.json();
        const filteredData = data.data.posts.slice(0, 3).map((post: Post) => ({
          title: post.title,
          pubDate: post.pubDate,
          thumbnail: post.thumbnail || 'default-thumbnail.jpg',
          link: post.link,
          category: post.category,
        }));
        setNewsData(filteredData);
      } catch (error) {
        setError('Failed to fetch news data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  return { newsData, loading, error };
};

export default useFetchNews;