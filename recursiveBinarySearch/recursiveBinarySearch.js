function recursiveBinarySearch(list = [],target){
    if(list.length == 0){
        return false
    }

    else {
        let midPoint = Math.ceil(list.length / 2)
        if(midPoint == target){
            return true 
        }
        else {
            if(midPoint < target){
                return recursiveBinarySearch(list.filter(liss => liss > midPoint + 1),target)
            }  
            else{
                return recursiveBinarySearch(list.filter(liss => liss < midPoint - 1),target)
            }  
        }
    }


}

let list = [0,1,2,3,4,5,6,7,8]

console.log(recursiveBinarySearch(list,4));