import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

export enum SortPropertyEnum {
  RATING_ASC = "rating",
  RATING_DESC = "-rating",
  PRICE_ASC = "price",
  PRICE_DESC = "-price",
  TITLE_ASC = "title",
  TITLE_DESC = "title",
}

export enum SortName {
  RATING_ASC = "популярности(asc)",
  RATING_DESC = "популярности(desc)",
  PRICE_ASC = "цене(asc)",
  PRICE_DESC = "цене(desc)",
  TITLE_ASC = "алфавиту(asc)",
  TITLE_DESC = "алфавиту(desc)",
}

type Sort = {
  name: SortName;
  sortProperty: SortPropertyEnum;
};

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}

const initialState: FilterSliceState = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: SortName.RATING_DESC,
    sortProperty: SortPropertyEnum.RATING_ASC,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.sort = action.payload.sort;
        state.categoryId = Number(action.payload.categoryId);
        state.currentPage = Number(action.payload.currentPage);
      } else {
        state.sort = {
          name: SortName.RATING_DESC,
          sortProperty: SortPropertyEnum.RATING_ASC,
        };
        state.categoryId = 0;
        state.currentPage = 1;
      }
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;

export const { setSearchValue, setCategoryId, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
