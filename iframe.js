var url = chrome.extensions.getURL("source.html");
var iframe = "<iframe src = '"+url+"' id='iframe_id'></iframe>";
$('body').append(iframe);