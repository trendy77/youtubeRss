
function doMostPopular(){
 var resp = listMostPopular('snippet,contentDetails,statistics', 'mostPopular', 'US', '');
 var sheet2prnt = "pop";
scribeResults(resp);
}

function listMostPopular(part, chart, regionCode, videoCategoryId) {
  var response = YouTube.Videos.list(part,
      {'chart': chart,
       'regionCode': regionCode,
       'videoCategoryId': videoCategoryId});
  return(response);
}

/**
 * This example retrieves the first 25 search results associated with the keyword Since the request doesn't specify a value for the type request  * parameter, the response can include videos, playlists, and channels.
 */
function doByKw(){
  var ui = SpreadsheetApp.getUi();
var response = ui.prompt('enter kewword', ui.ButtonSet.YES_NO);
 if (response.getSelectedButton() == ui.Button.YES) {
 var resp = listByKeyword('snippet,contentDetails,statistics', '25',response,'channel');
 var sheet2prnt = "kw2";
 SpreadsheetApp.getUi().alert(resp);
}
}
function listByKeyword(part, maxResults, q, type) {
  var response = YouTube.Search.list(part,
      {'maxResults': maxResults,
       'q': 'q',
       'type': type});
  return(response);
}

function idch() {
var ui = SpreadsheetApp.getUi();
var response = ui.prompt('enter ch ID to channelsList', ui.ButtonSet.YES_NO);
 if (response.getSelectedButton() == ui.Button.YES) {
var res = channelsListByUsername('snippet,contentDetails,statistics', response);
 SpreadsheetApp.getUi().alert(res);
}
}


function my() {
var reply = channelsListMine('snippet,contentDetails,statistics', true);
scribeResults(reply);
}

function chByTUsr() {
var reply = chListByUser('snippet,contentDetails,statistics', 'TrendyPublishing MediaChannel');
scribeResults(reply);
}
function chListByUser(part, forUsername) {
  var response = YouTube.Channels.list(part,
      {'forUsername': forUsername});
  return(response);
} 
function chListById(part, id) {
  var response = YouTube.Channels.list(part,
      {'id': id});
  return(response);
}


function live() {
var reply = searchLive('contentDetails', 'live', 25, 'news', 'video');
scribeResults(reply);
}
function searchLive(part, eventType, maxResults, q, type) {
  var response = YouTube.Search.list(part,
      {'eventType': eventType,
       'maxResults': maxResults,
       'q': q,
       'type': type});
  return(response);
}

function getVidsFromPlist(playId) {
  var nextPageToken = '';		    // This loop retrieves a set of playlist items and 
	var arrData = new Array();					//checks the nextPageToken response to determine whether the list contains additional items. It repeats until it has retrieved all of the items in the list.
    while (nextPageToken != null) {
      var playlistResponse = YouTube.PlaylistItems.list(part, {id: playId,
        maxResults: 50,
       });
      for (var j = 0; j < playlistResponse.items.length; j++) {
        var playlistItem = playlistResponse.items[j];
       for (var y = 0; y < playlistItem.length; y++) {
        var vidItem = playlistItem[y];  
                   playlistItem.snippet.resourceId.videoId,
                   playlistItem.snippet.title);
      }
      nextPageToken = playlistResponse.nextPageToken;
    }
  }

  
function getSharedCount(sourceLink){
//var url = "http://mashe.hawksey.info/2012/02/oer-visualisation-project-fin-day-40-5/"
  var url = extractLink(sourceLink);
  var cache = CacheService.getPublicCache(); // using Cache service to prevent too many urlfetch 
  var cached = cache.get("C"+url);
  if (cached != null) { // if value in cache return it
    //var test = cached.split(",")
    return cached.split(",");
  }
  try {
    var options =
    {
      "method" : "get",
      "contentType" : "application/json"
    };
    var response = UrlFetchApp.fetch("http://api.sharedcount.com/?url="+encodeURI(url), options);
    var data = Utilities.jsonParse(response.getContentText());
    var output = [];
    for (i in data){
      if (i == "Facebook"){
        output.push(data[i].total_count)
      } else {
        output.push(data[i]);
      }
    }
    cache.put("C"+url, output, 86400); // cache set for 1 day
    return output;
  } catch(e){
    Logger.log(e);
  }
}