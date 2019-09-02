import $ from "jquery"
import getCart from "./GetCart";

export default class ShoppingCart{
    constructor(app){
        this.$el = $("<button>购物车</button>")
        this.app = app;
        this.cart = getCart();
    }
    init(){
        this.render();
        this.showCart();
    }
    showCart(){
        let _this = this;
        this.$el.click(function(){
            let log = _this.cart.getList();
            alert(log);
        })
        
    }
    render(){
        this.app.$el.append(this.$el);
    }
}