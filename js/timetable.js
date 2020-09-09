function construstTimeTable(timeTable, talksData) {
  return Object.keys(timeTable)
               .filter(function (k) {return timeTable[k];})
               .sort()
               .map(function (time) {
                 // console.log(time);
                 var name = timeTable[time];
                 // console.log(name);
                 var index = 0;

                 // if (name == "なおと") {
                 //   name = "宇佐美尚人";
                 // } else if (name.indexOf("こすも") == 0) {
                 //   index = parseInt(name.charAt(3)) - 1;
                 //   name = "宇佐美こすも";
                 // }
                 var talk = talksData.filter(function (t) { return t.name.indexOf(name) == 0; })[index];

                 if ((time == "09:50") || (time == "12:50") || (time == "14:20")) 
                 {
                    return { time: time, name: "", title: name, major: ""};
                  } 
                  else if (name == "藏田2") {
                    return { time: time, name: "藏田 玲美", title: "「コラーゲン飲料は肌に良い」→考察してみた", major: "骨免疫学、薬物治療学"};
                  }
                 else 
                  {
                    return { time: time, name: talk.name, title: talk.title, major: talk.affiliation };
                  }
               });
}


$(function () {
  var firstDayTable = construstTimeTable(day1, data);
  var secondDayTable = construstTimeTable(day2, data);
  // var thirdDayTable = construstTimeTable(day3, data);

  var template = $('#template').html();
  Mustache.parse(template);
  var renderedFirst = Mustache.render(template, {table: firstDayTable, header: "9/20 (日)"});
  var renderedSecond = Mustache.render(template, {table: secondDayTable, header: "9/21 (月)"});
  // var renderedThird = Mustache.render(template, {table: thirdDayTable, header: "11/25(日)"});
  // $('.article-headline').html(renderedFirst + "<br />" + renderedSecond + "<br />" + renderedThird);
  $('.article-headline').html(renderedFirst + "<br />" + renderedSecond);
});
