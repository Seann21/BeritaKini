import React, { useState } from 'react';
import DetailPagination from './DetailPagination';

interface Comment {
  id: number;
  name: string;
  title: string;
  date: string;
  comment: string;
  avatar: string;
  reply?: Comment;
}

const userComments: Comment[] = [
  {
    id: 1,
    name: 'UJANG YUSMEIDI S.P., M.Agr.',
    title: 'Mohon maaf, apakah sertifikatnya sudah tidak dapat diunduh?',
    date: '28 Mar 2024 11:15',
    comment: 'Karena saya mau download ada konfirmasi bahwa TOTP aktivasi salah. Bagaimana ya solusinya?',
    avatar: '/usercom.png',
    reply: {
      id: 2,
      name: 'DINA RIKHA RIYANAWATI, S.Pd',
      title: '',
      date: '28 Mar 2024 11:15',
      comment: 'saya mengunduh sertifikatnya kok juga belum bisa',
      avatar: '/usercom2.png'
    }
  },
  // Add more comments as needed
];

const COMMENTS_PER_PAGE = 5;

const UserComment: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(userComments.length / COMMENTS_PER_PAGE);

  const currentComments = userComments.slice(
    (currentPage - 1) * COMMENTS_PER_PAGE,
    currentPage * COMMENTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-8">
      {currentComments.map((comment) => (
        <div key={comment.id} className="mb-8">
          {/* Main Comment */}
          <div className="flex items-start gap-5 my-11">
            <img src={comment.avatar} alt={comment.name} className="w-13 h-13 rounded-lg object-cover" />
            <div className="flex-1">
              <p className="font-semibold font-inter text-slate-500">{comment.name} <span className="text-sm text-grayskin font-inter mx-2 font-normal">• {comment.date}</span></p>
              <p>{comment.comment}</p>
              <button className="text-white bg-gradient-to-br from-cyan-400 to-indigo-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-3">Balas</button>
            </div>
          </div>
          {/* Reply Comment */}
          {comment.reply && (
            <div className="ml-12 flex items-start space-x-4">
              <img src={comment.reply.avatar} alt={comment.reply.name} className="w-13 h-13 rounded-lg object-cover" />
              <div className="flex-1">
                <p className="font-semibold font-inter text-slate-500">{comment.reply.name} <span className="text-sm text-grayskin font-inter mx-2 font-normal">• {comment.reply.date}</span></p>
                <p>{comment.reply.comment}</p>
                <button className=" mt-2 text-white bg-gradient-to-br from-cyan-400 to-indigo-700  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Balas</button>
              </div>
            </div>
          )}
        </div>
      ))}
      <DetailPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default UserComment;
