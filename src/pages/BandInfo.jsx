import './BandInfo.css'
export const BandInfo = ({title, description}) => {
    
    return (
        <>
            <div className="band-info">
                <h1>{title}</h1>
                {description}
            </div>
            
        </>
    )
}