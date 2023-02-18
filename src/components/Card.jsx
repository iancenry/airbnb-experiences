import star from '../images/Star.png'

const Card = (props) => {
  let badgeText
  if(props.item.openSpots === 0){
    badgeText = "SOLD OUT"
  }else if(props.item.location === 'Online'){
    badgeText = 'ONLINE'
  }
  return (
    <div className='card'>
        {badgeText && <div className='card-badge'>{badgeText}</div>}
        <img src={require(`../images/${props.item.coverImg}`)} alt="experiences" />
        <div>
            <span className='rating'><img src={star} alt="rating" /> {props.item.stats.rating} </span>
            <span className='rating-info'> ({props.item.stats.reviewCount}) <i className="bi bi-dot"></i> {props.item.location} </span>
        </div>
        <p className='card-title'>{props.item.title}</p>
        <p className='card-price'><span className='price'>From ${props.item.price}</span> / Person</p>
    </div>
  )
}

export default Card