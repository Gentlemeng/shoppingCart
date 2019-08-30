import $ from "jquery"
import {GET_URL} from "./../config/config"
export default class List{
    constructor(app){
        this.$el = $("<div></div>");
        this.app = app;
    }
    init(){
        this.render();
    }
    loadData(){
        return fetch(GET_URL).then(data=>{
            if(data.ok){
                return data.json();
            }
        })
    }
    initItem(itemData){
        itemData.forEach(data => {
            // 创建Item
        });
    }
    initList(){
        this.app.$el.append(this.$el);
    }
    render(){
        this.loadData().then(data=>{
            this.initItem(data)
        }).then()
    }
}