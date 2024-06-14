import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Password from './Password';
import Email from './Email';
import Submit from './Submit';
import Google from './Google';
import Facebook from './Facebook';


const SignUp = () => {
  const nav = useNavigate();

  const [username, setUsername] = useState('Username');
  const [phone, setPhone] = useState('Phone');

  function move() {
    nav("/", { state: { username } }); 
  }

  return (
    <div className="hehe">
      <div className="h1">
        <b>Sign Up</b>
        <Link to="/Login" className='a'>Already a Customer?</Link>
      </div>
      <form method="get">
        <div>
          <input type="text" 
          id="username" 
          required 
          placeholder={username} 
          onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <Email place="Email"/>
        </div>
        <div>
          <input 
          type="tel" 
          id="user_phone" 
          name="user_phone" 
          placeholder={phone} 
          onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <input 
          type="date" 
          id="user_dob" 
          name="user_dob" />
        </div>
        <div>                                
          <Password place="Password"/>
        </div>
        <Submit click={move} text='Submit'/>
      </form>
      <div className="god">
        <Google text='Signup With Google'/>
        <Facebook text='Signup With Facebook '/>
      </div>
    </div>
  );
}

export default SignUp;