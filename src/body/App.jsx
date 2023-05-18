import { useEffect, useState } from 'react'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import './app.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse text-white">
    
     <div className='relative'>
        
        <img src="/updated.png" className='w-[1100px]'/>

       
        {/* <div className='h-[200px] w-[300px] bg-red-500 rounded-[20px] absolute'>
        <img src="/updated.png" className="max-h-[600px] z-10 relative" />

        </div>
        <div className='h-[200px] w-[300px] bg-red-500 rounded-[20px] absolute'>
        <img src="/updated.png" className="max-h-[600px] z-10 relative" />
        </div> */}
      
    </div>    

    <div>
      <h1 className="text-5xl font-bold text-[black]">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


        <section>
          <h1 className='text-2xl font-bold text-center py-20'>Shop by category</h1>

          <div className='text-center mx-20'>
            <Tabs>
              <TabList>
                <Tab>Sports Cars</Tab>
                <Tab>Super Cars</Tab>
                <Tab>Trucks</Tab>
              </TabList>

              <TabPanel>
                <div>
                  
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure><img src="https://i.ibb.co/mFnDhGD/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default.jpg" alt="Shoes" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
                </div>
              </TabPanel>
              
              <TabPanel>

              
                
                <h2>Any content 2</h2>
              </TabPanel>

              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
            </Tabs>
          </div>

        </section>

    </>
  )
}

export default App
