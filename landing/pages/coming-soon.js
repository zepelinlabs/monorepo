import React from 'react';
import NavBar from '../components/NavBar';
import SubscribeForm from '../components/SubscribeForm';

export default function ComingSoon() {
  return (
    <div>
      <div className="h-screen bg-gradient-to-br from-nord-6 via-nord-5 to-nord-4">
        <NavBar />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-center w-full mx-auto lg:px-8 z-20">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              <span className="block">¿Estás listo? Nosotros aún no.</span>
              <span className="block text-nord-10">
                Suscríbete a la newsletter y te avisaremos.
              </span>
            </h2>
            <p className="text-xl text-nord-3 mt-4 mx-auto">
              Nos encanta que te hayas decidido a asociarte con nosotros, pero
              aún no hemos lanzado la aplicación. ¿Por qué no te suscribes a la
              newsletter?
              <br />
              Así podrás ser el primero en probar la aplicación cuando esté
              lista.
            </p>
            <SubscribeForm />
          </div>
        </div>
      </div>
    </div>
  );
}
