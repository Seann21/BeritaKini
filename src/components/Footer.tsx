import React from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import { BsSendFill } from "react-icons/bs";



const Footer: React.FC = () => {
  return (
    <footer className="bg-darkfooter text-white py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mx-10">
          {/* Logo and Social Media Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 flex flex-col">
            <div className="flex items-center gap-5">
              <img src="/Logo F.png" alt="Logo" className="h-[68.17px]" /> {/* Ganti dengan path logo Anda */}
              <h2 className="text-3xl font-semibold font-poppins">Berita Kini</h2>
            </div>
            <p className="text-invert font-medium my-6 font-NunitoSans">© 2023 Berita Kini. All Rights Reserved.</p>
            <div className="mt-10">
              <p className="mb-5 font-NunitoSans font-semibold text-xl">Ikuti Kami</p>
              <div className="flex space-x-4">
                <div className="p-2 rounded-xl cursor-pointer transition ease-in-out delay-150 bg-whiteskin hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300">
                  <FaYoutube size={24} className="text-gray-800" />
                </div>
                <div className="p-2 rounded-xl cursor-pointer transition ease-in-out delay-150 bg-whiteskin hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300">
                  <FaInstagram size={24} className="text-gray-800" />
                </div>
                <div className="p-2 rounded-xl cursor-pointer transition ease-in-out delay-150 bg-whiteskin hover:-translate-y-1 hover:scale-110 hover:bg-gray-300 duration-300">
                  <FaFacebook size={24} className="text-gray-800" />
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full sm:w-1/2 lg:w-1/12 mx-14 mb-6 ">
            <h3 className="text-lg font-semibold mb-4 font-NunitoSans">Telusuri</h3>
            <ul>
              <li className='my-3'><a href="#" className="text-invert hover:text-slate-400 font-inter font-semibold">Beranda</a></li>
              <li className='my-3'><a href="#" className="text-invert hover:text-slate-400 font-inter font-semibold">Kesehatan</a></li>
              <li className='my-3'><a href="#" className="text-invert hover:text-slate-400 font-inter font-semibold">Otomotif</a></li>
              <li className='my-3'><a href="#" className="text-invert hover:text-slate-400 font-inter font-semibold">Politik</a></li>
              <li className='my-3'><a href="#" className="text-invert hover:text-slate-400 font-inter font-semibold">Olahraga</a></li>
              <li className='my-3'><a href="#" className="text-invert hover:text-slate-400 font-inter font-semibold">Nasional</a></li>
              <li className='my-3'><a href="#" className="text-invert hover:text-slate-400 font-inter font-semibold">Internasional</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4 font-NunitoSans">Bantuan</h3>
            <ul>
              <li className='my-3'><a href="#" className="text-invert font-inter font-semibold hover:text-slate-400">Kontak Kami</a></li>
              <li className='my-3'><a href="#" className="text-invert font-inter font-semibold hover:text-slate-400">Laporan Pembajakan</a></li>
              <li><a href="#" className="text-invert font-inter font-semibold hover:text-slate-400">Kebijakan</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6">
            <h3 className="text-lg font-semibold font-NunitoSans mb-4">Berlangganan Berita Terbaru</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Masukkan email"
                className="px-4 py-2 w-[490px] h-[64px] rounded-l-md focus:outline-none text-grayskin font-inter font-bold"
              />
              <button className="bg-white text-primary p-2 rounded-r-md flex items-center justify-center">
                <div className="bg-primary p-3 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300">
                  <BsSendFill size={20} className="text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
