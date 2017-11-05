// from       https://developers.google.com/youtube/v3/quickstart/apps-script
// Note: Apps Script automatically requests authorization

var YTS = "1JrzhN78LF1p9SSAqg1eVrXqhibziW9tf-W8y1yYowJY";

function channelsListByUsername(part, params) {
  var response = YouTube.Channels.list(part,
                                       params);
var channel = response.items[0];
  var dataRow = [channel.id, channel.snippet.title, channel.statistics.viewCount];
   SpreadsheetApp.openById(YTS).getSheetByName("ytuser").appendRow(dataRow);
  }

function channelsListById(part, id) {

  var response = YouTube.Channels.list(part,id);
      Logger.log(response);
  SpreadsheetApp.openById(YTS).getSheetByName("ytuser").appendRow(response);
return response;
}

function getChannels() {
var overview = SpreadsheetApp.openById(YTS);
  var feed=overview.getSheetByName('Feeds').getRange(4,2,5).getValues(); 
var newData = new Array();
  for (var i=0;i<5;i++){
    var user = overview[i];
    var params ={'id':user};
 //   Logger.log(user);
  var res=  channelsListById('snippet,contentDetails,statistics',params);
    newData.push(res); 
  }
 var fd=overview.getSheetByName('ytuser').getRange(1, 1, newData.length, newData[0].length).setValues(newData);
}



function listMVP() {
 var response = listMostPopular('id', 'mostPopular', 'US', '');
 scribeResults(response);
  
  var tt = response.items;
  for (var t in response.items[t]){
    var channel = response.items[t];
    var dataRow = (channel.id, channel.snippet.title, channel.statistics.viewCount);
    var cursh=SpreadsheetApp.openById(YTSHEET);
  var shh= cursh.getSheetByName("Sheet4").getDataRange(t,1,1,3).setValues([[dataRow]]);
     }
}

