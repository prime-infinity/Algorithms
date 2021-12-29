function binarySearch(list = [],target){

    /**
     * first break down array, or any array into half,
     * to do this, we need first and last element
     */

    let firstElement = 0
    let lastElement = list.length - 1

    /**
     * next, we need to work through the array,
     * but we do not use the normal for loop as this will walk 
     * through the full lenght of the array, instead, we use the 
     * first and last element to always knw the starting and end of the array
     */

    while(firstElement <= lastElement ){
        let midPoint = Math.ceil((firstElement + lastElement)/ 2)
         
        if(list[midPoint] == target){ //if center element is target
            console.log(`target ${target} found at pos ${midPoint}`);
            return
        }else if(list[midPoint] < target){ //if target is greater than midpoint
            /**
             * here, if target is greater than  midpoint, reset first elemt of 
             * array to midpoint and leave last elemt as it is
             */
            firstElement = midPoint + 1
        }else if(list[midPoint] > target){//if target is less than midpoint

            /**
             * here, if target is less than midpoint, set last element to
             * be less than midpoint
             */
            lastElement = midPoint - 1

        }
    }
    console.log(`value ${target} was not found`);
    return

}

let list = [1,2,3,4,5,6,7,8,9,10]

binarySearch(list,7)

/**
 * you must visualize what is going on here
 */