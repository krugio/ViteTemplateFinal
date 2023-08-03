import React from "react";
import { useDispatch } from "react-redux";
import { setOpenModalNewUser } from "../store/modules/exampleSlice/exampleSlice";
import { Button } from "@mui/material"
import { useQuery } from "react-query";
import { buscaCategorias } from "../services/api";

const Home = () => {
    const dispatch = useDispatch()

    const { status, data, error, isFetching, isLoading } = useQuery('ListarCardapio', buscaCategorias);

    console.log(data)
    console.log(data)




    return (
        <>
      
            <div className="page-content">
                <div className="container bottom-content">
                    <div className="product-list">
                        <div className="dz-content">
                            <h4 className="item-name">
                                <a href="cart.html">
                                    Goat + Chicken Skinless + Cleaned Prawns
                                </a>
                            </h4>
                            <div className="offer-code">
                               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente accusantium ducimus dolorum illum harum eaque, reiciendis, labore blanditiis quas commodi ex at aliquid, odio architecto similique eos! Eos, facilis cum!
                            </div>
                            <div className="price-wrapper">
                                <h6 className="current-price"><i className="fa-solid fa-indian-rupee-sign"></i>930</h6>
                                <span className="old-price"><i className="fa-solid fa-indian-rupee-sign"></i>1100</span>
                            </div>
                            <div className="footer-wrapper">
                                <span className="product-title">Combo pack</span>
                            </div>
                        </div>
                        <div className="text-end">
                            <a href="cart.html" className="dz-media media-100">
                                <img className="rounded-sm" src="/assets/images/product/1.jpg" alt="image" />
                            </a>
                            <a href="cart.html" className="btn btn-sm btn-block btn-outline-primary">ADD</a>
                        </div>
                    </div>

                </div>
            </div>
          
        </>
    )
}

export default Home;