import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Terbaru', href: '/kategori/terbaru' },
  { label: 'Hiburan', href: '/kategori/hiburan' },
  { label: 'Gaya Hidup', href: '/kategori/gaya-hidup' },
  { label: 'Olahraga', href: '/kategori/olahraga' },
  { label: 'Nasional', href: '/kategori/nasional' },
  { label: 'Internasional', href: '/kategori/internasional' },
];

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow fixed w-full z-10 top-0">
      <div className="container mx-auto px-12 flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="/Logo.png" alt="Berita Kini Logo" width={50} height={50} />
          <span className="ml-3 text-[20px] font-poppins font-bold bg-gradient-to-r from-green-400 via-primary to-cyan-600 inline-block text-transparent bg-clip-text">Berita Kini</span>
        </div>
        <div className="flex space-x-6 font-poppins font-bold gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-grayskin hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
