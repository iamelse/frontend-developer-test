import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Team() {
    const [teams, setTeams] = useState([{
        title : "",
        description : "",
        image_url : ""
      }]);
      
      const getTeams = async () => {
        try {
          let response = await axios.get('https://sandbox.plexustechdev.com/cms-core/api/contentByCategory/427');
          setTeams(response.data.data);
        } catch (e) {
          console.log(e.message);
        }
    }
  
    useEffect(() => {
        getTeams();
    }, []);
  return (
    <div className='max-w-screen-xl px-4 pb-20 md:px-0 mx-auto'>
      <section id='team' className='relative sm:px-6 lg:px-8'>
        <div data-aos="fade-up" className='text-black text-3xl font-bold my-6'>Team</div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-3 gap-y-3'>
            {
                teams.map((team, index) => {
                    return (
                        <div data-aos="fade-up" data-aos-delay={index * 100} key={ index } className='flex flex-col'>
                            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                                    <img src={ team.image_url } alt="" />
                                </div>
                                <div className="rounded-b lg:rounded-b-none lg:rounded-r py-4 md:p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-gray-900 font-bold text-xl mb-2">
                                            { team.title }
                                        </div>
                                        <p className="text-gray-700 text-base">
                                            { team.description }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
          </div>
      </section>
    </div>
  )
}

export default Team