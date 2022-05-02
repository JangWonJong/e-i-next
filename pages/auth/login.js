import { Login } from "@/components/auth/Login"
import { loginRequest, logincancelled, logoutRequest } from "@/modules/auth/login"
import { connect } from "react-redux"
import React,{useState} from 'react'
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"

const LoginPage =()=>{
    const [user, setUser] =useState({
        userid:'', password:''
    })
    const router = useRouter()
    const dispatch = useDispatch()
    
    const onSubmit = e => {
        e.preventDefault()
        alert('userlogin'+JSON.stringify(user))
        dispatch(loginRequest(user))
        router.push('/user/profile')
    }
    const onChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user,[name]: value})
    }
    
    
    return(
        <Login onSubmit={onSubmit} onChange={onChange}/>
    )
}

const mapStateToProps = state => ({isLoggined: state.login.isLoggined})
const loginActions = {loginRequest, logincancelled, logoutRequest}

export default connect(
   mapStateToProps, loginActions
)(LoginPage)