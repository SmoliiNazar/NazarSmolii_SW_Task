import React, { Component } from 'react';
import './categories.scss';

class Categories extends Component {
    render() {
        return (
            <div className='category'>
                <div className="category-title">Category name</div>

                <div className="category-product">
                    <div className="category-product__wrapper">
                        <div className="category-product__card">
                            <img src="items/ProductA.png" alt="" />
                            <div className="card-descr">
                                <div className="category-descr">Apollo Running Short</div>
                                <div className="card-descr__price">$50.00</div>
                            </div>
                        </div>

                        <div className="category-product__card">
                            <img src="items/ProductB.png" alt="" />
                            <div className="card-descr">
                                <div className="category-descr">Apollo Running Short</div>
                                <div className="card-descr__price">$50.00</div>
                            </div>
                        </div>

                        <div className="category-product__card">
                            <img src="items/ProductC.png" alt="" />
                            <div className="card-descr">
                                <div className="category-descr none">Apollo Running Short</div>
                                <div className="card-descr__price none">$50.00</div>
                            </div>
                        </div>

                        <div className="category-product__card">
                            <img src="items/ProductD.png" alt="" />
                            <div className="card-descr">
                                <div className="category-descr">Apollo Running Short</div>
                                <div className="card-descr__price">$50.00</div>
                            </div>
                        </div>

                        <div className="category-product__card">
                            <img src="items/ProductA.png" alt="" />
                            <div className="card-descr">
                                <div className="category-descr">Apollo Running Short</div>
                                <div className="card-descr__price">$50.00</div>
                            </div>
                        </div>

                        <div className="category-product__card">
                            <img src="items/ProductF.png" alt="" />
                            <div className="card-descr">
                                <div className="category-descr">Apollo Running Short</div>
                                <div className="card-descr__price">$50.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;