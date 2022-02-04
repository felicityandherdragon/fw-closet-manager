import React from 'react';
import { Link } from 'react-router-dom';

const listItemStyle = 'box-content w-full h-full flex content-center place-content-center row-span-1 p-5 place-self-center text-white hover:text-grassGreen hover:font-bold active:text-grassGreen';

const Nav = () => {
  return (
    <nav className="grid grid-rows-4 h-screen w-full col-span-1 justify-center bg-purple">
      <ul className="row-start-1 row-end-3 grid grid-rows-6">
        <li className="box-content w-full h-full flex content-center place-content-center row-span-1 p-5 place-self-center text-white mb-4 mt-4">
          <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g data-name="Cupboard" id="Cupboard-2"><path className="cls-1" d="M23.16,50.21,21,54.9c-.44.94-.84,1.88-1.88,1.88A1.88,1.88,0,0,1,17.2,54.9V48.48l3.18-2.09Z" id="path20636-0-4-3-4-5"/><path className="cls-1" d="M40.84,50.21,43,54.9c.44.94.84,1.88,1.88,1.88A1.88,1.88,0,0,0,46.8,54.9V48.48l-3.48-2.65Z" id="path20719-2-6-2-9-0"/><path className="cls-2" d="M46.76,41.35,32,37,17.2,41.35v9H46.76Z" id="path13490-6-5-8-4"/><path className="cls-3" d="M19.2,7.22a2,2,0,0,0-2,2V41.35H46.76V9.22a2,2,0,0,0-2-2Z" id="path321888"/><path className="cls-2" d="M26.59,20.64a1.65,1.65,0,0,1,1.65,1.66v4.47a1.66,1.66,0,1,1-3.31,0V22.3A1.66,1.66,0,0,1,26.59,20.64Z" id="path28957-2-1"/><path className="cls-2" d="M37.38,20.64a1.66,1.66,0,0,0-1.66,1.66v4.47a1.66,1.66,0,1,0,3.31,0V22.3A1.65,1.65,0,0,0,37.38,20.64Z" id="path30081-6-7"/><path className="cls-4" d="M43.45,41.35v9h3.31v-9Z" id="path327878"/><path className="cls-5" d="M41.45,7.22a2,2,0,0,1,2,2V41.35h3.31V9.22a2,2,0,0,0-2-2Z" id="path327880"/><path className="cls-6" d="M26.59,31.58a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,26.59,31.58Z" id="path28953-63"/><path className="cls-6" d="M37.38,31.58a1.25,1.25,0,1,1-1.25,1.25A1.25,1.25,0,0,1,37.38,31.58Z" id="path30079-0"/><path className="cls-6" d="M47.76,9.22a3,3,0,0,0-3-3H19.2a3,3,0,0,0-3,3V54.9a2.9,2.9,0,0,0,2.89,2.88c1.64,0,2.27-1.37,2.74-2.36l1.91-4.11H40.26l1.91,4.11c.47,1,1.1,2.36,2.75,2.36A2.89,2.89,0,0,0,47.8,54.9ZM33,49.31v-7H45.76v7Zm-14.78,0v-7H31v7ZM45.76,9.22V40.35H33V8.22H44.76A1,1,0,0,1,45.76,9.22Zm-26.56-1H31V40.35H18.2V9.22A1,1,0,0,1,19.2,8.22ZM20,54.57c-.42.91-.61,1.21-.92,1.21a.89.89,0,0,1-.89-.88V51.31h3.34Zm24.91,1.21c-.32,0-.51-.3-.93-1.21l-1.53-3.26H45.8V54.9A.89.89,0,0,1,44.92,55.78Z"/><path className="cls-6" d="M26.59,29.43a2.66,2.66,0,0,0,2.65-2.66V22.3a2.66,2.66,0,1,0-5.31,0v4.47A2.66,2.66,0,0,0,26.59,29.43Zm-.66-7.13a.66.66,0,1,1,1.31,0v4.47a.66.66,0,1,1-1.31,0Z"/><path className="cls-6" d="M37.38,29.43A2.66,2.66,0,0,0,40,26.77V22.3a2.66,2.66,0,1,0-5.31,0v4.47A2.66,2.66,0,0,0,37.38,29.43Zm-.66-7.13a.67.67,0,0,1,.66-.66.64.64,0,0,1,.65.66v4.47a.64.64,0,0,1-.65.66.66.66,0,0,1-.66-.66Z"/><path className="cls-6" d="M25.42,44.83H23.77a1,1,0,1,0,0,2h1.65a1,1,0,0,0,0-2Z"/><path className="cls-6" d="M40.2,44.83H38.55a1,1,0,0,0,0,2H40.2a1,1,0,0,0,0-2Z"/></g></svg>
        </li>
        <li className={listItemStyle}>
          <Link to="/">Home</Link>
        </li>
        <li className={listItemStyle}>
          <Link to="/add-new">Add New</Link>
        </li>
        <li className={listItemStyle}>
          <Link to="/current-closet">
            Current Wardrobe
          </Link>
        </li>
        <li className={listItemStyle}>
          <Link to="/manager">Wardrobe Manager</Link>
        </li>
        <li className={listItemStyle}>
          <Link to="/login">Log In</Link>
        </li>
        <li className={listItemStyle}>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
