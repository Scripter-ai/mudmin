const Contact = (props: any) => {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Neem contact op met MudMin
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Heb je vragen? Wil je meer weten over onze diensten? Neem contact op!
          </p>
          <div className="mt-8">
            <a href="/contact" className="bg-black text-white py-2 px-6 rounded-full">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  