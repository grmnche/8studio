import React, { Fragment, useState } from 'react';

import '../../images/Tatarov.jpg';
import '../../images/Shirikov.png';
import '../../images/arrow.svg';
import '../../images/tg.svg';
import '../../images/vk.svg';

import ScriptSubmissionForm from '../../components/ScriptSubmissionForm';
import ProducerCard from '../../components/ProducerCard';
import Logo from '../../components/Logo';
import RainButton from '../../components/Animation/RainButton';

const About = () => {
  const [isScriptClicked, setIsScriptClicked] = useState(false);
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
    setIsScriptClicked((isScriptClicked) => !isScriptClicked);
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
        className="about-container relative 2xl:top-0 w-full min-h-screen 2xl:overflow-y-hidden 2xl:overflow-x-scroll 2xl:flex"
        ref={aboutContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="about-page h-full 2xl:flex justify-center items-center flex-col 2xl:static 2xl:min-w-full mt-28 lg:mt-0">
          <div className="gap-40 flex flex-col 2xl:flex-row justify-center mt-28">
            <ProducerCard index={0} />
            <ProducerCard index={1} />
          </div>

          <div className="about-text mt-32 lg:mt-12 lg:mb-0 w-11/12 2xl:w-3/4 mx-auto 2xl:mx-0">
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

          <div
            className="send-script hidden 2xl:flex"
            onClick={handleSendScriptClick}
          >
            <span className="text-2xl">Есть сценарий или идея?</span>
            <img src="./images/arrow.svg" alt="" className="arrow" />
          </div>
        </div>

        <div className="about-footer flex justify-center items-start 2xl:items-center h-1/4 2xl:h-screen 2xl:min-w-full relative">
          <button
            ref={scriptBtnRef}
            className={`load-script-btn text-lg md:text-xl lg:text-3xl w-3/4 2xl:w-1/4 ${
              isScriptClicked ? 'hide' : ''
            } text-2xl`}
            onClick={handleScriptClick}
          >
            Загрузить текст
          </button>
          {isScriptClicked ? (
            <ScriptSubmissionForm onClick={handleScriptClick} />
          ) : (
            ''
          )}
        </div>
      </div>

      {isScriptClicked ? '' : <RainButton />}
      {isScriptClicked ? '' : <Logo />}
    </div>
  );
};

export default About;
