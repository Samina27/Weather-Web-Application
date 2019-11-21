$(document).ready(function(){
 $('#submitWeather').click(function(){
     var zip = $("#zipcode").val();
     if(zip != ''){

    $.ajax({
       url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip +
       "&units=imperial" + "&APPID=39bea30870b7ea0f14619c1352a22a19" ,
       type: "GET",
       dataType: "json",
       success: function(data){
         var widget = show(data);
         $("#show").html(widget);
         $("#zipcode").val('');

       }

     });

     }else{
       $("#error").html('field cannot be empty');
     }


 });
 function show(data){
   return "<h3><strong> Weather</strong>: "+ data.weather[0].main +"</h3>" +
          "<h3><strong> Description</strong>: <img src='http://openweathermap.org/img/w/" + data.weather[0].icon+".png'"+ data.weather[0].description +"</h3>" +
          data.weather[0].description +"</h3>" +

          "<h3><strong> Temperature</strong>: "+ data.main.temp +"&deg;F</h3>" ;
 }


});
