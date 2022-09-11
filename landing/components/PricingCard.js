import React from 'react';
import PricingCardFeature from './PricingCardFeature';
import Link from 'next/link';

export default function PricingCard({
  title,
  price,
  popular = false,
  children,
}) {
  return (
    <div className="relative z-10">
      <div
        className={`relative z-10 card flex flex-col mx-auto rounded-lg shadow-md p-4 border border-nord-3 ${
          popular
            ? 'bg-gradient-to-br from-nord-1 via-nord-10 to-nord-15'
            : 'bg-nord-1'
        }`}
      >
        <h2 className="text-xl text-nord-6 font-bold text-center my-4">
          {title}
        </h2>
        <p className="price text-nord-6 font-extrabold text-6xl mt-4 flex items-center justify-center my-4">
          {price}
          <span className="text-xl">€/mes</span>
        </p>
        <div className="features">{children}</div>
        <Link href="/coming-soon">
          <button
            className={`w-full rounded-md py-4 font-semibold mt-4  ${
              popular
                ? 'text-nord-1 bg-nord-4 hover:bg-nord-6'
                : 'text-nord-6 bg-nord-10 hover:bg-nord-9'
            }`}
          >
            Comprar ahora
          </button>
        </Link>
      </div>
      <b className="absolute inset-0 transform -rotate-3 opacity-20 rounded-md bg-gradient-to-r from-nord-12 via-nord-11 to-nord-13" />
    </div>
  );
}
