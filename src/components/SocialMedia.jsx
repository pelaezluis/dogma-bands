import whatsapp from '../assets/img/whatsapp.png'
import facebook from '../assets/img/facebook.png'
import instagram from '../assets/img/instagram.png'
import './Bands.css'

export const SocialMedia = ({instagram_url, facebook_url}) => {
    return (
        <>
            <p>
                Para más información escribenos a whatsapp (clic en el icono)
            </p>
            <div className='social-media'>
                <a href="https://wa.me/+573166514295" target='blank'><img src={whatsapp} alt="" /></a>
            </div>
            <p>
                O visitanos en Instagram y Facebook como @rockbitarockband
            </p>
            <div className='social-media'>
                <a href={instagram_url} target='blank_'><img src={instagram} alt="" /></a>
                <a href={facebook_url} target='blank'><img src={facebook} alt="" /></a>
            </div>
        </>
    )
}