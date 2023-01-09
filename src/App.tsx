import s from './App.module.scss'
import { useState } from 'react';
import { useTypedSelector } from './hooks/useTypedSelector';
import { filteredCategoriesFromSelector, filteredCategoriesToSelector } from './store/categorySelectors';


const filterMap: any = {
  all: [],
  crypto: ['BTC', 'ETH', 'USDTTRC'],
  bank: ['ACRUB', 'SBERRUB', 'TCSRUB'],
  cash: ['CASHUSD', 'CASHRUB'],
}

export const App = () => {
  const [filterFrom, setFilterFrom] = useState<'crypto' | 'bank' | 'cash' | 'all'>('all')
  const [filterTo, setFilterTo] = useState<'crypto' | 'bank' | 'cash' | 'all'>('all')
  const [selected, setSelected] = useState('BTC')

  const fromItems = useTypedSelector(filteredCategoriesFromSelector(filterMap[filterFrom]))
  const toItems = useTypedSelector(filteredCategoriesToSelector(selected, filterMap[filterTo]))

  return (
    <div className={s.app}>
      <div>
        <header>
          <h3>Отдаете</h3>
        </header>
        <div className={s.buttons}>
          <button className={s.button} onClick={
            () => {
              setFilterFrom('all')
              setFilterTo('all')
            }}>Все</button>
          <button className={s.button} onClick={() => {
            setFilterFrom('crypto')
            setFilterTo('all')
          }}>Криптовалюты</button>
          <button className={s.button} onClick={() => {
            setFilterFrom('cash')
            setFilterTo('all')
          }}>Наличные</button>
          <button className={s.button} onClick={() => {
            setFilterFrom('bank')
            setFilterTo('all')
          }}>Банки RUB</button>
        </div>
        <input type="text" />
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          {fromItems.map((direction) => (
              <option key={direction.code} value={direction.code}>{direction.name}</option>
            )
          )}
        </select>
      </div>
      <div>
        <header>
          <h3>Получаете</h3>
        </header>
        <div className={s.buttons}>
          <button className={s.button} onClick={() => setFilterTo('all')}>Все</button>
          <button className={s.button} onClick={() => setFilterTo('crypto')}>Криптовалюты</button>
          <button className={s.button} onClick={() => setFilterTo('cash')}>Наличные</button>
          <button className={s.button} onClick={() => setFilterTo('bank')}>Банки RUB</button>
        </div>
        <input type="text" />
        <select>
          {toItems?.map((direction) => (
              <option key={direction.code} value={direction.code}>{direction.name}</option>
            )
          )}
        </select>
      </div>
    </div>
  )
}

