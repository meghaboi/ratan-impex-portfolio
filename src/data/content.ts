export const company = {
  name: 'Ratan Impex',
  legalName: 'Ratan Impex Private Limited',
  tagline: 'Global Brands. Built for India.',
  founded: 2009,
  headquarters: 'Hyderabad, Telangana',
  offices: ['Hyderabad (HQ)', 'Bhiwandi', 'Ahmedabad', 'Bengaluru'],
  description:
    'Our role goes beyond importing products. We build markets, develop brands and create long-term partnerships.',
  intro:
    'We connect international food and beverage brands with the Indian market through one integrated platform — import, supply chain, warehousing, distribution, sales, trade marketing, e-commerce and brand building.',
  positioning: 'An India-based FMCG import, distribution and brand-development company.',
}

export const countries = ['Poland', 'Malaysia', 'Dubai (UAE)', 'Oman', 'Thailand', 'Ukraine']

export const mission =
  'We aim to improve the quality of life for our people, customers, and society.'
export const vision =
  'To become a leading FMCG Import & Distribution company and the Partner of Choice for employees, brands, and customers.'
export const values =
  'A culture of active involvement, which provides our people, customers, and society the opportunity to add value to the way we work — built on integrity, transparency, and excellence.'

export const capabilities = [
  'International Import',
  'Distribution',
  'Brand Development',
  'Trade Marketing',
  'Supply Chain',
  'E-Commerce',
]

export const contact = {
  phone: '+91 80747 05165',
  phoneRaw: '918074705165',
  email: 'customercare@ratanimpex.com',
  address: '5-5-1045/1, Flat No.203, 2nd Floor, Goshamahal, Hyderabad - 500 012, Telangana State',
  hours: [
    { days: 'Monday – Saturday', time: '10am – 6pm' },
    { days: 'Sunday', time: 'Closed' },
  ],
  instagram: 'https://www.instagram.com/ratanimpexpvtltd/?hl=en',
  whatsappCatalogue: 'https://wa.me/918074705165?text=Hello,%20Can%20you%20please%20help%20me%20with%20the%20catalogue?',
  whatsappCall: 'https://wa.me/918074705165?text=Hello,%20can%20you%20please%20schedule%20a%20call?',
}

export type Product = {
  name: string
  description: string
  size?: string
  image?: string
}

export type Brand = {
  slug: string
  name: string
  logo: string | null
  tagline: string
  color: string
  colorSoft: string
  poster?: string
  country: string
  overview: string
  products: Product[]
}

export const brands: Brand[] = [
  {
    slug: 'julies',
    name: "Julie's",
    logo: '/images/brands/julies-banner.png',
    tagline: 'Tasty and Cracky Crackers',
    color: '#1E4FA0',
    colorSoft: '#FFF4CF',
    poster: '/images/gallery/julies-poster.jpg',
    country: 'Malaysia',
    overview:
      "Julie's brings light, crispy crackers and creamy sandwich biscuits loved across generations — from butter crackers to Le-mond puff sandwiches.",
    products: [
      { name: 'Butter Crackers', size: '250g × 24 packs', description: 'Light, wonderfully crispy butter crackers offering a simple, satisfying classic taste.', image: '/images/products/julies-butter-crackers.png' },
      { name: 'Le-mond Cheddar Cheese Sandwich', size: '180g / 90g / 54g × 24 packs', description: 'Rich, savory taste of cheddar cheese nestled in a light, airy puff sandwich.', image: '/images/products/julies-lemond-cheddar-puff.png' },
      { name: 'Peanut Butter Sandwich', size: '180g / 90g × 24 packs', description: 'Enjoy the rich, creamy goodness of smooth peanut butter in this satisfying sandwich biscuit.', image: '/images/products/julies-peanut-butter-sandwich.png' },
      { name: 'Le-mond Lemon Puff Sandwich', size: '170g / 85g / 51g × 24 packs', description: 'A burst of zesty lemon cream perfectly layered between delicate puff biscuits.' },
      { name: 'Le-mond Chocolate Hazelnut Sandwich', size: '180g / 54g × 24 packs', description: 'A luxurious blend of smooth chocolate and hazelnut cream within a crispy puff.' },
      { name: 'Melodies Assorted Biscuits', size: '210g × 24 packs', description: 'A variety of beloved biscuits in one shareable pack.' },
      { name: 'Sugar Crackers', size: '260g / 75g × 24 packs', description: 'A lightly sweetened cracker with a simple, satisfying crunch.' },
      { name: 'Wheat Crackers', size: '250g × 24 packs', description: 'Wholesome crackers with a delicious, malty crunch.' },
      { name: 'Golden Crackers', size: '368g / 125g × 24 packs', description: 'A simple, satisfying crunch in every golden-baked bite.' },
      { name: 'Cheese Sandwich', size: '168g / 126g / 84g × 24 packs', description: 'Savory cheese cream sandwiched between golden biscuits.' },
      { name: 'Finger Lemon Sandwich', size: '110g × 24 packs', description: 'Delicate finger-shaped biscuits with zesty lemon cream.' },
      { name: 'OATS 25 Ten Grains', size: '200g × 24 packs', description: 'Wholesome biscuits baked with ten grain types for a hearty crunch.' },
      { name: 'OAT 25 Strawberry', size: '200g / 75g × 24 packs', description: 'Oat biscuits studded with real strawberry pieces.' },
      { name: 'OAT 25 Chocolate Hazelnut', size: '200g / 75g × 24 packs', description: 'Ten-grain goodness loaded with chocolate chips and hazelnut pieces.' },
      { name: 'Rich Tea Oat', size: '200g × 24 packs', description: 'A classic rich tea flavour balanced with wholesome oats.' },
      { name: 'Choco Chips Chocolate Cookies', size: '208g × 24 packs', description: 'Generously packed with real chocolate chips in every cookie.' },
      { name: 'Banana Sandwich', size: '100g × 24 packs', description: 'Sweet, tropical banana cream between light biscuits.' },
      { name: 'Lemon Sandwich', size: '100g × 24 packs', description: 'Tangy lemon cream in crisp, classic biscuits.' },
      { name: 'Orange Sandwich', size: '100g × 24 packs', description: 'Tangy orange cream filling in a crisp sandwich biscuit.' },
      { name: 'Cheese Crackers', size: '360g × 12 tubs', description: 'Savory, cheese-flavoured crackers in a convenient tub.' },
      { name: 'Cheese Sticks', size: '360g × 12 tubs', description: 'Fun stick-shaped crackers with a bold cheese flavour.' },
      { name: 'Osborne Crackers', size: '360g × 12 tubs', description: 'A distinct, savory crunch in the classic Osborne style.' },
      { name: 'Mastura Wafer Sticks', size: '370g × 12 tubs', description: 'Crispy rolled wafer sticks with a rich chocolate filling.' },
    ],
  },
  {
    slug: 'coco-royal',
    name: 'Coco Royal',
    logo: '/images/brands/coco-royal-banner.jpg',
    tagline: 'Basil Seed & Coconut Milk Drinks — Product of Thailand',
    color: '#4C9A2A',
    colorSoft: '#E8F6DE',
    poster: '/images/gallery/coco-royal-poster.jpg',
    country: 'Thailand',
    overview:
      'Experience a world of flavor with Coco Royal — refreshing basil seed drinks and creamy coconut milk beverages with Nata de Coco, proudly brought to you as a Product of Thailand.',
    products: [
      { name: 'Coconut Milk Drink — Melon Flavour', size: '290ml × 24 bottles', description: 'A refreshing melon-sweetened coconut milk beverage with Nata de Coco.', image: '/images/products/coco-royal-melon.png' },
      { name: 'Basil Seed Drink — Mix Fruit Flavour', size: '290ml × 24 bottles', description: 'An exciting medley of fruit flavors in our signature basil seed drink.', image: '/images/products/coco-royal-mixfruit.png' },
      { name: 'Basil Seed Drink — Strawberry Flavour', size: '290ml × 24 bottles', description: 'The beloved sweet strawberry taste infused in a refreshing basil seed drink.', image: '/images/products/coco-royal-strawberry.png' },
      { name: 'Basil Seed Drink — Apple Flavour', size: '290ml × 24 bottles', description: 'Crisp apple notes perfectly combined with wholesome basil seeds.' },
      { name: 'Basil Seed Drink — Orange Flavour', size: '290ml × 24 bottles', description: 'A sunny orange citrus burst in a refreshing basil seed beverage.' },
      { name: 'Basil Seed Drink — Mango Flavour', size: '290ml × 24 bottles', description: 'Luscious mango essence captured in a delightful basil seed drink.' },
      { name: 'Basil Seed Drink — Lychee Flavour', size: '290ml × 24 bottles', description: 'Lychee sweetness in our refreshing basil seed drink.' },
      { name: 'Basil Seed Drink — Kiwi Flavour', size: '290ml × 24 bottles', description: 'Tangy kiwi zest blended into a unique basil seed beverage.' },
      { name: 'Basil Seed Drink — Red Grape Flavour', size: '290ml × 24 bottles', description: 'The juicy taste of red grape with refreshing basil seeds.' },
      { name: 'Basil Seed Drink — Pomegranate Flavour', size: '290ml × 24 bottles', description: 'Tart pomegranate tang meets the unique texture of basil seeds.' },
      { name: 'Basil Seed Drink — White Grape Flavour', size: '290ml × 24 bottles', description: 'Mildly sweet white grape flavors in a unique basil seed refreshment.' },
      { name: 'Basil Seed Drink — Watermelon Flavour', size: '290ml × 24 bottles', description: 'A summery watermelon refreshment enhanced with basil seeds.' },
      { name: 'Basil Seed Drink — Blueberry Flavour', size: '290ml × 24 bottles', description: 'Sweet blueberry goodness in this delightful basil seed drink.' },
      { name: 'Basil Seed Drink — Passion Fruit Flavour', size: '290ml × 24 bottles', description: 'Aromatic passion fruit delight in a refreshing basil seed infusion.' },
      { name: 'Basil Seed Drink — Pineapple Flavour', size: '290ml × 24 bottles', description: 'A tropical pineapple splash meets thirst-quenching basil seeds.' },
      { name: 'Coconut Milk Drink — Mango Flavour', size: '290ml × 24 bottles', description: 'Tropical mango smoothness blended into rich, creamy coconut milk.' },
      { name: 'Coconut Milk Drink — Banana Flavour', size: '290ml × 24 bottles', description: 'Delightful banana flavour meets the creaminess of pure coconut milk.' },
      { name: 'Coconut Milk Drink — Original Flavour', size: '290ml × 24 bottles', description: 'Pure, classic coconut milk taste complemented by Nata de Coco bits.' },
      { name: 'Coconut Milk Drink — Strawberry Flavour', size: '290ml × 24 bottles', description: 'Sweet strawberry bliss in creamy coconut milk with Nata de Coco.' },
      { name: 'Coconut Milk Drink — Pineapple Flavour', size: '290ml × 24 bottles', description: 'Tangy pineapple zest in creamy coconut milk with Nata de Coco.' },
      { name: 'Coconut Milk Drink — Mocha Flavour', size: '290ml × 24 bottles', description: 'A smooth mocha coffee twist blended into creamy coconut milk.' },
      { name: 'Coconut Milk Drink — Papaya Flavour', size: '290ml × 24 bottles', description: 'Exotic papaya notes in smooth coconut milk with Nata de Coco.' },
      { name: 'Coconut Milk Drink — Chocolate Flavour', size: '290ml × 24 bottles', description: 'Indulgent chocolate coconut milk paired with chewy Nata de Coco.' },
    ],
  },
  {
    slug: 'chiko',
    name: 'Chiko',
    logo: '/images/brands/chiko-banner.png',
    tagline: 'Confections made with care, perfect for sharing',
    color: '#E23B27',
    colorSoft: '#FFE8D6',
    poster: '/images/gallery/chiko-poster.jpg',
    country: 'Poland',
    overview:
      'Chiko delivers confections perfect for sharing, gifting, or simply indulging — from Polish-recipe cream fudge to eclairs with rich caramel shells.',
    products: [
      { name: 'Cream Fudge', size: '800g × 10 packs', description: 'Rich, creamy, melt-in-your-mouth fudge based on a traditional Polish recipe.', image: '/images/products/chiko-cream-fudge.png' },
      { name: 'Eclairs Milk', description: 'A milk chocolate center wrapped in a classic, creamy caramel shell.', image: '/images/products/chiko-eclairs-milk.png' },
      { name: 'Eclairs Hazelnut', description: 'A rich caramel shell with hazelnut-infused chocolate — nutty and sweet indulgence.' },
    ],
  },
  {
    slug: 'milami',
    name: 'Milami',
    logo: '/images/brands/milami-banner.png',
    tagline: 'Juicy Crush — a burst of exciting fruit flavours',
    color: '#D6331A',
    colorSoft: '#FDE6D6',
    poster: '/images/gallery/milami-poster.jpg',
    country: 'Thailand',
    overview:
      'Dive into the vibrant and refreshing world of Milami Juicy Crush — fruit-flavoured drinks enhanced with chewy Nata de Coco pieces.',
    products: [
      { name: 'Juicy Crush — Melon', size: '320ml × 24 bottles', description: 'The cool, sweet taste of melon with Nata de Coco.', image: '/images/products/milami-juicy-crush-melon.png' },
      { name: 'Juicy Crush — Grape', size: '320ml × 24 bottles', description: 'A rich and fruity burst with Nata de Coco.' },
      { name: 'Juicy Crush — Lychee', size: '320ml × 24 bottles', description: 'The sweet, exotic taste of lychee paired with Nata de Coco.' },
      { name: 'Juicy Crush — Mango', size: '320ml × 24 bottles', description: 'Luscious mango flavour with chewy Nata de Coco bits.' },
      { name: 'Juicy Crush — Strawberry', size: '320ml × 24 bottles', description: 'The classic sweetness of strawberry blended with Nata de Coco.' },
      { name: 'Juicy Crush — Orange', size: '320ml × 24 bottles', description: 'A zesty splash of orange goodness mixed with chewy Nata de Coco.' },
      { name: 'Juicy Crush — Blueberry', size: '320ml × 24 bottles', description: 'The cool, sweet taste of blueberry with Nata de Coco.' },
    ],
  },
  {
    slug: 'roshen',
    name: 'Roshen',
    logo: '/images/brands/roshen-banner.png',
    tagline: 'A treat for every taste',
    color: '#B3121B',
    colorSoft: '#FBE2E4',
    poster: '/images/gallery/roshen-poster.jpg',
    country: 'Ukraine',
    overview:
      'Roshen offers a wide and wonderful assortment of confectionery — toffees, chocolates, jellies, and rolled wafers, each crafted with care.',
    products: [
      { name: 'Konafetto Choco Rolled Wafers', size: '1kg × 5 packs', description: 'Glazed crispy rolled wafers with a dark, rich chocolate filling.', image: '/images/products/roshen-konafetto-choco.png' },
      { name: 'Konafetto Vanilla Rolled Wafers', size: '1kg × 5 packs', description: 'Glazed crispy rolled wafers with a creamy vanilla filling.' },
      { name: 'Peppinez Hard Candy', size: '900g × 6 packs', description: 'Sour-filled hard candies for a punchy, tangy treat.' },
      { name: 'Yogurtini', size: '1kg × 8 packs', description: 'Yogurt-flavoured hard candies with a tangy, creamy finish.' },
      { name: 'Lollipops', size: '920g × 9 packs', description: 'An assortment of classic, colourful lollipops.' },
      { name: 'Crazy Bee', size: '1kg × 9 packs', description: 'Fruity jelly sweets bursting with real juice.' },
      { name: 'Toffelini', size: '1kg × 6 packs', description: 'Soft, chewy toffee candies with a smooth, milky finish.' },
      { name: 'Candy Nut', size: '1kg × 8 packs', description: 'Soft caramel candy studded with peanuts.' },
      { name: 'Minky Binky', size: '1kg × 6 packs', description: 'Toffee candy with a delightful jelly filling.' },
      { name: 'Milky Splash', size: '150g × 12 pieces', description: 'Creamy toffee candies with a smooth, milky finish.' },
      { name: 'Fizzy Boom Hard Candy', size: '1kg × 7 bags', description: 'Hard candy with a playful fizzy filling.' },
      { name: 'Bim Bom Hard Candies', size: '1kg × 8 bags', description: 'Hard candies with a fruit-berry filling.' },
      { name: 'Sweet Drop Candies', size: '1kg × 7 bags', description: 'Milk-flavoured hard candies with a smooth, sweet finish.' },
      { name: 'Butter Milk Hard Candies', size: '1kg × 8 bags', description: 'Classic hard candies with a rich, buttery milk flavour.' },
      { name: 'Roshen Juice Mix Hard Candies', size: '1kg × 8 bags', description: 'An assorted mix of fruit-juice flavoured hard candies.' },
      { name: 'Johnny Krocker Wafers — Milk Filling', size: '350g × 12 packs / 1kg × 4 bags', description: 'Crispy wafer bites with a smooth milk filling.' },
      { name: 'Johnny Krocker Wafers — Chocolate Filling', size: '350g × 12 packs / 1kg × 4 bags', description: 'Crispy wafer bites with a rich chocolate filling.' },
      { name: 'Krock Sweets — Peanut Cocoa Coating', size: '0.5kg × 10 bags', description: 'Crunchy wafer sweets coated in peanut cocoa.' },
      { name: 'Coffee Like Hard Filled Candies', size: '1kg × 7 bags', description: 'Hard candies with a smooth, coffee-flavoured filling.' },
      { name: 'Dark Bubble Bar', size: '80g × 20 pieces', description: 'A light, aerated dark chocolate bar.' },
      { name: 'White Bubble Bar', size: '80g × 20 pieces', description: 'A light, aerated white chocolate bar.' },
      { name: 'Milk Bubble Bar', size: '80g × 20 pieces', description: 'A light, bubbly milk chocolate bar.' },
      { name: 'Caramel Bubble Bar', size: '80g × 20 pieces', description: 'A light, aerated chocolate bar with a caramel twist.' },
      { name: 'Special Brut Dark Chocolate 80%', size: '85g × 35 pieces', description: 'Intensely rich 80% dark chocolate for true connoisseurs.' },
      { name: 'Special Brut Dark Chocolate 56%', size: '85g × 35 pieces', description: 'A smooth, balanced 56% dark chocolate.' },
      { name: 'Chocolate with Salted Almonds', size: '85g × 35 pieces', description: 'Premium dark chocolate studded with salted almonds.' },
      { name: 'Bonny Fruit Jelly — Citrus Mix', size: '200g × 18 packs', description: 'Fruit jellies made with 25% real citrus juice.' },
      { name: 'Bonny Fruit Jelly — Berry Mix', size: '200g × 18 packs', description: 'Fruit jellies made with 25% real berry juice.' },
      { name: 'Bonny Fruit Jelly — Summer Mix', size: '200g × 18 packs', description: 'Fruit jellies made with 25% real fruit juice, summer blend.' },
      { name: 'Wafer Rolls — Milk Filling', size: '140g × 15 bags', description: 'Crispy rolled wafers with a smooth milk-flavoured filling.' },
      { name: 'Wafer Rolls — Cocoa Filling', size: '140g × 15 bags', description: 'Crispy rolled wafers with a rich cocoa-flavoured filling.' },
      { name: 'Wafer Rolls — Hazelnut Filling', size: '140g × 15 bags', description: 'Crispy rolled wafers with a smooth hazelnut filling.' },
      { name: 'Wafer Rolls — Coconut Filling', size: '140g × 15 bags', description: 'Crispy rolled wafers with a fragrant coconut filling.' },
      { name: 'Wafer Sand Crunch — Cocoa', size: '142g × 15 pieces', description: 'Crunchy sandwich wafers with a cocoa cream filling.' },
      { name: 'Wafer Sand Crunch — Hazelnut', size: '142g × 15 pieces', description: 'Crunchy sandwich wafers with a hazelnut cream filling.' },
      { name: 'Wafer Sand Crunch — Lemon', size: '142g × 15 pieces', description: 'Crunchy sandwich wafers with a zesty lemon cream filling.' },
      { name: 'Wafer Sand Crunch — Vanilla', size: '142g × 15 pieces', description: 'Crunchy sandwich wafers with a smooth vanilla cream filling.' },
      { name: 'Wafer Sand Crunch — Strawberry', size: '142g × 15 pieces', description: 'Crunchy sandwich wafers with a sweet strawberry cream filling.' },
    ],
  },
  {
    slug: 'captain-dolphin',
    name: 'Captain Dolphin',
    logo: '/images/brands/captain-dolphin-banner.png',
    tagline: 'Fun, fruity treats for all ages',
    color: '#1D5FC2',
    colorSoft: '#DCEBFF',
    poster: '/images/gallery/captain-dolphin-poster.jpg',
    country: 'Malaysia',
    overview:
      'Discover the delightful world of treats from Captain Dolphin, easily recognized by its playful dolphin logo — puddings, konjac jellies, Nata de Coco snacks and cheese-flavoured bites for all ages.',
    products: [
      { name: 'Jelly with Nata de Coco — Mixed Fruits', size: '32g × 12 cups × 24 bags', description: 'A fruity jelly mix with chewy Nata de Coco, bursting with lychee, grape and peach.' },
      { name: 'Konjac Jelly Pouch — Lychee', size: '20g × 15 pcs × 24 packs', description: 'Squeezable konjac jelly juice in a fun, mess-free pouch.' },
      { name: 'Assorted Fruit Shape Pudding', size: '85g × 3 cups × 32 sets', description: 'Playful fruit-shaped pudding cups for a fun, wobbly treat.' },
      { name: 'Nata de Coco — Original Flavour', size: '40g × 12 pcs × 24 bags', description: 'Chewy Nata de Coco pieces in a light, original-flavoured syrup.' },
      { name: 'Yogo Snapz with Nata de Coco', size: '45ml × 10 pcs × 16 packs', description: 'A yogurt-style drink snap packed with Nata de Coco pieces.' },
      { name: 'Assorted Pudding with Nata de Coco', size: '15g × 20 cups × 24 packs', description: 'Bite-sized pudding cups with chewy Nata de Coco pieces.' },
      { name: 'Assorted Pudding with Nata de Coco (Jumbo)', size: '15g × 100 cups × 6 packs', description: 'A bulk-pack of bite-sized pudding cups for retail bins.' },
      { name: 'Jelly with Nata de Coco — Mango', size: '40g × 40 cups × 6 jars', description: 'Mango-flavoured jelly cups loaded with chewy Nata de Coco.' },
      { name: 'Lychee Jelly with Nata de Coco', size: '15g × 20 cups × 24 packs', description: 'Lychee-flavoured jelly cups with chewy Nata de Coco pieces.' },
      { name: 'Assorted Jelly with Nata de Coco', size: '130g × 6 cups × 12 sets', description: 'A colourful assortment of jelly cups with Nata de Coco.' },
      { name: 'Konjac Jelly — Peach Flavour', size: '20g × 15 pcs × 24 packs', description: 'A wobbly konjac jelly bite in juicy peach flavour.' },
      { name: 'Konjac Jelly — Calamansi Flavour', size: '20g × 15 pcs × 24 packs', description: 'A tangy calamansi-flavoured konjac jelly bite.' },
      { name: 'Konjac Jelly — Cola Flavour', size: '20g × 15 pcs × 24 packs', description: 'A fun, fizzy cola-flavoured konjac jelly bite.' },
      { name: 'Konjac Jelly — Mango Flavour', size: '20g × 15 pcs × 24 packs', description: 'A tropical mango-flavoured konjac jelly bite.' },
      { name: 'Konjac Jelly — Grape Flavour', size: '20g × 15 pcs × 24 packs', description: 'A sweet grape-flavoured konjac jelly bite.' },
      { name: 'Konjac Jelly — Lychee Flavour', size: '20g × 15 pcs × 24 packs', description: 'A fragrant lychee-flavoured konjac jelly bite.' },
      { name: 'Konjac Jelly — Caramel Flavour', size: '20g × 15 pcs × 24 packs', description: 'A smooth caramel-flavoured konjac jelly bite.' },
      { name: 'Squeeze Jelly Pouch — Mango', size: '130g × 10 pcs × 4 box', description: 'A squeezable mango jelly drink in a fun pouch.' },
      { name: 'Squeeze Jelly Pouch — Peach', size: '130g × 10 pcs × 4 box', description: 'A squeezable peach jelly drink in a fun pouch.' },
      { name: 'Squeeze Jelly Pouch — Lychee', size: '130g × 10 pcs × 4 box', description: 'A squeezable lychee jelly drink in a fun pouch.' },
      { name: 'Squeeze Jelly Pouch — Grape', size: '130g × 10 pcs × 4 box', description: 'A squeezable grape jelly drink in a fun pouch.' },
      { name: 'Magic Balls — Grape Flavour', size: '600g × 24 bags', description: 'Chewy, bursting jelly balls in grape flavour.' },
      { name: 'Magic Balls — Apple Flavour', size: '600g × 24 bags', description: 'Chewy, bursting jelly balls in apple flavour.' },
      { name: 'Magic Balls — Strawberry Flavour', size: '600g × 24 bags', description: 'Chewy, bursting jelly balls in strawberry flavour.' },
      { name: 'Magic Balls — Lychee Flavour', size: '600g × 24 bags', description: 'Chewy, bursting jelly balls in lychee flavour.' },
      { name: 'Crystal Bubble — Grape Flavour', size: '600g × 24 bags', description: 'Translucent, bubble-textured jelly bites in grape flavour.' },
      { name: 'Crystal Bubble — Apple Flavour', size: '600g × 24 bags', description: 'Translucent, bubble-textured jelly bites in apple flavour.' },
      { name: 'Crystal Bubble — Lychee Flavour', size: '600g × 24 bags', description: 'Translucent, bubble-textured jelly bites in lychee flavour.' },
      { name: 'Crystal Bubble — Strawberry Flavour', size: '600g × 24 bags', description: 'Translucent, bubble-textured jelly bites in strawberry flavour.' },
      { name: 'Nata de Coco — Lychee Flavour', size: '40g × 12 pcs × 24 bags', description: 'Chewy Nata de Coco pieces in a fragrant lychee syrup.' },
      { name: 'Nata de Coco — Grape Flavour', size: '40g × 12 pcs × 24 bags', description: 'Chewy Nata de Coco pieces in a sweet grape syrup.' },
      { name: 'Nata de Coco — Apple Flavour', size: '40g × 12 pcs × 24 bags', description: 'Chewy Nata de Coco pieces in a crisp apple syrup.' },
      { name: 'Yogurt Drink — Apple Flavour', size: '32g × 10 cups × 24 bags', description: 'A tangy, yogurt-style drink cup in apple flavour.' },
      { name: 'Yogurt Drink — Original Flavour', size: '32g × 10 cups × 24 bags', description: 'A tangy, yogurt-style drink cup in classic flavour.' },
      { name: 'Yogurt Drink — Banana Flavour', size: '32g × 10 cups × 24 bags', description: 'A tangy, yogurt-style drink cup in banana flavour.' },
      { name: 'Yogurt Drink — Lychee Flavour', size: '32g × 10 cups × 24 bags', description: 'A tangy, yogurt-style drink cup in lychee flavour.' },
      { name: 'Yogurt Drink — Strawberry Flavour', size: '32g × 10 cups × 24 bags', description: 'A tangy, yogurt-style drink cup in strawberry flavour.' },
      { name: 'Yogurt Drink — Grape Flavour', size: '32g × 10 cups × 24 bags', description: 'A tangy, yogurt-style drink cup in grape flavour.' },
      { name: 'Mexican Saucy BBQ Rings', size: '70g × 24 cans', description: 'Crunchy cheese-snack rings with a smoky Mexican BBQ coating.' },
      { name: 'Super Cheesy Rings', size: '70g × 24 cans', description: 'Crunchy cheese-snack rings loaded with a bold cheesy coating.' },
      { name: 'Sizzling Hot & Spicy Rings', size: '60g × 24 cans', description: 'Crunchy cheese-snack rings with a fiery hot and spicy kick.' },
      { name: 'Cheese Corn Ball', size: '80g × 24 cans', description: 'Crunchy corn puff balls dusted in a savory cheese coating.' },
      { name: 'Fika Cheese Flavoured Snacks', size: '60g × 10 pcs × 6 bags', description: 'Light, crunchy cheese-flavoured snack bites.' },
    ],
  },
  {
    slug: 'nabil',
    name: 'Nabil',
    logo: null,
    tagline: 'Rich in Fibre Digestive Biscuits',
    color: '#2F7D32',
    colorSoft: '#E4F3E0',
    poster: '/images/gallery/nabil-poster.jpg',
    country: 'Oman',
    overview:
      'Nabil brings wholesome, fibre-rich digestive biscuits and nut-topped Nutgestive bars from Oman — a wholesome everyday snacking staple.',
    products: [
      { name: 'Digestive Biscuits', size: '300g × 24 box', description: 'Rich in fibre digestive biscuits for a wholesome, everyday snack.', image: '/images/products/nabil-digestive.jpg' },
      { name: 'Digestive Biscuits (Family Pack)', size: '250g × 24 box', description: 'Rich in fibre digestive biscuits in a convenient family-size pack.' },
      { name: 'Nutgestive — Almond + Cashew', size: '40g × 12 pcs × 12 box', description: 'Digestive biscuits topped with crunchy almond and cashew pieces.' },
      { name: 'Nutgestive — Almond + Cashew (Mini)', size: '40g × 6 pcs × 8 box', description: 'A smaller pack of digestive biscuits topped with almond and cashew.' },
    ],
  },
  {
    slug: 'koko-kraft',
    name: 'Koko Kraft',
    logo: null,
    tagline: 'International FMCG brand',
    color: '#8A5A2B',
    colorSoft: '#F6ECDD',
    country: 'Imported',
    overview:
      'Koko Kraft is part of the Ratan Impex international portfolio. Product range and details are being added.',
    products: [],
  },
  {
    slug: 'momelto',
    name: 'Momelto',
    logo: null,
    tagline: 'International FMCG brand',
    color: '#B5527A',
    colorSoft: '#F8E4EC',
    country: 'Imported',
    overview:
      'Momelto is part of the Ratan Impex international portfolio. Product range and details are being added.',
    products: [],
  },
]

// Company-supplied figures — deliberately rounded "N+" values, not counts derived from the catalogue below.
export const stats = [
  { label: 'Brands', value: 9, suffix: '+' },
  { label: 'Products', value: 240, suffix: '+' },
  { label: 'Distributors & Dealers', value: 100, suffix: '+' },
  { label: 'Retail Touchpoints', value: 539, suffix: '+' },
  { label: 'States & Territories', value: 28, suffix: '+' },
  { label: 'Years of Experience', value: 17, suffix: '+' },
]

export const faqs = [
  {
    q: 'What kind of products does Ratan Impex offer?',
    a: 'We distribute high-quality FMCG products from global brands, ensuring you get trusted and well-known items.',
  },
  {
    q: 'How does Ratan Impex make sure I get fresh and safe products?',
    a: 'We follow strict quality checks and efficient supply chain management to ensure freshness and reliability.',
  },
  {
    q: 'Where can I find Ratan Impex products?',
    a: 'We supply products to retail stores, supermarkets, and distribution networks across India, making them easily available.',
  },
  {
    q: 'How does Ratan Impex improve my shopping experience?',
    a: 'We work with retailers to optimize product placement, create promotions, and ensure availability, making shopping convenient for you.',
  },
  {
    q: 'What makes Ratan Impex different from other distributors?',
    a: 'We carefully select and distribute top brands while ensuring trust, quality, and customer satisfaction.',
  },
  {
    q: "What is Ratan Impex's vision for the future?",
    a: 'We aim to be a leading FMCG importer and distribution company, building strong partnerships with brands and customers.',
  },
]

// Every product across every brand that has a real photo — used for the hero drift wall.
export const allProductPhotos = brands.flatMap((b) =>
  b.products
    .filter((p) => p.image)
    .map((p) => ({ image: p.image as string, title: `${b.name} — ${p.name}` })),
)
