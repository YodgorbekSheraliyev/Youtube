import './register.css';
import youtube from '../assets/icons/youtube.svg'
import { useContext, useState } from "react"
import firebase from '../firebase'
import { Link } from 'react-router-dom'
import { MyContext } from './Context/UseContext';
const Register = () => {
    const {setIsRegister} = useContext(MyContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email && !password && !confirmPassword) {
            setError('Iltimos barchasini toldiring')
            return;
        }
        if (password !== confirmPassword) {
            setError('confirm Parol mos kelmadi')
            return
        }
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error)
        }
        setEmail('');
        setPassword('')
        setConfirmPassword('');
        setIsRegister(false)
    }

    return (
        <div className='form__wrapper'>
        <img src={youtube} alt="youtube" className='text-center w-[80px] register__logo' />
            <h2 className='register__title text-center font-black text-[40px] mb-4'>Register</h2>
            {error}
            <form onSubmit={handleSubmit} className='register__form'>
                <label><br/>
                    Email: <input type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label> Confirm Password
                    <input type="password" value={confirmPassword} placeholder="confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                <button type="submit" className='form__btn font-bold' >Submit</button>
            </form>
            <Link to='/login' className='form__link text-cyan-600'>Accoutingiz bormi? bosing</Link>
        </div>

    )
}

export default Register