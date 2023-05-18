import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';


export default function AddToys(){


    const [selectedOption, setSelectedOption] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.category = selectedOption?.value;
        console.log(data)
    };


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];



    return(
        <div>


            <h1>It is the add toys page </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="m-auto w-1/2">

                <div className="grid grid-cols-2 gap-5">

                    <input {...register("firstName", {  maxLength: 20 })} placeholder="Name" className="border"/>
                    <input {...register("url", { })} type="text" placeholder="Photo Url" className="border"/>
                    <input {...register("sellerName", { maxLength: 20 })} placeholder="Seller Name" className="border"/>
                    <input {...register("sellerEmail", { maxLength: 20 })} placeholder="Seller Email" className="border"/>
                    <input {...register("price", {maxLength: 20 })} placeholder="Price" className="border"/>
                    <CreatableSelect defaultValue={selectedOption} onChange={(data) => setSelectedOption(data)} options={options}/>
                    <input {...register("rating")} type="number" name="" id="" placeholder="Rating" className="border"/>
                    <input {...register("availablequantity")}  type="number" name="" id="" placeholder="Available quantity" className="border"/>

                </div>

                <textarea  {...register("description")}  placeholder="Bio" className="textarea textarea-bordered block w-full h-[16vh] my-4" ></textarea>
                <button className="btn block w-full">Add Toy</button>

            </form>



        </div>
    )
}