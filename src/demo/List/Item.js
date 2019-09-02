import $ from "jquery"
import getCart from "./../ShoppingCart/GetCart"
import stateMachine from "javascript-state-machine"
import { log } from "./../Util/log";
export default class Item{
    constructor(list,data){
        this.$el = $("<div></div>")
        this.list = list;
        this.data = data;
        this.cart = getCart();
    }
    init(){
        this.initContent();
        this.initBtn();
        this.render();
    }
    initContent(){
        let data = this.data;
        this.$el.append(`<p>${data.name}</p>`)
        this.$el.append(`<p>${data.price}</p>`)

    }
    initBtn(){
        let $btn =  $("<button></button>")
        let _this = this;
        let fsm = new stateMachine({
            init:"加入购物车",
            transitions:[
                {
                    name:"addToCart",
                    from:"加入购物车",
                    to:"从购物车删除"
                },
                {
                    name:"deleteFromCart",
                    from:"从购物车删除",
                    to:"加入购物车"
                },
            ],
            methods:{
                onAddToCart:function(){
                    _this.addToCartHandle(_this.data)
                    updataText();
                },
                onDeleteFromCart:function(){
                    _this.deleteFromCartHandle(_this.data.id)
                    updataText();
                }
            }
        })
        updataText();
        function updataText(){
            $btn.text(fsm.state);
        }
        $btn.click(function(){
            if(fsm.is("加入购物车")){
                fsm.addToCart()
            }else{
                fsm.deleteFromCart();
            }
        })
        this.$el.append($btn);
    }
    @log('add')
    addToCartHandle(data){
        this.cart.add(data);
    }
    @log('delete')
    deleteFromCartHandle(id){
        this.cart.delete(id);
    }
    render(){
        this.list.$el.append(this.$el);
    }
}