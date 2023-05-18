import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';


export default function AddToys(){


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);


  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

//   console.log(watch("example")); // watch input value by passing the name of it  

const [selectedOption, setSelectedOption] = useState(null);



    return(
        <div>
            <h1>It is the add toys page </h1>

            



    <form onSubmit={handleSubmit(onSubmit)} className="m-auto w-1/2">

        <div className="grid grid-cols-2 gap-5">

        <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="Name" className="border"/>
      <input {...register("url", { required: true})} type="text" placeholder="Photo Url" className="border"/>
      <input {...register("sellerName", { required: true, maxLength: 20 })} placeholder="Seller Name" className="border"/>
      <input {...register("sellerEmail", { required: true, maxLength: 20 })} placeholder="Seller Email" className="border"/>

      <input {...register("price", { required: true, maxLength: 20 })} placeholder="Price" className="border"/>


      {/* <select 
        onChange={(event) => changeFruit(event.target.value)}
        className="border"
        {...register("selected", { required: true, maxLength: 20 })}
      >
        <option value="apples">Red Apples</option>
        <option value="oranges">Outrageous Oranges</option>
        <option value="tomatoes">Technically a Fruit Tomatoes</option>
        <option value="bananas">Bodacious Bananas</option>
      </select> */}


        <CreatableSelect {...register("selected")} name="colors" defaultValue={selectedOption} isClearable options={options} />


        <input {...register("rating")} type="number" name="" id="" placeholder="Rating" className="border"/>
        <input {...register("availablequantity")}  type="number" name="" id="" placeholder="Available quantity" className="border"/>

        </div>

        {/* <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      /> */}



        <textarea  {...register("description")} 
        onChange={(event) => console.log(event.target.value)}
        value={'hello'}
         placeholder="Bio" className="textarea textarea-bordered block w-full h-[16vh] my-4" ></textarea>

        <button className="btn block w-full">Add Toy</button>

    </form>



        </div>
    )
}