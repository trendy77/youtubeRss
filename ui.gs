 var YTDOC = "1ujTgnbR-RRFNR5TLm4Ng-2CVhkmL7NkCkLmdpW7U0tQ";
var YTSHEET = "1JrzhN78LF1p9SSAqg1eVrXqhibziW9tf-W8y1yYowJY";

function onInstall(e){
onOpen();
}
function onOpen(e) {
  SpreadsheetApp.getUi().createMenu('YT')      
  .addItem('getChannels', 'getChannels')
  .addItem('Add GoogleDevelopers data', 'getGoogleDevelopersChannel')
   .addSeparator()
  .addItem('ID check', 'IDUI')
 .addItem('user', 'userA')
 .addItem('doMostPopular', 'doMostPopular')
 .addItem('my', 'my') 
    .addItem('doByKw','doByKw')
.addItem('idch', 'idch')
  .addToUi();
}
  

function isCellEmpty(cellData) {
  return typeof(cellData) == "string" && cellData == "";
}



function IDUI(){
var ui = SpreadsheetApp.getUi();
  var ddui = SpreadsheetApp.getActiveSheet();
  var idd = ddui.getSheetId();
 var response = ui.prompt('This sheet ID #'+idd + 'other?', ui.ButtonSet.YES_NO);
 if (response.getSelectedButton() == ui.Button.YES) {
  var res = idcheck();
 SpreadsheetApp.getUi().alert('id is'+res);
}
}

function idcheck(){
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var id = spreadsheet.getId();
  Logger.log('IDchk#'+ id);
  var res11 = ([id]);
     return (res11);
}

function userA(){
    var ytsh=SpreadsheetApp.getActiveSpreadsheet();
 //  var ussh = ytsh.getSheetByName(); 
var response = activitiesListMine('contentDetails', '25', true);
  printResults(response)
}

function scribeResults(response) {
  var body = DocumentApp.openById(YTDOC).getBody();
 var text = body.editAsText();
 var ytsh=SpreadsheetApp.getActiveSheet();//  var ussh = ytsh.getSheetByName(); 
  var newData = new Array();
 var props = ['type', 'title', 'textDisplay', 'channelId', 'videoId', 'hl', 'gl', 'label'];
  for (var r = 0; r < response['items'].length; r++) {
    var item = response['items'][r];
    var itemId = '';
    var value;
    var num =1;
    if (item['rating']) {
      itemId = item['id'];
      value = 'Rating: ' + item['rating'];
    } else {
      if (item['id']['videoId']) {
        itemId = item['id']['videoId'];
        
      } else if (item['id']['channelId']) {
        itemId = item['id']['channelId'];
      } else {
        itemId = item['id'];
      }
    }
var overview = SpreadsheetApp.openById(YTSHEET).getSheetByName('ytuser'); 
     
  text.insertText(1, response);
  text.insertText(0, ' ');
  
  var props = ['type', 'title', 'textDisplay', 'channelId', 'videoId', 'hl', 'gl', 'label'];
  for (var r = 0; r < response.length; r++) {
 var item = response[r];
newSH.getRange(1,2,response.length,8).setValues(item);
   
  }
}
}