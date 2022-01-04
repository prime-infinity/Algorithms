function recursiveBinarySearch(list = [],target){
    if(list.length == 0){
        return false
    }

    else{
        let midPoint = Math.floor(list.length / 2)
        if(list[midPoint] == target){
            return true
        }
        else{
            if(list[midPoint] < target){
                
                return recursiveBinarySearch(list.slice(midPoint+1),target)
                
            }else{

                return recursiveBinarySearch(list.slice(0,midPoint),target)
            }
        }
    }

    return false

}

let list = [0,1,2,3,4,5,6,7,8]

console.log(recursiveBinarySearch(list,3));