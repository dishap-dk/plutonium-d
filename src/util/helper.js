function printDate(){
    const now=new Date();
    console.log(now)

}printDate()

function printMonth(){
    const now=new Date();
    console.log(now.getMonth()+1)

}printMonth()


    const batchName="plutonium";
    const week=2;
    const day=6;

function getBatchInfo(){
console.log(`batchName is ${batchName},week ${week},day ${day} todays topic is Nodejs module system.`)
}getBatchInfo()

module.exports.print1=printDate;
module.exports.month=printMonth;
module.exports.BatchInfo1=getBatchInfo;