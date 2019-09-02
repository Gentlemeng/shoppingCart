class Cart{
    constructor(){
        this.list = [];
    }
    add(data){
        this.list.push(data);
    }
    delete(id){
        this.list = this.list.filter(data=>{
            if(data.id===id){
                return false;
            }else{
                return true;
            }
        })
    }
    getList(){
        return this.list.map(data=>{
            return data.name
        }).join("\n")
    }
}
let getCart = (function(){
    let cart;
    return function(){
        if(!cart){
            cart = new Cart()
        }
        return cart
    }
})()

export default getCart;
