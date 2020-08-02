// console.log(module);
module.exports.getDate = getDate;

function getDate(){
  let today = new Date();

  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  let day = today.toLocaleDateString("un-US", options);
  return day
}
