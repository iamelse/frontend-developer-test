import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Portofolio() {
  const [portofolios, setPortofolios] = useState([{
    description : "",
    image : "",
    image_url : ""
  }]);
  
  const getPortofolio = async () => {
    try {
      let response = await axios.get('https://sandbox.plexustechdev.com/cms-core/api/contentByCategory/426');
      setPortofolios(response.data.data);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getPortofolio();
  }, []);

  return (
    <div className='max-w-screen-xl px-4 pb-20 md:px-0 mx-auto'>
      <section id='portofolio' className='relative sm:px-6 lg:px-8'>
        <div data-aos="fade-up" className='text-black text-3xl font-bold my-6'>Portofolio</div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-3 gap-y-3'>
            {
              portofolios.map((portofolio, index) => {
                return (
                  <a href={ portofolio.description } target="_blank" rel="noreferrer" data-aos="fade-up" data-aos-delay={index * 100} key={ index } className='flex flex-col'>
                    <img className='object-cover hover:scale-110 ease-in duration-100 aspect-[1/1]' src={ portofolio.image_url } alt='' />
                  </a>
                )
              })
            }
          </div>
      </section>
    </div>
  )
}

export default Portofolio