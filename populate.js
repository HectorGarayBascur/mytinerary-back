require('dotenv').config()
//importamos la xonexion a la base de datos
const db = require('./config/database')
const Activity = require('./models/Activity')

//importar los modelos que necesito para las operaciones
const City = require('./models/City')
const Itinerary = require('./models/Itinerary')
const User = require('./models/User')
const Comment = require('./models/Comment')

Comment.create({
    comment: 'Wow nice wall',
    user: '6318d5e69ef23abd0fb6b718',
    itinerary: '6318db2de6491b05f8a4be7a'
})

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

//node populate.js