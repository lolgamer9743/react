import React from "react";
import wether from "./img/wether.png"

function Main(){
    return(
      <div className='Main'>
          <main>    
            <div class="slogan">
              <div class="container"> 
                <h1>Открой для себя Инсбрук</h1>
              </div>
            </div>
            <article class="about container">      
              <h2>О городе</h2>
              <section class="about-info">
                <h3>Инсбрук - один из лучших горнолыжных курортов Австрии.</h3>
                <p>Сам город расположился в долине реки Инн, у самого подножия Восточных Альп. Поэтому, почти невозможно найти место в этом городе, чтобы не было видно гор.</p>
              </section>
              <div class="wrapper">
                <section class="about-numbers">
                  <h3>Инсбрук в цифрах:</h3>
                  <ul class="about-numbers-list"> 
                    <li>Население: чуть более 130 000 человек</li> 
                    <li>Часовой пояс: UTC+1 зимой и UTC+2 летом</li> 
                    <li>Зоны для катания: 9 штук, все связаны между собой транспортным сообщением</li> 
                    <li>Перепад высот: 860 метров — 3100 метров</li> 
                    <li>Продолжительность сезона: с 12 месяца (декабрь) по 4 месяц (апрель) включительно</li> 
                    <li>Возраст посетителей всех зон: с 2 лет и старше, без ограничений.</li> 
                  </ul>
                </section>
                <aside class="marketing">
                  <p>Собрался на горнолыжный курорт?</p>
                  <p>- Не забудь купить снаряжение!</p>
                  <a href="ski-racer.com">ski-racer.com</a>      
                </aside>
              </div>
              <section class="about-wether">
                <h3>Температура по месяцам</h3>
                <figure class="about-wether-graph">
                  <img src={wether} width="1198" height="721" alt="График изменения температуры"/>
                  <figcaption>Температура воздуха в Инсбруке днём и ночью, &ordm;C</figcaption>
                </figure>
              </section>
            </article>
          <section class="map container">
              <h2>Инсбрук на карте</h2>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61249.906639120054!2d11.316581898260624!3d47.277423926892226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d6ecfe1f8ca73%3A0x9d201c7d281d9b0d!2z0JjQvdC90YHQsdGA0YPQuiwg0JDQstGB0YLRgNC40Y8!5e0!3m2!1sru!2sbe!4v1651167286485!5m2!1sru!2sbe" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <p>Благодаря удобному расположению, добраться до сердца Альп не составляет особого труда.</p>
              <table>
                <thead>
                  <tr>
                    <th>bit transparta</th>
                    <th>iz mosckbe</th>
                    <th>iz bene</th>
                    <th>iz mongena</th>
                  </tr>
                </thead>
                <tbody> 
                  <tr>
                    <td>samolut</td>
                    <td>+</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>poest</td>
                    <td>+</td>
                    <td>+</td>
                    <td>+</td>
                  </tr>
                  <tr>
                    <td>auto</td>
                    <td>-</td>
                    <td>+</td>
                    <td>+</td>
                  </tr>
                  <tr>
                    <td>UNE sposibe</td>
                    <td>-</td>
                    <td>?</td>
                    <td>?</td>
                  </tr>
                </tbody>
              </table>
          </section>
          </main>
          <div class="menu">
            <ul class="header-list">
                <li>
                    <a href="#" class="item">home</a>
                </li>
                <li>
                    <a href="#" class="item">41215</a>
                </li>
                <li>
                    <a href="#" class="item">command</a>
                </li>
                <li>
                    <a href="#" class="item">blok</a>
                </li>
                <li>
                    <a href="#" class="item">5</a>
                </li>
            </ul>
        </div>
        <div class="gamburger">
            <input type="checkbox" id="menu-toggle"/>
            <label for="menu-toggle" class="button-menu">
                <span></span>
            </label>
            <ul class="menu-box">
                <li>
                    <a href="#" class="item">he</a>
                </li>
                <li>
                    <a href="#" class="item">JJJ</a>
                </li>
                <li>
                    <a href="#" class="item">command</a>
                </li>
                <li>
                    <a href="#" class="item">blok</a>
                </li>
                <li>
                    <a href="#" class="item">contact</a>
                </li>
            </ul>
        </div> 
        </div>
    );
  }
export default Main