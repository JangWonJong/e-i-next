import {Login} from "@/components/auth/Login"
import {loginRequest, logincancelled, logoutRequest} from "@/modules/auth/login"
import {connect, useSelector} from "react-redux"
import React, {useCallback, useState} from 'react'
import {useDispatch} from "react-redux"
import {useRouter} from "next/router"
import {Profile} from "@/components"

const LoginPage = () => {
    const [user, setUser] = useState({username: '', password: ''})
    const router = useRouter()
    const dispatch = useDispatch()
    const {isLoggined, loginUser} = useSelector(state => state.login)
   
    const onSubmit = e => {
        e.preventDefault()
        alert('userlogin' + JSON.stringify(user))
        dispatch(loginRequest(user))
        //router.push('/user/profile') 이동시 데이터 소실
    }
    
    const onChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }

    return (
        isLoggined
            ? <Profile loginUser={loginUser}/>
            : <Login onSubmit={onSubmit} onChange={onChange}/>
    )
}

const mapStateToProps = state => ({loginUser: state.login.loginUser})
const loginActions = {loginRequest, logoutRequest}

export default connect(mapStateToProps, loginActions)(LoginPage)