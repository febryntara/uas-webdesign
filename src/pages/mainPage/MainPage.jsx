import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import NewArrival from '../../components/newArrival/NewArrival'

function MainPage() {
    return (
        <div>
            <Carousel />
            <Jumbotron />
            <NewArrival />
        </div>
    )
}

export default MainPage
