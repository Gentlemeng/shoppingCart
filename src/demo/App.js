import $ from "jquery"
import List from "./List/List";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
export default class App{
    constructor(id){
        this.$el = $("#"+id)
    }
    init(){
        this.initShoppingCart();
        this.initList();
    }
    initList(){
        let list = new List(this);
        list.init();
    }
    initShoppingCart(){
        let shoppingCart = new ShoppingCart(this);
        shoppingCart.init();
    }
}