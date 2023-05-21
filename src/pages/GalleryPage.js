import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'images/college-graduation.jpg',
        thumbnail: 'images/college-graduation.jpg',
        description: 'college graduation 2015',
        originalHeight: '500px',
    },

    {
        original: 'images/dog-family.jpg',
        thumbnail: 'images/dog-family.jpg',
        description: 'dog-family 2017',
        originalHeight: '500px',
    },

    {
        original: 'images/lighthouse-blender.png',
        thumbnail: 'images/lighthouse-blender.png',
        description: 'lighthouse-blender project 2022',
        originalHeight: '500px',
    },

    {
        original: 'images/nhl-hockey-game.jpg',
        thumbnail: 'images/nhl-hockey-game.jpg',
        description: 'NHL hockey game 2020',
        originalHeight: '500px',
    },

    {
        original: 'images/rise-and-grind-game.png',
        thumbnail: 'images/rise-and-grind-game.png',
        description: 'Rise and Grind published game 2022',
        originalHeight: '500px',
    },

    {
        original: 'images/soccer-team-captain.jpg',
        thumbnail: 'images/soccer-team-captain.jpg',
        description: 'Soccer team captain 2011',
        originalHeight: '500px',
    },

    {
        original: 'images/space-food-truck-sim.png',
        thumbnail: 'images/space-food-truck-sim.png',
        description: 'Galactic Food Truck Simulator game 2023',
        originalHeight: '500px',
    },

    {
        original: 'images/teaching-inheritence.png',
        thumbnail: 'images/teaching-inheritence.png',
        description: 'teaching inheritence to a class 2023',
        originalHeight: '500px',
    },

    {
        original: 'images/vegas-with-friends.jpg',
        thumbnail: 'images/vegas-with-friends.jpg',
        description: 'vegas with friends 2015',
        originalHeight: '500px',
    },

    {
        original: 'images/work-celebration.jpg',
        thumbnail: 'images/work-celebration.jpg',
        description: 'work-celebration 2021',
        originalHeight: '500px',
    }
]

function GalleryPage() {
    return (
        <>
        <h2>Gallery</h2>
        <p>A quick look into some of the highlights of my life thus far.</p>
            <article className="gallery">
                <ImageGallery items={images}/>
            </article>
        </>
    )
}

export default GalleryPage;