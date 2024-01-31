import React from 'react'
import Image from 'next/image';
import scripts from './singleMeme.module.css';

const meme = ({params, query}) => {
  console.log(params);
  console.log(query);
  const {slug} = params;
  console.log(slug);
  let splitSlug = slug.split('%5E');
  let w = splitSlug[0];
  let h = splitSlug[1];
  let uri = splitSlug[2];
  const url = `https://i.redd.it/${uri}` ;
  console.log(url, w, h);
  return (
    <div className={scripts.container}>
      <Image src={url} alt="meme" width={w} height={h} />
      fdbgnhf
    </div>
  )
}

export default meme