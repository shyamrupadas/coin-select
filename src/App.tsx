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
import { From } from './containers/From/From';
import { PanelFrom } from './vidgets';

const filterMap: any = {
  all: [],
  crypto: ['BTC', 'ETH', 'USDTTRC'],
  bank: ['ACRUB', 'SBERRUB', 'TCSRUB'],
  cash: ['CASHUSD', 'CASHRUB'],
};

export type FilterType = 'all' | 'crypto' | 'bank' | 'cash';

interface IButton {
  id: FilterType;
  label: string;
}

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

  const resetFilterTo = () => {
    setFilterTo('all');
  };

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

  return <PanelFrom />;
}
