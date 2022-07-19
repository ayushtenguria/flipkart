import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";


const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, SetPassword] = useState("")

    return(
        <div className=" mx-auto flex flex-row justify-center items-center h-screen ">
            {/* <h3> SignUp</h3> */}
            <div className=" signup block bg-slate-50 round-x1 p-6 grid grid-row-4 shadow-md shadow-slate-300 w-90">
            <form>
                <input className="max-w-lg" type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input className="" type="Email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input className="" type="Password" placeholder="Password" value={password} onChange={(e)=>SetPassword(e.target.value)}/>
                <button className="block w-full text-sm text-slate-500 bg "  type="submit">Signup
                    {/* <i className="material-icons rught">forward</i> */}
                </button>
                <Link href="/login"><a><h5>Already have an account ?</h5></a></Link>
            </form>
            </div>
            
        </div>
    )
}

export default SignUp;