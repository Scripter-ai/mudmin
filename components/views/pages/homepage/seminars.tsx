const Seminars = (props: any) => {
    return (
      <section className="bg-[#F9F7F4] py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center md:text-left">
            Seminars & Trainingen
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Lifestyle & Gezondheid</h3>
              <p className="mt-4 text-lg">We organiseren seminars gericht op gezondheid en lifestyle veranderingen.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold">Sport en beweging</h3>
              <p className="mt-4 text-lg">We bieden ondersteuning en begeleiding bij het integreren van sport in het dagelijks leven.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Seminars;
  