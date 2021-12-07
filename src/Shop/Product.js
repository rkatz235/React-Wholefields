import React, { Component } from 'react'

import main from "../img/products/van.png";
import sec from "../img/products/oatbar-vanilla.png";
import nut from "../img/products/nutrition-oatmilk-vanilla.png";

export class Product extends Component {
    constructor(){
        super();
        
        this.state = {
            mainImage: main,
            count: 1
        }
        this.setMainImage = this.setMainImage.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.plusOne = this.plusOne.bind(this);
    }
    setMainImage(newImg){
        console.log(newImg);
        this.setState({mainImage: newImg});
    }
    minusOne(){
        if (this.state.count > 1){
            this.setState({count: this.state.count - 1});
        }
    }
    plusOne(){
        this.setState({count: this.state.count + 1});
    }
    render() {
        return (
            <main id="indiv-product">
                <div className="page-banner">
                <div className="breadcrumbs"><p>Home &gt; Shop &gt; <span>Vanilla Oatmilk Bar</span></p></div>

                </div>
                <div className="page-content"> 
                    <div className="product-imgs">
                        <div className="img-container">                        
                            <img id="main-image" src={this.state.mainImage} />
                        </div>
                        <div className="img-thumbnails">
                            <img className="thumbnail" onClick={() => this.setMainImage(main)} src={main} />
                            <img className="thumbnail" onClick={() => this.setMainImage(sec)} src={sec} />
                            <img className="thumbnail" onClick={() => this.setMainImage(nut)} src={nut} />
                        </div>
                        
                    </div>
                    <div className="product-des">
                        <h1 className="page-heading large">Oatmilk Bar</h1>
                        <p>Description goes here.</p>
                        <p className="section-title">$XX.XX</p>
                        <div className="btn btn-clear counter"><button onClick={this.minusOne}>-</button><span>{this.state.count}</span><button onClick={this.plusOne}>+</button></div>
                        <button className="btn btn-green ">Add to Cart</button>
                    </div>
                    
                    <div className="nutrition-info">
                        <h3 className="section-title">Nutritional Info</h3>
                        <div className="nutrition-content">
                            <p>This clear delimitation and explicit attribution of roles to each part of the content makes the page much clearer and easier to index correctly for Google and Bing.</p>
                            <div className="nutrition-badges">
                                <img src={require("../img/products/dairy-free.png")} />
                                <img src={require("../img/products/veg-logo.png")} />
                            </div>
                        </div>
                    </div>
                </div>
                
            </main>
        )
    }
}

export default Product
