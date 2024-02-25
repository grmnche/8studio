import React, { Fragment, useState } from 'react';

import ProducerCard from '../../components/ProducerCard';
import Logo from '../../components/Logo';
import RainButton from '../../components/Animation/RainButton';

const About = () => {
  const [isScriptClicked] = useState(false);
  const scriptBtnRef = React.useRef(null);
  const aboutContainerRef = React.useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - aboutContainerRef.current.offsetLeft);
    setScrollLeft(aboutContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - aboutContainerRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    aboutContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScriptClick = () => {
    const companyEmail = 'ltd8studio@yandex.ru';
    const mailtoLink = 'mailto:' + companyEmail;

    window.open(mailtoLink);
  };

  const handleSendScriptClick = () => {
    const container = aboutContainerRef.current;
    if (container) {
      const scrollPosition = container.scrollWidth - container.offsetWidth;
      container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex">
      <div
        className="about-page"
        ref={aboutContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <main className="about-main inner-page">
          <div className="produce-cards">
            <ProducerCard index={0} />
            <ProducerCard index={1} />
          </div>

          <div className="about-text">
            Кинокомпания <span className="font-bold inline">8 Студия</span>{' '}
            основана в 2021-м году. Мы разрабатываем и производим игровые фильмы
            и сериалы в различных жанрах и форматах. Наша репутация базируется
            на успешных проектах, отмеченных призами на российских и зарубежных
            кинофестивалях. Наши фильмы и сериалы представлены на ведущих
            стриминговых платформах как в России, так и за рубежом.
            <hr className="mt-8" />
            <p className="mt-3 font-semibold">ltd8studio@yandex.ru</p>
            <div className="flex mt-6">
              <a href="https://t.me/film_company_8Studio">
                <img
                  src="./images/tg.svg"
                  alt=""
                  className="social-media h-6 mr-4"
                />
              </a>
              <a href="https://vk.com/8studio_production">
                <img
                  src="./images/vk.svg"
                  alt=""
                  className="social-media h-6"
                />
              </a>
            </div>
          </div>

          <div className="send-script hidden" onClick={handleSendScriptClick}>
            <span className="text-2xl">Есть сценарий или идея?</span>
            <img src="./images/arrow.svg" alt="" className="arrow" />
          </div>
        </main>

        <footer className="about-footer inner-page">
          <button
            ref={scriptBtnRef}
            className={`load-script-btn text-lg md:text-xl lg:text-3xl ${
              isScriptClicked ? 'hide' : ''
            } text-2xl`}
            onClick={handleScriptClick}
          >
            Пришлите нам текст
          </button>
        </footer>
      </div>

      {isScriptClicked ? '' : <RainButton />}
      {isScriptClicked ? '' : <Logo />}
    </div>
  );
};

export default About;
