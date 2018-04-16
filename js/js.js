/*main.css*/
/*OE, 2016*/
/*This is the main js for the travel website.*/

/*
simple time functions to just display time
*/
function startTime() {
  var n = new Date();
  var wd = n.getDay();
  var d = n.getDate();
  var y = n.getFullYear();
  var hou = n.getHours();
  var min = n.getMinutes();
  var m = n.getMonth();
  var sec = n.getSeconds();
  //add a zero in front of numbers<10
  min = checkTime(min);
  sec = checkTime(sec);
  //get week day
  var weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  wd = weekday[wd];
  //all other
  m++;
  var str = wd + " " + d + "." + m + "." + y + " " + hou + ":" + min;
  document.getElementById('dateTxt').innerHTML = str;
  t = setTimeout('startTime()', 60000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

/*write date*/
function writeSimpleDate() {
  var d = new Date();
  var date;
  var browser = navigator.appName;
  if (browser == "Netscape") {
    date = d.getYear() + 1900;
  } else {
    date = d.getYear();
  }
  var month = d.getUTCMonth();
  var str = month + "." + date;
  return str;
}

/*write footer div*/
function writeFooterDivs() {
  startTime();
  document.getElementById('sysTxt').innerHTML = "System: " + navigator.appName + "," + navigator.appVersion + "," + navigator.appCodeName + "," + navigator.platform + "," + navigator.cookieEnabled;
  document.getElementById('copyTxt').innerHTML = "&copy;&nbsp;" + writeSimpleDate() + "&nbsp;OE,UK";
}


