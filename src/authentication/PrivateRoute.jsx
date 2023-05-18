import { useContext } from "react"
import { authContext } from "./AuthProviders"
import { Navigate } from "react-router-dom"









export default function PrivateRoute({children}){

    const {user,loading} = useContext(authContext)


    if(!loading){
        if(user){
            return (children.props.data)?  children :<Navigate to={children.props.path} replace={true}></Navigate>
        }else{
            return (children.props.data)?  <Navigate to={children.props.path} replace={true}></Navigate> : children;
        }
    }


}