import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Meme Mania</h1>
      <p>Where memes rule the internet!</p>
      <Link href="/memes">Enter Gallery</Link>
    </div>
  );
};

export default Home;