function Cairo() {
    
fetch('https://api.weatherapi.com/v1/forecast.json?key=f972501570364bb482181815242612&q&q=Egypt&days=4&aqi=no&alerts=no')
.then(function(taxt){return taxt.json()})
.then(function(data){
    var viewHtml = document.getElementById("viewHtml");
    var time = new Date()
    var htmlCollection = ``;
   
        htmlCollection += `
        <div class="style-1-card w-75 d-flex text-light justify-content-lg-between m-auto px-1 py-2 mt-5" >
            <h6 >${time}</dh6>
            <h6>${data.location.localtime}</h6>
          </div>
  
          <div style="background-color: #4E3B28;" class="w-75 text-light justify-content-lg-between m-auto py-5 px-3">
            <div class="row">
              <div class="col-md-4">
                <h2>${data.location.name},${data.location.country}</h2>
                <h3>${data.location.region}</h3>
                <span class="fa-4x">${data.current.temp_c} </span><img src="${data.current.condition.icon}">
                <p>${data.current.condition.text}</p>
                <span><i class="fa-solid fa-umbrella"></i> ${data.current.humidity}% <i class="fa-solid fa-wind"></i>${data.current.wind_mph} <i class="fa-solid fa-arrow-right"></i>${data.current.wind_dir}</span>
  
  
              </div>
              <div class="col-md-8">
                <img src="./images/moon.png" alt="" width="40px">
                <h3>time</h3>
                <h3>temperature</h3>
                <h3><i class="fa-solid fa-umbrella"></i> 0%</h3>
  
              </div>
            </div>
  
          </div>`
        
    viewHtml.innerHTML = htmlCollection;
})
}


function Alexandria() {
    
    fetch('https://api.weatherapi.com/v1/current.json?key=f972501570364bb482181815242612&q&q=Alexandria&days=4&aqi=no&alerts=no')
    .then(function(taxt){return taxt.json()})
    .then(function(data){
        var viewHtml = document.getElementById("viewHtml");
        var time = new Date()
        var htmlCollection = ``;
       
            htmlCollection += `
            <div class="style-1-card w-75 d-flex text-light justify-content-lg-between m-auto px-1 py-2 mt-5" >
                <h6 >${time}</dh6>
                <h6>${data.location.localtime}</h6>
              </div>
      
              <div  class="w-75 text-light justify-content-lg-between m-auto py-5 px-3 style-1-card2">
                <div class="row">
                  <div class="col-md-4">
                    <h2>${data.location.name},${data.location.country}</h2>
                    <h3>${data.location.region}</h3>
                    <span class="fa-4x">${data.current.temp_c} </span><img src="${data.current.condition.icon}">
                    <p class="text-color-style1">${data.current.condition.text}</p>
                    <span><i class="fa-solid fa-umbrella"></i> ${data.current.humidity}% <i class="fa-solid fa-wind"></i>${data.current.wind_mph} <i class="fa-solid fa-arrow-right"></i>${data.current.wind_dir}</span>
      
      
                  </div>
                  <div class="col-md-8">
                    <img src="${data.current.condition.icon}" alt="" width="40px">
                    <h3>${time}</h3>
                    <h3>${data.current.temp_c}</h3>
                    <h3><i class="fa-solid fa-umbrella"></i>${data.current.humidity}%</h3>
      
                  </div>
                </div>
      
              </div>`
            
        viewHtml.innerHTML = htmlCollection;
    })
    }
    Alexandria()

