"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './memes.module.css';

const MemeGalleryPage = () => {
  const [memes, setMemes] = useState([]);
  const [after, setAfter] = useState('');

  const fetchData = async () => {
    const response = await fetch(`https://www.reddit.com/r/memes.json?limit=1000${after ? `&after=${after}` : ''}`);
    const data = await response.json();
    const filteredMemes = data.data.children
      .map(child => child.data)
      .filter(meme => meme.post_hint === 'image');
    setMemes(prevMemes => [...prevMemes, ...filteredMemes]);
    setAfter(data.data.after);
  };

  useEffect(() => {
    fetchData();
  }, [after]);

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    if (bottom) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.memeGallery}>
      {memes.map(meme => (
        <Link key={meme.id} href={`/memes/${meme.id}`} passHref className={styles.memeItem}>
          
            <Image src={meme.url} alt={meme.title} width={meme.preview.images[0].source.width} height={meme.preview.images[0].source.height} />
          
        </Link>
      ))}
    </div>
  );
};

export default MemeGalleryPage;
