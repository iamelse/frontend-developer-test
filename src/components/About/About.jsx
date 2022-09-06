import axios from 'axios';
import React, { useEffect, useState } from 'react'

function About() {
    const [about, setAbout] = useState([{
      title : "",
      description : ""
    }]);
    
    const getAbout = async () => {
      try {
        let response = await axios.get('https://sandbox.plexustechdev.com/cms-core/api/content/260');
        setAbout(response.data.data);
      } catch (e) {
        console.log(e.message);
      }
  }

  useEffect(() => {
      getAbout();
  }, []);
  return (
    <div className="max-w-screen-xl px-4 pb-20 md:px-0 mx-auto">
      <section id="about" className="relative sm:px-6 lg:px-8">
        <div className="text-black text-3xl font-bold my-3">About Us</div>
          <div className="flex flex-row flex-wrap">
            <div className="grid justify-items-stretch w-full lg:w-1/2">
              <p className="justify-self-center mb-14 text-gray-600 text-md">
                {
                  about[0].description.split("\n").map(function(desc, index) {
                      return (
                          <span key={ index }>
                              { desc }
                              <br/>
                          </span>
                      )
                  })
                }
              </p>
            </div>

            <div className="grid justify-items-stretch w-full lg:w-1/2">
                <img className="md:w-2/3 aspect-[1/1] justify-self-center" src="https://source.unsplash.com/900x900/?architecture" alt="" />
            </div>
          </div>
      </section>
    </div>
  )
}

export default About