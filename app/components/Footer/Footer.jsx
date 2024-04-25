import React from "react";
import Image from "next/image";
import logo from '../../../public/images/logo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://rumbeando.vercel.app/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Image
                src={logo}
                className="h-14 w-14"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                RumbeAndo
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#nosotros" className="hover:underline me-4 md:me-6">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#paseos" className="hover:underline me-4 md:me-6">
                  Paseos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:underline">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://rumbeando.vercel.com/" className="hover:underline text-black-500">
              RumbeAndo
            </a>
            . Todos los derechos Reservados
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
