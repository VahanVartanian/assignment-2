function Contact() {
    return (
      <section id="contact" className="bg-green-100 py-12">
        <div className="container mx-auto">
          <h1 className="text-center text-4xl font-bold text-green-800 mb-8">Contact Us</h1>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-bold text-green-700 mb-4">Get in Touch</h2>
              <p className="mb-4">
                <i className="bi bi-envelope-fill text-green-800 mr-2"></i>
                contact@sweetsafari.com
              </p>
              <p className="mb-4">
                <i className="bi bi-telephone-fill text-green-800 mr-2"></i>
                (123) 456-789
              </p>
              <p>
                <i className="bi bi-geo-alt-fill text-green-800 mr-2"></i>
                794 McAllister St, New York
              </p>
            </div>
            <img
              src="/images/map.png"
              alt="Map"
              className="lg:w-1/2 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
  