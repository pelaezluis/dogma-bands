import './Bands.css'
import { SocialMedia } from './SocialMedia'
import random_1 from '../assets/img/random_1.PNG'

export const Random = () => {
    const randomMembers = [
        "Ricardo Guarin - Bajista", "Miguel Paez - Vocalista", "Eric Ramirez - Guitarrista y director musical", "Carlos Mario Zuleta - Baterista"
    ]
    return (
        <>
            <div className="description">
                <p>
                    Banda de Rock, fundada en el año 2010.. la trayectoria,
                    experiencia y Responsabilidad son nuestra carta de
                    presentación. <br />
                    Ofrecemos show con originalidad y la irreverencia del
                    Rock en vivo con los clásicos de las bandas más famosas
                    de todos los tiempos.
                </p>
                <ul className="tribute-band">
                    <li>
                        Metallica
                    </li>
                    <li>
                        foo fighters
                    </li>
                    <li>
                        Nirvana
                    </li>
                    <li>
                        AC/DC
                    </li>
                    <li>
                        Rammstein
                    </li>
                    <li>
                        Limp
                        Bizkit
                    </li>
                    <li>
                        Motorhead
                    </li>
                    <li>
                        Megadeth
                    </li>
                    <li>
                        Pantera
                    </li>
                    <li>
                        Molotov
                    </li>
                    <li>
                        Linkin Park
                    </li>
                    <li>
                        System of a Down
                    </li>
                </ul>
                <p>Entre otras.</p>
                <div className='members-band'>
                    <div>
                        <p>
                            La banda se encuentra conformada por:
                        </p>
                        <ul className="tribute-band">
                            {randomMembers.map((member, idx) => <li key={idx}>{member}</li>)}
                        </ul>
                    </div>
                    <div className='img-rockbita'>
                        <img src={random_1} alt="random" />
                    </div>
                </div>
                <p>
                    La banda toca en español y en inglés de manera
                    profesional. <br />
                    Ofrecemos e incluimos un servicio de pautas
                    publicitarias sectorizadas en redes sociales para
                    garantizar que el show que se realice tenga un
                    buen aforo dentro de su establecimiento o evento,
                    buscando el mutuo beneficio entre la banda y el
                    evento (siempre y cuando usted nos dé su visto
                    bueno)
                </p>
                <p>
                    Amenizamos todo tipo de eventos, acompañamos
                    el show con la animación idónea acorde al evento
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
                    instagram_url={"https://www.instagram.com/randomshiftrockband"}
                    facebook_url={"https://www.facebook.com/profile.php?id=100024269503654"} 
                    userBand="randomshiftrockband"
                />
            </div>
        </>
    )
}