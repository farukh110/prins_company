// app/customer/layout.tsx
'use client';

import { ReactNode } from 'react';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MenuItem = {
  id: string;
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { id: 'account', label: 'My Account', href: '/customer/account' },
  { id: 'address', label: 'Address Book', href: '/customer/address' },
  { id: 'orders', label: 'My Orders', href: '/customer/order/history' },
];

export default function CustomerLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const activeId = menuItems.find((i) => i.href === pathname)?.id ?? 'account';

  return (
    <div className="min-h-screen bg-white">
      {/* Container – max-width 1280px, centered */}
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between py-5 gap-5 lg:gap-12">

          {/* ---------- Sidebar (hidden on <lg, sticky on lg) ---------- */}
          <aside className="hidden lg:block flex-none lg:w-80">
            <nav className="sticky top-24 border border-gray-500/50">
              {menuItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`border-b border-gray-500/50 poppins-regular py-5 pl-4 text-[14px] leading-6 ${
                      isActive ? 'bg-[#F5F5F6] poppins-medium' : ''
                    }`}
                  >
                    <Link
                      href={item.href}
                      className={`underline-offset-1 ${
                        isActive ? 'hover:no-underline' : 'hover:underline'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
            </nav>
          </aside>

          {/* ---------- Main area ---------- */}
          <main className="w-full grow">
            {/* Header – Dashboard title + Logout */}
            <div className="flex items-center justify-between w-full mb-5">
              <h1 className="text-[20px] poppins-regular">My Dashboard</h1>
              <button className="flex items-center gap-1.5 bg-[#00345D] text-white px-3 py-2.5 text-sm font-medium">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>

            {/* Children (page content) */}
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};