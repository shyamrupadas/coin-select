import s from './App.module.scss'
import { useState } from 'react';
import { useTypedSelector } from './hooks/useTypedSelector';
import { filteredCategoriesSelector } from './store/categorySlice';


const filterMap: any = {
  crypto: ['BTC', 'ETH', 'USDTTRC'],
  bank: ['ACRUB', 'SBERRUB', 'TCSRUB'],
  cash: ['CASHUSD', 'CASHRUB'],
}

export const App = () => {
  const [filter, setFilter] = useState<string>('')

  const directions = useTypedSelector(filteredCategoriesSelector(filter ? filterMap[filter] : 'all'))

  console.log(directions)
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
        <input type="text" />
        <select>
          {directions.map((direction) => (
              <option key={direction.code} value={direction.code}>{direction.name}</option>
            )
          )}
        </select>
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

