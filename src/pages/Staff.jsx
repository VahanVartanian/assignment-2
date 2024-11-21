import Slider from 'react-slick';
import { useState, useEffect } from 'react';

function Staff() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    setStaff([
      { name: 'Maya', img: '/images/Maya.png' },
      { name: 'Matt', img: '/images/Matt.png' },
      { name: 'Susan', img: '/images/Susan.png' },
      { name: 'Sam', img: '/images/Sam.png' },
    ]);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="staff" className="min-h-screen bg-green-100 py-12">
      <h1 className="text-center text-4xl font-bold text-green-800 mb-8">Meet Our Staff</h1>
      <Slider {...settings} className="max-w-5xl mx-auto">
        {staff.map((person, index) => (
          <div key={index} className="p-4">
            <div className="text-center bg-green-800 p-6 mx-full rounded-lg shadow-lg">
              <img
                src={person.img}
                alt={person.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{person.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Staff;
