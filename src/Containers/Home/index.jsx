import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts, getAllProducts } from "../../Store/productSlice";
import {
  fetchAsyncCategories,
  getAllCategories,
} from "../../Store/categorySlice";

const HomePageContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const categories = useSelector(getAllCategories);
  console.log("All categories ", categories);
  console.log("All products ", products);
  useEffect(() => {
    dispatch(fetchAsyncProducts(100));
    dispatch(fetchAsyncCategories());
  }, []);
  return <>HomePageContainer</>;
};

export default HomePageContainer;
