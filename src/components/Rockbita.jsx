import './Bands.css'
import { SocialMedia } from './SocialMedia'
import rockbita_1 from '../assets/img/rockbita_1.jpg'

export const Rockbita = () => {
    const rockbitaMembers = [
        "Ana Mendoza - Cantante", "Jairo Meza - Baterista", "Luis Peláez - Guitarrista", "Eric Ramirez - Bajista y director musical"
    ]
    return (
        <>
            <div className='description'>
                <p>
                    El nombre de nuestra banda hace alusión a la Órbita del Rock.
                </p>
                <div className='members-band'>
                    <div>
                        <p>
                            La banda se encuentra conformada por:
                        </p>
                        <ul className="tribute-band">
                            {rockbitaMembers.map((member, idx) => <li key={idx}>{member}</li>)}
                        </ul>
                    </div>
                    <div className='img-rockbita'>
                        <img src={rockbita_1} alt="rockbita" />
                    </div>
                </div>
                <p>
                    Rockbita es una banda de Rock cartagenera fundada en el año 2019
                    Ofrecemos show de rock en vivo con los clásicos más famosos de
                    todos los tiempos y también algunos tributos como:
                </p>
                <ul className="tribute-band">
                    <li>
                        Enanitos Verdes
                    </li>
                    <li>
                        Kraken
                    </li>
                    <li>
                        Vilma Palma
                    </li>
                    <li>
                        Maná
                    </li>
                    <li>
                        Tributo al rock Femenino
                    </li>
                    <li>
                        Tributo al rock en español
                    </li>
                </ul>
                <p>
                    La banda toca en español y en inglés de manera profesional. <br />Ofrecemos
                    un servicio de pautas publicitarias sectorizadas en redes sociales para
                    garantizar que el show que se realice tenga un buen aforo dentro de su
                    establecimiento, buscando el mutuo beneficio entre la banda y el evento.
                </p>
                <p>
                    Amenizamos todo tipo de eventos:
                </p>
                <ul className="tribute-band">
                    <li>Matrimonios</li>
                    <li>Cumpleaños</li>
                    <li>Grados</li>
                    <li>Apertura de eventos</li>
                    <li>Eventos comerciales</li>
                    <li>Shows para Bar, hoteles, yates, etc.</li>
                </ul>

                <SocialMedia
                    instagram_url={"https://www.instagram.com/rockbitarockband/"}
                    facebook_url={"https://www.facebook.com/profile.php?id=100063476831710"} 
                    userBand={"rockbitarockband"}
                />
            </div>
        </>
    )
}