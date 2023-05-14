import React from 'react';
import NavBar from './NavBar';
import MainContentScreen from './MainContentScreen';

const Home = (props) => {
    return(
        <div className='h-full flex flex-col'>
            <NavBar />
            <MainContentScreen paymentData={props.paymentData}/>
        </div>
    );
}

export default Home;