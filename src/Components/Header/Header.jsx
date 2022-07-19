import { Component } from 'react';
import './header.scss';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cart: false,
            counter: 0,
            usd: '$ 50.00',
            eur: '€ 48.75',
            jpy: '¥ 6.880',
            totalValue: '$200.00',
        }
    }

    addCounter = () => {
        if (this.state.counter <= 3) {
            this.setState((prevState) => {
                return {
                    counter: prevState.counter + 1
                }
            })
        }
    }

    minusCounter = () => {
        if (this.state.counter >= 1) {
            this.setState((prevState) => {
                return {
                    counter: prevState.counter - 1
                }
            })
        }
    }

    toggleCart = () => {
        this.setState((prevState) => {
            return {
                cart: !prevState.cart
            }
        })
    }

    toggleIndexXS = () => {
        this.setState((prevState) => {
            return {
                xs: !prevState.xs
            }
        })
    };

    toggleIndexS = () => {
        this.setState((prevState) => {
            return {
                s: !prevState.s
            }
        })
    };

    toggleIndexM = () => {
        this.setState((prevState) => {
            return {
                m: !prevState.m
            }
        })
    };

    toggleIndexL = () => {
        this.setState((prevState) => {
            return {
                l: !prevState.l
            }
        })
    };

    toggleIndexSG = () => {
        this.setState((prevState) => {
            return {
                sg: !prevState.sg
            }
        })
    };

    toggleIndexMG = () => {
        this.setState((prevState) => {
            return {
                mg: !prevState.mg
            }
        })
    };


    render() {
        return (
            <>
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
                                <div onClick={this.toggleCart} className="shopping-cart">
                                    <img src="icons/EmptyCart.png" alt="your cart" />
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
                    {this.state.cart ? 
                    
                    <div onClick={this.toggleCart} className="overlay">
                        <div onClick={e => e.stopPropagation()} className="cart">
                            <div className="card-info">
                                <div className="card-name">
                                    <div className="card-name__count"><span>My bag</span>, {} item</div>
                                    <div className="card-name__name">Apollo <br /> Running Short</div>
                                    <div className="card-name__price">$50.00</div>
                                
                                    <div className="card-param">
                                        <div className="card-subtitle size">
                                            Size:
                                        </div>
                                        <div className="square-wrapper">
                                            <span onClick={this.toggleIndexXS} className={this.state.xs ? 'sized-squares SQactive': 'sized-squares'}>XS</span>
                                            <span onClick={this.toggleIndexS} className={this.state.s ? 'sized-squares SQactive': 'sized-squares'}>S</span>
                                            <span onClick={this.toggleIndexM} className={this.state.m ? 'sized-squares SQactive': 'sized-squares'}>M</span>
                                            <span onClick={this.toggleIndexL} className={this.state.l ? 'sized-squares SQactive': 'sized-squares'}>L</span>
                                        </div>
                                        <div className="card-subtitle color">
                                            Color
                                        </div>
                                        <div className="colored-wrapper">
                                            <span className='colored-squares gray'></span>
                                            <span className='colored-squares black'></span>
                                            <span className='colored-squares green'></span>
                                        </div>
                                    </div>
                                
                                </div>
                                
                                <div className="card-counter">
                                    <div onClick={this.addCounter} className='card-counter__squares'>
                                        <div className='plus'></div>
                                        <div className='secM'></div>
                                    </div>
                                    <div className="card-counter__counter">{this.state.counter}</div>
                                    <div onClick={this.minusCounter} className='card-counter__squares'>
                                        <div className='minus'></div>
                                    </div>
                                </div>

                                <div className="card-img">
                                    <img src="items/CartD.png" alt="cart product" />
                                </div>
                            </div>

                            <div className="card-info">
                                <div className="card-name">
                                    <div className="card-name__name">Jupiter <br /> Wayfarer</div>
                                    <div className="card-name__price">$75.00</div>
                                
                                    <div className="card-param">
                                        <div className="card-subtitle size">
                                            Size:
                                        </div>
                                        <div className="square-wrapper glass-wrapper">
                                            <span onClick={this.toggleIndexSG} className={this.state.sg ? 'sized-squares SQactive sg': 'sized-squares sg'}>S</span>
                                            <span onClick={this.toggleIndexMG} className={this.state.mg ? 'sized-squares SQactive sg': 'sized-squares sg'}>M</span>
                                        </div>
                                        <div className="card-subtitle color">
                                            Color
                                        </div>
                                        <div className="colored-wrapper">
                                            <span className='colored-squares black'></span>
                                            <span className='colored-squares blue'></span>
                                            <span className='colored-squares orange'></span>
                                        </div>
                                    </div>
                                
                                </div>
                                
                                <div className="card-counter">
                                    <div onClick={this.addCounter} className='card-counter__squares'>
                                        <div className='plus'></div>
                                        <div className='secM'></div>
                                    </div>
                                    <div className="card-counter__counter">{this.state.counter}</div>
                                    <div onClick={this.minusCounter} className='card-counter__squares'>
                                        <div className='minus'></div>
                                    </div>
                                </div>

                                <div className="card-img">
                                    <img src="items/glasses.png" alt="cart product" />
                                </div>
                            </div>    
                            <div className="total">
                                <div className="total-wrapper">
                                    <div className="total-title">Total</div>
                                    <div className="total-value">{this.state.totalValue}</div>
                                </div>
                                <div className="total-wrapper__btn">
                                    <button className='chekout-btn ghost'>VIEW BAG</button>
                                    <button className='chekout-btn lightgreen'>CHECK OUT</button>
                                </div>
                            </div>
                        </div>  
                    </div>
                    
                    : null}

            </>
        );
    }
}

export default Header;