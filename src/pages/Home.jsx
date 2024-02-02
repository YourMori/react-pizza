import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { setCategoryId, setCurrentPage } from "../redux/slices/filterSlice";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, currentPage, sort } = useSelector(
    (state) => state.filter
  );

  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (page) => {
    dispatch(setCurrentPage(page));
  };

  React.useEffect(() => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const order = sort.sortProperty.includes("-") ? "order=desc" : "order=asc";
    const sortyBy = `sortBy=${sort.sortProperty.replace("-", "")}`;
    // const search = searchValue ? `search=${searchValue}` : "";

    axios(
      `https://65b1037ad16d31d11bddd342.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&${sortyBy}&${order}`
    ).then((res) => {
      setPizzas(res.data);
      setIsLoading(false);
    });
    window.scroll(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const filtred = pizzas.filter((obj) =>
    obj.title.toLowerCase().includes(searchValue.toLowerCase()) ? true : false
  );
  const items = filtred.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const sceletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sceletons : items}</div>
      <Pagination setCurrentPage={onChangePage} />
    </>
  );
};

export default Home;
