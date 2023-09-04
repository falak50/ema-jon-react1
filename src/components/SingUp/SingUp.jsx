import React, { useContext, useState } from 'react';
import './SingUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
const SingUp = () => {
 const [error , setError] = useState('');
 const {createUser} = useContext(AuthContext);

    const handleSingUp = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirm = e.target.confirm.value;

        console.log(email,password,confirm);
        setError('');
        if(password!== confirm){
           setError("Your password did not match");
           return;
        }else if(password.length<6){
            setError('password length must be grater or equal to 6 character')
            return;
        }
        createUser(email,password)
        .then(r => {
            console.log(r.user);
        })
        .catch(e =>{
            console.log(e);
             setError(e.message);
        })

        

    }
    return (
        <div>
        <div className='form-container'>
          <h2 className='from-title'>Sign Up</h2>
          <form onSubmit={handleSingUp}>
              <div className="form-control">
                  <label className='label' htmlFor="email">Email</label>
                   <input type="email" name='email' id='' required/>
              </div>
              <div className="form-control">
                  <label className='label' htmlFor="password">Password</label>
                   <input type="password" name='password' id='' required/>
              </div>
              <div className="form-control">
                  <label className='label' htmlFor="password">Confirm Password</label>
                   <input type="password" name='confirm' id='' required/>
              </div>
               <input className='btn-submit' type="submit" value="Sign Up" />
          </form>
          <p><small>Already have an acount? <Link to='/login'>Login</Link> </small></p>
          <p className='text-error'>{error}</p>
      </div>
      </div>
    );
};

export default SingUp;
