export function log(type){
    return function(target,name,descriptor){
        let oldVlaue = descriptor.value;

        descriptor.value = function(){
            console.log(`日志上报${type}`)

            return oldVlaue.apply(this,arguments);
        }
    }
}