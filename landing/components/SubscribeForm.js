import React from 'react';

export default function SubscribeForm({ className }) {
  return (
    <div className={`text-center w-full mx-auto my-2 ${className}`}>
      <div className="lg:mt-0 lg:flex-shrink-0">
        <div className="mt-6 inline-flex rounded-md">
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/olvidandoamiexcel"
            method="post"
            target="popupwindow"
            onSubmit="window.open('https://buttondown.email/olvidandoamiexcel', 'popupwindow')"
            className="embeddable-buttondown-form"
          >
            <input
              type="email"
              name="email"
              id="bd-email"
              placeholder="tu@email.com"
              className="py-4 px-6 text-center focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
            />
            <input
              type="submit"
              value="Obtén un email semanal"
              className="mt-4 py-4 px-4 text-nord-13 bg-gradient-to-br from-nord-1 via-nord-10 to-nord-15 w-full text-center font-semibold shadow-md rounded-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
