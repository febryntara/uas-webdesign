import React, { useEffect } from 'react'
import Carousel from '../../components/carousel/Carousel'
import Galery from '../../components/galery/Galery'
import Hero from '../../components/hero/Hero'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import NewArrival from '../../components/newArrival/NewArrival'

function MainPage() {
    useEffect(() => {
        function topFunction() {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
        topFunction();
      }, []);
    return (
        <div>
            <Hero />
            <Carousel />
            <Jumbotron />
            <NewArrival />
            <Galery />
        </div>
    )
}

export default MainPage
