


export default function Blog(){
    return(
        <div>
            <div className="bg-white min-h-[70vh]">
     

      <div className=" max-w-[60%] m-auto mt-20 grid gap-5">




      <div className="collapse collapse-plus border border-base-300 rounded-box"tabIndex={0} >
          <div className="collapse-title">
          What is an access token and refresh token?
          </div>
          <div className="collapse-content">
            <p> attribute is necessary to make the div focusable</p>

            <div>
            <div className="collapse collapse-plus border border-base-300 rounded-box"tabIndex={0} >
          <div className="collapse-title">
          How do they work and where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p> attribute is necessary to make the div focusable</p>
          </div>
        </div>
            </div>
          </div>
        </div>


      <div className="collapse collapse-plus border border-base-300 rounded-box"tabIndex={0} >
          <div className="collapse-title">
          Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content">
            <p> attribute is necessary to make the div focusable</p>
          </div>
        </div>



        <div className="collapse-plus border border-base-300 rounded-box"tabIndex={0} 
        id="sw"
        onClick={()=>{document.getElementById('sw').classList.toggle('collapse')}}
        >
          <div className="collapse-title">
          What is express js? What is Nest JS (google it)?
          </div>
          <div className="collapse-content">
            <p> attribute is necessary to make the div focusable</p>
          </div>
        </div>




     


      </div>
    </div>
        </div>
    )
}