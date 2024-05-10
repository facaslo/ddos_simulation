const bubble_sort_list = (array_length)=>{
  array_length = parseInt(array_length)
  list_to_sort = Array();
  
  for(let i=array_length; i>0; i--){
    list_to_sort.push(i);
  }

  for(let i=0; i<array_length; i++){
    let swapped = false; 
    for (let j=0 ; j<array_length - i - 1; j++){
      if (list_to_sort[j]>= list_to_sort[j+1]){
        swapped = true;
        list_to_sort[j], list_to_sort[j+1] = list_to_sort[j+1], list_to_sort[j];
      }   
    }
    if (swapped === false) {
      break;
    }
  }

  return list_to_sort;
}

module.exports = {bubble_sort_list}