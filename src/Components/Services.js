import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free cocktail",
                info:'The company is run by three generations of family, and with the 4th generation working their way up, we hope to continue the family tradition for years to come.',
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'The company is run by three generations of family, and with the 4th generation working their way up, we hope to continue the family tradition for years to come.',
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free ShuttleVan",
                info:'The company is run by three generations of family, and with the 4th generation working their way up, we hope to continue the family tradition for years to come.',
            },
            {
                icon:<FaBeer/>,
                title:"Strongest beer",
                info:'The company is run by three generations of family, and with the 4th generation working their way up, we hope to continue the family tradition for years to come.',
            }
        ]
    }
    render() {
        return (
            <section className="services">
            <Title title='services'/>
            <div className="services-center">
                {this.state.services.map((item,index)=>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                    </article>
                })}
            </div>
            </section>
        )
    }
}
