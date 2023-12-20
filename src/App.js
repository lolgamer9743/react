import loge from "./img/logo.svg";
import './App.css';


function App(){
  return (
    <div className="App">
      <header class="page-header container">
        <img src={loge} width="75" height="70" alt="Логотип"/>
        <nav class="main-menu">
          <ul class="main-menu-list">
            <li><a href="#about">О городе</a></li>
            <li><a href="#gallery">Галерея</a></li>
            <li><a href="#map">Карта</a></li>
            <span>lorem</span>
          </ul>
        </nav>    
      </header>
    </div>
  );
}
//ДЗ: Необходимо дождаться завершение «фиксации», после этого должна высветить кнопка push (добавить/отправить), на которую нужно нажать и проверить, что код добавился в репозитория. По результатам выполнения написать мне в мессенджер (в чат, в котором переписывается твоя мама с менеджерами)
export default App;
