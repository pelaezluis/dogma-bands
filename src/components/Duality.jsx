import './Bands.css'
import { SocialMedia } from './SocialMedia'
import duality from '../assets/img/duality.jpeg'

export const Duality = () => {
    const dualityMembers = [
        "Ana Mendoza - Cantante", "Jairo Meza - Baterista", "Miguel Paez - Cantante", "Luis Peláez - Guitarrista", "Eric Ramirez - Bajista y director musical"
    ]
    return (
        <>
            <div className="description">
                <p>
                    Banda de Rock and Roll y Retro Americano Cartagenera fundada en el
                    año 2021. <br />
                    Ofrecemos show de Rock and Roll en vivo con los clásicos más
                    famosos de todos los tiempos y también algunos tributos como:
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
                    <li>
                        La hora del Rock and Roll
                    </li>
                    <li>
                        Serenata Rock para mamá
                    </li>
                    <li>
                        Rock Halloween
                    </li>
                </ul>
                <div className='members-band'>
                    <div>
                        <p>
                            La banda se encuentra conformada por:
                        </p>
                        <ul className="tribute-band">
                            {dualityMembers.map((member, idx) => <li key={idx}>{member}</li>)}
                        </ul>
                    </div>
                    <div className='img-rockbita'>
                        <img src={duality} alt="rockbita" />
                    </div>

                </div>
                <p>
                    La banda toca en español y en inglés de manera
                    profesional. <br />
                    Ofrecemos un servicio de pautas
                    publicitarias sectorizadas en redes sociales para
                    garantizar que el show que se realice tenga un
                    buen aforo dentro de su establecimiento,
                    buscando el mutuo beneficio entre la banda y el
                    evento
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
                <SocialMedia instagram_url={"https://www.instagram.com/dualityrocknroll/"} facebook_url={"100084175128866"}/>
            </div>

        </>
    )
}