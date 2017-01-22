/* things to do 


1. make an arrray of users or channels to check
2. call api and for through arrary 
3. retrive data and display results with image, status, discription 
4. line 3 item needs to be a link to the stream.
*/

/* jquery  api call ??
$.getJSON('https://wind-bow.hyperdev.space/twicth-api/" + varSteam +"?callback=?', function(data)
     console.log(data);
     });
*/
// Passing a named function instead of an anonymous function.

$(document).ready(readyFn);

$('.selectMenu li').click(function() {
  $(this).addClass('activeLi');
  $(this).siblings().removeClass('activeLi');
  if ($(this).hasClass("onLi")) {
    $(".exist").addClass("hidden");
    $(".off").addClass("hidden");
    $(".on").removeClass("hidden");
  } else if ($(this).hasClass("offLi")) {
    $(".exist").addClass("hidden");
    $(".off").removeClass("hidden");
    $(".on").addClass("hidden");
  } else if ($(this).hasClass("doesNotLi")) {
    $(".exist").removeClass("hidden");
    $(".off").addClass("hidden");
    $(".on").addClass("hidden");
  } else {
    $(".hidden").removeClass("hidden");
  }

});

function readyFn() {

  // Lets make some varibles. Local.
  var streams = ["brunofin", "comster404", "freecodecamp", "DeadPine", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]; //put names of streams here
  var url = "https://api.twitch.tv/kraken/streams/"; // where the api call should go
  var cbAndId = "?client_id=dy4z8yorujqlhex6r4pnt0dntsbvj9i&callback=?"; // info needed by api ... id is required for use and callback so return is JSONP
  var logo, streamUrl, name, pv, game, status, onOffExist;

  streams.forEach(function(stream) {

    $.getJSON(url + stream + cbAndId, function(data) {
      if (data.stream) {
        logo = data.stream.channel.logo;
        streamUrl = data.stream.channel.url;
        name = data.stream.channel.name;
        pv = data.stream.preview.large;
        game = data.stream.game;
        status = data.stream.channel.status;
        onOffExist = "on";

      } else if (data.stream === null) {
        name = stream + " is offline";
        streamUrl = "https://twitch.tv/";
        status = "offline";
        game = "No streaming today!";
        logo = "https://hydra-media.cursecdn.com/streamers.gamepedia.com/thumb/7/77/Twitch-tv-logo.png/200px-Twitch-tv-logo.png?version=0a9366a2bf2993e9441c46982ecea07d";
        pv = "http://placehold.it/355x200";
        onOffExist = "off";

      } else {

        name = stream + " Does not exist"; // make this section reflect users story 7  streamer deleted or closed.
        url = "https://twitch.tv/";
        status = "no longer a valid stream";
        game = "No gaming today!";
        logo = "https://hydra-media.cursecdn.com/streamers.gamepedia.com/thumb/7/77/Twitch-tv-logo.png/200px-Twitch-tv-logo.png?version=0a9366a2bf2993e9441c46982ecea07d";
        pv = "http://placehold.it/355x200";
        onOffExist = "exist";
        streamUrl = "https://twitch.tv/";

      }

      $('#now').append("<div class='" + onOffExist + "'><a href=" + streamUrl + "><h1>" + name + "</h1></a><a href=" + streamUrl + "><img src =" + logo + "></a><img src=" + pv + "><h2 class='deets'>" + game + "</h2><h3 class='deets'>" + status + "</h3></div>");

    });
  });

}