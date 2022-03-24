function requiredReading(pages,pagesPerH,deadline){
let totalTime = pages / pagesPerH
let reqHoursPerDay = totalTime / deadline
console.log(reqHoursPerDay)
}
requiredReading(432,
    15 ,
    4 
    )