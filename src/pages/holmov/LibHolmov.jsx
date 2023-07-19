import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar.jsx';
import { StoriesHolmov } from '../../components/holmov/StoriesHolmov.jsx';
import Aos from 'aos';
import "aos/dist/aos.css";

import "../../images/leisurely.jpg"
import "../../images/s-van-rein.jpg"
import "../../images/endless-war.jpg"
import "../../images/hawaii.jpg"



export const LibHolmov = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [storyCardsHolmov, setStoryCardsHolmov] = useState([
    {
      id: 1,
      title: 'Неторопливый',
      description:
        'Хочешь жить – поторапливайся! Ты должен добыть руду и уголь, ты должен запастись едой, сшить одежду и обувь, пока не настали холода. Ты должен убежать от Твари. Так жили гномы Северной стороны тысячу лет. И вот пришел Он...',
      image: './images/leisurely.jpg',
      quote: '– Я думаю. – Незнакомец смотрел на Дара ясным взглядом. – Думаю, что ответить на твой вопрос.'
    },
    {
      id: 2,
      title: 'Себастьян Ван Рейн',
      description:
        'Начало девятнадцатого века, Европа. Молодой человек, потерявший отца, приезжает в Валахию, чтобы разгадать загадку проклятия, тяготеющего над его семьей.',
      image:
        './images/s-van-rein.jpg',
      quote: 'Затих глухой стук босых ног и шарканье ладоней по доскам. Себастьян вцепился в перила так, что ногти вонзились в дерево. Пот тек по его лицу.'
    },
    {
      id: 3,
      title: 'Бесконечная война',
      description:
        'Наверно, каждый мальчишка в детстве бегал с игрушечным ружьем, расставлял по полу солдатиков и танки. Это не значит, что все хотели на войну. Но война не спрашивает человека, когда приходит к нему. И игра может затянуться...',
      image:
        './images/endless-war.jpg',
        quote: 'Выстрела не последовало, зато через несколько секунд на той стороне – совсем не там, где, по его предположению, должен был находиться вражеский стрелок, – из камней насмешливо поднялась почти на метр камуфляжная шапка, демонстративно надетая на палку, и несколько раз качнулась вправо-влево.'
    },
    {
      id: 4,
      title: '"Голубые Гавайи"',
      description:
        'Жизнь и игра прорываются друг сквозь друга. Выстрелы, огонь, кровь... Шелест волн... Очередь в супермаркете... Где настоящая память, а где фантомная, где человек, где компьютер, и что записано на твоих дисках, и где от них пароль, кто же это помнит? Может, она?..',
      image:
        './images/hawaii.jpg',
        quote: '– Могу, – Крис хмуро изучал штанины суперагента. Языки пламени не могли пробраться сквозь них, наверно, каким-то составом пропитаны, вот они, суперагенты, в этом они все. Штаны с пропиткой, а бронежилет не выдают, плати.'
    }
  ]);

  return (
    <Fragment>
      <div className='bg'></div>
      <div className='blur'></div>
      <Navbar />

      <StoriesHolmov storyCardsHolmov={storyCardsHolmov} />
    </Fragment>
  );
};
