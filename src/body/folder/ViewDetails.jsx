import { useEffect } from "react"
import { Navigate, useLoaderData, useLocation, useNavigate } from "react-router-dom"


export default function ViewDetails(){




    const navigate = useNavigate();

    const data = useLoaderData();
  


    return(


        <div>


            <input type="checkbox" id="my-modal-3" className="modal-toggle" defaultChecked/>
            <div className="modal">
            <div className="modal-box relative">
                <label onClick={()=>navigate('/all-toys')} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{data[0].name}</h3>
                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            </div> 
            </div>


        </div>
    )
}