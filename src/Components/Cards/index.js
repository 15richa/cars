import React, { useState, useEffect } from "react"
import { getCarsdata } from "../../APIs/getCarsdata";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
    }; const [cars, setCars] = useState()
   
    useEffect(() => {
        const fetchCarsData= async () => {
            const data = await getCarsdata()
            console.log(data)
            setCars(data.splice(0,30))
        }
        fetchCarsData()
    }, [])

    console.log(cars)
  
    return (
        <div >
          <Slider {...settings}>  
        {cars != null && cars.length ? cars.map((item, index) => (
            
        
            <div>
             <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{item.car}</Card.Title>
              <Card.Text>
              {item.car_model}
              </Card.Text>
              <Card.Link href="#">{item.availability ? 'available' :'notavailable'}</Card.Link>
            </Card.Body>
          </Card> </div>
          
         
          )) : <span> Loading.... </span>}
           </Slider>
          </div>
       
       
    
          
      )
        

    }