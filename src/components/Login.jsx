import './register.css';
import youtube from '../assets/icons/youtube.svg'
import { useState } from "react"
import firebase from '../firebase'
import { Link } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email && !password ) {
            setError('Iltimos barchasini toldiring')
            return;
        }
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error)
        }
        setEmail('');
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <div className='form__wrapper'>
        <img src={youtube} alt="youtube" className='text-center w-[80px] register__logo' />
            <h2 className='register__title text-center font-black text-[40px] mb-4'>Login</h2>
            {error}
            <form onSubmit={handleSubmit} className='register__form'>
                <label><br/>
                    Email: <input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit" className='form__btn font-bold'>Submit</button>
            </form>
            <Link to='/register' className='form__link text-cyan-600'>Accoutingiz yo'qmi? bosing</Link>
        </div>

    )
}

export default Login;