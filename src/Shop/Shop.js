import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


import main from "../img/products/van.png";
import sec from "../img/products/oatbar-vanilla.png";
import nut from "../img/products/nutrition-oatmilk-vanilla.png";

export class Shop extends Component {
    constructor(){
        super();
        this.showModal = this.showModal.bind(this);
        this.setMainImage = this.setMainImage.bind(this);

        this.hideModal = this.hideModal.bind(this);
        this.state = {
            isOpen: true,
            mainImage: main,
        }
    }
    showModal(){
        this.setState({isOpen: true});
    }
    setMainImage(newImg){
        console.log(newImg);
        this.setState({mainImage: newImg});
    }
    hideModal(){
        this.setState({isOpen: false});
    }
    render() {
        const customStyles = {
            content: {
                'box-shadow': '0 0 20px 0 rgba(0, 0, 0, 0.16)',
                'max-width': '904px',
                width: '75%',
                'max-height': '540px',
                margin: '0 auto',
                background: '#f5f5f5',
                border: 'none'
            }
        }
        return (
            
            <main id="shop">
                <Modal 
                        isOpen={this.state.isOpen} 
                        style={customStyles}>
                    <div className="product-modal">
                        <button id="modal-x" onClick={this.hideModal}>close</button>
                        <div className="modal-images">
                            <img src={this.state.mainImage} />

                            <div className="img-thumbnails">
                                <img className="thumbnail" onClick={() => this.setMainImage(main)} src={main} />
                                <img className="thumbnail" onClick={() => this.setMainImage(sec)} src={sec} />
                                <img className="thumbnail" onClick={() => this.setMainImage(nut)} src={nut} />

                            </div>
                        </div>
                        <div className="modal-details">
                            <h2 className="section-title product-title">Vanilla Oatmilk Bar</h2>
                            <p>Vanilla-flavoured oat milk-based bar dipped in chocolate</p>
                            <p>$XX.XX</p>
                            <button className="btn btn-green">Buy Now</button>
                            <button className="btn btn-clear">See More Details</button>
                            <div className="nutrition-badges">
                                <img src={require("../img/products/dairy-free.png")} />
                                <img src={require("../img/products/veg-logo.png")} />

                            </div>
                        </div>
                    </div>
                </Modal>
                <div className="page-banner">
                    <div className="breadcrumbs"><p>Home &gt; <span>Shop</span></p></div>

                    <div className="page-heading">
                        <h1>Shop Our Products</h1>
                    </div>
                </div>
                <section className="page-content" id="shop-content">
                    <div className="filter-opts">
                        <button className="btn btn-clear">Sort By: <span>Featured</span></button>

                        <button className="btn btn-clear">Filter</button>
                    </div>
                    <div className="products-grid">
                        <div className="product">
                            <Link to="product" className="img-container"><img height="160px" width="50px" src={require(`../img/products/choco.png`)}/></Link>
                            <Link className="section-title product-title" to="product">Vanilla Oatmilk Bar</Link>
                            <p className="des">Vanilla-flavoured oat milk-based bar dipped in chocolate</p>
                            <p className="section-title product-title">$XX.XX</p>
                            <button className="btn btn-clear quick-view" onClick={this.showModal}><img src={require("../img/icons/eye.svg")} />Quick View</button>
                        </div>
                        <div className="product">
                            <Link to="product" className="img-container"><img height="160px" width="50px" src={require(`../img/products/van.png`)}/></Link>
                            <Link className="section-title product-title" to="product">Vanilla Oatmilk Bar</Link>
                            <p className="des">Vanilla-flavoured oat milk-based bar dipped in chocolate</p>
                            <p className="section-title product-title">$XX.XX</p>
                            <button className="btn btn-clear quick-view" onClick={this.showModal}><img src={require("../img/icons/eye.svg")} />Quick View</button>
                        </div>
                        <div className="product">
                            <Link to="product" className="img-container"><img height="160px" width="50px" src={require(`../img/products/cone.png`)}/></Link>
                            <Link className="section-title product-title" to="product">Vanilla Oatmilk Bar</Link>
                            <p className="des">Vanilla-flavoured oat milk-based bar dipped in chocolate</p>
                            <p className="section-title product-title">$XX.XX</p>
                            <button className="btn btn-clear quick-view" onClick={this.showModal}><img src={require("../img/icons/eye.svg")} />Quick View</button>
                        </div>
                        <div className="product">
                            <Link to="product" className="img-container"><img height="160px" width="50px" src={require(`../img/products/ban.png`)}/></Link>
                            <Link className="section-title product-title" to="product">Vanilla Oatmilk Bar</Link>
                            <p className="des">Vanilla-flavoured oat milk-based bar dipped in chocolate</p>
                            <p className="section-title product-title">$XX.XX</p>
                            <button className="btn btn-clear quick-view" onClick={this.showModal}><img src={require("../img/icons/eye.svg")} />Quick View</button>
                        </div>
                        <div className="product">
                            <Link to="product" className="img-container"><img height="160px" width="50px" src={require(`../img/products/fruit.png`)}/></Link>
                            <Link className="section-title product-title" to="product">Vanilla Oatmilk Bar</Link>
                            <p className="des">Vanilla-flavoured oat milk-based bar dipped in chocolate</p>
                            <p className="section-title product-title">$XX.XX</p>
                            <button className="btn btn-clear quick-view" onClick={this.showModal}><img src={require("../img/icons/eye.svg")} />Quick View</button>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Shop
