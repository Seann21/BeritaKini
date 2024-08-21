import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaCalendarAlt } from 'react-icons/fa';
import PopularNews from '../components/PopularNews';
import Komentar from '../components/Komentar';
import UserComment from '../components/UserComment';
import NewsRelated from '../components/NewsRelated';

const DetailPage: React.FC = () => {
  const location = useLocation();
  const { title, description, category, date, imageUrl } = location.state || {};

  const formattedDate = date
    ? new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    : 'Tanggal tidak tersedia';

  return (
    <div className="container mx-auto p-9 my-28">
      <nav className="flex items-center text-gray-600 text-sm mb-4">
        <Link to="/" className="flex items-center text-[#333333] hover:text-slate-400">
          <FaHome className="mr-2" size={20} />
          <span className="font-medium font-inter">Beranda</span>
        </Link>
        <span className="mx-2 text-gray-400">{'>'}</span>
        <Link to="/nasional" className="text-[#333333] hover:text-slate-400">
          <span className="font-medium font-inter">Nasional</span>
        </Link>
        <span className="mx-2 text-gray-400">{'>'}</span>
        <span className="text-slate-500 cursor-pointer">Detail</span>
      </nav>

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="w-full lg:w-2/3 pr-6">
          <div className="mb-4">
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4 text-primary font-semibold">{category}</span>
              <div className="flex items-center">
                <FaCalendarAlt className="mr-2" />
                <span>{formattedDate}</span>
              </div>
            </div>
          </div>

          <div className="w-full h-auto mb-4">
            {imageUrl ? (
              <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg shadow-lg" />
            ) : (
              <p>Image not available</p>
            )}
          </div>

          <div className="text-gray-700">
            <p>{description}</p>
          </div>

          <Komentar />
          <UserComment />
          <NewsRelated />
        </div>

        <div className="w-full lg:w-1/3">
          <PopularNews />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
