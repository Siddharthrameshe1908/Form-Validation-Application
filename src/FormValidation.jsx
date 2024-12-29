import React, { useState } from 'react'

const FormValidation = () => {

    let [formData, setFormData] = useState({
        reqfield:"",
        email:"",
        password:"",
        confirmpass:"",
        url:"",
        digits:"",          //wont accept decimal number
        number:"",          //includes decimal number
        alphanum:"",
        textarea:""
    })

    let {reqfield,email,password,confirmpass,url,digits,number,alphanum,textarea} = formData

    let handleChange = (event) =>{
        let {name,value} = event.target 
        setFormData({...formData,[name]:value})
       
    }
    
    let [error,setError] = useState({})

    let handleSubmit = (event) =>{
        event.preventDefault()
        
        let validationErrors = {}

        if(reqfield == ""){
            validationErrors.reqfield = "*This field is mandatory"
        }

        let regexEmail = /\S+@\S+\.\S+/
        if(email == ""){
            validationErrors.email = "*This field is mandatory"
        }
        else if(!regexEmail.test(email)){
            validationErrors.email = "This should be a valid email"
        }

        if(password == ""){
            validationErrors.password = "*This field is mandatory"
        }
        else if(password != confirmpass){
            validationErrors.confirmpass = "Password is not matching"
        }

        if(confirmpass == ""){
            validationErrors.confirmpass = "*This field is mandatory"
        }
        else if(password != confirmpass){
            validationErrors.confirmpass = "Password is not matching"
        }

        let regexUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
        if(url == ""){
            validationErrors.url = "*This field is mandatory"
        }
        else if(!regexUrl.test(url)){
            validationErrors.url = "This should be a valid url"
        }

        let regexDigits = /^[0-9]+$/
        if(digits == ""){
            validationErrors.digits = "*This field is mandatory"
        }
        else if(!regexDigits.test(digits)){
            validationErrors.digits = "It should be a digits"
        }

        let regexNumber = /^-?\d+(?:\.\d+)?$/
        if(number == ""){
            validationErrors.number = "*This field is mandatoru"
        }
        else if(!regexNumber.test(number)){
            validationErrors.number = "It should be a number"
        }

        let regexAlphanum = /^[a-zA-Z0-9]*$/
        if(alphanum == ""){
            validationErrors.alphanum = "*This field is mandatory"
        }
        else if(!regexAlphanum.test(alphanum)){
            validationErrors.alphanum = "It should be consist only alphabets and numbers"
        }

        if(textarea == ""){
            validationErrors.textarea = "*This field is mandatory"
        }
        setError(validationErrors)
        console.log(formData);
    }

    let handleReset = (event) =>{
        event.preventDefault()
        setFormData({
            reqfield:"",
            email:"",
            password:"",
            confirmpass:"",
            url:"",
            digits:"",          
            number:"",          
            alphanum:"",
            textarea:""
        })
        console.log(formData);
    }
    console.log(error);
    
  return (
    <>
        <form className='w-1/3 ml-2 bg-gray-200'>
            <legend className='text-rose-600 border-b-2 border-red-600 font-bold text-xl p-4'>Form Validation</legend>
            <section className="form-group p-3">
                <label htmlFor="" className='text-rose-600'>Required field</label>
                <div className="inp w-full p-1">
                    <input type="text" placeholder='Required field' value={reqfield} name='reqfield' onChange={handleChange} className='bg-white p-1 w-full'/>
                    <div className='form-error text-red-600'>
                        {error.reqfield && <span>{error.reqfield}</span>}
                    </div>
                </div>
            </section>

            <section className="form-group p-3">
                <label htmlFor="" className='text-rose-600'>Email</label>
                <div className="inp w-full p-1">
                    <input type="text" placeholder='Enter email' value={email} name='email' onChange={handleChange} className='bg-white p-1 w-full' />
                </div>
                <div className="form-error text-red-600">
                    {error.email && <span>{error.email}</span>}
                </div>
            </section>

            <section className="form-group p-3">
                <label htmlFor="" className='text-rose-600'>Password</label>
                <div className="inp w-full p-1">
                    <input type="password" placeholder='Enter password' value={password} name='password' onChange={handleChange} className='bg-white p-1 w-full'/>
                </div>
                <div className="form-error text-rose-600">
                    {error.password && <span>{error.password}</span>}
                </div>
            </section>

            <section className="form-group p-3">
                <label htmlFor="" className='text-rose-600'>Re-type Password</label>
                <div className="inp w-full p-1">
                    <input type="password" placeholder='Re-type password' value={confirmpass} name='confirmpass' onChange={handleChange} className='bg-white p-1 w-full'/>
                </div>
                <div className="form-error text-red-600">
                    {error.confirmpass && <span>{error.confirmpass}</span>}
                </div>
            </section>

            <section className="form-group p-3">
                <label htmlFor="" className='text-rose-600'>URL</label>
                <div className="inp w-full p-1">
                    <input type="text" placeholder='Enter url' value={url} name='url' onChange={handleChange} className='bg-white p-1 w-full'/>
                </div>
                <div className="form-error text-rose-600">
                    {error.url && <span>{error.url}</span>}
                </div>
            </section>

            <section className="form-group p-3">
                <label htmlFor="" className='text-rose-600'>Digits</label>
                <div className="inp w-full p-1">
                    <input type="text" placeholder='Enter digits' value={digits} name='digits' onChange={handleChange} className='bg-white p-1 w-full'/>
                </div>
                <div className="form-error text-rose-600">
                    {error.digits && <span>{error.digits}</span>}
                </div>
            </section>

            <section className="form-group p-3">
                <label htmlFor="" className='text-rose-600'>Numbers</label>
                <div className="inp w-full p-1">
                    <input type="text" placeholder='Enter Numbers' value={number} name='number' onChange={handleChange} className='bg-white p-1 w-full'/>
                </div>
                <div className="form-error text-rose-600">
                    {error.number && <span>{error.number}</span>}
                </div>
            </section>

            <section className="form-group p-3">
                <label htmlFor="" className='text-rose-600'>Alphanumberic</label>
                <div className="inp w-full p-1">
                    <input type="text" placeholder='Enter alphanumeric' value={alphanum} name='alphanum' onChange={handleChange} className='bg-white p-1 w-full'/>
                </div>
                <div className="form-error text-rose-600">
                    {error.alphanum && <span>{error.alphanum}</span>}
                </div>
            </section>

            <section className="form-group p-3">
                <label htmlFor="" className='text-rose-600'>Textarea</label>
                <div className="inp w-full p-1">
                    <textarea rows={6} cols={30} value={textarea} name='textarea' onChange={handleChange} className='bg-white p-1 w-full'></textarea>
                </div>
                <div className="form-error">
                    {error.textarea && <span>{error.textarea}</span>}
                </div>
            </section>

            <section className="form-group p-3 ">
                <div className="btn flex gap-10 justify-center">
                    <button onClick={handleSubmit} className='bg-red-500 p-2 w-36 rounded-md text-white'>Submit</button>
                    <button onClick={handleReset} className='bg-red-500 p-2 w-36 rounded-md text-white'>Reset</button>
                </div>
            </section>
        </form>
    </>
  )
}

export default FormValidation