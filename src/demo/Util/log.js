export function log(type){
    return function(target,name,descriptor){
        //target: Item的原型
        //name: "加装饰器的方法名"
        // descriptor "方法的描述符"
        let oldValue = descriptor.value;
        descriptor.value = function(){
            console.log(`日志上报${type}`)

            return oldValue.apply(this,arguments);
        }
    }
}