import $ from "jquery"
import { GET_URL } from "../config/config";
import createItem from "./createItem";

export default class List{
    constructor(app){
        this.$el =  $("<div></div>")
        this.app = app;
    }
    init(){
        this.loadData().then(data=>{
            // console.log(data);
            this.initItemList(data);
        }).then(()=>{
            this.render();
        })
    }
    loadData(){
        return fetch(GET_URL).then(data=>{
            if(data.ok){
                return data.json();
            }
        })
    }
    initItemList(data){
        data.forEach(itemData => {
            //创建 Item
            createItem(this,itemData);
        });
    }
    render(){
        this.app.$el.append(this.$el);
    }
}