import React, { useState } from 'react'

const Form2 = () => {

    let [formData, setFormdata] = useState({
        minLength : "",
        maxLength : "",
        rangeLength : "",
        minValue : "",
        maxValue : "",
        rangeValue : ""
    })

    let {minLength,maxLength,rangeLength,minValue,maxValue,rangeValue} = formData

    let handleChange = (event) =>{
        let {name,value} = event.target 
        setFormdata({...formData,[name]:value})
    }

    let [errors,setErrors] = useState({})

    let handleSubmit = (event) =>{
        event.preventDefault()

        let validationError = {}

        if(minLength == ""){
            validationError.minLength = "*This is mandatory field"
        }
        else if(minLength.length < 7){
            validationError.minLength = "Enter min 7 characters"
        }

        if(maxLength == ""){
            validationError.maxLength = "*This is mandatory field"
        }
        else if(maxLength.length > 7){
            validationError.maxLength = "Enter max 7 characters"
        }

        if(rangeLength == ""){
            validationError.rangeLength = "*This is mandatory field"
        }
        else if(rangeLength.length < 7 || rangeLength.length > 15){
            validationError.rangeLength = "Enter value between 7-15"
        }

        if(minValue == ""){
            validationError.minValue = "*This is mandatory"
        }
        else if(minValue < 7){
            validationError.minValue = "Min value should be 7"
        }

        if(maxValue == ""){
            validationError.maxValue = "*This is mandatory field"
        }
        else if(maxValue > 7){
            validationError.maxValue = "Max value should be 7"
        }

        if(rangeValue == ""){
            validationError.rangeValue = "*This field is mandatory"
        }
        else if(rangeValue < 7 || rangeValue > 15){
            validationError.rangeValue = "Value should be between 7-15"
        }

        setErrors(validationError)
    }
  return (
    <>
        <form>
            <legend>Form Validation</legend>

            <section className="form-group">
                <label htmlFor="">Min Length</label>
                <div className="inp">
                    <input type="text" placeholder='Min 7 character' value={minLength} name='minLength' onChange={handleChange} />
                </div>
                <div className="form-error">
                    {errors.maxLength && <span>{errors.maxLength}</span>}
                </div>
            </section>
            
            <section className="form-group">
                <label htmlFor="">Max Length</label>
                <div className='inp'>
                    <input type="text" placeholder='Max 7 characters' value={maxLength} name='maxLength' onChange={handleChange} />
                </div>
                <div className="form-error">
                    {errors.minLength && <span>{errors.minLength}</span>}
                </div>
            </section>
        
            <section className='form-group'>
                <label htmlFor="">Range Length</label>
                <div className="inp">
                    <input type="text" placeholder='7-15 characters' value={rangeLength} name='rangeLength' onChange={handleChange} />
                </div>
                <div className="form-error">
                    {errors.rangeLength && <span>{errors.rangeLength}</span>}
                </div>
            </section>

            <section className="form-group">
                <label htmlFor="">Min Value</label>
                <div className="inp">
                    <input type="number" placeholder='Min value 7' value={minValue} name='minValue' onChange={handleChange}/>
                </div>
                <div className="form-error">
                    {errors.minValue && <span>{errors.minValue}</span>}
                </div>
            </section>

            <section className="form-group">
                <label htmlFor="">Max value 7</label>
                <div className="inp">
                    <input type="number" placeholder='Max value 7' value={maxValue} name='maxValue' onChange={handleChange}/>
                </div>
                <div className="form-error">
                    {errors.maxValue && <span>{errors.maxValue}</span>}
                </div>
            </section>

            <section className="form-group">
                <label htmlFor="">Range Value</label>
                <div className="inp">
                    <input type="number" placeholder='Value between 7-15' value={rangeValue} name='rangeValue' onChange={handleChange}/>
                </div>
                <div className="form-error">
                    {errors.rangeValue && <span>{errors.rangeValue}</span>}
                </div>
            </section>

            <section className="form-group">
                <div className="btn">
                    <button onClick={handleSubmit}>Submit</button>
                    <button>Reset</button>
                </div>
            </section>
        </form>
    </>
  )
}

export default Form2