import React from 'react';
import Image from 'next/image';

export default function Zeppelin({ className }) {
  return (
    <Image
      src="/Zeppelin.png"
      alt="Zeppelin icon by Saeful Muslim from The Noun Project"
      width={50}
      height={50}
    />
  );
}
