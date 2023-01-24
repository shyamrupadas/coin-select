import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  filteredCategoriesFromSelector,
  filteredCategoriesToSelector,
} from './store/categorySelectors';
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
import { PanelFrom } from './vidgets';
import { PanelTo } from './vidgets/PanelTo';

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(data));
  }, [dispatch]);
  return (
    <>
      <PanelFrom />
      <PanelTo />
    </>
  );
}
