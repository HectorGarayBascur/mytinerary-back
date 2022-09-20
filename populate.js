require('dotenv').config()
//importamos la xonexion a la base de datos
const db = require('./config/database')


//importar los modelos que necesito para las operaciones
const City = require('./models/City')
const Itinerary = require('./models/Itinerary')
const User = require('./models/User')
const Comment = require('./models/Comment')
const Activity = require("./models/Activity")

// Activity.create (
//     {
//         name: "Take pictures with Mayas",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/17/2f/7f.jpg",
//         itinerary: "6319489224ef48d1739685b6",
//     },
//     {
//         name: "Take pictures",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/17/2f/7f.jpg",
//         itinerary: "6319489224ef48d1739685b6",
//     },
//     {
//         name: "Walk through the ruins ",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/17/2f/7f.jpg",
//         itinerary: "6319489224ef48d1739685b7",
//     },
//     {
//         name: "Take photos with the chief of a tribe ",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/17/2f/7f.jpg",
//         itinerary: "6319489224ef48d1739685b7",
//     },
//     {
//         name: "Walk through the ruins  ",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/17/2f/7f.jpg",
//         itinerary: "6319489224ef48d1739685b7",
//     },
//     {
//         name: "Taste native food of the indigenous",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/17/2f/7f.jpg",
//         itinerary: "6319489224ef48d1739685b7",
//     },
//     {
//         name: "Eat a classic Mexican food restaurant",
//         photo: "https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy-800x450.jpg",
//         itinerary: "6319489224ef48d1739685b6",
//     },
//     {
//         name: "Trecking, hikes",
//         photo: "https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy-800x450.jpg",
//         itinerary: "6319489224ef48d1739685b6",
//     },
//     {
//         name: "Learn to drive a quad",
//         photo: "https://www.paulinacocina.net/wp-content/uploads/2020/01/untitled-copy-800x450.jpg",
//         itinerary: "6319489224ef48d1739685b6",
//     },
//     {
//         name: "Eating on the boat, getting to know the city",
//         photo: "https://cdn2.civitatis.com/paises-bajos/amsterdam/galeria/brujas-canal.jpg",
//         itinerary: "6319489224ef48d1739685bb",
//     },
//     {
//         name: "Take pictures of the citie by de boat",
//         photo: "https://cdn2.civitatis.com/paises-bajos/amsterdam/galeria/brujas-canal.jpg",
//         itinerary: "6319489224ef48d1739685bb",
//     },
//     {
//         name: "Romantic Date",
//         photo: "https://cdn2.civitatis.com/paises-bajos/amsterdam/galeria/brujas-canal.jpg",
//         itinerary: "6319489224ef48d1739685bb",
//     },
//     {
//         name: "Guided tour of the museum",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/ec/54/4e.jpg",
//         itinerary: "6319489224ef48d1739685bc",
//     },
//     {
//         name: "Eat at the bar set in the era",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/ec/54/4e.jpg",
//         itinerary: "6319489224ef48d1739685bc",
//     },
//     {
//         name: "Walk for free",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/ec/54/4e.jpg",
//         itinerary: "6319489224ef48d1739685bc",
//     },
//     {
//         name: "Take free beer samples",
//         photo: "https://cdn2.civitatis.com/paises-bajos/amsterdam/galeria/thumbs/heineken-experience.jpg",
//         itinerary: "6319489224ef48d1739685bd",
//     },
//     {
//         name: "Guided tour of the museum",
//         photo: "https://cdn2.civitatis.com/paises-bajos/amsterdam/galeria/thumbs/heineken-experience.jpg",
//         itinerary: "6319489224ef48d1739685bd",
//     },
//     {
//         name: "Take photos uploaded to the machines",
//         photo: "https://cdn2.civitatis.com/paises-bajos/amsterdam/galeria/thumbs/heineken-experience.jpg",
//         itinerary: "6319489224ef48d1739685bd",
//     },
//     {
//         name: "Take photos in incredible viewpoints",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2f/ff/85.jpg",
//         itinerary: "6319489224ef48d1739685ba",
//     },
//     {
//         name: "Guided alpine walks",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2f/ff/85.jpg",
//         itinerary: "6319489224ef48d1739685ba",
//     },
//     {
//         name: "Have a dinner with an incredible view",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2f/ff/85.jpg",
//         itinerary: "6319489224ef48d1739685ba",
//     },
//     {
//         name: "Train ride through the alps",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2f/ff/85.jpg",
//         itinerary: "6319489224ef48d1739685b9",
//     },
//     {
//         name: "Have a dinner with an incredible view",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2f/ff/85.jpg",
//         itinerary: "6319489224ef48d1739685b9",
//     },
//     {
//         name: "Take Pictures",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/2f/ff/85.jpg",
//         itinerary: "6319489224ef48d1739685b9",
//     },
//     {
//         name: "You camp in the mountains",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/2c/89.jpg",
//         itinerary: "6319489224ef48d1739685ba",
//     },
//     {
//         name: "Take Pictures",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/2c/89.jpg",
//         itinerary: "6319489224ef48d1739685ba",
//     },
//     {
//         name: "Guide tour by de mountain",
//         photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/2c/89.jpg",
//         itinerary: "6319489224ef48d1739685ba",
//     },
// )





/* Itinerary.create (
    {
            name: "Excursion through the caves of the Rivera",
            user: "6318d5e69ef23abd0fb6b718",
            city: "6318d4bc48ee766ac7a2573c",
            price: 2,
            like: [""],
          tags: ["#amazingbeaches", "#aztecaArt"],
          duration: 6,
      },
      {
       name: "4X4 tour on motorcycles",
       user: "6318d5e69ef23abd0fb6b719",
       city: "6318d4bc48ee766ac7a2573c",
       price: 2,
       like: [""],
     tags: ["#amazingbeaches", "#aztecaArt"],
     duration: 6,
   },
   {
       name: "Excursion to Chichen Itza",
       user: "6318d5e69ef23abd0fb6b71a",
       city: "6318d4bc48ee766ac7a2573c",
       price: 2,
       like: [""],
     tags: ["#amazingbeaches", "#aztecaArt"],
     duration: 6,
   },
   {
       name: "Excursion to Mount Tilis",
       user: "6318d5e69ef23abd0fb6b71a",
       city: "6318d4bc48ee766ac7a2573e",
       price: 2,
       like: [""],
     tags: ["#amazinViews", "#peace"],
     duration: 50,
   },
   {
       name: "Excursion through the Swiss Alps",
       user: "6318d5e69ef23abd0fb6b719",
       city: "6318d4bc48ee766ac7a2573e",
       price: 65,
       like: [""],
     tags: ["#amazinViews", "#peace"],
     duration: 6,
   },
   {
       name: "Climb Mount Pilatus by chairlift",
       user: "6318d5e69ef23abd0fb6b71a",
       city: "6318d4bc48ee766ac7a2573e",
       price: 45,
       like: [""],
     tags: ["#amazinViews", "#peace"],
     duration: 6,
   },
   {
       name: "Boat through the canals of Amsterdam",
       user: "6318d5e69ef23abd0fb6b718",
       city: "6318d4bc48ee766ac7a2573a",
       price: 45,
       like: [""],
     tags: ["#", "#"],
     duration: 4,
   },
   {
       name: "Van Gogh Museum Ticket",
       user: "6318d5e69ef23abd0fb6b71a",
       city: "6318d4bc48ee766ac7a2573a",
       price: 95,
       like: [""],
     tags: ["#art", "#beautiful"],
     duration: 3,
   },
   {
       name: "Heineken Museum",
       user: "6318d5e69ef23abd0fb6b71a",
       city: "6318d4bc48ee766ac7a2573a",
       price: 15,
       like: [""],
     tags: ["#theBESTbEER", "#originsofmyFavoritedrink"],
     duration: 3,
   },
   )



 */


/* Activity.create({
    name: "Visit de top of the Tower",
    photo: "https://images.musement.com/cover/0052/60/thumb_5159038_cover_header.jpeg?w=1024",
    itinerary: "6318db2de6491b05f8a4be7b",
},
{
    name: "Dubai fountain show and lake by traditional boat",
    photo: "https://images.musement.com/cover/0052/60/thumb_5159038_cover_header.jpeg?w=1024",
    itinerary: "6318db2de6491b05f8a4be7b",
},
{
    name: "Burj Khalifa tickets and 3 course meal at Rooftop",
    photo: "https://images.musement.com/cover/0053/20/thumb_5219009_cover_header.png?w=600",
    itinerary: "6318db2de6491b05f8a4be7b",
},
{
    name: "See the history of the museum in its micro theater",
    photo: "https://www.turismobr.com/wp-content/uploads/2016/12/Museu_de_Arte_de_Sao_Paulo-300x194.jpg",
    itinerary: "6318db2de6491b05f8a4be7c",
},
{
    name: "Guided tour of the entire museum",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/a0/82/76/caption.jpg?w=1100&h=-1&s=1",
    itinerary: "6318db2de6491b05f8a4be7c",
},
{
    name: "End the tour with a classic Brazilian meal",
    photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/a0/82/76/caption.jpg?w=1100&h=-1&s=1",
    itinerary: "6318db2de6491b05f8a4be7c",
},
{
    name: "Have a snack in the revolving cafe del Cerro",
    photo: "https://www.clarin.com/img/2018/11/21/vLyKUybPt_720x0__1.jpg",
    itinerary: "6318db2de6491b05f8a4be7d",
},
{
    name: "Trekking",
    photo: "https://barilocheturismo.gob.ar/images/actividades/cerros/otto/cerrootto_01.jpg",
    itinerary: "6318db2de6491b05f8a4be7d",
},
{
    name: "Go down the hill by boat",
    photo: "https://www.telefericobariloche.com.ar/noticias/img/original/IhAdfJBmCroqMFTXKyLVsOtZ.jpg",
    itinerary: "6318db2de6491b05f8a4be7d",
},
{
    name: "Guided tour with registered historians of the city",
    photo: "https://carpediem.tours/roma/wp-content/uploads/sites/6/2015/11/fontanatrevi.jpg",
    itinerary: "6318db2de6491b05f8a4be80",
},
{
    name: "Ancient Rome show at the fountain",
    photo: "https://turismo.org/wp-content/uploads/2013/04/Fontana-de-Trevi-760x500.jpg",
    itinerary: "6318db2de6491b05f8a4be80",
},
{
    name: "Take the photo edited by photographer to look like ancient Rome",
    photo: "https://turismo.org/wp-content/uploads/2015/05/fontana-di-trevi.jpg",
    itinerary: "6318db2de6491b05f8a4be80",
},
{
    name: "Views from the RoofTop of the arch",
    photo: "https://cdn2.civitatis.com/francia/paris/galeria/vistas-desde-arco-triunfo.jpg",
    itinerary: "6318db2de6491b05f8a4be81",
},
{
    name: "Tour guide who explains the history of the Arc de Triomphe",
    photo: "https://cdn2.civitatis.com/francia/paris/galeria/vistas-desde-arco-triunfo.jpg",
    itinerary: "6318db2de6491b05f8a4be81",
},
{
    name: "Have coffee in front of the Arc de Triomphe after a walk",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGsaPShDzgOv0ViWtJ47NJr08HuUOby8g2xbn_Gel6Ew&s",
    itinerary: "6318db2de6491b05f8a4be81",
},
{
    name: "Climb the tower with a hired photographer",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0oxXVpP3R0zbxeE-8O7YokmbWRvRtfAPSc5aSDTEqQWuN3HWJBTMuSvWeWcr1wPoRR1I&usqp=CAU",
    itinerary: "6318db2de6491b05f8a4be82",
},
{
    name: "Have a snack with personal music, romantic date",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpkddMQzV60vuWU51Iqikw9VdHH-dYCeiFH_rBFNBe189oQW7DIPi1YFUi0JkL745CrC8&usqp=CAU",
    itinerary: "6318db2de6491b05f8a4be82",
},
{
    name: "Guided tour of the tower area, with electric skateboards",
    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFyfjeYSyPlW5OLOpW9bBJ_x4hgzspJ_W-PQ&usqp=CAU",
    itinerary: "6318db2de6491b05f8a4be82",
},
{
    name: "Guided tour of the palace",
    photo: "https://cdn.citywonders.com/media/21117/new-project-9.jpg?anchor=center&mode=crop&width=832&height=475",
    itinerary: "6318db2de6491b05f8a4be83",
},
{
    name: "Have tea in a salon of the queen",
    photo: "https://ep00.epimg.net/elpais/imagenes/2018/09/21/album/1537516444_578982_1537517391_album_normal.jpg",
    itinerary: "6318db2de6491b05f8a4be83",
},
{
    name: "Tour the royal garden of royalty",
    photo: "https://cdn.getyourguide.com/img/tour/5b56dd82d29ba.jpeg/98.jpg",
    itinerary: "6318db2de6491b05f8a4be83",
},
{
    name: "Premium experiencie, have dinner in the top de London",
    photo: "https://images.prismic.io/mystique/1f689989-6b0e-4d96-a981-7d42b12f2369_federico-tasin-rejtbSVNZII-unsplash.jpg?auto=compress%2Cformat&h=334.5&q=75&fit=crop&ar=7%3A4&fm=webp",
    itinerary: "6318db2de6491b05f8a4be84",
},
{
    name: "Standar experiencie, recommended",
    photo: "https://images.prismic.io/mystique/22e81b07-e712-4392-8d31-01834bdbd3b5_julius-jansson-jGgYF8Q6ewA-unsplash+%282%29.jpg?auto=compress%2Cformat&h=334.5&q=75&fit=crop&ar=7%3A4&fm=webp",
    itinerary: "6318db2de6491b05f8a4be84",
},
{
    name: "Fast track Tickets",
    photo: "https://images.prismic.io/mystique/7dbe5b45-248f-42ee-aa5e-ae396cbd24dd_paul-silvan-WeUcTePA8Yo-unsplash.jpg?auto=compress%2Cformat&h=334.5&q=75&fit=crop&ar=7%3A4&fm=webp",
    itinerary: "6318db2de6491b05f8a4be84",
},
{
    name: "Visit to Victoria Island",
    photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/89/8e.jpg",
    itinerary: "6318db2de6491b05f8a4be7e",
},
{
    name: "Visit the myrtle forest",
    photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/0a/d1/51.jpg",
    itinerary: "6318db2de6491b05f8a4be7e",
},
{
    name: "Guided trout fishing",
    photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/7d/22.jpg",
    itinerary: "6318db2de6491b05f8a4be7e",
},
{
    name: "Free tour, without guide.",
    photo: "https://lp-cms-production.imgix.net/2020-11/GettyRF_597021401.jpg?auto=format&q=40&ar=16%3A9&fit=crop&crop=center&fm=auto&w=1678",
    itinerary: "6318db2de6491b05f8a4be7f",
},
{
    name: "Walk the internal corridors of the coliseum",
    photo: "https://lp-cms-production.imgix.net/2020-11/GettyRF_597021401.jpg?auto=format&q=40&ar=16%3A9&fit=crop&crop=center&fm=auto&w=1678",
    itinerary: "6318db2de6491b05f8a4be7f",
},
{
    name: "Explore the surroundings of the coliseum with bicycles",
    photo: "https://lp-cms-production.imgix.net/2020-11/GettyRF_597021401.jpg?auto=format&q=40&ar=16%3A9&fit=crop&crop=center&fm=auto&w=1678",
    itinerary: "6318db2de6491b05f8a4be7f",
},
)

Comment.create({
    comment: 'Wow nice wall',
    user: '6318d5e69ef23abd0fb6b718',
    itinerary: '6318db2de6491b05f8a4be7a'
})
 */
// Activity.create({
//     name: 'Visit the Berlin Wall Memorial',
//     photo: 'https://www.fattiretours.com/app/uploads/2022/03/berlin-wall-slider1-1290x728.jpg',
//     itinerary: '6318db2de6491b05f8a4be7a'
// },
//     {
//         name: 'Visit other bits of the Wall',
//         photo: 'https://www.fattiretours.com/app/uploads/2022/03/berlin-wall-slider1-1290x728.jpg',
//         itinerary: '6318db2de6491b05f8a4be7a'
//     },
//     {
//         name: 'Explore the German Historical Museum',
//         photo: 'https://www.fattiretours.com/app/uploads/2022/03/berlin-wall-slider1-1290x728.jpg',
//         itinerary: '6318db2de6491b05f8a4be7a'
//     })

// Itinerary.create({
//     name: "Berlin Wall",
//     user: "6318d5e69ef23abd0fb6b718",
//     city: "6318d4bc48ee766ac7a25736",
//     price: 25,
//     like: [""],
//     tags: ["#beautifullcity", "#amazingTour"],
//     duration: 2,

// },
//     {
//         name: "Burj Khalifa",
//         user: "6318d5e69ef23abd0fb6b718",
//         city: "6318d4bc48ee766ac7a25739",
//         price: 150,
//         like: [""],
//         tags: ["#amazingviews", "#luxury"],
//         duration: 2,

//     },
//     {
//         name: "Museu de Arte de Sao Paulo-Assis Chateaubriand",
//         user: "6318d5e69ef23abd0fb6b718",
//         city: "6318d4bc48ee766ac7a25742",
//         price: 35,
//         like: [""],
//         tags: ["#beautifulpaintings", "#loveArt"],
//         duration: 5,

//     },
//     {
//         name: "Cerro Otto",
//         user: "6318d5e69ef23abd0fb6b718",
//         city: "6318d4bc48ee766ac7a25740",
//         price: 20,
//         like: [""],
//         tags: ["#adventure", "#trecking"],
//         duration: 2,

//     },
//     {
//         name: "Nahuel Huapi Lake",
//         user: "6318d5e69ef23abd0fb6b719",
//         city: "6318d4bc48ee766ac7a25740",
//         price: 75,
//         like: [""],
//         tags: ["#amazingViews", "#relaxing"],
//         duration: 5,

//     },
//     {
//         name: "Rome Coliseum",
//         user: "6318d5e69ef23abd0fb6b719",
//         city: "6318d4bc48ee766ac7a25738",
//         price: 75,
//         like: [""],
//         tags: ["#MaximusDecimusMeridius", "#loveArt"],
//         duration: 2,

//     },
//     {
//         name: "Fontana di Trevi",
//         user: "6318d5e69ef23abd0fb6b719",
//         city: "6318d4bc48ee766ac7a25738",
//         price: 5,
//         like: [""],
//         tags: ["#loveWishes", "#toBe$$$Rich$$$"],
//         duration: 1,

//     },
//     {
//         name: "Arch of Triumph",
//         user: "6318d5e69ef23abd0fb6b719",
//         city: "6318d4bc48ee766ac7a25734",
//         price: 10,
//         like: [""],
//         tags: ["#conquerParis", "#historicalMonument"],
//         duration: 2,

//     },
//     {
//         name: "Eiffel Tower",
//         user: "6318d5e69ef23abd0fb6b71a",
//         city: "6318d4bc48ee766ac7a25734",
//         price: 25,
//         like: [""],
//         tags: ["#love", "#bonjour"],
//         duration: 3,

//     },
//     {
//         name: "Buckingham Palace Tour",
//         user: "6318d5e69ef23abd0fb6b71a",
//         city: "6318d4bc48ee766ac7a25735",
//         price: 85,
//         like: [""],
//         tags: ["#dontBotherTheGuards", "#loveArt"],
//         duration: 3,

//     },
//     {
//         name: "London Eye",
//         user: "6318d5e69ef23abd0fb6b71a",
//         city: "6318d4bc48ee766ac7a25735",
//         price: 65,
//         like: [""],
//         tags: ["#breathTakingView", "#incredibleExperience"],
//         duration: 2,

//     })


// User.create({
//     name: "Pedro",
//     lastName: "Martinez",
//     photo: "http://drive.google.com/uc?export=view&id=1qjU-l4rZr83yyNNR_wU-0L4fKD0fqoVu",
//     mail: "pedromartinez2@gmail.com",
//     password: "hola123",
//     country: "Argentina",
// },
//     {
//         name: "Raul",
//         lastName: "Galarza",
//         photo: "http://drive.google.com/uc?export=view&id=1TjpvxDjFE4CPBqE8yU5Ryf_YrUeFxgVS",
//         mail: "raulgalarza5@gmail.com",
//         password: "hola123",
//         country: "Chile",
//     },
//     {
//         name: "Tomas",
//         lastName: "Delgado",
//         photo: "http://drive.google.com/uc?export=view&id=1fwAfcM7btXCsdkQYm38FWYvHHKXMGgjs",
//         mail: "delgadotomas@gmail.com",
//         password: "hola123",
//         country: "Colombia",
//     },
// )

// City.create({
//     city: "Paris",
//     country: "France",
//     photo: "http://drive.google.com/uc?export=view&id=18DdDqa60Llgac05wPrryF-Kiilef59-u",
//     population: 12405426,
//     description: "Paris, city and capital of France, situated in the north-central part of the country. People were living on the site of the present-day city, located along the Seine River some 233 miles (375 km) upstream from the river’s mouth on the English Channel (La Manche), by about 7600 BCE. The modern city has spread from the island (the Île de la Cité) and far beyond both banks of the Seine.",
//     fundation: "1789-01-01",
// },
//     {
//         city: "London",
//         country: "England",
//         photo: "http://drive.google.com/uc?export=view&id=1L0433trpotmzAqtekfegXAI9NHgCjE_J",
//         population: 9002477,
//         description: "The natural lay of the land can be appreciated from several public vantage points. Hampstead Heath offers the finest panorama over the central basin of the metropolis. But from Shooters Hill, Upper Norwood, or Alexandra Palace one has a choice of views: inward to the crowded skyline of the City and West End or out to the open expanses of the Home Counties, the Thames estuary, the South Downs, and the Weald. Such panoramas show that London, for all its immensity, resembles more closely the limited metropolises of the early 20th century than the amorphous and sprawling megalopolises of today, such as Tokyo or Los Angeles.",
//         fundation: "1642-01-01",
//     },
//     {
//         city: "Berlin",
//         country: "Germany",
//         photo: "http://drive.google.com/uc?export=view&id=11DroPGWB41PU3HQcM80s-U_CtrhwMxb8",
//         population: 3769495,
//         description: "Berlin, capital and chief urban centre of Germany. The city lies at the heart of the North German Plain, athwart an east-west commercial and geographic axis that helped make it the capital of the kingdom of Prussia and then, from 1871, of a unified Germany. Berlin’s former glory ended in 1945, but the city survived the destruction of World War II. It was rebuilt and came to show amazing economic and cultural growth.",
//         fundation: "1871-01-01",
//     },
//     {
//         city: "Athens",
//         country: "Greece",
//         photo: "http://drive.google.com/uc?export=view&id=11nFvZhxs7OIOaEXG9DJnWhj8EoIA2ymW",
//         population: 3090508,
//         description: "Athens, with its tall buildings and contemporary shops, is the first European city when approached from the Middle East. When approached from the west, from elsewhere in Europe, what strikes the visitor is the influence of the East—in the food, music, and clamorous street life—perhaps vestiges of a time when Athens was divorced from European society under the yoke of Ottoman rule. Nevertheless, it is wrong to say that Athens is a mixture of East and West: it is Greek and, more particularly, Athenian. The city, after all, nurtured Western civilization thousands of years ago. Athens remains on the world stage to this day.",
//         fundation: "1109-01-01",
//     },
//     {
//         city: "Rome",
//         country: "Italy",
//         photo: "http://drive.google.com/uc?export=view&id=1-StpbQfjw8mWCQ0fsffv_MQsxTBw-Zp3",
//         population: 4342212,
//         description: "The Roman countryside, the Campagna, was one of the last areas of central Italy to be settled in antiquity. Rome was built on a defensible hill that dominated the last downstream, high-banked river crossing where traverse of the Tiber was facilitated by a midstream island. This hill, Palatine Hill, was one of a group of hills, traditionally counted as seven, around which the ancient city grew. The other hills are the Capitoline, the Quirinal, the Viminal, the Esquiline, the Caelian, and the Aventine.",
//         fundation: "1220-01-01",
//     },
//     {
//         city: "Dubai",
//         country: "United Arab Emirates",
//         photo: "http://drive.google.com/uc?export=view&id=1sPWyIlvQNlt5OWQ4mjRfEli0mKxETiiL",
//         population: 3355900,
//         description: "Dubai is a city of skyscrapers, ports, and beaches, where big business takes place alongside sun-seeking tourism. Because of its large expatriate population, it feels like a Middle Eastern melting pot, and the atmosphere is generally tolerant. Religious affiliations are not a prominent aspect of city life. Islam is the majority religion, but churches and Hindu temples coexist with Dubais mosques.",
//         fundation: "1971-01-01",
//     },
//     {
//         city: "Amsterdam",
//         country: "Netherlands",
//         photo: "http://drive.google.com/uc?export=view&id=1PECHqeAJEh2Thw0KghJJwDbvZhXK5-FK",
//         population: 905234,
//         description: "Amsterdam is situated in a flat and low-lying area mainly on the south bank of the IJ, an inland arm of the former Zuiderzee, now the IJsselmeer, connected by canal with the North Sea. The Amstel River flows from south to north through the city toward the IJ. Parts of the city lie below sea level, some of them on land that has been reclaimed from the sea or from marshes or lakes.",
//         fundation: "1275-01-01",
//     },
//     {
//         city: "Bali",
//         country: "Indonesia",
//         photo: "http://drive.google.com/uc?export=view&id=1C4fSReQHCDNRU5w8EwKCDvCOV1Rvm8W-",
//         population: 4230055,
//         description: "The Balinese are fond of music, poetry, dancing, and festivals, are extraordinarily able in arts and crafts, and are passionately fond of betting games, especially cockfighting. A typical Balinese gamelan (orchestra) consists of various percussion instruments, a two-string violin, and a flute; and every village has its gamelan club. Stage plays and, especially, dancing are an integral part of Balinese life, serving magico-religious purposes or telling stories by pantomime.",
//         fundation: "1375-01-01",
//     },
//     {
//         city: "Cancun",
//         country: "Mexico",
//         photo: "http://drive.google.com/uc?export=view&id=13JCxizQT6DteCbtuzyyMrsjHo-FZxhuK",
//         population: 888797,
//         description: "Originally settled by Maya Indians, the area was recorded as Cancúne (Mayan: “Vessel at the End of the Rainbow”) in 1843 by the American explorer John Lloyd Stephens and the British explorer Frederick Catherwood in their classic work, Incidents of Travel in Yucatan (1843). Cancún remained a small fishing-and-gathering settlement of about 100 Maya until 1970, when, after a three-year study of conditions by the Mexican government in association with private interests, the area was selected as a suitable site for an international holiday centre.",
//         fundation: "1843-01-01",
//     },
//     {
//         city: "San Francisco",
//         country: "USA",
//         photo: "http://drive.google.com/uc?export=view&id=1XFDIRnT2_KHWhh-0lsnaGD-CHZTownSE",
//         population: 4203898,
//         description: "The most prominent of San Francisco hills are Twin Peaks, Mount Davidson, and Mount Sutro, all of which exceed 900 feet (270 metres) in elevation. The best known are Nob Hill, where the wealthy “nobs” (nabobs) built extravagant mansions in the 1870s, and Telegraph Hill, which once looked down on the Barbary Coast, a neighbourhood formerly alive with gaudy wickedness. As a result of the pioneer planners prejudice in favour of a squared-off grid, the downtown streets march intrepidly up precipitous slopes, terrifying newly arrived drivers.",
//         fundation: "1776-01-01",
//     },
//     {
//         city: "Zurich",
//         country: "Switzerland",
//         photo: "http://drive.google.com/uc?export=view&id=1ZsS1rVnFzQZT7QBQ_-s5Qx41xvunOO-0",
//         population: 434236,
//         description: "Zürich is at the core of a constantly expanding metropolitan area that encompasses parts of central, northern, and eastern Switzerland. It is the industrial, financial, and cultural centre of the country and one of the most cosmopolitan and dynamic Swiss cities. Throughout the city centre, green space extends to the shores of Lake Zürich, which are lined by attractive public parks, and up to the slopes of Zürichberg.",
//         fundation: "1304-01-01",
//     },
//     {
//         city: "Tokyo",
//         country: "Japan",
//         photo: "http://drive.google.com/uc?export=view&id=1CXY0mXNtwPKbQJKFUF5XOQH01X_I5nYe",
//         population: 13988102,
//         description: "The old city of Edo occupied alluvial and reclaimed lands along and to the east of the Sumida River (which flows just east of central Tokyo) and hills to the west of the river. The site was chosen for strategic reasons. It commands the southern approaches to the Kantō Plain, the largest in Japan. Saitama is mostly flat, and in Kanagawa hills prevail, though both prefectures give way to mountains along their inland extremities, as also does Tokyo. Much of the mercantile centre of Edo was reclaimed from the Sumida estuary, which reached to the grounds of the premodern castle (now the imperial palace).",
//         fundation: "1603-01-01",
//     },
//     {
//         city: "Bariloche",
//         country: "Argentine",
//         photo: "http://drive.google.com/uc?export=view&id=10W13OJOE3q_iBH-6MRb0ZjIsN7jq2Zro",
//         population: 115208,
//         description: "The province is crossed (northwest to southeast) by the Negro River. South of the Negro, most of the land consists of arid tablelands. To the west are the chains of lakes and the forested valleys of the Andes, the site of Nahuel Huapí National Park. The Atlantic coastline has one deep indentation, the Gulf of San Matías, in the northern bend of which is the small port of San Antonio Oeste.",
//         fundation: "1902-01-01",
//     },
//     {
//         city: "Punta Natales",
//         country: "Chile",
//         photo: "http://drive.google.com/uc?export=view&id=1eKB7UpLQlKC3Hc5DiWVY7caf-nXN1WNG",
//         population: 115208,
//         description: "Magallanes y La Antarctica Chilena, largest and southernmost región of Chile. Named for Ferdinand Magellan, the Portuguese navigator, it became a colonial territory in 1853 and a province in 1929. It was given its present boundaries in 1961 and established as a region in 1974. It includes the provinces of Ultima Esperanza, Magallanes, Tierra del Fuego, and Antarctica. Magallanes y La Antarctica Chilena includes the mainland west of the Argentine frontier, the numerous islands fronting the Pacific Ocean, the Archipiélago de Tierra Fuego, the western half of Tierra del Fuego, and the Chilean-claimed Antarctic region.",
//         fundation: "1853-01-01",
//     },
//     {
//         city: "Sao Paulo",
//         country: "Brazil",
//         photo: "http://drive.google.com/uc?export=view&id=1__HM4SgTxl1nyS77wESKvHq9iqqgj3ky",
//         population: 12396372,
//         description: "The Brazilian Highlands are composed of ancient crystalline rocks, which in the vicinity of São Paulo form a surface of gently rounded hills mantled with a reddish clay soil. Rivers such as the Tietê, on which São Paulo is located, rise near the edge of the Great Escarpment and flow generally westward to the Paraná River. In their course, they cross stratified sandstones and limestones overlaying the crystalline base, as well as sheets of volcanic rock that form the Paraná Plateau. Here, rapids and waterfalls, as well as dams and reservoirs, supply great quantities of hydroelectric power.",
//         fundation: "1554-01-01",
//     },
// )


User.create({
    name: "Pedro",
    lastName: "Martinez",
    photo: "http://drive.google.com/uc?export=view&id=1qjU-l4rZr83yyNNR_wU-0L4fKD0fqoVu",
    mail: "pedromartinez2@gmail.com",
    password: "hola123",
    country: "Argentina",
},
    {
        name: "Raul",
        lastName: "Galarza",
        photo: "http://drive.google.com/uc?export=view&id=1TjpvxDjFE4CPBqE8yU5Ryf_YrUeFxgVS",
        mail: "raulgalarza5@gmail.com",
        password: "hola123",
        country: "Chile",
    },
    {
        name: "Tomas",
        lastName: "Delgado",
        photo: "http://drive.google.com/uc?export=view&id=1fwAfcM7btXCsdkQYm38FWYvHHKXMGgjs",
        mail: "delgadotomas@gmail.com",
        password: "hola123",
        country: "Colombia",
    },
)
/*
City.create({
    city: "Paris",
    country: "France",
    photo: "http://drive.google.com/uc?export=view&id=18DdDqa60Llgac05wPrryF-Kiilef59-u",
    population: 12405426,
    description: "Paris, city and capital of France, situated in the north-central part of the country. People were living on the site of the present-day city, located along the Seine River some 233 miles (375 km) upstream from the river’s mouth on the English Channel (La Manche), by about 7600 BCE. The modern city has spread from the island (the Île de la Cité) and far beyond both banks of the Seine.",
    fundation: "1789-01-01",
},
    {
        city: "London",
        country: "England",
        photo: "http://drive.google.com/uc?export=view&id=18DdDqa60Llgac05wPrryF-Kiilef59-u",
        population: 9002477,
        description: "The natural lay of the land can be appreciated from several public vantage points. Hampstead Heath offers the finest panorama over the central basin of the metropolis. But from Shooters Hill, Upper Norwood, or Alexandra Palace one has a choice of views: inward to the crowded skyline of the City and West End or out to the open expanses of the Home Counties, the Thames estuary, the South Downs, and the Weald. Such panoramas show that London, for all its immensity, resembles more closely the limited metropolises of the early 20th century than the amorphous and sprawling megalopolises of today, such as Tokyo or Los Angeles.",
        fundation: "1642-01-01",
    },
    {
        city: "Berlin",
        country: "Germany",
        photo: "http://drive.google.com/uc?export=view&id=11DroPGWB41PU3HQcM80s-U_CtrhwMxb8",
        population: 3769495,
        description: "Berlin, capital and chief urban centre of Germany. The city lies at the heart of the North German Plain, athwart an east-west commercial and geographic axis that helped make it the capital of the kingdom of Prussia and then, from 1871, of a unified Germany. Berlin’s former glory ended in 1945, but the city survived the destruction of World War II. It was rebuilt and came to show amazing economic and cultural growth.",
        fundation: "1871-01-01",
    },
    {
        city: "Athens",
        country: "Greece",
        photo: "http://drive.google.com/uc?export=view&id=11nFvZhxs7OIOaEXG9DJnWhj8EoIA2ymW",
        population: 3090508,
        description: "Athens, with its tall buildings and contemporary shops, is the first European city when approached from the Middle East. When approached from the west, from elsewhere in Europe, what strikes the visitor is the influence of the East—in the food, music, and clamorous street life—perhaps vestiges of a time when Athens was divorced from European society under the yoke of Ottoman rule. Nevertheless, it is wrong to say that Athens is a mixture of East and West: it is Greek and, more particularly, Athenian. The city, after all, nurtured Western civilization thousands of years ago. Athens remains on the world stage to this day.",
        fundation: "1109-01-01",
    },
    {
        city: "Rome",
        country: "Italy",
        photo: "http://drive.google.com/uc?export=view&id=1-StpbQfjw8mWCQ0fsffv_MQsxTBw-Zp3",
        population: 4342212,
        description: "The Roman countryside, the Campagna, was one of the last areas of central Italy to be settled in antiquity. Rome was built on a defensible hill that dominated the last downstream, high-banked river crossing where traverse of the Tiber was facilitated by a midstream island. This hill, Palatine Hill, was one of a group of hills, traditionally counted as seven, around which the ancient city grew. The other hills are the Capitoline, the Quirinal, the Viminal, the Esquiline, the Caelian, and the Aventine.",
        fundation: "1220-01-01",
    },
    {
        city: "Dubai",
        country: "United Arab Emirates",
        photo: "http://drive.google.com/uc?export=view&id=1sPWyIlvQNlt5OWQ4mjRfEli0mKxETiiL",
        population: 3355900,
        description: "Dubai is a city of skyscrapers, ports, and beaches, where big business takes place alongside sun-seeking tourism. Because of its large expatriate population, it feels like a Middle Eastern melting pot, and the atmosphere is generally tolerant. Religious affiliations are not a prominent aspect of city life. Islam is the majority religion, but churches and Hindu temples coexist with Dubais mosques.",
        fundation: "1971-01-01",
    },
    {
        city: "Amsterdam",
        country: "Netherlands",
        photo: "http://drive.google.com/uc?export=view&id=1PECHqeAJEh2Thw0KghJJwDbvZhXK5-FK",
        population: 905234,
        description: "Amsterdam is situated in a flat and low-lying area mainly on the south bank of the IJ, an inland arm of the former Zuiderzee, now the IJsselmeer, connected by canal with the North Sea. The Amstel River flows from south to north through the city toward the IJ. Parts of the city lie below sea level, some of them on land that has been reclaimed from the sea or from marshes or lakes.",
        fundation: "1275-01-01",
    },
    {
        city: "Bali",
        country: "Indonesia",
        photo: "http://drive.google.com/uc?export=view&id=1C4fSReQHCDNRU5w8EwKCDvCOV1Rvm8W-",
        population: 4230055,
        description: "The Balinese are fond of music, poetry, dancing, and festivals, are extraordinarily able in arts and crafts, and are passionately fond of betting games, especially cockfighting. A typical Balinese gamelan (orchestra) consists of various percussion instruments, a two-string violin, and a flute; and every village has its gamelan club. Stage plays and, especially, dancing are an integral part of Balinese life, serving magico-religious purposes or telling stories by pantomime.",
        fundation: "1375-01-01",
    },
    {
        city: "Cancun",
        country: "Mexico",
        photo: "http://drive.google.com/uc?export=view&id=13JCxizQT6DteCbtuzyyMrsjHo-FZxhuK",
        population: 888797,
        description: "Originally settled by Maya Indians, the area was recorded as Cancúne (Mayan: “Vessel at the End of the Rainbow”) in 1843 by the American explorer John Lloyd Stephens and the British explorer Frederick Catherwood in their classic work, Incidents of Travel in Yucatan (1843). Cancún remained a small fishing-and-gathering settlement of about 100 Maya until 1970, when, after a three-year study of conditions by the Mexican government in association with private interests, the area was selected as a suitable site for an international holiday centre.",
        fundation: "1843-01-01",
    },
    {
        city: "San Francisco",
        country: "USA",
        photo: "http://drive.google.com/uc?export=view&id=1XFDIRnT2_KHWhh-0lsnaGD-CHZTownSE",
        population: 4203898,
        description: "The most prominent of San Francisco hills are Twin Peaks, Mount Davidson, and Mount Sutro, all of which exceed 900 feet (270 metres) in elevation. The best known are Nob Hill, where the wealthy “nobs” (nabobs) built extravagant mansions in the 1870s, and Telegraph Hill, which once looked down on the Barbary Coast, a neighbourhood formerly alive with gaudy wickedness. As a result of the pioneer planners prejudice in favour of a squared-off grid, the downtown streets march intrepidly up precipitous slopes, terrifying newly arrived drivers.",
        fundation: "1776-01-01",
    },
    {
        city: "Zurich",
        country: "Switzerland",
        photo: "http://drive.google.com/uc?export=view&id=1ZsS1rVnFzQZT7QBQ_-s5Qx41xvunOO-0",
        population: 434236,
        description: "Zürich is at the core of a constantly expanding metropolitan area that encompasses parts of central, northern, and eastern Switzerland. It is the industrial, financial, and cultural centre of the country and one of the most cosmopolitan and dynamic Swiss cities. Throughout the city centre, green space extends to the shores of Lake Zürich, which are lined by attractive public parks, and up to the slopes of Zürichberg.",
        fundation: "1304-01-01",
    },
    {
        city: "Tokyo",
        country: "Japan",
        photo: "http://drive.google.com/uc?export=view&id=1CXY0mXNtwPKbQJKFUF5XOQH01X_I5nYe",
        population: 13988102,
        description: "The old city of Edo occupied alluvial and reclaimed lands along and to the east of the Sumida River (which flows just east of central Tokyo) and hills to the west of the river. The site was chosen for strategic reasons. It commands the southern approaches to the Kantō Plain, the largest in Japan. Saitama is mostly flat, and in Kanagawa hills prevail, though both prefectures give way to mountains along their inland extremities, as also does Tokyo. Much of the mercantile centre of Edo was reclaimed from the Sumida estuary, which reached to the grounds of the premodern castle (now the imperial palace).",
        fundation: "1603-01-01",
    },
    {
        city: "Bariloche",
        country: "Argentine",
        photo: "http://drive.google.com/uc?export=view&id=10W13OJOE3q_iBH-6MRb0ZjIsN7jq2Zro",
        population: 115208,
        description: "The province is crossed (northwest to southeast) by the Negro River. South of the Negro, most of the land consists of arid tablelands. To the west are the chains of lakes and the forested valleys of the Andes, the site of Nahuel Huapí National Park. The Atlantic coastline has one deep indentation, the Gulf of San Matías, in the northern bend of which is the small port of San Antonio Oeste.",
        fundation: "1902-01-01",
    },
    {
        city: "Punta Natales",
        country: "Chile",
        photo: "http://drive.google.com/uc?export=view&id=1eKB7UpLQlKC3Hc5DiWVY7caf-nXN1WNG",
        population: 115208,
        description: "Magallanes y La Antarctica Chilena, largest and southernmost región of Chile. Named for Ferdinand Magellan, the Portuguese navigator, it became a colonial territory in 1853 and a province in 1929. It was given its present boundaries in 1961 and established as a region in 1974. It includes the provinces of Ultima Esperanza, Magallanes, Tierra del Fuego, and Antarctica. Magallanes y La Antarctica Chilena includes the mainland west of the Argentine frontier, the numerous islands fronting the Pacific Ocean, the Archipiélago de Tierra Fuego, the western half of Tierra del Fuego, and the Chilean-claimed Antarctic region.",
        fundation: "1853-01-01",
    },
    {
        city: "Sao Paulo",
        country: "Brazil",
        photo: "http://drive.google.com/uc?export=view&id=1__HM4SgTxl1nyS77wESKvHq9iqqgj3ky",
        population: 12396372,
        description: "The Brazilian Highlands are composed of ancient crystalline rocks, which in the vicinity of São Paulo form a surface of gently rounded hills mantled with a reddish clay soil. Rivers such as the Tietê, on which São Paulo is located, rise near the edge of the Great Escarpment and flow generally westward to the Paraná River. In their course, they cross stratified sandstones and limestones overlaying the crystalline base, as well as sheets of volcanic rock that form the Paraná Plateau. Here, rapids and waterfalls, as well as dams and reservoirs, supply great quantities of hydroelectric power.",
        fundation: "1554-01-01",
    },
)
 */



//node populate.js