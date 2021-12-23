import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyActMTlL1ERQJW1EA4jPwkI9uVZwldH1ro',
  authDomain: 'closet-manager.firebaseapp.com',
  projectId: 'closet-manager',
  storageBucket: 'closet-manager.appspot.com',
  messagingSenderId: '995191862586',
  appId: '1:995191862586:web:a838af0ad4450a91414c03',
  measurementId: 'G-4FKR9W1FV4',
};

const Login = () => {
  const [input, setInput] = useState({ email: '', password: '' });

  console.log(input);

  initializeApp(firebaseConfig);

  const signIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, input.email, input.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => signIn(e)}>
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
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-grey-light group-hover:text-grey-dark"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
