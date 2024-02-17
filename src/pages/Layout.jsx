import './Layout.css'
import { Link } from "react-router-dom"
import duality from '../assets/img/duality.jpeg'
import random from '../assets/img/random.jpeg'
import rockbita from '../assets/img/rockbita.jpeg'
import { ProfileBand } from '../components/ProfileBand';
import { Outlet } from "react-router-dom";
import { Header } from './Header'

export const Layout = () => {
    return (
        <>
            <Header />
            <div className='bands'>
                <div className="band-div">
                    <Link to="/duality">
                        <ProfileBand bandName='Duality' bandImg={duality} />
                    </Link>
                    <Link to="/random-shift">
                        <ProfileBand bandName='Random Shift' bandImg={random} />
                    </Link>
                    <Link to="/rockbita">
                        <ProfileBand bandName='Rockbita' bandImg={rockbita} />
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}