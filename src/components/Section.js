import React,{useState} from 'react';
import './Section.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Section() {
  return (
    <section className="home" id="home">
    <div className="content">
    <h3>its time to celebrate! the best <span> event organizers </span></h3>
    <a href="/login" class="btn">Get Start</a>
    </div>
</section>  
  )
}

export default Section;