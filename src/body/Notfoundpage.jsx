import { Link } from "react-router-dom";




export default function Notfoundpage(){
    return(
        

        <div className="grid place-content-center h-screen" >
            
            <img src="/404.png"/>
            <Link to={'/'} className="btn text-center w-fit mx-auto bg-[#808bfe] hover:bg-[#666fcb] border-none">Go back</Link>

        </div>
       

    )
}