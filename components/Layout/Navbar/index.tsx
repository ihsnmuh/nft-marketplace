import { Avatar, IconButton } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './index.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      {/* Search */}
      <div className='relative h-12 w-[712px] block'>
        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
          <Image src={'/icons/search-icon.svg'} height={24} width={24} />
        </span>
        <input
          className='w-full block rounded-xl bg-black-background-color text-white placeholder:text-white pl-12 pr-4 py-3 focus:outline-none'
          type='text'
          id='search'
          name='search'
          placeholder='Search'
        />
      </div>

      {/* ETH Wallet */}
      <div className='rouded-xl w-[215px] rounded-xl flex h-12 bg-black-background-color'>
        <div className='flex item-center p-3 w-full'>
          <div>
            <Image src={'/icons/eth2-icon.svg'} height={24} width={24} />
          </div>
          <p className='text-white justify-center text-center w-full'>543,694,489 ETH</p>
        </div>
      </div>

      <div className='flex gap-3'>
        <div className='w-12 h-12 rounded-full flex justify-center bg-black-background-icon'>
          <Image src={'/icons/chat-icon.svg'} height={24} width={24} />
        </div>

        <div className='w-12 h-12 rounded-full flex justify-center bg-black-background-icon'>
          <Image src={'/icons/notification-icon.svg'} height={24} width={24} />
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <Avatar alt='Marvin McKinney' src={'/profiles/profile-1.png'} sx={{ width: 48, height: 48 }} />
        <p className='text-white text-basic width-full'>Marvin McKinney</p>
        <Image src={'/icons/arrow-upward.svg'} height={24} width={24} />
      </div>
    </div>
  );
}
