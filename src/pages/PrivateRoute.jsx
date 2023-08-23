import { Navigate} from "react-router-dom"

export const PrivateRoute = ({children})=>{
    let token = JSON.parse(localStorage.getItem("mytoken"))


    console.log(token)
    if(token?.length>0){
        console.log('inside')
        return children
    }else{
        alert("please login first")
        return <Navigate to='signin' />
    }
}