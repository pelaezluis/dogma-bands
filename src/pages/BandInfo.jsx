import './BandInfo.css'

export const BandInfo = ({title, description}) => {
    const location = title.split(' ') > 1 ? title.split(' ').join('').toLowerCase() : title.toLowerCase()
    return (
        <>
            <div className="band-info">
                <h1 id={location}>{title}</h1>
                {description}
            </div>
            
        </>
    )
}