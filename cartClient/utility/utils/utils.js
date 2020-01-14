//this file is used for generic util methods

const compareFields = (first,second) => {
    first.forEach((item,index) => {
        for(let key in item){
            if(item[key]!==second[index][key]){
                return true
            } 
        }
    })
    
   
    return false;
}

export {compareFields};