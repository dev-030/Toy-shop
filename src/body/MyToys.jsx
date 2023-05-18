import { useEffect, useState } from "react"
import { AiOutlineDelete } from "react-icons/ai";


import swal from 'sweetalert';



export default function MyToys(){


    const [ toys, setToys ] = useState([]);

    useEffect(()=>{
            fetch('http://localhost:3000/my-toys?email=jamiljhp13@gmail.com').then(data => data.json()).then(data => setToys(data))
    },[])

  

    const showalert = () => {
        swal({
            title: "Are you sure you want to delete this ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("The data was deleted", {
                icon: "success",            
              });

              useEffect(()=>{
                
                fetch('http://localhost:3000/my-toys?email=jamiljhp13@gmail.com' , {
                    method : "DELETE"
                })

              },[])
    
            }
          });
    }
    // console.log(toys[0])

    return(
        <div>
            



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
                            <th></th>
                            <th></th>
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
                                        {/* <Link to={`/all-toys/${data._id}`} className="btn">View Details</Link> */}
                                        <button className="btn">Update</button>
                                        </td>
                                        <td>
                                            <AiOutlineDelete size={30} onClick={()=>showalert()}/>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>














        </div>
    )
}