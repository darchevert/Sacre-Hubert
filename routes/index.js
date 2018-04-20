var express = require('express');
var router = express.Router();


var punchlines = [
  {id: 1, punchline: "OSS117! Pour vous servir!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/oss117pourvousservir.mp3" },
  {id: 2, punchline: "Fais moi l'amour... Pas envie!", name: "Princesse Al Tarouk", photo: "/images/aure_atika.jpg", sound: "audio/faismoilamourpasenvie.mp3" },
  {id: 3, punchline: "Viens crotale! Quelques heures!", name: "Princesse Al Tarouk", photo: "/images/aure_atika.jpg", sound: "audio/vienscrotalequelquesheures.mp3"},
  {id: 4, punchline: "Comment est votre blanquette?", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/commentblanquettebonne.mp3"},
  {id: 5, punchline: "Hareng pomme à l'huile", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/harengramequin.mp3"},
  {id: 6, punchline: "C'est cocasse!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/cocasse.mp3"},
  {id: 7, punchline: "J'aime les panoramas", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/jaimelespanoramas.mp3"},
  {id: 8, punchline: "Des millions?!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/desmillions.mp3"},
  {id: 9, punchline: "Qui êtes-vous?!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/quietesvous.mp3"},
  {id: 10, punchline: "C'est Monsieur René Coty", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/renecoty.mp3"},
  {id: 11, punchline: "J'aime me beurrer la biscotte", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/beurrerbiscotte.mp3" },
  {id: 12, punchline: "Bienvenue au Caire...", name: "Gerhard Moeller", photo: "/images/richard_sammel.jpg", sound: "audio/bienvenueaucaire.mp3"},
  {id: 13, punchline: "J'ai réservé au nom de Bramard!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/Bramard.mp3"},
  {id: 14, punchline: "J'aime le bruit blanc de l'eau", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/bruitblanc.mp3"},
  {id: 15, punchline: "Ca me sert à rien...", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/Camesertarien.mp3"},
  {id: 16, punchline: "C'est drôle...", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/cestdrole.mp3"},
  {id: 17, punchline: "C'est toi arrêtez!!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/cesttoiarretez.mp3"},
  {id: 18, punchline: "C'est une astuce!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/cestuneastuce.mp3"},
  {id: 19, punchline: "Combien as-tu d'enfants Slimane?", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/combienenfants2.mp3"},
  {id: 20, punchline: "Comment est quoi?!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/commentestquoi.mp3"},
  {id: 21, punchline: "On ne devrait jamais faire confiance à une femme", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/confiancefemme.mp3"},
  {id: 22, punchline: "Je vous mettrai un petit coup de poliche", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/coupdepoliche.mp3"},
  {id: 23, punchline: "Mais il va la fermer sa gueule?!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/fermersagueule.mp3"},
  {id: 24, punchline: "Et non pas le gratin de pommes de terres...", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/gratin.mp3"},
  {id: 25, punchline: "L'imam...", name: "Larmina El Akmar Betouche", photo: "/images/berenice_bejo.jpg", sound: "audio/imam.mp3"},
  {id: 26, punchline: "Inch'Allah!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/inchallah.mp3"},
  {id: 27, punchline: "Jack! Jack...", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/jack.mp3"},
  {id: 28, punchline: "J'aime quand on m'enduit d'huile", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/jaimehuile.mp3"},
  {id: 29, punchline: "J'aime me battre", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/jaimemebattre.mp3"},
  {id: 30, punchline: "Jouer au malin", name: "Raymond Pelletier", photo: "/images/francois_damiens.jpg", sound: "audio/joueraumalin.mp3"},
  {id: 31, punchline: "Tu n'es pas seulement un lâche...", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/lachetraitre.mp3"},
  {id: 32, punchline: "Moi qui pensais vous laisser faire l'amour avec moi", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/laisserfairelamour.mp3"},
  {id: 33, punchline: "Et si j'étais naine, et myope?", name: "Larmina El Akmar Betouch", photo: "/images/berenice_bejo.jpg", sound: "audio/nainemyope.mp3"},
  {id: 34, punchline: "On va boir un verre ou...", name: "Raymond Pelletier", photo: "/images/francois_damiens.jpg", sound: "audio/onvaboireunverre.mp3"},
  {id: 35, punchline: "On va dire que c'est moi!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/onvadirequecestmoi.mp3"},
  {id: 36, punchline: "C'est la piquette Jack!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/piquettejack.mp3"},
  {id: 37, punchline: "On dirait une poissonnière de Ménilmontant!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/poissonniere.mp3"},
  {id: 38, punchline: "Moi je suis dans le poulet!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/pouletbordel.mp3"},
  {id: 39, punchline: "Tu me prends pour un crétin?!", name: "Raymond Pelletier", photo: "/images/francois_damiens.jpg", sound: "audio/prendspouruncretin.mp3"},
  {id: 40, punchline: "Ta pudeur t'honore Slimane", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/pudeurhonore.mp3"},
  {id: 41, punchline: "S'agirait de grandir...", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/sagiraitdegrandir.mp3"},
  {id: 42, punchline: "Mettre mon smocking en alpaga!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/smockingenalpaga.mp3"},
  {id: 43, punchline: "Le Soviet éponge!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/sovieteponge.mp3"},
  {id: 44, punchline: "T'es mauvais!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/tesmauvais.mp3"},
  {id: 45, punchline: "C'était donc ça tout ce tintouin!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/tintouin.mp3"},
  {id: 46, punchline: "Très français", name: "Larmina El Akmar Betouch", photo: "/images/berenice_bejo.jpg", sound: "audio/tresfrancaismerci.mp3"},
  {id: 47, punchline: "Triste Sir!", name: "Raymond Pelletier", photo: "/images/francois_damiens.jpg", sound: "audio/tristesir.mp3"},
  {id: 48, punchline: "Une Suze!", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/unesuze.mp3"},
  {id: 49, punchline: "Vous voulez mourir Bramard?!", name: "Raymond Pelletier", photo: "/images/francois_damiens.jpg", sound: "audio/voulezmourirbramar.mp3"},
  {id: 50, punchline: "Elle est bonne...", name: "Lucien Bramard / OSS117", photo: "/images/jean_dujardin.jpg", sound: "audio/elleestbonne.mp3"}]

var punchlinesFav = [];

router.get('/', function(req, res, next) {
  console.log(punchlines);
  res.render('index', { punchlines });
});

router.get('/fav', function(req, res, next) {
  res.render('fav', {  punchlines, punchlinesFav });
});

router.post('/add-fav', function(req, res, next) {
  punchlinesFav.push(req.body);
  res.render('index', { punchlines, punchlinesFav });
});

router.get('/delete-fav', function(req, res, next) {
  punchlinesFav.splice(req.query.position, 1);
  res.render('fav', { punchlines, punchlinesFav });
})

module.exports = router;
