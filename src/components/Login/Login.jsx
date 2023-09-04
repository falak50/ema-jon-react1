import { Link } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';
const Login = () => {
    const {singIn} = useContext(AuthContext);

    const handleLogin  = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);

        singIn(email,password)
        .then(r => {
            console.log('login done successfully')
            console.log(r.user);
            e.target.reset();
        })
        .catch(e => {
            console.log(e);
        })
    }
    return (
        <div>
          <div className='form-container'>
            <h2 className='from-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label className='label' htmlFor="email">Email</label>
                     <input type="email" name='email' id='' required/>
                </div>
                <div className="form-control">
                    <label className='label' className='label' htmlFor="password">Password</label>
                     <input type="password" name='password' id='' required/>
                </div>
                 <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-zon ? <Link to='/singup'>create a  acount</Link> </small></p>
        </div>
        </div>
    );
};

export default Login;