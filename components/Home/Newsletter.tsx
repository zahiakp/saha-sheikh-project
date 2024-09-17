"use client"
import { useState } from 'react';

const Newsletter = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('First Name:', firstName);
    console.log('Email:', email);
  };

  return (
    <div className="flex justify-center items-center md:p-24 bg-secondary/10">
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-10 py-14 md:p-24 md:rounded-3xl w-full max-w-[1200px] flex flex-col justify-center relative">
        <h2 className=" text-4xl md:text-5xl font-bold mb-4 text-center">Subscribe to our newsletter</h2>
        <p className="mb-6 text-white/70 mx-5 md:mx-32 text-center">
          Stay up to date with our new collections, latest deals, and special offers! We announce a new collection every week so be sure to stay tuned.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 md:mt-10 mt-5 mx-10 md:mx-20">
          <input
            type="text"
            className="px-5 text-white outline-none bg-transparent border border-white placeholder:text-white py-4 rounded-xl flex-grow"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="email"
            className="px-5 text-white outline-none bg-transparent border border-white placeholder:text-white py-4 rounded-xl flex-grow"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-white text-primary px-7 rounded-xl py-4 hover:bg-yellow-100 duration-300 transition"
          >
            Subscribe Now
          </button>
        </form>
        <img src="/images/ring-pattern.svg" className='h-56 absolute left-0 top-0 opacity-20'/>
        <img src="/images/ring-pattern.svg" className='h-56 absolute -right-10 -bottom-10 opacity-10 -rotate-180'/>
      </div>
    </div>
  );
};

export default Newsletter;
