import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { authContext } from "../authentication/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from "../hooks/useTitle";

export default function AddToys(){


    useTitle('Add Toys')

    const {loading , user}  = useContext(authContext)


    const [selectedOption, setSelectedOption] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.category = selectedOption?.value;
        data.sellerName = user?.displayName;
        data.sellerEmail = user?.email ;
        console.log(data.price)
        fetch('https://cute-gold-lemming-sari.cyclic.app/addtoys' , {
            method : 'POST' ,
            headers : {'content-type' : 'application/json'},
            body : JSON.stringify(data)
        }).then(data => data.json()).then(data => {
            toast.success("Successfully added.");
        })
    };


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];



    return(
        <div>


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


            <h1>It is the add toys page </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="m-auto my-10 w-1/2">

                <div className="grid grid-cols-2 gap-5">

                    <input disabled defaultValue={user?.displayName} placeholder="Seller Name" className="border"/>
                    <input disabled defaultValue={user?.email} placeholder="Seller Email" className="border"/>
                    <input {...register("name", { required:'true', maxLength: 20 })} placeholder="Toy Name" className="border"/>
                    <input {...register("image", { required:'true' })} type="text" placeholder="Photo Url" className="border"/>
                    <input type="number" {...register("price", {required:'true',maxLength: 20 })} placeholder="Price" className="border"/>
                    <CreatableSelect defaultValue={selectedOption} required onChange={(data) => setSelectedOption(data)} options={options}/>
                    <input {...register("rating", {required:'true'})} placeholder="rating" className="border"/>
                    <input {...register("quantity", {required:'true'})} placeholder="Available quantity" className="border"/>

                </div>

                <textarea  {...register("description")}  placeholder="Bio" className="textarea textarea-bordered block w-full h-[16vh] my-4" ></textarea>
                <button className="btn block w-full">Add Toy</button>

            </form>



        </div>
    )
}