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
        <div className='text-black text-3xl font-bold my-6'>Portofolio</div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-3 gap-y-3'>
            {
              portofolios.map((portofolio, index) => {
                return (
                  <div key={ index } className='flex flex-col'>
                    <img className='object-cover aspect-[1/1]' src={ portofolio.image_url } alt='' />
                  </div>
                )
              })
            }
          </div>
      </section>
    </div>
  )
}

export default Portofolio