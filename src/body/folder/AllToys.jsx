import { useEffect, useState } from "react"
import ViewDetails from "./ViewDetails";
import { Link , Outlet, useNavigate} from "react-router-dom";




export default function AllToys(){

    const [ toys, setToys] = useState([]);

    const navigate = useNavigate();

    const test = () => {
        console.log('test called')
    }


    const loadMore = () => {
        fetch('http://localhost:3000/' , {
            method : "POST" ,
            headers : { 'content-type' : 'application/json'},
            body : JSON.stringify({'value' : '10'})
        }).then(data => data.json()).then(data => setToys(data))
    }



    const findInTable = ()=> {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }

    useEffect(()=>{
        fetch('http://localhost:3000/').then(data => data.json()).then(data => setToys(data))
    },[])
    return(
        <div>
            <div className="mt-10">

                <Outlet/>

                <div className="overflow-x-auto">

                    <table className="table w-full" id="myTable">
                        <thead>
                        <tr>
                            <th></th>
                            <th className="flex gap-10 items-center">
                            <h1 className="text-sm">Name</h1>

                            <input type="text" id="myInput" onKeyUp={()=> {findInTable()}} placeholder="Search for names.." title="Type in a name"  className="input input-bordered"/>

                            </th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                        </thead>
                        <tbody>

                            {
                                toys.map(data => 
                                    <tr key={data.id} className="hover">

                                        <th>{data.id}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={data.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                                </div>
                                                <div>{data.name}</div>
                                            </div>
                                        </td>
                                        <td>{data.category}</td>
                                        <td>{data.price}</td>
                                        <td>{data.quantity}</td>
                                        <td>
                                        <Link to={`/all-toys/${data._id}`} className="btn">View Details</Link>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>



            <div>

            </div>

            
        </div>
    )
}