'use client' 

import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import DogsNavbar from './components/Navbar/DogsNavbar'

export default async function Home() {

  return (
    <main>
      <DogsNavbar />
      <Banner />
      <Section />
      <Contact />
      <Footer />
    </main>
   
  );
}
