import './Bands.css'
import { SocialMedia } from './SocialMedia'

export const Rockbita = () => {
    const rockbitaMembers = [
        "Ana Mendoza - Vocalista", "Jairo Meza - Baterista", "Luis Pelaez - Guitarrista", "Eric Ramirez - Bajista y director musical"
    ]
    return (
      <>
        <div className='description'>
            <h3>"Somos la descarga más letal de rock y buena energía"</h3>
            <p>
                El nombre de nuestra banda hace alusión a la Órbita del Rock.
            </p>

            <p>
                La banda se encuentra conformada por:
            </p>
            <ul className="tribute-band">
                    { rockbitaMembers.map((member, idx) => <li key={idx}>{member}</li>)}
            </ul>

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
                    <li>Apertura de eventos</li>
                    <li>Shows para Bar, hoteles, yates, etc.</li>
            </ul>

        <SocialMedia />
        </div>
      </>
    )
  }