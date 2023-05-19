import { useContext, useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { authContext } from '../authentication/AuthProviders';
import Rating from "react-rating";
import { AiOutlineStar ,AiTwotoneStar} from "react-icons/ai";
import './app.css'
import useTitle from '../hooks/useTitle';
import { FaArrowCircleRight } from "react-icons/fa";
import { TfiArrowRight } from "react-icons/tfi";




import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {

  const {user}  = useContext(authContext)
  const [ data , setdata ] = useState([]);
  useTitle('Home')

  const tabdata = (data) => {
    fetch(`https://cute-gold-lemming-sari.cyclic.app/category/?category=${data}`).then(data => data.json()).then(data => setdata(data))
  }

  useEffect(()=>{
    fetch(`https://cute-gold-lemming-sari.cyclic.app/category/?category=Sports Car`).then(data => data.json()).then(data => setdata(data))
  },[])




  const tabpaneldata = <>
  <div className='grid grid-cols-3 gap-5 w-fit mx-auto my-10 max-[800px]:grid-cols-2 max-[650px]:grid-cols-1'>
    {
      data.map(data => 
      <div key={data._id} className="card lg:w-72 md:w-auto bg-base-100 shadow-[0_1px_4px_rgba(0,0,0,0.16)] 
        hover:shadow-[0_3px_8px_rgba(0,0,0,0.20)] transition duration-500 ease-in-out">
        <figure><img src={data.image} className='h-48 w-full' /></figure>
        <div className="card-body h-36">
          <h2 className="card-title">{data.name}</h2>
          <div className="text-left">
          <p>Price : {data.price}</p>
          <div className="flex mt-2">
            <h1>Rating :</h1>
            <span className="mt-1 pl-1">
            <Rating
            readonly
            placeholderRating={data.rating}
            emptySymbol={<AiOutlineStar/> }
            placeholderSymbol={<AiTwotoneStar className="text-[#808bfe]"/>}
            fullSymbol={<AiTwotoneStar/>}
            />
            </span>
            <span className="pl-2">({data.rating})</span>                               
            </div>
          </div>
        </div>
        <div className='p-2'>
          <Link onClick={()=>{(user)? window.location.replace(`/all-toys/${data._id}`) :setTimeout(() => window.location.replace(`/all-toys/${data._id}`) , 2000)}}><button className="btn block w-full rounded-xl bg-[#808bfe] hover:bg-[#666fcb] border-none" 
          onClick={()=>{(user)? '' : toast.error('You have to log in first to view details.')}}>View Details</button></Link>
        </div>
      </div>
      )
    }
  </div>
</>




  return (
    <>

      <ToastContainer position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>
      
      <div className="hero bg-[#e9f8ff]">
        <div className="hero-content w-[80%] h-[90vh] flex-col lg:flex-row-reverse text-white">
          
          <div className='relative'>
              
            <img src="/updated.png" className='w-[1100px]'/>
            {/* <div className='h-[200px] w-[300px] bg-red-500 rounded-[20px] absolute'>
            <img src="/updated.png" className="max-h-[600px] z-10 relative" />

            </div>
            <div className='h-[200px] w-[300px] bg-red-500 rounded-[20px] absolute'>
            <img src="/updated.png" className="max-h-[600px] z-10 relative" />
            </div> */}

          </div>    
          <div className='text-black'>

            <div className='z-60 relative'>
              <h1 className="text-5xl font-bold z-10">Find your best  Toys for your <br /> children</h1>
              <div className='h-[140px] w-[7px] bg-[#808bfe] absolute z-0 left-[-13px] top-1'></div>
            </div>
            
            <div className='flex gap-4 py-6 items-center'>
              <div className='w-10 h-10 bg-[#808bfe] rounded-full'></div>
              <h1 className='font-semibold'>We deliver best of fantastic,hand-piched,age appriciate toys</h1>
            </div>
            <button className="btn bg-[#808bfe] border-none hover:bg-[#6c78ff]">Get Started</button>
          </div>
        </div>
      </div>


      

      <section className='my-10 mx-auto w-fit'>

        <h1 className='text-3xl font-bold text-center text-[#808bfe] underline decoration-4 underline-offset-[10px]'>Trending Toys</h1>

        <div className='flex gap-10 mx-auto justify-center mt-7 max-[875px]:flex-wrap px-5' >
          <div className='w-[250px] relative mt-10' data-aos="fade-right" data-aos-duration="1000">
            <div className='relative '>
              <figure><img src="/photo-1.png" alt="Shoes" className='h-60 z-1'/></figure>
              <div className='bg-[#e9f8ff] h-[250px] w-64  z-[-1] absolute top-[6px] left-[-4px] rounded-[20px] '></div>
              <TfiArrowRight size={40} className='bg-[#808bfe] p-2 rounded-full text-white absolute bottom-[-33px] left-[99px] shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)]'/>
            </div>
            <div className=''>
              <p className='mt-14 text-center'>Get the dream car , well not a real one , but </p>
            </div>
            <div className='bg-white z-[-10] h-[380px] w-64 absolute bottom-[-43px] left-[-4px] rounded-[20px] shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)]'></div>
          </div>

          <div className='w-[250px] relative mt-10' data-aos="fade-right" data-aos-duration="1000">
            <div className='relative '>
              <figure><img src="/photo-1.png" alt="Shoes" className='h-60 z-1'/></figure>
              <div className='bg-[#e9f8ff] h-[250px] w-64  z-[-1] absolute top-[6px] left-[-4px] rounded-[20px] '></div>
              <TfiArrowRight size={40} className='bg-[#808bfe] p-2 rounded-full text-white absolute bottom-[-33px] left-[99px] shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)]'/>
            </div>
            <div className=''>
              <p className='mt-14 text-center'>Get the dream car , well not a real one , but </p>
            </div>
            <div className='bg-white z-[-10] h-[380px] w-64 absolute bottom-[-43px] left-[-4px] rounded-[20px] shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)]'></div>
          </div>

          <div className='w-[250px] relative mt-10' data-aos="fade-right" data-aos-duration="1000">
            <div className='relative '>
              <figure><img src="/photo-1.png" alt="Shoes" className='h-60 z-1'/></figure>
              <div className='bg-[#e9f8ff] h-[250px] w-64  z-[-1] absolute top-[6px] left-[-4px] rounded-[20px] '></div>
              <TfiArrowRight size={40} className='bg-[#808bfe] p-2 rounded-full text-white absolute bottom-[-33px] left-[99px] shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)]'/>
            </div>
            <div className=''>
              <p className='mt-14 text-center'>Get the dream car , well not a real one , but </p>
            </div>
            <div className='bg-white z-[-10] h-[380px] w-64 absolute bottom-[-43px] left-[-4px] rounded-[20px] shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)]'></div>
          </div>
        </div>

      </section>





{/* 
      <section className='mt-10'>

            <h1 className='text-center text-2xl font-bold underline decoration-4 underline-offset-[10px]'>Gallery</h1>
            <div className='grid grid-cols-2 w-fit mx-auto gap-3'>

              <img src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-40 w-40'/>
              <img src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-40 w-40'/>

              <img src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-40 w-40'/>

              <img src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-40 w-40'/>


            </div>


      </section> */}




      <section >
        <h1 className='text-2xl font-bold text-center pt-20 text-[#808bfe] underline decoration-4 underline-offset-[10px]'>Shop by category</h1>
        <div className='text-center mx-20 max-[650px]:mx-2 mt-16'>
          <Tabs>
            <TabList className='font-bold '>
              <Tab onClick={()=>{tabdata('Sports Car')}}>Sports Cars</Tab>
              <Tab onClick={()=>{tabdata('Supercar')}}>Super Cars</Tab>
              <Tab onClick={()=>{tabdata('Truck')}}>Trucks</Tab>
            </TabList>
 
            <TabPanel>
              {tabpaneldata}
            </TabPanel>
            
            <TabPanel>
              {tabpaneldata}
            </TabPanel>

            <TabPanel>
              {tabpaneldata}
            </TabPanel>
          </Tabs>
        </div>
      </section>


      <section>
        <div className="max-w-full px-56 mb-10 mt-32 m-auto max-[1080px]:px-8">
          <div
            className="w-full shadow-[0_2px_8px_0px_rgba(99,99,99,0.2)]"
            style={{
              backgroundImage: `url("https://i.ibb.co/X5QVysF/newsletter-background.webp")`, borderRadius:'20px'
            }}
          >
          
            <div className="hero-content text-center text-neutral-content max-w-full">
              <div className="max-w-md">

                <h1 className="text-4xl text-[#808bfe] font-bold mb-8">
                  Subscribe Newsletter
                </h1>

                <div>
                  <div className="w-80 m-auto max-[400px]:px-5">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your email here"
                        className="input rounded-[30px] w-full py-8 "
                      />
                      <button className="btn btn-ghost bg-[#808bfe] hover:bg-[#666fcb] absolute top-2 right-2 rounded-[30px]">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


   







    </>
  )
}

export default App
