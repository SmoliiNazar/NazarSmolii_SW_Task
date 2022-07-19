import React, { Component } from 'react';
import './category.scss';

class Category extends Component {
    render() {
        return (
            <div className="section">
           <div className="header">
                <ul className='header-wrapper'>
                    <div className='header-wrapper__select'>
                        <li className='header-select header-select__active'>
                            WOMAN <span className='divider'></span>
                        </li>
                        <li className='header-select'>MAN</li>
                        <li className='header-select'>KIDS</li>
                    </div>
                    
                    <div className="header-img">
                        <img src="icons/shopICON.png" alt="shop icon" />
                    </div>

                    <div className="header-wrapper__currency">
                        <select name="currency" className='currency'>
                            <option className='currency-option' value="USD">$ USD</option>
                            <option className='currency-option' value="USD">€ EUR</option>
                            <option className='currency-option' value="USD">¥ JPY</option>
                        </select>
                        <div className="shopping-cart">
                            <img src="icons/EmptyCart.png" alt="your cart" />
                        </div>
                    </div>
                </ul>

           </div>
        </div>
        );
    }
}

export default Category;