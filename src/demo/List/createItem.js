import Item from "./Item";
function createData(data){
    return new Proxy(data,{
        get:function(target,key,reciver){
            if(key==="name"){
                return target[key]+"【折扣】"
            }
            if(key==="price"){
                return target[key]*0.1
            }
            return target[key]
        }
    })
}
export function createItem(list,data){
    if(data.discount){
        data = createData(data);
    }
    let item = new Item(list,data);
    item.init();
}