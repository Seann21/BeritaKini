import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface PopularNewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
}

interface ApiResponseItem {
  title: string;
  category?: string;
  pubDate: string;
  thumbnail?: string;
}

const PopularNews: React.FC = () => {
  const [newsData, setNewsData] = useState<PopularNewsItem[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://api-berita-indonesia.vercel.app/cnn/nasional/');
        const fetchedNews = response.data.data.posts.map((item: ApiResponseItem, index: number) => ({
          id: index,
          title: item.title,
          category: item.category || 'Nasional', 
          date: new Date(item.pubDate).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
          imageUrl: item.thumbnail || 'https://via.placeholder.com/150', 
        }));
        setNewsData(fetchedNews.slice(0, 3)); 
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-2xl px-[15px] mx-6 py-5 font-NunitoSans font-semibold mb-8 text-gray-900 border-l-4 rounded-l-sm h-16 border-primary">
        Berita Terpopuler
      </h2>
      <div className="flex flex-col gap-7 ml-8">
        {newsData.map((news: PopularNewsItem, index: number) => (
          <div key={news.id} className="flex bg-white rounded-xl overflow-hidden shadow-md relative">
            <div className="relative w-[200px] h-[110px]">
              <img src={news.imageUrl} alt={news.title} className="object-cover w-full h-full rounded-lg" />
              <div className="absolute left-7 -top-1 transform -translate-x-full bg-bullet text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                {index + 1}
              </div>
            </div>
            <div className="flex flex-col justify-between p-4 w-full">
              <h3 className="text-md font-semibold">{news.title}</h3>
              <div className="flex justify-between items-center text-xs text-grayskin py-2">
                <span className="font-semibold text-primary font-inter">{news.category}</span>
                <span className="font-bold font-inter">{news.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularNews;
