import React from 'react'
import { useFormik } from "formik"
import { signUpSchema } from '../schemas';



const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

function SignUp() {

const {values,errors,touched,handleChange,handleBlur,handleSubmit} =  useFormik({
    
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values,action)=>{
        console.log(values)
       action.resetForm(); 

    },
  


});

console.log(errors);
           

    return (

        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="name"
                        id="name"
                        type="name"
                        placeholder="Name"
                        autoComplete='off' 
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        {errors.name && touched.name?<p className='text-red-500 font-mono'>{errors.name}</p>:null}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                       Emaill
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        autoComplete='off' 
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {errors.email && touched.email?<p className='text-red-500 font-mono'>{errors.email}</p>:null}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        name='password'
                        id="password"
                        type="password"
                        placeholder="Password" 
                        autoComplete='off'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {errors.password && touched.password?<p className='text-red-500 font-mono'>{errors.password}</p>:null}
                  
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">
                       Confirm Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        name='confirm_password'
                        id="confirm_password"
                        type="password"
                        placeholder="Confirm Password" 
                        autoComplete='off'
                        value={values.confirm_password}
                        onChange={handleChange}
                        onBlur={handleBlur}/>
                        {errors.confirm_password && touched.confirm_password?<p className='text-red-500 font-mono'>{errors.confirm_password}</p>:null}
                  
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
          
        </div>

    )
}

export default SignUp