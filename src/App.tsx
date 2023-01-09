import s from './App.module.scss'

function App() {

  return (
    <div className={s.app}>
      <div>
        <header>
          <h3>Отдаете</h3>
        </header>
        <div className={s.flex}>
          <h4>Все</h4>
          <h4>Криптовалюты</h4>
          <h4>Наличные</h4>
          <h4>Банки RUB</h4>
          <h4>Банки UAH</h4>
        </div>
        <input type="text" /><select></select>
      </div>
      <div>
        <header>
          <h3>Получаете</h3>
        </header>
        <div className={s.flex}>
          <h4>Все</h4>
          <h4>Криптовалюты</h4>
          <h4>Банки RUB</h4>
          <h4>Банки UAH</h4>
          <h4>Наличные</h4>
        </div>
        <input type="text" /><select></select>
      </div>
    </div>
  )
}

export default App
