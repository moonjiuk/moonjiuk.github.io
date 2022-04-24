import './reset.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [activeNav, setActiveNav] = useState(0);
  function goto(e) {
    setActiveNav(e);
    const activeSection = document.querySelector("#section" + e);
    const location = activeSection.offsetTop;
    const contentHeight = activeNav.clientHeight;
    window.scrollTo({top:location - 200, behavior:'smooth'});
  }
  

  return (
    <div className="App">
      {/* navigation */}
      <nav>
        <ul>
            <li className={activeNav == 0 ? 'active' : null} onClick={() => goto(0)}>
            <a>
              <div className='nav-filter'></div>
              <img src='/img/moon-nav.png'></img>
              <em>Introduction</em>
            </a>
          </li>
          <li className={activeNav == 1 ? 'active' : null} onClick={()=>goto(1)}>
            <a>
              <div className='nav-filter'></div>
              <img src='/img/moon-nav.png'></img>
              <em>Geology</em>
            </a>
          </li>
        </ul>
      </nav>
      {/* //navigation */}



      {/* main */}
      <main>
        <section id='wrap'>
          {/* intro */}
          <div id='section0'>
            <h1>about <em>moon</em></h1>
            <img className='moon-main' src='img/moon.jpeg' alt="intro moon image"></img>
          </div>
          {/* //intro */}

          <div className='contents'>
            <div className='container'>
              {/* section1 */}
              <section id='section1' className='content-item'>
                <img src='img/moon-front.png'></img>
                
                <div className='terrain-wrap'>
                  <div className='terrain-item sea'>
                    <div className='line'>
                      <div className='diagonal'></div>
                      <div className='horizon'></div>
                    </div>
                    <h2>MARIA <em>dark terrain</em></h2>
                    <p>mare, plural maria, any flat, dark plain of lower elevation on the Moon. The term, which in Latin means “sea,” was erroneously applied to such features by telescopic observers of the 17th century. In actuality, maria are huge basins containing lava flows marked by craters, ridges, faults, and straight and meandering valleys called rilles and are devoid of water.</p>
                  </div>

                  <div className='terrain-item mountain'>
                    <div className='line'>
                      <div className='diagonal'></div>
                      <div className='horizon'></div>
                    </div>
                    <h2>HIGH LANDS <em>bright terrain</em></h2>
                    <p>Regions on the moon's surface that are brightly colored except for the sea are called highlands. Continents are densely packed with craters. The minerals that make up the continent appear relatively bright because they are similar to plagioclase plagioclase, which is mainly rich in calcium and aluminum.</p>
                  </div>

                  <div className='terrain-item craters'>
                    <div className='line'>
                      <div className='diagonal'></div>
                      <div className='horizon'></div>
                    </div>
                    <h2>CRATER <em>recessed terrain</em></h2>
                    <p>impacts. The International Astronomical Union currently recognizes 9,137 craters, of which 1,675 have been dated</p>
                  </div>
                </div>
              </section>
              {/* section1 */}

              {/* section2 */}
              <section id='section2' className='content-item'></section>
              {/* section2 */}
            </div>
          </div>
        </section>
      </main>
      {/* //main */}
    </div>
  );
}

export default App;
