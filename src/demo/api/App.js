import $ from "jquery"
import List from "./../List/List"
export default class App{
    constructor(id){
        this.$el = $(`#${id}`)
    }
    init(){
        this.initList();
        this.initShoppingCart();
    }
    initList(){
        let list = new List(this);
        list.init();
    }
    initShoppingCart(){

    }
}