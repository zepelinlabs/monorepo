import React from 'react';
import Zeppelin from '../icons/Zeppelin';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center border-b border-nord-4">
      <Link href="/">
        <a className="px-5 py-1 border-r border-nord-4">
          <Zeppelin className="h-24" />
        </a>
      </Link>
      <ul className="flex justify-between items-center">
        <li className="py-5">
          <Link href="/pricing">
            <a className="font-medium px-5 py-1 border-l border-nord-4 text-nord-12">
              Precio
            </a>
          </Link>
        </li>
        <li className="py-5">
          <Link href="/newsletter">
            <a className="font-medium px-5 py-1 border-l border-nord-4 text-nord-14">
              Newsletter
            </a>
          </Link>
        </li>
        {/* <li className="py-5"><a href="#" className="font-medium px-5 py-1 border-l border-nord-4 text-nord-11">About</a></li>
        <li className="py-5"><a href="#" className="font-medium px-5 py-1 border-l border-nord-4 text-nord-14">Contact</a></li> */}
      </ul>
    </nav>
  );
}
