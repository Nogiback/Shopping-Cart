import { v4 as uuidv4 } from 'uuid';
import fiddle1 from '../assets/plants/FiddleLeafFigTree.jpg';
import fiddle2 from '../assets/plants/FiddleLeafFigTree2.jpg';
import monstera1 from '../assets/plants/MonsteraDeliciosa6b.jpg';
import monstera2 from '../assets/plants/MonsteraDeliciosa2.jpg';
import laurentii1 from '../assets/plants/SansevieriaLaurentii.jpg';
import laurentii2 from '../assets/plants/SansevieriaLaurentii2.jpg';
import money1 from '../assets/plants/MoneyTree.jpg';
import money2 from '../assets/plants/MoneyTree2.jpg';
import parlor1 from '../assets/plants/ParlorPalm.jpg';
import parlor2 from '../assets/plants/ParlorPalm2.jpg';
import shamrock1 from '../assets/plants/OxalisTriangularisPurple.jpg';
import shamrock2 from '../assets/plants/OxalisTriangularisPurple2.jpg';

const plants = [
  {
    id: uuidv4(),
    name: 'Fiddle Leaf Fig Tree',
    price: 100,
    img1: fiddle1,
    img2: fiddle2,
    info: 'Fiddle Leaf Fig Tree, aka Ficus Lyrata Tree, is a species of an evergreen tropical tree native to the tropical lowlands of western Africa (Sierra Leone to Cameroon). The tree form has no leaves at the bottom but a lot of branches on the top. Belonging to the fig family, Moraceae, it is known as the Fiddle Leaf Fig because its leaves are similar to the size and shape of fiddles. This stunning, statement plant will bring a lush feeling to any home.',
  },
  {
    id: uuidv4(),
    name: 'Monstera Deliciosa',
    price: 25,
    img1: monstera1,
    img2: monstera2,
    info: 'Monstera Deliciosa, aka the Swiss Cheese Plant, is famous for its quirky, natural leaf holes. A vibrant green beauty, it grows wild and wide and can give any interior space instant jungle vibes. Even if you weren’t into plants before, this monster can turn anyone into a plant-obsessed person, look at those leaves.',
  },
  {
    id: uuidv4(),
    name: 'Sansevieria Laurentii',
    price: 25,
    img1: laurentii1,
    img2: laurentii2,
    info: `Sansevieria trifasciata 'Laurentii' is a cultivar of Snake Plant, aka Mother-in-Law's Tongue, having tall green leaves with variegated yellow edges. Known as some of the toughest houseplants, they store carbon dioxide acquired at night to use during the day, then releasing oxygen at night, via photosynthesis, when their pores open. This helps it to maximize efficiency in cleansing the air, as found in a study conducted by NASA.`,
  },
  {
    id: uuidv4(),
    name: 'Money Tree',
    price: 40,
    img1: money1,
    img2: money2,
    info: 'Money Trees, aka Pachira Aquatica, are considered a symbol of luck and prosperity. The braided money tree as we know it was actually first cultivated by a truck driver in Taiwan, and quickly became popular in Japan and East Asia, also becoming associated with the Chinese practice of Feng Shui. Their shiny green foliage gives that perfect tropical feeling.',
  },
  {
    id: uuidv4(),
    name: 'Parlor Palm',
    price: 30,
    img1: parlor1,
    img2: parlor2,
    info: 'Chamaedorea elegans, aka Neanthe Bella Palm or Parlor Palm, is a great option for being a hardy palm that can adjust to almost any home. Cultivated since the Victorian era, this species of palm is prized for its resilience to indoor conditions and reliable habits. It is also one of the few palms that can handle low light.',
  },
  {
    id: uuidv4(),
    name: 'Oxalis Shamrock',
    price: 15,
    img1: shamrock1,
    img2: shamrock2,
    info: `Oxalis Triangularis, aka False Shamrock, gets its name from its trifoliate leaf shape. The Oxalis traiangularis 'Green/Francis' is the one most commonly cultivated as a houseplant, followed by the tetraphylla 'Iron Cross' and 'purple'. They open and close their leaves from day to night as a part of their circadian rhythm.`,
  },
];

export default plants;
