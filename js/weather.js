
var imageUrl="http://s3.amazonaws.com/hrnwp/wp-content/uploads/2016/11/rain-980076_960_720.jpg";
var lat="";
var cond="";
var lon="";
var temp="";
var wind="";
var hum="";
var url="https://api.darksky.net/forecast/4f78382f1b15d197ebdea639ef66ef53/";
$(document).ready(function() {
  $("#change").on("click", function(){
    temp=temp*(9/5)+32;
    settemp1(temp);
  });
  function settemp1(tmp){
    var tmp="Temp-"+tmp;
    $("#temp").html(tmp);
  }  
  
  function setBack(imgUrl){
    console.log(imgUrl);
    $('html').css('background-image', 'url(' + imgUrl + ')');
  }
  function setImageUrl(cond){
    if(cond=="clear-day")
      {
     imageUrl="http://www.pinsdaddy.com/download.php?img=L85M|OchAlm7i8fFlFnXWNgm6NQo6kij*mcL1u1fhme19nA1rygTvQAeYFvmTo12RGQNKxotUttnyNlM*T3GN3DRnfrg0Gf|4jb5lDo|e9WMtArb9dSttRbpkxluhY5IRNeUKgElUer3dZbhoKs372k26CNqLPaXb3k43kQrCexAev9D2D6FbDi3*iPR0csXskjuIZwt6usE3s56MjKoeQ";
      }
        if(cond=="clear-night")
          {
           imageUrl="https://www.walldevil.com/wallpapers/a57/sky-moon-night-star.jpg";
           
          }
        if(cond=="rain")
          {
            imageUrl="https://www.caminodesantiago.me/wp-content/uploads/rain1.jpg";
          }
        if(cond=="snow")
          {
            imageUrl="http://media.nbcnewyork.com/images/1200*675/Snow-Flurries-Generic.jpg?ak=bc";
          }
        if(cond=="sleet")
        {
          imageUrl="https://dholtmeyer.files.wordpress.com/2014/03/c1_1156.jpg";
        }
        if(cond=="wind")
          {
            imageUrl="http://weknowyourdreams.com/images/wind/wind-06.jpg";
          }
        if(cond=="fog")
          {
            imageUrl="https://static.pexels.com/photos/5230/road-fog-foggy-mist.jpg";
          }
        if(cond=="cloudy")
          {
            imageUrl="https://regmedia.co.uk/2015/06/09/cloudy_sky_resized.jpg?x=1200&y=794";
          }
        if(cond=="partly-cloudy-day")
          {
            imageUrl="http://www.libertas.sm/files/2013/08/immagini_contenuti/82174/nuvolo.jpg";
          
          }
        if(cond=="partly-cloudy-night")
          {
            imageUrl="https://static1.squarespace.com/static/502a952084ae42cbccf92eeb/53d1c6d1e4b01ef7480de041/53d1c813e4b01ef34f376707/1406257177591/CloudyMoonRise-2.JPG?format=1000w";
          }
      }
  function set(temp,humidity,wind) {
    var temp1="Temp-"+temp;
    var hum1="Humidity-"+humidity;
    var wind1="Wind-"+wind;
    $("#temp").html(temp1);
    $("#hum").html(hum1);
    $("#wind").html(wind1);
  }
  
function getData(url) {
  $.getJSON(url,function(json){
  console.log(json.currently.icon);
 cond=json.currently.icon;
 temp=json.currently.apparentTemperature;
 hum=json.currently.humidity;
    wind=json.currently.windSpeed;
 setImageUrl(cond);
 setBack(imageUrl);
    set(temp,hum,wind);
  });
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    url+=lat+","+lon + "?extend=hourly&units=si&callback=?";
    
    getData(url);
  });
}
});

