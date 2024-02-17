import './ProfileBand.css';

export const ProfileBand = ({bandName, bandImg}) => {
    return (
        <div className='profile-band'>
            <img src={bandImg} alt="" />
            <h2>{bandName}</h2>
        </div>
    )
}