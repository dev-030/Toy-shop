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

function App() {

  const {user}  = useContext(authContext)
  const [ data , setdata ] = useState([]);

  const tabdata = (data) => {
    fetch(`https://cute-gold-lemming-sari.cyclic.app/category/?category=${data}`).then(data => data.json()).then(data => setdata(data))
  }

  useEffect(()=>{
    fetch(`https://cute-gold-lemming-sari.cyclic.app/category/?category=Sports Car`).then(data => data.json()).then(data => setdata(data))
  },[])




  const tabpaneldata = <>
  <div className='grid grid-cols-3 gap-5 w-fit mx-auto my-10 max-[800px]:grid-cols-2 max-[550px]:grid-cols-1'>
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
            placeholderSymbol={<AiTwotoneStar className="text-base-500"/>}
            fullSymbol={<AiTwotoneStar/>}
            />
            </span>
            <span className="pl-2">({data.rating})</span>                               
            </div>
          </div>
        </div>
        <div className='p-2'>
          <Link onClick={()=>{(user)? window.location.replace(`/all-toys/${data._id}`) :setTimeout(() => window.location.replace(`/all-toys/${data._id}`) , 3000)}}><button className="btn block w-full rounded-xl" 
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
        <h1 className='text-2xl font-bold text-center pt-20 underline decoration-4 underline-offset-[10px]'>Shop by category</h1>
        <div className='text-center mx-5 mt-16'>
          <Tabs>
            <TabList>
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







    </>
  )
}

export default App
