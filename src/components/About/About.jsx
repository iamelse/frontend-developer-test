import React from 'react'

function About() {
  return (
    <div className="max-w-screen-xl px-4 pb-20 md:px-0 mx-auto">
      <section id="about" className="relative sm:px-6 lg:px-8">
        <div className="text-black text-3xl font-bold my-3">About Us</div>
          <div className="flex flex-row flex-wrap">
            <div className="grid justify-items-stretch w-full lg:w-1/2">
              <p className="justify-self-center mb-14 text-gray-600 text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus in lectus vitae finibus. 
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Integer molestie erat sapien, a sodales nibh elementum vitae. 
                Quisque nec accumsan lorem. Mauris ultrices ac risus at placerat. 
                Vestibulum quis sem nunc. Cras mattis leo ut turpis auctor, et gravida nulla ornare. <br /> <br /> 
                Vivamus purus diam, blandit non velit sed, fermentum fringilla eros. 
                In sodales imperdiet est in ullamcorper. Curabitur ultricies a turpis nec consectetur. 
                Nunc justo turpis, porttitor eget nisl non, blandit dictum turpis. 
                Aliquam nunc ex, laoreet sed nisl pulvinar, pellentesque ultrices elit. 
                Aenean efficitur arcu dui, vel sollicitudin elit convallis in. Donec pharetra, ante ac 
                egestas sollicitudin, neque felis dictum risus, nec laoreet erat odio ac est. 
                Pellentesque hendrerit neque purus, tempus euismod mi sollicitudin ut. 
                Nulla semper sit amet urna in convallis. Nunc sit amet vestibulum ante. 
                Mauris at fermentum nisl, in tempus erat
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