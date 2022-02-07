import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

const Home = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
      <img
        src="https://closet-manager-s3-bucket.s3.us-east-2.amazonaws.com/sapiens.png"
        alt="homepage"
        className="w-1/2"
      />
      <TypeWriterEffect
        textStyle={{
          fontFamily: '"Supermercado One", cursive',
          color: '#3F3D56',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#612e2d"
        multiText={[
          'Hey there 👋!',
          'This is your wardrobe manager 😊',
          'Go to Add New to get started!',
          'You can upload pictures of your purchase, ',
          'scan barcode on your purchase, ',
          'or take a picture using your device camera to add record of your item 😉'
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
        className="w-3/4"
      />
    </div>
  );
};

export default Home;
