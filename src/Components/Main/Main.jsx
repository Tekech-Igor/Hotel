import React, {useEffect} from "react";
import './main.css'
import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'
import {HiLocationMarker, HiOutlineClipboardCheck} from "react-icons/hi";

import Aos from "aos";
import 'aos/dist/aos.css'

const Data = [
  {
  id:1,
  imgSrc: img,
  destTitle:'Bora Bora',
  location: 'New Zeland',
  grade: 'CULTURAL RELAX',
  fees: '$700',
  description: 'The epitome of Romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurious activities.'   
  },
  {
  id:2,
  imgSrc: img2,
  destTitle:'Bora Bora',
  location: 'New Zeland',
  grade: 'CULTURAL RELAX',
  fees: '$800',
  description: 'The epitome of Romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurious activities.'   
  },
  {
  id:3,
  imgSrc: img3,
  destTitle:'Bora Bora',
  location: 'New Zeland',
  grade: 'CULTURAL RELAX',
  fees: '$900',
  description: 'The epitome of Romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurious activities.'   
  },
  {
  id:4,
  imgSrc: img4,
  destTitle:'Bora Bora',
  location: 'New Zeland',
  grade: 'CULTURAL RELAX',
  fees: '$750',
  description: 'The epitome of Romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurious activities.'   
  },
  {
  id:5,
  imgSrc: img5,
  destTitle:'Bora Bora',
  location: 'New Zeland',
  grade: 'CULTURAL RELAX',
  fees: '$670',
  description: 'The epitome of Romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurious activities.'   
  },
  {
  id:6,
  imgSrc: img6,
  destTitle:'Bora Bora',
  location: 'New Zeland',
  grade: 'CULTURAL RELAX',
  fees: '$780',
  description: 'The epitome of Romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurious activities.'   
  },
  {
  id:7,
  imgSrc: img7,
  destTitle:'Bora Bora',
  location: 'New Zeland',
  grade: 'CULTURAL RELAX',
  fees: '$910',
  description: 'The epitome of Romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurious activities.'   
  },
  {
  id:8,
  imgSrc: img8,
  destTitle:'Bora Bora',
  location: 'New Zeland',
  grade: 'CULTURAL RELAX',
  fees: '$840',
  description: 'The epitome of Romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurious activities.'   
  },
  {
  id:9,
  imgSrc: img9,
  destTitle:'Bora Bora',
  location: 'New Zeland',
  grade: 'CULTURAL RELAX',
  fees: '$710',
  description: 'The epitome of Romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurious activities.'   
  }
]

const Main = () => {
  //React hook to add scrolle effect...
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])



  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
            return(
              <div key={id}
              data-aos="fade-up"
              className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiLocationMarker className="icon"/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
