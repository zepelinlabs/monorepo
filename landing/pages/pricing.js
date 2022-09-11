import React from 'react';
import NavBar from '../components/NavBar';
import PricingCard from '../components/PricingCard';
import PricingCardFeature from '../components/PricingCardFeature';

export default function Pricing() {
  return (
    <div>
      <div className="h-screen bg-gradient-to-br from-nord-6 via-nord-5 to-nord-4">
        <NavBar />
        {/* <!-- https://www.tailwindmasterkit.com/components/marketing/sections/pricing --> */}
        <div className="">
          <div className="page-container py-10">
            <div className="header">
              <h1 className="text-2xl md:text-4xl text-center font-extrabold">
                ¡Elige un plan y listo!
              </h1>
              <p className="max-w-2xl text-nord-3 text-center md:mx-auto mx-4 mt-4 text-sm md:text-lg">
                Comienza hoy mismo a hacer la diligencia de tus nuevos
                inversores automáticamente. Cancela en cualquier momento.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 py-20 mx-4 sm:mx-8 xl:mx-40 gap-8 z-10 content-center items-center">
            <PricingCard title="Básico" price={99}>
              <PricingCardFeature title="Formulario de KYC para cliente final" />
              <PricingCardFeature title="Seguimiento automático" />
              <PricingCardFeature title="Exportar listado de clientes en CSV" />
            </PricingCard>
            <PricingCard title="Esencial" price={199} popular>
              <PricingCardFeature title="Todo lo incluído en el plan Básico" />
              <PricingCardFeature title="Validación OCR de DNI o Pasaporte" />
              <PricingCardFeature title="Extensión del formulario KYC" />
              <PricingCardFeature title="Configuración de notificaciones" />
            </PricingCard>
            <PricingCard title="Premium" price={299}>
              <PricingCardFeature title="Todo lo incluído en el plan Esencial" />
              <PricingCardFeature title="Soporte 24 horas" />
              <PricingCardFeature title="Conexión con tus hojas de Excel via API" />
            </PricingCard>
          </div>
        </div>
      </div>
    </div>
  );
}
