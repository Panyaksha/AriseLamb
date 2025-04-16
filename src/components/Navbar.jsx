// components/NavBar.jsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Icon } from '@iconify/react';

const navItems = [
  { label: 'Beranda', href: '/', icon: 'mdi:home' },
  { label: 'Monitoring', href: '/monitor', icon: 'mdi:magnify' },
  { label: 'Profil', href: '/profile', icon: 'mdi:account' },
];

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = router.pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center text-sm ${
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'
              } hover:text-blue-500`}
            >
              <Icon icon={item.icon} className="text-2xl mb-0.5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
