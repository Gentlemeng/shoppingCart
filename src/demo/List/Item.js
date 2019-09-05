import $ from "jquery"
import StateMachine from "javascript-state-machine";
import getCart from "../ShoppingCart/GetCart";
import log from "./../Util/log.js"
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
        this.$el.append($(`<p>${data.name}</p>`))
        this.$el.append($(`<p>${data.price}</p>`))
    }
    initBtn(){
        let $btn = $("<button></button>")
        let _this = this;
        let fsm = new StateMachine({
            init:"加入购物车",
            transitions:[{
                name:"addToCart",
                from:"加入购物车",
                to:"从购物车删除"
            },{
                name:"deleteFromCart",
                from:"从购物车删除",
                to:"加入购物车"
            }],
            methods:{
                onAddToCart:function(){
                    _this.addToCartHandle(_this.data)
                    updateText()
                },
                onDeleteFromCart:function(){
                    _this.deleteFromCartHandle(_this.data.id)
                    updateText();
                }
            }
        })
        updateText();
        function updateText(){
            $btn.text(fsm.state);
        }
        $btn.click(function(){
            //涉及到状态模式
            if(fsm.is("加入购物车")){
                fsm.addToCart();
            }else{
                fsm.deleteFromCart();
            }
        })
        this.$el.append($btn);
    }
    @log("add")
    addToCartHandle(data){
        this.cart.add(data);
    }
    @log("delete")
    deleteFromCartHandle(id){
        this.cart.del(id);
    }
    render(){
        this.list.$el.append(this.$el);
    }

}