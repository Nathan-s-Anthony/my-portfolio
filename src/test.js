function calculateTime  (str) {
    var arr = str.split(':');
    var hour = parseInt(arr[0]);
    var min = parseInt(arr[1]);
    var sec = parseInt(arr[2]);
    var total = (hour * 3600) + (min * 60) + sec;
    return total;
}
console.log(calculateTime("01:00:00"));