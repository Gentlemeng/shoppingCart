import $ from "jquery"
import {GET_URL} from "../config/config"
import createItem from "./createItem";
export default class List{
    constructor(app){
        this.$el = $("<div></div>")
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
    initItemList(data){
        //创建 Item
        data.map(itemData=>{
            createItem(this,itemData);
        })
    }
    render(){
        this.loadData().then(data=>{
            // console.log(data);
            this.initItemList(data);
        }).then(data=>{
            this.app.$el.append(this.$el);
        })
    }
}