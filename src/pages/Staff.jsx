import Slider from 'react-slick'; // imports the react-slick library for creating a carousel
import { useState, useEffect } from 'react'; // imports hooks for state management and side effects

function Staff() {
  const [staff, setStaff] = useState([]); // initializes an empty array to store staff information

  useEffect(() => {
    // runs once after the component loads
    setStaff([
      // updates the state with staff data
      { name: 'Maya', img: '/images/Maya.png' }, // each staff member has a name and an image
      { name: 'Matt', img: '/images/Matt.png' },
      { name: 'Susan', img: '/images/Susan.png' },
      { name: 'Sam', img: '/images/Sam.png' },
    ]);
  }, []); // the empty array means this effect runs only once after the first render

  // settings for the react-slick carousel
  const settings = {
    dots: true, // enables navigation dots below the carousel
    infinite: true, // allows the carousel to loop endlessly
    speed: 500, // transition speed in milliseconds
    slidesToShow: 3, // number of slides visible at a time
    slidesToScroll: 1, // number of slides to scroll at a time
    arrows: true, // enables navigation arrows
    responsive: [
      {
        breakpoint: 1024, // for devices with width <= 1024px
        settings: {
          slidesToShow: 2, // show 2 slides
          slidesToScroll: 1, // scroll 1 slide at a time
        },
      },
      {
        breakpoint: 600, // for devices with width <= 600px
        settings: {
          slidesToShow: 1, // show 1 slide
          slidesToScroll: 1, // scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <section id="staff" className="min-h-screen bg-green-100 py-12">
      {/* section with a minimum height to cover the viewport, light green background */}
      <h1 className="text-center text-4xl font-bold text-green-800 mb-8">Meet Our Staff</h1>
      {/* heading for the staff section */}

      {/* slider component with custom settings */}
      <Slider {...settings} className="max-w-5xl mx-auto">
        {/* maps over the staff array and creates a card for each person */}
        {staff.map((person, index) => (
          <div key={index} className="p-4">
            {/* outer container for each staff card */}
            <div className="text-center bg-green-800 p-6 mx-full rounded-lg shadow-lg">
              {/* image of the staff member */}
              <img
                src={person.img} // source of the image
                alt={person.name} // alt text for accessibility
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                // styling for the image: rounded, centered, and spaced below
              />
              {/* name of the staff member */}
              <h3 className="text-xl font-semibold">{person.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Staff; // makes this component available for use in other parts of the app
