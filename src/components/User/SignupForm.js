import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import BannerNotification from '../BannerNotification';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: 'closet-manager.firebaseapp.com',
  projectId: 'closet-manager',
  storageBucket: 'closet-manager.appspot.com',
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: 'G-4FKR9W1FV4',
};

const Signup = () => {
  const [input, setInput] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const [showBanner, setShowBanner] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  initializeApp(firebaseConfig);

  const register = (e) => {
    const auth = getAuth();
    e.preventDefault();
    createUserWithEmailAndPassword(auth, input.email, input.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setMessage(`Thank you for signing up! Account created with ${user.email}`);
        setLoggedIn(true);
        setShowBanner(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setMessage(errorMessage);
        setLoggedIn(false);
        setShowBanner(true);
      });
  };

  const googleSignUp = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        setMessage(`Welcome, ${user.email}!`);
        setLoggedIn(true);
        setShowBanner(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage);
        setMessage(errorMessage);
        setLoggedIn(false);
        setShowBanner(true);
      });
  };

  return (
    <>
      {showBanner && (
        <BannerNotification
          msg={message}
          setShowBanner={setShowBanner}
          loggedIn={loggedIn}
        />
      )}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
              Sign up
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => register(e)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-grey placeholder-grey text-black rounded-t-md focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) =>
                    setInput({ ...input, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-grey placeholder-grey text-black rounded-b-md focus:outline-none focus:ring-blue focus:border-blue focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) =>
                    setInput({ ...input, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-grey-light group-hover:text-grey-dark"
                    aria-hidden="true"
                  />
                </span>
                Create account
              </button>
            </div>
          </form>
          <div>
            <p>OR</p>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red hover:bg-red-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red"
              onClick={() => googleSignUp()}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-red-light group-hover:text-grey-dark"
                  aria-hidden="true"
                />
              </span>
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
