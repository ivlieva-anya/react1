import React from 'react';
import './errorMesage.css';
const ErrorMesage = ()=>{
    return (
        <>
            <img src={process.env.PUBLIC_URL+'/img/error.jpg'} alt='error'></img>
            <span>Что то пошло не так</span>
        </>
    )
}
export default ErrorMesage