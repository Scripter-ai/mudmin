const Services = (props: any) => {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center md:text-left">
            Onze Diensten
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Interventies op locatie</h3>
              <p className="mt-4 text-lg">We bieden interventies op locatie om individuen te helpen inzien dat er een probleem is.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Ondersteuning aan naasten</h3>
              <p className="mt-4 text-lg">We bieden ondersteuning aan naasten van individuen met middelenmisbruik.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  