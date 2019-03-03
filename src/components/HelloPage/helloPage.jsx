import React from "react";

const Hello = (props) =>{
  return(
      <div className="container">
        <h2>Hello Componest</h2>
        <br/>
          <p>Hello, you are browsing the website in Reacts. Here is the work of Maxim Spashenov, work with the IPA is implemented in it</p>
        <ul>
          <li>
            <p> Functional: 1) View all routes.</p>
          </li>
          <li>
            <p> 2) All bus stations for each route.</p>
          </li>
        </ul>
        <p> The functionality of the site has not been tested so there may be bugs.</p>
        <p>Здравствуйте вы просматривает веб сайт на языке ReactJS. Здесь представлена работа Спасёнова Максима, в ней реализована работа с API</p>
      <ul>
        <li>
          <p> Функционал:1) Просмотр всех маршрутов.</p>
        </li>
        <li>
          <p> 2)Все автобусные остановки для каждого маршрута.</p>
        </li>
      </ul>
      <p> Функционал сайта не протестирован так что могут быть баги.</p>
      <h2>Для коректной работы всех компонентов трбуется выполнить инструкции:
      </h2>
      <ol>
        <li>npm install bootstrap </li>
        <li>npm install react-router-dom </li>
      </ol>
      </div>
  );
}
export default Hello;
