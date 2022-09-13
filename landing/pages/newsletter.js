import NavBar from '../components/NavBar';
import SubscribeForm from '../components/SubscribeForm';

export default function Newsletter() {
  return (
    <div>
      <div className="h-screen bg-gradient-to-br from-nord-6 via-nord-5 to-nord-4">
        <NavBar />
        <header className="mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8 xl:mt-32 mx-auto w-full max-w-container grid grid-cols-1">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-center w-full mx-auto lg:px-8 z-20">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                <span className="block">
                  La newsletter acerca de todas las cosas que querríamos hacer
                  con Excel, y no podemos.
                </span>
              </h2>
              <p className="text-xl text-nord-3 mt-4 mx-auto">
                Subscríbete para estar al tanto de las últimas novedades.
              </p>
              <SubscribeForm />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
