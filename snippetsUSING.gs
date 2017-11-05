
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

function myMain() {
  activitiesList('snippet,contentDetails', 'UC_x5XG1OV2P6uZZ5FSM9Ttw', 25);
  activitiesListMine('snippet,contentDetails', 25, true);
  channelsListById('snippet,contentDetails,statistics', 'UC_x5XG1OV2P6uZZ5FSM9Ttw');
  channelsListByUsername('snippet,contentDetails,statistics', 'GoogleDevelopers');
  channelsListMine('snippet,contentDetails,statistics', true);
  channelSectionsListById('snippet,contentDetails', 'UC_x5XG1OV2P6uZZ5FSM9Ttw');
  channelSectionsListMine('snippet,contentDetails', true);
  playlistItemsListByPlaylistId('snippet,contentDetails', 25, 'PLBCF2DAC6FFB574DE');
  playlistsListByChannelId('snippet,contentDetails', 'UC_x5XG1OV2P6uZZ5FSM9Ttw', 25);
  playlistsListMine('snippet,contentDetails', true);
  searchListByKeyword('snippet', 25, 'surfing', 'video');
  
  searchListMine('snippet', 25, true, 'fun', 'video');
  searchListRelatedVideos('snippet', 'Ks-_Mh1QhMc', 'video');
  subscriptionsListByChannelId('snippet,contentDetails', 'UC_x5XG1OV2P6uZZ5FSM9Ttw');
  subscriptionsListForChannelId('snippet,contentDetails', 'UC_x5XG1OV2P6uZZ5FSM9Ttw', true);
  subscriptionsListMySubscribers('snippet,contentDetails,subscriberSnippet', true);
  subscriptionsListMySubscriptions('snippet,contentDetails', true);
  videoCategoriesList('snippet', 'US');
  videoCategoriesListForRegion('snippet', 'es', 'ES');
  videosListById('snippet,contentDetails,statistics', 'Ks-_Mh1QhMc');
  videosListMostPopular();
 
 }