import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
        cloudinaryImageId
    } = props.resData.info;
    return(
        <div className='res-card' >
         <img className='res-logo' alt='logo' 
         src={CDN_URL+cloudinaryImageId}/>
          <h3>{name}</h3>
          <span style={{display:'flex',
          flexDirection:'row',
          alignItems:'center',
          justifyContent:'space-between',
          fontWeight:'700'
          }}>
          <span style={{backgroundColor:avgRating>=4?'green':'red',color:'white',borderRadius:'0.2rem'}}>⭐{avgRating}.</span>
          <span>{sla.deliveryTime} mins</span>
          </span>
          {/* <span>{costForTwo}</span><br/> */}
          <span>{cuisines.join(', ')}</span><br/>
          
          
        </div>
    )
}
export default RestaurantCard;