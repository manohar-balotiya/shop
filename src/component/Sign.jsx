import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export const Sign = () => {


  const [error, setError] = useState();

  
  const [inputVal, setInputVal] = useState();


  const email = useRef();
  const password = useRef();
  const compassword = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()




    const mail = email.current.value;
    const pass = password.current.value;
    const compass = compassword.current.value;

    console.log(mail, pass, compass);

    email.current.value = "";
    password.current.value = "";
    compassword.current.value = "";

    setError("ERROR!")
 
  }

  

  return (
    <div><div className="flex flex-col justify-center font-[sans-serif] sm:h-screen p-4">
      <div className="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
        <div className="text-center mb-12">
          <a href="/"><img
            src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-40 inline-block' />
          </a>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <p className='text-center text-red-600 '>{error}</p>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input name="email" type="text" ref={email} defaultValue={inputVal} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter email" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input name="password" type="password" ref={password} defaultValue={inputVal}  className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter password" />
            </div>
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
              <input name="cpassword" type="password" ref={compassword} defaultValue={inputVal} className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" placeholder="Enter confirm password" />
            </div>

            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                I accept the <a href="/;" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
              </label>
            </div>
          </div>

          <div className="!mt-12">
            <button type="Submit" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Create an account
            </button>
          </div>
          <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:underline ml-1">Login here</Link></p>
        </form>
      </div>
    </div>
    </div>
  )
}
