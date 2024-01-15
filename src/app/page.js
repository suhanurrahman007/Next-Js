"use client"
import Counter from '@/components/Counter/Counter';
import Link from 'next/link';

const HomePage = () => {
  console.log("object");
  // throw new Error()
  
  return (
    <div>
      <h3>This is Home Page</h3>
      <Counter></Counter>
      <Link className='btn btn-success' href={"/about"}>About</Link>
      <Link className='btn btn-warning' href={"/contact"}>Contact</Link>
    </div>
  );
};

export default HomePage;