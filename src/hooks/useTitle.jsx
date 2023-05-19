import { useEffect } from "react";



const useTitle = (title) => {
    useEffect(()=>{
        document.title = `Website | ${title}`
    },[title])
}

export default useTitle ;
