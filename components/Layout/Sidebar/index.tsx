import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './index.module.css';

export default function Sidebar() {
  const router = useRouter();
  const { pathname } = router;

  const menus = [
    {
      icon: '/icons/dashboard-icon.svg',
      name: 'Dashboard',
      link: '/',
    },
    {
      icon: '/icons/transaction-icon.svg',
      name: 'Transaction',
      link: '/transaction',
    },
    {
      icon: '/icons/note-icon.svg',
      name: 'Note',
      link: '/note',
    },
    {
      icon: '/icons/gear-icon.svg',
      name: 'Settings',
      link: '/settings',
    },
    {
      icon: '/icons/package-icon.svg',
      name: 'Package',
      link: '/package',
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Image src={'/icons/eth-icon.svg'} height={48} width={48} />
      </div>
      {menus.map((menu, idx) => (
        <Link key={idx} href={menu.link}>
          <a>
            <div className={pathname === menu.link ? styles.menuActive : styles.menu}>
              <Image src={menu.icon} height={36} width={36} />
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
