import React from 'react'
import './Techs.css';

function Techs() {
  return (
    <section className='techs' id="techs">
      <div className="techs__container container">
        <h2 className="subtitle">
          Технологии
        </h2>
        <h3 className="techs__title title">
          7 технологий
        </h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <div className="techs__icons">
          <p className="techs__icon">HTML</p>
          <p className="techs__icon">CSS</p>
          <p className="techs__icon">JS</p>
          <p className="techs__icon">React</p>
          <p className="techs__icon">Git</p>
          <p className="techs__icon">Express.js</p>
          <p className="techs__icon">mongoDB</p>
        </div>
      </div>
    </section>
  );
}

export default Techs;
