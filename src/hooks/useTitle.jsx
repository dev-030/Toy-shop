import { useEffect } from "react";



const useTitle = (title) => {
    useEffect(()=>{
        document.title = `ToyShop | ${title}`
    },[title])
}

export default useTitle ;
