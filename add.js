//create an ADD function that takes a DATE and DIFF and return a NEW DATE with DIFF added to the original date.
const amount = '10d';
const today = new Date();

function add(date, diff) {
    const operator = diff.slice(-1)
    const num = Number(diff.slice(0, -1))

    let updatedDate = new Date(date.getTime());

    if(operator === 's') {
        updatedDate.setSeconds(updatedDate.getSeconds() + num)
    } else if(operator === 'm') {
        updatedDate.setMinutes(updatedDate.getMinutes() + num)
    } else if(operator === 'h') {
        updatedDate.setHours(updatedDate.getHours() + num)
    } else if(operator === 'd') {
        updatedDate.setDate(updatedDate.getDate() + num)
    } else if(operator === 'w') {
        updatedDate.setDate(updatedDate.getDate() + (num * 7))
    } else if(operator === 'M') {
        updatedDate.setMonth(updatedDate.getMonth() + num)
    } else if(operator === 'y') {
        updatedDate.setFullYear(updatedDate.getFullYear() + num)
    } else {
        return 'not a valid operator'
    }

    return updatedDate;
}
   
const results = add(today, amount);
console.log(today);
console.log(results);