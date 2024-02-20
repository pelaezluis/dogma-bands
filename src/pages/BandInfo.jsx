import './BandInfo.css'
import { Header } from './Header'
export const BandInfo = ({title, description}) => {
    const location = title.split(' ') > 1 ? title.split(' ').join('').toLowerCase() : title.toLowerCase()
    return (
        <>
            <Header />
            <div className="band-info">
                <h1 id={location}>{title}</h1>
                {description}
            </div>
            
        </>
    )
}