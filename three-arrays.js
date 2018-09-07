

//Finding array intersections

t1 = [1,3,6,9,6,12,15,12,18,21,7,7,7,7,7,7,80,90]
t2 = [2,4,6,8,6,10,12,14,12,16,18,6,18,7,7,7,7,7,80,80,80,90]
t3 = [1,2,6,9,6,12,18,7,7,7,7,80,80,90]

function intersect(arr1,arr2,arr3){
  let maxTest = []
  var ceil1 = Math.max(...arr1)
  var ceil2 = Math.max(...arr2)
  var ceil3 = Math.max(...arr3)
  let match = []
  let finalAnswer = []
  maxTest.push(ceil1,ceil2,ceil3)
  let ultiMax = Math.max(...maxTest)

  for( let i = 0; i <= ultiMax; i++){
    arr1.includes(i)? arr2.includes(i) ? arr3.includes(i) ?
    match.push(i) : null :null :null
  }

  let counter = {}
  
  match.map((each)=>{
    counter[each] = []
  })

  match.map((each)=>{
    countPlacer(each, arr1)
    countPlacer(each, arr2)
    countPlacer(each, arr3)
    let finalCount = Math.min(...counter[each])
    finalAnswer.push(each + " commonly occurred in all arrays " + finalCount + " times")
  })
 

 function countPlacer(each, arr){
   let holder = []
   arr.map((value)=>{
     each === value ? holder.push("yes"): null
   })
   counter[each].push(holder.length)
 }
  
    
  return finalAnswer
}

intersect(t1,t2,t3)
