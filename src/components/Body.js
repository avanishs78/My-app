import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import { useState } from "react";

const Body =()=>{
    const [resList,setResList] = useState(resData);
    return(
        <div className='body'>
           <div className='filter'>
              <button onClick={()=>{
              const filteredList = resList.filter((res)=>{
                return res.info.avgRating>=4.5;
               });
               setResList(filteredList);
               console.log(resList);
                }}
              
                className="filter-btn">Top Rated Restaurants</button>
           </div>
           <div className='res-container'>
              
             {resList.map((el,index)=>{
                return <RestaurantCard key={el.info.id} resData={el}/>
             })}
              
              
           </div>
        </div>
    )
}
export default Body;