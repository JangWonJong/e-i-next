import { Register } from "@/components/auth/Register"
import { registerRequest, unregisterRequest } from "@/modules/auth/register"
import { connect } from "react-redux"
import React,{useState} from 'react'
import { useDispatch } from "react-redux"

const RegisterPage =()=> {
    const [user, setUser] =useState({
        username:'', password:'', email:'', name:''
    })
    const dispatch = useDispatch()
    
    const getToday = () => {
        var date = new Date();
        var year = date.getFullYear();
        var month = ("0" + (1 + date.getMonth())).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);
    
        return year + "-" + month + "-" + day;
    }

    const onSubmit = e => {
        e.preventDefault()
        alert('userinfo' +JSON.stringify(user))
        dispatch(registerRequest(user))
    }
    const onChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user,regDate: getToday(), [name]: value})
    }
    return(
        <Register onChange={onChange} onSubmit={onSubmit}/>
    )
}

const mapStateToProps = state => ({isRegistered: state.register.isRegistered})
const registerActions = {registerRequest, unregisterRequest}
export default connect(mapStateToProps, registerActions)(RegisterPage)