'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import IntakeModal from '@/components/modal/intake';

const HomePage: React.FC = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'missie' | 'visie' | 'werkwijze'>('missie');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Services data
  const services = [
    {
      title: 'Interventies op locatie',
      description: 'Wij bieden interventies waar nodig en begeleiden individuen richting herstel door hun specifieke behoeften te begrijpen en de eerste stappen naar genezing te zetten.',
      icon: '/img/roadmap.svg',
    },
    {
      title: 'Ondersteuning voor familie',
      description: 'We bieden educatie, advies en emotionele steun aan de geliefden van personen in herstel, zodat zij grenzen kunnen stellen en kunnen deelnemen aan het herstelproces.',
      icon: '/img/family.png',
    },
    {
      title: 'Uitgebreide probleemanalyse',
      description: 'Samen met cliënten maken we een helder overzicht van de problemen waarmee ze te maken hebben en stellen we een op maat gemaakt ondersteuningsplan op.',
      icon: '/img/analyse.png',
    },
  ];

  // Tab content for the Mission, Vision, and Approach sections
  const tabContent = {
    missie: {
      title: 'Onze Missie',
      description:
        'MudMin streeft ernaar hoogwaardige, mobiele begeleiding en ondersteuning te bieden aan mensen die worstelen met lachgasverslaving. We richten ons op het helpen van individuen bij hun herstel en het leiden van een vervuld leven.',
    },
    visie: {
      title: 'Onze Visie',
      description:
        'Onze visie bij MudMin is om individuen te motiveren een leven te leiden zonder middelenmisbruik. We geloven in een holistische benadering die de innerlijke motivatie voor positieve levensveranderingen bevordert.',
    },
    werkwijze: {
      title: 'Onze Werkwijze',
      description:
        'We zetten ons in om individuen te helpen hun volledige potentieel te bereiken via motiverende gesprekken (CRA), lifestyle coaching en praktische ondersteuning die positieve veranderingen aanmoedigt.',
    },
  };

  return (
    <div className="flex flex-col">

{/* Hero Section */}
<section className="relative w-full flex items-center justify-center min-h-screen bg-[url('/img/background.svg')] bg-cover bg-center -mt-20 pt-24 pb-12">
  <div className="container mx-auto text-center">
    <div className='flex flex-row justify-between items-center align-middle gap-2 my-10'>
      <h1 className="text-4xl md:text-5xl font-bold text-white text-start">Je hebt zoveel doorstaan...</h1>
        <p className="text-lg text-gray-300 mb-10 text-end items-center align-middle justify-center flex flex-col">
          ...en misschien ben je klaar om de pijn achter je te laten. Bij MudMin roeren we niet verder in de problemen, maar begeleiden we je naar een leven vol vreugde en doelgerichtheid.
        </p>
    </div>

    {/* Grid Layout for the Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Individual Card */}
      <div 
          onClick={openModal}
          className="relative group bg-[#397748] rounded-lg overflow-hidden hover:bg-opacity-90 transition duration-300 h-72 cursor-pointer">
        <div className="absolute inset-0 bg-[url('/img/individu1.png')] bg-cover bg-center group-hover:bg-[url('/img/individu.png')] transition-all"></div>
        <div className="relative p-8">
          <h3 className="text-xl text-white font-bold">Individueel</h3>
          <p className="text-sm text-white mb-4">Voor mijzelf</p>
          <span className="text-white text-lg">→</span>
        </div>
      </div>

      {/* Couples Card */}
      <div 
          onClick={openModal}
          className="relative group bg-[#457776] rounded-lg overflow-hidden hover:bg-opacity-90 transition duration-300 h-72 cursor-pointer">
        <div className="absolute inset-0 bg-[url('/img/koppels.png')] bg-cover bg-center group-hover:bg-[url('/img/koppels1.png')] transition-all"></div>
        <div className="relative p-8">
          <h3 className="text-xl text-white font-bold">Koppels</h3>
          <p className="text-sm text-white mb-4">Voor mij en mijn partner</p>
          <span className="text-white text-lg">→</span>
        </div>
      </div>

      {/* Teen Card */}
      <div 
          onClick={openModal}                
          className="relative group bg-[#A75D00] rounded-lg overflow-hidden hover:bg-opacity-90 transition duration-300 h-72 cursor-pointer">
        <div className="absolute inset-0 bg-[url('/img/tiener.png')] bg-cover bg-center group-hover:bg-[url('/img/tiener1.png')] transition-all"></div>
        <div className="relative p-8">
          <h3 className="text-xl text-white font-bold">Tiener</h3>
          <p className="text-sm text-white mb-4">Voor mijn kind</p>
          <span className="text-white text-lg">→</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Problems Section */}
<section className="bg-[#FEFCF6] text-[#001231] py-16">
  <div className="container mx-auto text-center mb-10">
    <h2 className="text-3xl font-bold">Waarom kiezen voor MudMin?</h2>
  </div>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">

    {/* Professional */}
    <div className="flex flex-col items-start">
      <Image src="/img/professional.svg" alt="Professioneel" width={60} height={60} className='rounded-full' />
      <h3 className="text-xl font-bold text-[#001231] mt-4">Professionaliteit.</h3>
      <p className="text-md text-gray-800 mt-2 text-start">
        Alle therapeuten zijn gecertificeerde professionals. Bij MudMin verbinden we je met onze ervaren begeleiders in een veilige en toegankelijke omgeving.
      </p>
    </div>

    {/* Affordable */}
    <div className="flex flex-col items-start">
      <Image src="/img/affordable.svg" alt="Betaalbaar" width={60} height={60} className='rounded-full' />
      <h3 className="text-xl font-bold text-[#001231] mt-4">Betaalbaar.</h3>
      <p className="text-md text-gray-800 mt-2 text-start">
        Je betaalt een lage, vaste prijs voor zowel live sessies als berichtuitwisseling. Bij MudMin houden we onze diensten betaalbaar voor iedereen.
      </p>
    </div>

    {/* Convenient */}
    <div className="flex flex-col items-start">
      <Image src="/img/convenient.svg" alt="Gemakkelijk" width={60} height={60} className='rounded-full' />
      <h3 className="text-xl font-bold text-[#001231] mt-4">Makkelijk in contact.</h3>
      <p className="text-md text-gray-800 mt-2 text-start">
        Volg de begeleiding op jouw eigen tempo en op momenten die jou uitkomen. Communiceer wanneer jij daar behoefte aan hebt.
      </p>
    </div>

    {/* Effective */}
    <div className="flex flex-col items-start">
      <Image src="/img/effective.svg" alt="Effectief" width={60} height={60} className='rounded-full' />
      <h3 className="text-xl font-bold text-[#001231] mt-4">Persoonlijk en effectief.</h3>
      <p className="text-md text-gray-800 mt-2 text-start">
        Duizenden mensen hebben baat gehad bij onze begeleiding. Met MudMin kun je altijd direct schakelen als je het gevoel hebt dat je niet genoeg vooruitgang boekt.
      </p>
    </div>
  </div>
</section>


{/* Problems Section */}
<section className="relative bg-[#335343] text-white py-20 h-min bg-[url('/img/backgroundsmall.svg')] bg-cover bg-center">
  {/* Content */}
  <div className="relative container mx-auto z-10 text-center -pt-40">
    <h2 className="text-3xl font-bold mb-20 text-[#001231]">Hoe we helpen</h2>

    {/* Problems Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Problem 1 */}
      <div className="flex flex-col items-start space-y-4 h-full">
        <div className="w-full flex justify-start">
          <Image src="/img/open-up.svg" alt="Probleem 1" width={150} height={150} className="w-[150px] h-[150px]" />
        </div>
        <h3 className="text-xl font-bold text-center md:text-left">Erover praten</h3>
        <p className="text-md text-gray-200 flex-grow text-center md:text-left">
          We zetten ons in voor transparantie door eerlijke en authentieke gesprekken te voeren met jou.
          Zo weet jij exact hoe en waar MudMin kan helpen. 
        </p>
      </div>

      {/* Problem 2 */}
      <div className="flex flex-col items-start space-y-4 h-full">
        <div className="w-full flex justify-start">
          <Image src="/img/always-getting-better.svg" alt="Probleem 2" width={150} height={150} className="w-[150px] h-[150px]" />
        </div>
        <h3 className="text-xl font-bold text-center md:text-left">Elke dag een beetje beter</h3>
        <p className="text-md text-gray-200 flex-grow text-center md:text-left">
          Verandering is moeilijk, maar nodig. Daarom pushen we niet om radicaal te veranderen, maar elke dag een beetje te veranderen en zo te werken aan het proces.
        </p>
      </div>

      {/* Problem 3 */}
      <div className="flex flex-col items-start space-y-4 h-full">
        <div className="w-full flex justify-start">
          <Image src="/img/update.svg" alt="Probleem 3" width={150} height={150} className="w-[150px] h-[150px]" />
        </div>
        <h3 className="text-xl font-bold text-center md:text-left">Samen beter</h3>
        <p className="text-md text-gray-200 flex-grow text-center md:text-left">
          Wij zijn mensgericht. We behandelen elkaar met respect en laten ons ego buiten de deur. En eerlijk gezegd, elke persoon is anders!
        </p>
      </div>
    </div>
  </div>
</section>

      {/* About Section with Tabs */}
      <section className="py-20 bg-[#335343] bg-[url('/img/background.svg')] bg-cover bg-center">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-4">Wie wij zijn</h2>
            <p className="text-lg text-gray-300 mb-6">Bij MudMin bieden we een unieke benadering van verslavingsherstel, met de focus op persoonlijke groei en geluk in plaats van diagnose.</p>
            <div className="flex space-x-4 mb-6">
              <Button variant={activeTab === 'missie' ? 'default' : 'tabs'} onClick={() => setActiveTab('missie')}>Missie</Button>
              <Button variant={activeTab === 'visie' ? 'default' : 'tabs'} onClick={() => setActiveTab('visie')}>Visie</Button>
              <Button variant={activeTab === 'werkwijze' ? 'default' : 'tabs'} onClick={() => setActiveTab('werkwijze')}>Hoe we helpen</Button>
            </div>
            <div>
              <h3 className="text-2xl font-bold">{tabContent[activeTab].title}</h3>
              <p className="text-lg text-gray-300">{tabContent[activeTab].description}</p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image src="/img/open-up.svg" alt="Over MudMin" width={500} height={500} className="rounded-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#FEFCF6]">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-[#001231] mb-12">Onze Diensten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#335343] text-white p-6 rounded-lg shadow-lg">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48} 
                  height={48} 
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-[#F6F0E6] mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#F6F0E6] text-center">
        <h2 className="text-3xl font-bold text-[#001231] mb-8">Neem contact op</h2>
        <p className="text-lg text-gray-700 mb-8">Heb je vragen of wil je meer informatie? Neem contact met ons op via het onderstaande formulier of bel ons direct.</p>
        <Button variant="gethelp" onClick={openModal}>Start Intake</Button>
      </section>

      {/* Intake Modal */}
      <IntakeModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HomePage;
