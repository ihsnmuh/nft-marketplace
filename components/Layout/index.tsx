import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import styles from './index.module.css';

export const Layout: React.FC = (props) => {
  return (
    <>
      <Sidebar />
      <main className='pl-[122px]'>
        <Navbar />
        <div className={styles.main}>{props.children}</div>
      </main>
    </>
  );
};
