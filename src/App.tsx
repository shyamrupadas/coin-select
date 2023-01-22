import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  filteredCategoriesFromSelector,
  filteredCategoriesToSelector,
} from './store/categorySelectors';
import { Button } from './components/Button';
import s from './App.module.scss';
import { useAppDispatch } from './store';
import {
  setCurrentCategoryFrom,
  setCurrentCategoryTo,
  setData,
} from './store/directionSlice';
import { data } from './api';
import {
  getCategories,
  getCategoryIds,
  getCurrentCategoryFrom,
  getCurrentCategoryTo,
  getCurrentDirectionFrom,
  getFilteredOptionsFrom,
} from './store/directionSelectors';
import { FilterButtons } from './components/FilterButtons';

const filterMap: any = {
  all: [],
  crypto: ['BTC', 'ETH', 'USDTTRC'],
  bank: ['ACRUB', 'SBERRUB', 'TCSRUB'],
  cash: ['CASHUSD', 'CASHRUB'],
};

interface IButton {
  id: FilterType;
  label: string;
}

export type FilterType = 'all' | 'crypto' | 'bank' | 'cash';

export function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setData(data));
  }, [dispatch]);

  const currentCategoryFrom = useSelector(getCurrentCategoryFrom);
  const currentDirectionFrom = useSelector(getCurrentDirectionFrom);
  const currentCategoryTo = useSelector(getCurrentCategoryTo);
  const categoryIds = useSelector(getCategoryIds);
  const categories = useSelector(getCategories);

  const filteredOptionsFrom = useSelector(getFilteredOptionsFrom);

  const [filterFrom, setFilterFrom] = useState<FilterType>('all');
  const [filterTo, setFilterTo] = useState<FilterType>('all');

  const [selected, setSelected] = useState('BTC');

  const fromItems = useSelector(
    filteredCategoriesFromSelector(filterMap[filterFrom])
  );
  const toItems = useSelector(
    filteredCategoriesToSelector(selected, filterMap[filterTo])
  );

  const handleFromButtonClick = (id: FilterType) => {
    setFilterFrom(id);
    resetFilterTo();
    setSelected(fromItems[0].code);
    dispatch(setCurrentCategoryFrom(id));
  };

  const handleToButtonClick = (id: FilterType) => {
    setFilterTo(id);
    dispatch(setCurrentCategoryTo(id));
  };

  const resetFilterTo = () => {
    setFilterTo('all');
  };

  return (
    <>
      <div>
        <header>
          <h3 className={s.header}>Отдаете</h3>
        </header>
        <div className={s.buttons}>
          <FilterButtons
            onClick={handleFromButtonClick}
            ids={categoryIds}
            currentCategory={currentCategoryFrom}
            categories={categories}
          />
        </div>
        <div className={s.select}>
          <input type="text" />
          <select
            // value={selected}
            onChange={(e) => {
              setSelected(e.target.value);
              resetFilterTo();
            }}
          >
            {filteredOptionsFrom.map((direction) => (
              <option key={direction.code} value={direction.code}>
                {direction.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <header>
          <h3 className={s.header}>Получаете</h3>
        </header>
        <div className={s.buttons}>
          <FilterButtons
            onClick={handleToButtonClick}
            ids={categoryIds}
            currentCategory={currentCategoryTo}
            categories={categories}
          />
        </div>
        <div className={s.select}>
          <input type="text" />
          <select>
            {toItems?.map((direction) => (
              <option key={direction.code} value={direction.code}>
                {direction.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
