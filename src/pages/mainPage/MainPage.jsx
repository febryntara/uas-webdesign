import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Galery from '../../components/galery/Galery'
import Hero from '../../components/hero/Hero'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import NewArrival from '../../components/newArrival/NewArrival'

function MainPage() {
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
