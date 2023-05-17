import './home.css';
import home from '../../assets/icons/home.svg';
import Trending from '../../assets/icons/trending.svg';
import Subscriptions from '../../assets/icons/subscriptions.svg';
import Library from '../../assets/icons/library.svg';
import Show from '../../assets/icons/show-more.svg';
import dollie from '../../assets/icons/dollie.png'
import FooterNav from '../Footer/FooterNav';
import Dollie from '../Dollie/Dollie';
import Recommended from '../Recommended/Recommended';
import { MyContext } from '../Context/UseContext';
import { useContext } from 'react';

const Home = () => {
  const {dark} = useContext(MyContext);
  if(dark){
    document.getElementById('root').style.backgroundColor = '#494949'
  }else{
    document.getElementById('root').style.backgroundColor = '#fff'
  }
  return (
    <>
    <main className='main'>
      <aside className={'aside__left hide__aside-left' }>
        <ul className={`aside__left-list hidden md:flex md:flex-col `}>
          <li >
            <img src={home} alt="icon" className="aside__left-icons" />
            <span className={`aside__left-text aside__left-text-home ${dark? 'light':'dark'}`}>Home</span></li>
          <li >
            <img src={Trending} alt="icon" className="aside__left-icons" />
            <span className={`aside__left-text ${dark? 'light':'dark'}`}>Trending</span></li>
          <li >
            <img src={Subscriptions} alt="icon" className="aside__left-icons" />
            <span className={`aside__left-text ${dark? 'light':'dark'}`}>Subscriptions</span></li>
          <li >
            <img src={Library} alt="icon" className="aside__left-icons" />
            <span className={`aside__left-text ${dark? 'light':'dark'}`}>Library</span></li>
          
          <li >
            <img src={Show} alt="icon" className="aside__left-icons" />
            <span className={`aside__left-text ${dark? 'light':'dark'}`}>Show more</span></li>
        </ul>
      </aside>
      <aside className='aside__right'>
        <div className="profile__wrapper flex items-center gap-[15px] mb-[30px]">
          <img src={dollie} alt="picture block" /><span className={`block profile__text font-black text-[20px] ${dark? 'light':'dark'}`}>Dollie Blair</span>
        </div>
        <Dollie/>
        <div className={`recommended__wrapper block profile__text font-black text-[20px] mb-[30px] ${dark? 'light':'dark'}`}>Recommended</div>
        <Recommended/>
      </aside>
    </main>
    <FooterNav/>
    </>
  )
}

export default Home