import './home.css';
import home from '../../assets/icons/home.svg';
import Trending from '../../assets/icons/trending.svg';
import Subscriptions from '../../assets/icons/subscriptions.svg';
import Library from '../../assets/icons/library.svg';
import History from '../../assets/icons/history.svg';
import Watch from '../../assets/icons/watch-later.svg';
import Favourites from '../../assets/icons/favourites.svg';
import Music from '../../assets/icons/music.svg';
import Games from '../../assets/icons/game.svg';
import Liked from '../../assets/icons/liked.svg';
import Show from '../../assets/icons/show-more.svg';

const Home = () => {
  return (
    <main className='main'>
      <aside className='aside__left'>
        <ul className="aside__left-list">
          <li>
            <img src={home} alt="icon" className="aside__left-icons" />
            <span className="aside__left-text aside__left-text-home">Home</span></li>
          <li>
            <img src={Trending} alt="icon" className="aside__left-icons" />
            <span className="aside__left-text">Trending</span></li>
          <li>
            <img src={Subscriptions} alt="icon" className="aside__left-icons" />
            <span className="aside__left-text">Subscriptions</span></li>
          <li>
            <img src={Library} alt="icon" className="aside__left-icons" />
            <span className="aside__left-text">Library</span></li>
          <li>
            <img src={History} alt="icon" className="aside__left-icons" />
            <span className="aside__left-text">History</span></li>
          <li>
            <img src={Watch} alt="icon" className="aside__left-icons" />
            <span className="aside__left-text">Watch later</span></li>
          <li>
            <img src={Favourites} alt="icon" className="aside__left-icons" />
            <span className="aside__left-text">Favourites</span></li>
          <li>
            <img src={Liked} alt="icon" className="aside__left-icons" />
            <span className="aside__left-text">Liked videos</span></li>
          <li>
            <img src={Music} alt="icon" className="aside__left-icons" />
            <span className="aside__left-text">Music</span></li>
          <li>
            <img src={Games} alt="icon" className="aside__left-icons" />
            <span className="aside__left-text">Games</span></li>
          <li>
            <img src={Show} alt="icon" className="aside__left-icons" />
            <span className="aside__left-text">Show more</span></li>
        </ul>
      </aside>
      <aside className='aside__right'></aside>
    </main>
  )
}

export default Home