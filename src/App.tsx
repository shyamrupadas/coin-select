import s from './App.module.scss'
import React, { useState } from 'react'
import { useTypedSelector } from './hooks/useTypedSelector'
import { filteredCategoriesFromSelector, filteredCategoriesToSelector } from './store/categorySelectors'
import { Button } from './components/Button'


const filterMap: any = {
  all: [],
  crypto: ['BTC', 'ETH', 'USDTTRC'],
  bank: ['ACRUB', 'SBERRUB', 'TCSRUB'],
  cash: ['CASHUSD', 'CASHRUB'],
}

export type FilterType = 'crypto' | 'bank' | 'cash' | 'all'

export const App = () => {
  const [filterFrom, setFilterFrom] = useState<FilterType>('all')
  const [filterTo, setFilterTo] = useState<FilterType>('all')

  const [selected, setSelected] = useState('BTC')

  const fromItems = useTypedSelector(filteredCategoriesFromSelector(filterMap[filterFrom]))
  const toItems = useTypedSelector(filteredCategoriesToSelector(selected, filterMap[filterTo]))

  return (
    <>
      <div>
        <header>
          <h3>Отдаете</h3>
        </header>
        <div className={s.buttons}>
          <Button onClick={
            () => {
              setFilterFrom('all')
              setFilterTo('all')
            }}
                  active={filterFrom === 'all'}
          >
            Все
          </Button>
          <Button onClick={() => {
            setFilterFrom('crypto')
            setFilterTo('all')
          }}
                  active={filterFrom === 'crypto'}
          >Криптовалюты
          </Button>
          <Button onClick={() => {
            setFilterFrom('cash')
            setFilterTo('all')
          }}
                  active={filterFrom === 'cash'}
          >Наличные
          </Button>
          <Button onClick={() => {
            setFilterFrom('bank')
            setFilterTo('all')
          }}
                  active={filterFrom === 'bank'}
          >Банки RUB
          </Button>
        </div>
        <input type="text" />
        <select value={selected} onChange={(e) => {
          setSelected(e.target.value)
          setFilterTo('all')
        }}>
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
          <Button onClick={() => setFilterTo('all')}
                  active={filterTo === 'all'}
          >Все</Button>
          <Button onClick={() => setFilterTo('crypto')}
                  active={filterTo === 'crypto'}
          >Криптовалюты</Button>
          <Button onClick={() => setFilterTo('cash')}
                  active={filterTo === 'cash'}
          >Наличные</Button>
          <Button onClick={() => setFilterTo('bank')}
                  active={filterTo === 'bank'}
          >Банки</Button>
        </div>
        <input type="text" />
        <select>
          {toItems?.map((direction) => (
              <option key={direction.code} value={direction.code}>{direction.name}</option>
            )
          )}
        </select>
      </div>
    </>
  )
}

