import React,{useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
  
const AppLayout = ()=>{
    return (
        <div className='app'>
          
            <Header/>
            {/* <select className='dropdown'>
                <option>Car</option>
                <option>Bike</option>
                <option>Scooty</option>
            </select> */}
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);