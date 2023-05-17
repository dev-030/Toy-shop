import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="hero min-h-screen bg-[#232e36]">
  <div className="hero-content flex-col lg:flex-row-reverse text-white">
    <img src="https://i.ibb.co/F6GpjQy/istockphoto-173948450-612x612-removebg-preview.png" className="max-w-[50%]" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

    </>
  )
}

export default App
