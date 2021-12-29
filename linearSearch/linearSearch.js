function linearSearch(list = [],target){
    for (let i = 0; i < list.length; i++) {
        const e = list[i];
        if(target == e){
            console.log(`item position is ${i}`);
            return i 
            //this is the position of the element in the list
        }
    
    }
    console.log(`value ${target} was not found`);
    return
}

list = [1,2,3,4,5,6,7,8,9,10]
linearSearch(list,9)