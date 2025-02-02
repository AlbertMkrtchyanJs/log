import { useState } from "react"
import "./Input.css"


function Input() {
    
    let [fullname,setFullname] = useState('')
    let [email,setEmail] = useState('')
    let [tel,setTel] = useState('')
    let [pword,setPword] = useState('')
    let [click,setClick] = useState(false)
    
    function Click() {
        setClick(true)
        
    }
       return(
        <>
        <div className="logCard">
            <div className="inputItem">
            <h1>REGISTER NOW</h1>
                <input type="text" onChange={(e) => setFullname(e.target.value)}
                 value={fullname} placeholder="Full Name" 
                 className={click && fullname ? 'item' : click  ? 'warning' : 'item'}
                />
<p className={click && fullname ? 'hidden' : click  ? 'war' : 'hidden'}>Important!!!</p>
            <input type="email" onChange={(e) => setEmail(e.target.value)} 
                value={email} placeholder="Email"
                className={click && email.includes('@gmail.com') && email ? 'item' : click  ? 'warning' : 'item'}
                />
<p className={click && email.includes('@gmail.com') && email ? 'hidden' : click  ? 'war' : 'hidden'}>Important!!!</p>
                <input type="password" onChange={(e) => setPword(e.target.value)} 
                    value={pword} placeholder="Password"
                    className={click && pword.length >= 7 ? 'item' : click ? 'warning'  : 'item'}
                    />
<p className={click && pword.length >= 7 ? 'hidden' : click ? 'war'  : 'hidden'}>Important!!!</p>
            <input type="tel" onChange={(e) => {
                e.target.value = e.target.value.replace(/[^0-9\.]/g, '');
                setTel(e.target.value)
            }} 
            value={tel} placeholder="Telephone"
            className={click && tel.length >= 9 ? 'item'  : click ? 'warning' : 'item'}
            />
<p className={click && tel.length >= 9 ? 'hidden'  : click ? 'war' : 'hidden'}>Important!!!</p>
            <button onClick={Click} >Login</button>
                </div>
        
        </div>
        </>
       )
}

export default Input