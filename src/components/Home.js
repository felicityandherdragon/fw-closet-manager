import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

const Home = () => {
  return (
    <div>
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
          'Hey there, this is the homepage',
          'This is your wardrobe manager!',
        ]}
        multiTextDelay={1000}
        typeSpeed={30}
      />
    </div>
  );
};

export default Home;
