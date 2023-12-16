function restcountries() {
  fetch("https://restcountries.com/v2/all").then((data) => {
    return data.json();
  }).then((data1) => {
    console.log(data1);
    let country1 = data1.filter((val) => {
      return val.name === "India";
    });
    let country2 = data1.filter((val) => {
      return val.name === "Australia";
    });
    let country3 = data1.filter((val) => {
      return val.name === "Malaysia";
    });
    console.log(country3);
    main(country1, country2, country3);
  });
}
restcountries();


function main(a, b, c) {
  let main = document.createElement("div");
  main.setAttribute("id", "main");
  main.classList.add("container");
  //...........................................................................
  let h1 = document.createElement("h1");
  h1.innerHTML = "Restcountries and Weather using fetch API";
  h1.setAttribute("id", "title")
  h1.classList.add("text-center");
  //...............................................................................
  let main_div = document.createElement("div");
  main_div.setAttribute("id", "main_div");
  main_div.classList.add("row");

  document.body.append(main);
  main.append(h1, main_div);
  //....................................................................................


  let section = document.createElement("div");
  section.classList.add("col-sm-6", "col-md-4", "col-lg-4", "col-xl-4");
  //.............................................................................
  main_div.append(section);
  let div1 = document.createElement("div");
  div1.setAttribute("id", "div1");
  div1.classList.add("card");


  section.append(div1);

  //........................................

  let heading = document.createElement("div");
  heading.setAttribute("id", "heading");
  heading.classList.add("card-header");
  //...............................................................................
  let name = document.createElement("h5");
  name.innerHTML = a[0].name;

  //...............................................
  let body = document.createElement("div");
  body.classList.add("card-body");
  //...............................................
  let div_img = document.createElement("div");
  div_img.setAttribute("id", "div_img");
  div_img.classList.add("card-img-top");

  let img = document.createElement("img");
  img.src = a[0].flags.svg;

  //............................

  let capital = document.createElement("h5");
  capital.innerHTML = `Capital : ${a[0].capital}`;
  //.......................................

  let region = document.createElement("h5");
  region.innerHTML = `Region : ${a[0].region}`;

  //.........................................


  let countryCode = document.createElement("h5");
  countryCode.innerHTML = `Country Code : ${a[0].cioc}`;

  //.................................


  let div_button = document.createElement("div");
  div_button.setAttribute("id", "div_button");

  let button = document.createElement("button");
  button.setAttribute("id", "button");
  button.onclick = weather;
  button.innerHTML = "Click for Weather";
  button.classList.add("btn", "btn-primary");





  heading.append(name);
  div_img.append(img);
  div_button.append(button);
  body.append(div_img, capital, region, countryCode, div_button);
  div1.append(heading, body)




  //..........................................................................................


  let section1 = document.createElement("div");
  section1.classList.add("col-sm-6", "col-md-4", "col-lg-4", "col-xl-4");

  main_div.append(section1);


  let div2 = document.createElement("div");
  div2.setAttribute("id", "div2");
  div2.classList.add("card");



  section1.append(div2);

  //........................................
  let heading2 = document.createElement("div");
  heading2.setAttribute("id", "heading2");
  heading2.classList.add("card-header");

  let name2 = document.createElement("h5");
  name2.innerHTML = b[0].name;

  //...............................................

  let body2 = document.createElement("div");
  body2.classList.add("card-body");

  //..................................................
  let div_img2 = document.createElement("div");
  div_img2.setAttribute("id", "div_img2");
  div_img2.classList.add("card-img-top");

  let img2 = document.createElement("img");
  img2.src = b[0].flags.svg;

  //............................

  let capital2 = document.createElement("h5");
  capital2.innerHTML = `Capital : ${b[0].capital}`;
  //.......................................

  let region2 = document.createElement("h5");
  region2.innerHTML = `Region : ${b[0].region}`;

  //.........................................


  let countryCode2 = document.createElement("h5");
  countryCode2.innerHTML = `Country Code : ${b[0].cioc}`;

  //.................................


  let div_button2 = document.createElement("div");
  div_button2.setAttribute("id", "div_button2");

  let button2 = document.createElement("button");
  button2.setAttribute("id", "button2");
  button2.innerHTML = "Click for Weather";
  button2.onclick = weather2;
  button2.classList.add("btn", "btn-primary");

  heading2.append(name2)
  body2.append(div_img2, capital2, region2, countryCode2, div_button2);
  div2.append(heading2, body2);
  div_img2.append(img2);
  div_button2.append(button2);
  //.................................................................................

  let section3 = document.createElement("div");
  section3.classList.add("col-sm-6", "col-md-4", "col-lg-4", "col-xl-4");

  main_div.append(section3);
  let div3 = document.createElement("div");
  div3.setAttribute("id", "div3");
  div3.classList.add("card");
  section3.append(div3);
  //........................................
  let heading3 = document.createElement("div");
  heading3.setAttribute("id", "heading3");
  heading3.classList.add("card-header");
  let name3 = document.createElement("h5");
  name3.innerHTML = c[0].name;
  //...............................................
  let body3 = document.createElement("div");
  body3.classList.add("card-body");
  //................................................
  let div_img3 = document.createElement("div");
  div_img3.setAttribute("id", "div_img3");
  div_img3.classList.add("card-img-top");
  let img3 = document.createElement("img");
  img3.src = c[0].flags.svg;
  //............................
  let capital3 = document.createElement("h5");
  capital3.innerHTML = `Capital : ${c[0].capital}`;
  //.......................................
  let region3 = document.createElement("h5");
  region3.innerHTML = `Region : ${c[0].region}`;
  //.........................................
  let countryCode3 = document.createElement("h5");
  countryCode3.innerHTML = `Country Code : ${c[0].cioc}`;
  //.................................
  let div_button3 = document.createElement("div");
  div_button3.setAttribute("id", "div_button3");
  let button3 = document.createElement("button");
  button3.setAttribute("id", "button3");
  button3.innerHTML = "Click for Weather";
  button3.onclick = weather3;
  button3.classList.add("btn", "btn-primary");


  heading3.append(name3)
  body3.append(div_img3, capital3, region3, countryCode3, div_button3);
  div3.append(heading3, body3)
  div_img3.append(img3);
  div_button3.append(button3);
  //.................................................................................
}


function weather() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=20&lon=77&appid=e7c2a04092ac6f03ceebdcf1296204a3`).then((data) => {
    return data.json();
  }).then((data1) => {
    console.log(data1);
    document.querySelectorAll("#main_fin").forEach((e) => e.remove());
    let main_fin = document.createElement("div");
    main_fin.setAttribute("id", "main_fin");
    main_fin.classList.add("container");
    let s = document.getElementById("main");
    s.append(main_fin);


    let fin_div = document.createElement("div");
    fin_div.setAttribute("id", "fin_div");
    main_fin.append(fin_div);

    let h2 = document.createElement("h2");
    h2.innerHTML = "To ckeck weather in India";
    h2.setAttribute("id", "h2");


    let temp = document.createElement("h5");


    temp.innerHTML = `Temperature : ${Math.round(data1.main.temp - 273.15)} <span id = "siz" ><sup>o</sup>C</span>`;
    let humidity = document.createElement("h5");
    humidity.innerHTML = `Humidity : ${data1.main.humidity}`

    let cloud = document.createElement("h5");
    cloud.innerHTML = `Cloud : ${data1.weather[0].description}`

    let wind = document.createElement("h5");
    wind.innerHTML = `Wind Speed : ${data1.wind.speed}`
    fin_div.append(h2, temp, humidity, wind, cloud);
  });
}


function weather2() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=27&lon=133&appid=e7c2a04092ac6f03ceebdcf1296204a3`).then((data) => {
    return data.json();
  }).then((data1) => {
    console.log(data1);
    document.querySelectorAll("#main_fin").forEach((e) => e.remove());
    let main_fin = document.createElement("div");
    main_fin.setAttribute("id", "main_fin");
    main_fin.classList.add("container");
    let s = document.getElementById("main");
    s.append(main_fin);


    let fin_div = document.createElement("div");
    fin_div.setAttribute("id", "fin_div");
    main_fin.append(fin_div);

    let h2 = document.createElement("h2");
    h2.innerHTML = "To ckeck weather in Australia";
    h2.setAttribute("id", "h2");


    let temp = document.createElement("h5");


    temp.innerHTML = `Temperature : ${Math.round(data1.main.temp - 273.15)} <span id = "siz" ><sup>o</sup>C</span>`;
    let humidity = document.createElement("h5");
    humidity.innerHTML = `Humidity : ${data1.main.humidity}`

    let cloud = document.createElement("h5");
    cloud.innerHTML = `Cloud : ${data1.weather[0].description}`

    let wind = document.createElement("h5");
    wind.innerHTML = `Wind Speed : ${data1.wind.speed}`
    fin_div.append(h2, temp, humidity, wind, cloud);
  });
}


function weather3() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=2.5&lon=112.5&appid=e7c2a04092ac6f03ceebdcf1296204a3`).then((data) => {
    return data.json();
  }).then((data1) => {
    console.log(data1);
    document.querySelectorAll("#main_fin").forEach((e) => e.remove());
    let main_fin = document.createElement("div");
    main_fin.setAttribute("id", "main_fin");
    main_fin.classList.add("container");
    let s = document.getElementById("main");
    s.append(main_fin);


    let fin_div = document.createElement("div");
    fin_div.setAttribute("id", "fin_div");
    main_fin.append(fin_div);

    let h2 = document.createElement("h2");
    h2.innerHTML = "To ckeck weather in Malaysia";
    h2.setAttribute("id", "h2");


    let temp = document.createElement("h5");


    temp.innerHTML = `Temperature : ${Math.round(data1.main.temp - 273.15)} <span id = "siz" ><sup>o</sup>C</span>`;
    let humidity = document.createElement("h5");
    humidity.innerHTML = `Humidity : ${data1.main.humidity}`

    let cloud = document.createElement("h5");
    cloud.innerHTML = `Cloud : ${data1.weather[0].description}`

    let wind = document.createElement("h5");
    wind.innerHTML = `Wind Speed : ${data1.wind.speed}`
    fin_div.append(h2, temp, humidity, wind, cloud);
  });
}
