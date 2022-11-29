import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {galleryImages} from '../../assets/data'
import {BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'

import './Gallery.css';

const Gallery = () => {
  
  const scrollRef = useRef(null)

  const scroll = (direction) => {

    const {current} = scrollRef;

    if (direction ==='left') {
      current.scrollLeft -= 300;
    }else {
      current.scrollLeft += 300;
    }
  }
  return (
  <div className='app__gallery'>
    <div className="app__gallery-content">
      <h1>NOTRE ÉQUIPE</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iste, cumque temporibus dicta quos ad odio nesciunt adipisci beatae incidunt, fugit eaque. Repellendus, dolore. Laborum, consequuntur? Nobis molestias dolorem provident.</p>
      <Link to='/team'><button className='btn--costum btn--costum_hover' >En savoir plus</button></Link>
    </div>
    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {galleryImages.map((image,index) => (
          <div className='app__gallery-images_card' key={index}>
            <img src={image} alt="gallery" />
          </div>
        ))}
      </div>
      <div className="app__gallery-images_arrow">
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left')} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={()=> scroll('right')} />
      </div>
    </div>
  </div>
  )
}

export default Gallery;
