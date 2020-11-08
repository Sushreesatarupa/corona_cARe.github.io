var newsObject = [
  {
    img:"/doctors-covid.jpeg",
    headline: "WHO-trained young epidemiologists help fight COVID-19 in the Republic of Moldovia",
    date:"20th, August, 2020"
  },
  {
    img:"/covid-1.jpeg",
    headline:"Zambia: COVID-19 home-based care relieves health facilities",
    date:"20th, August, 2020"
  },
  {
    img:"/covid-2.jpeg",
    headline:"COVID-19 and conflict, a double battle for humanitarian workers",
    date:"19th, August, 2020"
  },
  {
    img:"/doctors-covid.jpeg",
    headline:"Afghanistan: Health workers on the frontline against COVID-19",
    date:"19th, August, 2020"
  },
  {
    img:"/Dr-Takeshi-Kasai.jpeg",
    headline:"Virtual Press Conference on COVID-19, Remarks by Dr. Takeshi Kasai.",
    date:"18, August, 2020"
  },
  {
    img:"/patient-covid.jpeg",
    headline:"WHO regional doctor introduces surge team of experts to South African government",
    date:"17th, August, 2020."
  },
  {
     img:"/mask.jpeg",
    headline:"Nigeria commemorates World Mask Week.",
    date:"7th, August, 2020."
  },
  {
    img:"/covid-1.jpeg",
    headline:"Nigeria launches COVID-19 online course on infection prevention",
    date:"4th, July, 2020"
  },
  {
    img:"/doctors-covid.jpeg",
    headline:"Classification of COVID-19 testing expansion in Nigeria in light of comments by officials of Cross River State",
    date:"3rd, July, 2020."
  },
  {
    img:"/covid-2.jpeg",
    headline:"Nigeria releases COVID-19 guide to reopen places of worship",
    date:"1st, July, 2020"
  },
  {
    img:"/covid-1.jpeg",
    headline:"Nigeria launches COVID-19 online course on infection prevention",
    date:"4th, July, 2020"
  },
  {
    img:"/doctors-covid.jpeg",
    headline:"Classification of COVID-19 testing expansion in Nigeria in light of comments by officials of Cross River State",
    date:"3rd, July, 2020."
  }
]

window.addEventListener('load', start, false)
function start() {
  rowDiv = document.createElement('div')
  rowDiv.className = "row"
  markup = ""
  count = 1
  for (var i of newsObject) {
    line = count % 3 == 0? `<div class='line d-none d-md-block mb-5'></div>` : "";
    imgSrc = `./assets/images${i.img}`;
    markup += `<div class='col-12 row col-md-4 newsContainer'>` +
      `<div class="col-6 col-md-12 image">` +
        `<img src=${imgSrc} alt=${i.headline} />` +
      `</div>` +
      `<div class="col-6 col-md-12 text p-3">` +
        `<h6 class="headline text-muted">${i.headline}</h6>` +
        `<p class="dates">${i.date}</p>` +
      `</div>` +
    `</div>`+
    `<div class='line d-md-none'></div>` + line
    count ++
  }
  rowDiv.innerHTML = markup;
  document.querySelector('.rest-of-news').appendChild(rowDiv);
}
