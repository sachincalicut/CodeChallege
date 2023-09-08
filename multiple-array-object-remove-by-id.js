var arr= [{id:1,name:"John", lines:"something"},
          {id:2,name:"John1", lines:"something1"},
          {id:3,name:"John2", lines:"something2"},];

var idsToDelete = [1, 2];

var res = arr.map((i, idx)=>{
   return arr[idx] = idsToDelete.includes(i.id)? undefined : arr[idx]
}).filter(i=>i)

console.log(res)
