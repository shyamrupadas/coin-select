import React, { useEffect, useState } from 'react'
import { filteredCategoriesFromSelector, filteredCategoriesToSelector } from './store/categorySelectors'
import { Button } from './components/Button'
import s from './App.module.scss'
import { useSelector } from 'react-redux';
import { useAppDispatch } from './store';
import { setCurrentCategory, setData } from './store/directionSlice';
import { data } from './api';
import { getCategories, getCategoryIds, getCurrentCategory, getCurrentDirection } from './store/directionSelectors';

const filterMap: any = {
  all: [],
  crypto: ['BTC', 'ETH', 'USDTTRC'],
  bank: ['ACRUB', 'SBERRUB', 'TCSRUB'],
  cash: ['CASHUSD', 'CASHRUB'],
}

interface IButton {
  id: FilterType,
  label: string
}

const buttons: IButton[] = [
  { id: 'all', label: 'Все' },
  { id: 'crypto', label: 'Криптовалюты' },
  { id: 'bank', label: 'Банки' },
  { id: 'cash', label: 'Наличные' },
]

export type FilterType = 'all' | 'crypto' | 'bank' | 'cash'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setData(data))
  }, [dispatch])

  const currentCategory = useSelector(getCurrentCategory)
  const currentDirection = useSelector(getCurrentDirection)
  const categoryIds = useSelector(getCategoryIds)
  const categories = useSelector(getCategories)

  const [filterFrom, setFilterFrom] = useState<FilterType>('all')
  const [filterTo, setFilterTo] = useState<FilterType>('all')

  const [selected, setSelected] = useState('BTC')

  const fromItems = useSelector(filteredCategoriesFromSelector(filterMap[filterFrom]))
  const toItems = useSelector(filteredCategoriesToSelector(selected, filterMap[filterTo]))

  const handleFromButtonClick = (id: FilterType) => {
    setFilterFrom(id)
    resetFilterTo()
    setSelected(fromItems[0].code)
    dispatch(setCurrentCategory(id))
  }

  const handleToButtonClick = (id: FilterType) => {
    setFilterTo(id)
  }

  const resetFilterTo = () => {
    setFilterTo('all')
  }

  return (
    <>
      <div>
        <header>
          <h3 className={s.header}>Отдаете</h3>
        </header>
        <div className={s.buttons}>
          {categoryIds.map((id: any) => (
            <Button
              key={id}
              onClick={() => handleFromButtonClick(id)}
              active={currentCategory === id}
            >
              {categories[id].label}
            </Button>
          ))}
        </div>
        <div className={s.select}>
          <input type="text" />
          <select value={selected} onChange={(e) => {
            setSelected(e.target.value)
            resetFilterTo()
          }}>
            {fromItems.map((direction) => (
                <option key={direction.code} value={direction.code}>{direction.name}</option>
              )
            )}
          </select>
        </div>
      </div>
      <div>
        <header>
          <h3 className={s.header}>Получаете</h3>
        </header>
        <div className={s.buttons}>
          {buttons.map(button => (
            <Button
              key={button.id}
              onClick={() => handleToButtonClick(button.id)}
              active={filterTo === button.id}>
              {button.label}
            </Button>
          ))}
        </div>
        <div className={s.select}>
          <input type="text" />
          <select>
            {toItems?.map((direction) => (
                <option key={direction.code} value={direction.code}>{direction.name}</option>
              )
            )}
          </select>
        </div>
      </div>
    </>
  )
}

