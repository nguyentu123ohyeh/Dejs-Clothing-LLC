const PRODUCTS = [
  {
    id: 1,
    category: "dress",
    name: "Women's Square Neck Ruffle Hem Mini Dress Ruched Waist Short Party Dresses",
    img: "assets/img/products/dress/1(30.99).jpg",
    imgs: [
      "assets/img/products/dress/1.jpg",
      "assets/img/products/dress/1.1.jpg",
      "assets/img/products/dress/1.2.jpg",
      "assets/img/products/dress/1.3.jpg",
    ],
    desc: "This mini dress features a stylish square neckline and playful ruffle hem. The ruched waist creates a flattering silhouette for all body types. Perfect for parties or casual outings in the summer.",
  },
  {
    id: 2,
    category: "dress",
    name: "Women's Halter Deep V Neck Flowy Chiffon Bow Tie Backless Summer Mini Dress",
    img: "assets/img/products/dress/2(34.99).jpg",
    imgs: [
      "assets/img/products/dress/2(34.99).jpg",
      "assets/img/products/dress/2.1.jpg",
      "assets/img/products/dress/2.2.jpg",
    ],
    desc: "A flowy chiffon mini dress with a halter deep V neckline, designed for summer elegance. The bow tie and backless style add a touch of charm and sophistication. Ideal for beach parties or evening events.",
  },
  {
    id: 3,
    category: "dress",
    name: "Women's Retro Plaid Smocked Dress Spaghetti Strap Flounce Long Dress",
    img: "assets/img/products/dress/3(26.89).jpg",
    imgs: [
      "assets/img/products/dress/3(26.89).jpg",
      "assets/img/products/dress/3.1.jpg",
      "assets/img/products/dress/3.2.jpg",
      "assets/img/products/dress/3.3.jpg"
    ],
    desc: "This retro-inspired plaid dress comes with smocked detailing and delicate spaghetti straps. The flounce long skirt provides graceful movement and comfort. Perfect for vintage lovers and summer days.",
  },
  {
    id: 4,
    category: "dress",
    name: "Women's Summer Dress 2025 Sleeveless Floral Boho Sundress Swimsuit Coverup Casual Loose Beach Vacation Tank Dresses",
    img: "assets/img/products/dress/4(12.36).jpg",
    imgs: [
      "assets/img/products/dress/4(12.36).jpg",
      "assets/img/products/dress/4.1.jpg",
      "assets/img/products/dress/4.2.jpg",
      "assets/img/products/dress/4.3.jpg"
    ],
    desc: "A boho-inspired floral sundress, sleeveless and casual for ultimate comfort. Loose fit makes it ideal as a swimsuit coverup or for beach vacations. Enjoy effortless style during your summer adventures.",
  },
  {
    id: 5,
    category: "dress",
    name: "Women Summer Floral Maxi Dresses Elegant Spaghetti Strap Dress Printed Party Dress Beach Long Dresses",
    img: "assets/img/products/dress/5(38.99).jpg",
    imgs: [
      "assets/img/products/dress/5(38.99).jpg",
      "assets/img/products/dress/5.1.jpg",
      "assets/img/products/dress/5.2.jpg",
      "assets/img/products/dress/5.3.jpg"
    ],
    desc: "Elegant floral maxi dress with spaghetti straps, perfect for summer parties and beach outings. The printed design adds a vibrant touch to your wardrobe. Feel confident and stylish all season long.",
  },
{
  id: 6,
  category: "jeans",
  name: "Women's Wide Leg Jeans High Waisted Strechy Raw Hem Zimbaplatinum Denim Pants",
  img: "assets/img/products/jeans/1(28.89).jpg",
  imgs: [
    "assets/img/products/jeans/1(28.89).jpg",
    "assets/img/products/jeans/1.1.jpg",
    "assets/img/products/jeans/1.2.jpg",
    "assets/img/products/jeans/1.3.jpg"
  ],
  desc: "These high waisted wide leg jeans are crafted from premium stretchy denim, providing both comfort and style. The raw hem adds a trendy, modern touch to your everyday look, while the flattering fit enhances your silhouette. Perfect for pairing with crop tops or oversized tees, these jeans are a must-have for any fashion-forward woman."
},
{
  id: 7,
  category: "jeans",
  name: "Women's 2025 Wide Leg Jeans Distress Mid Waist Denim Pants Vintage Y2K Trousers",
  img: "assets/img/products/jeans/2(22.67).jpg",
  imgs: [
    "assets/img/products/jeans/2(22.67).jpg",
    "assets/img/products/jeans/2.1.jpg",
    "assets/img/products/jeans/2.2.jpg",
    "assets/img/products/jeans/2.3.jpg"
  ],
  desc: "Step back into the Y2K era with these vintage-inspired wide leg jeans, featuring stylish distressed details and a comfortable mid waist. The soft denim fabric ensures all-day wearability, while the retro cut makes them perfect for casual outings or streetwear looks. Express your individuality and stand out from the crowd with these unique trousers."
},
{
  id: 8,
  category: "jeans",
  name: "Men's Classic Regular Fit Jean",
  img: "assets/img/products/jeans/3(13.48).jpg",
  imgs: [
    "assets/img/products/jeans/3(13.48).jpg",
    "assets/img/products/jeans/3.1.jpg",
    "assets/img/products/jeans/3.2.jpg",
    "assets/img/products/jeans/3.3.jpg"
  ],
  desc: "These classic regular fit jeans for men offer a timeless look that never goes out of style. Made from durable denim, they are designed to withstand everyday wear while maintaining comfort. Whether dressing up or down, these jeans are a versatile addition to any wardrobe, suitable for both work and leisure."
},
{
  id: 9,
  category: "jeans",
  name: "Men's Classic Relaxed Fit Jean",
  img: "assets/img/products/jeans/4(8.99).jpg",
  imgs: [
    "assets/img/products/jeans/4(8.99).jpg",
    "assets/img/products/jeans/4.1.jpg",
    "assets/img/products/jeans/4.2.jpg",
    "assets/img/products/jeans/4.3.jpg"
  ],
  desc: "Experience ultimate comfort with these relaxed fit jeans designed for men who value ease of movement. The soft, breathable denim ensures a relaxed feel all day long, making them ideal for casual wear or weekend activities. Pair them with your favorite t-shirt or hoodie for a laid-back, effortless style."
},
{
  id: 10,
  category: "jeans",
  name: "Men's 20X No. 42 Vintage Boot Cut Jean",
  img: "assets/img/products/jeans/5(38.99).jpg",
  imgs: [
    "assets/img/products/jeans/5(38.99).jpg",
    "assets/img/products/jeans/5.1.jpg",
    "assets/img/products/jeans/5.2.jpg",
    "assets/img/products/jeans/5.3.jpg"
  ],
  desc: "Channel a retro vibe with these 20X No. 42 vintage boot cut jeans for men. Featuring a classic boot cut silhouette, these jeans offer both comfort and a distinct, old-school look. The high-quality denim and detailed stitching make them a standout piece for any denim lover's collection."
},
{
  id: 11,
  category: "jeans",
  name: "Men's Regular Fit Comfort Flex Waist Jean",
  img: "assets/img/products/jeans/6(25.67).jpg",
  imgs: [
    "assets/img/products/jeans/6(25.67).jpg",
    "assets/img/products/jeans/6.1.jpg",
    "assets/img/products/jeans/6.2.jpg",
    "assets/img/products/jeans/6.3.jpg"
  ],
  desc: "Discover the perfect blend of style and comfort with these men's regular fit jeans, featuring a comfort flex waist for easy movement. The soft, stretchable denim adapts to your body, making them ideal for all-day wear. Dress them up with a shirt or keep it casual with a tee—these jeans are ready for any occasion."
},
{
  id: 12,
  category: "jacket",
  name: "Men's Packable Rain Jacket Lightweight Hooded Windbreaker Water Resistant Hiking Travel Reflective Jackets",
  img: "assets/img/products/jacket/1(38.89).jpg",
  imgs: [
    "assets/img/products/jacket/1(38.89).jpg",
    "assets/img/products/jacket/1.1.jpg",
    "assets/img/products/jacket/1.2.jpg",
    "assets/img/products/jacket/1.3.jpg"
  ],
  desc: "Stay dry and comfortable in unpredictable weather with this men's packable rain jacket. Featuring a lightweight, water-resistant design and a convenient hood, it's perfect for hiking, travel, or daily commutes. Reflective details enhance visibility, while the compact construction makes it easy to carry anywhere."
},
{
  id: 13,
  category: "jacket",
  name: "Womens Oversized Leather Jackets Faux Suede Fall Fashion Motorcycle Coats Winter Outfits Clothes Y2k Tops",
  img: "assets/img/products/jacket/2(45.99).jpg",
  imgs: [
    "assets/img/products/jacket/2(45.99).jpg",
    "assets/img/products/jacket/2.1.jpg",
    "assets/img/products/jacket/2.2.jpg",
    "assets/img/products/jacket/2.3.jpg"
  ],
  desc: "Elevate your fall and winter wardrobe with this women's oversized faux suede leather jacket. The trendy motorcycle-inspired design pairs effortlessly with any outfit, adding a bold and fashionable edge. Soft, comfortable, and versatile, it’s perfect for layering over tees, sweaters, or dresses."
},
{
  id: 14,
  category: "jacket",
  name: "Men's Bomber Jacket Fashion Stylish Lightweight Windbreaker Spring Fall Casual Jackets for Men",
  img: "assets/img/products/jacket/3(31.47).jpg",
  imgs: [
    "assets/img/products/jacket/3(31.47).jpg",
    "assets/img/products/jacket/3.1.jpg",
    "assets/img/products/jacket/3.2.jpg",
    "assets/img/products/jacket/3.3.jpg"
  ],
  desc: "Add a modern touch to your look with this stylish men's bomber jacket. Crafted from lightweight materials, it offers comfort and breathability for spring and fall. The classic silhouette and versatile design make it suitable for both casual outings and semi-formal occasions."
},
{
  id: 15,
  category: "jacket",
  name: "Women's Oversized Denim Jacket Casual Long Sleeve Denim Shirts Distresse Jean Jacket Fall Outfits 2025",
  img: "assets/img/products/jacket/4(28.12).jpg",
  imgs: [
    "assets/img/products/jacket/4(28.12).jpg",
    "assets/img/products/jacket/4.1.jpg",
    "assets/img/products/jacket/4.2.jpg",
    "assets/img/products/jacket/4.3.jpg"
  ],
  desc: "Refresh your casual style with this women's oversized denim jacket, featuring long sleeves and a trendy distressed finish. Perfect for layering over any outfit, it brings a relaxed, effortless vibe to your fall wardrobe. Durable and timeless, this jacket is a must-have for every season."
},
{
  id: 16,
  category: "jacket",
  name: "Men's Packable Lightweight Water-Resistant Puffer Jacket (Available in Big & Tall)",
  img: "assets/img/products/jacket/5(25.48).jpg",
  imgs: [
    "assets/img/products/jacket/5(25.48).jpg",
    "assets/img/products/jacket/5.1.jpg",
    "assets/img/products/jacket/5.2.jpg",
    "assets/img/products/jacket/5.3.jpg"
  ],
  desc: "Brave the cold in comfort with this men's packable lightweight puffer jacket, designed to keep you warm without the bulk. The water-resistant material ensures protection from light rain and snow, while the packable design makes it easy to store and carry. Available in Big & Tall sizes for the perfect fit."
},
{
  id: 17,
  category: "shirt",
  name: "Womens Oversized Summer T Shirts Fashion Workout Plus Size Tops Short Sleeve Beach Vacation Gym Clothes 2025",
  img: "assets/img/products/shirt/1.jpg",
  imgs: [
    "assets/img/products/shirt/1.jpg",
    "assets/img/products/shirt/1.1.jpg",
    "assets/img/products/shirt/1.2.jpg",
    "assets/img/products/shirt/1.3.jpg"
  ],
  desc: "Stay cool and stylish this summer with these women's oversized T-shirts, perfect for workouts, beach vacations, or casual lounging. Made from soft, breathable fabric, they offer a comfortable fit for plus size and all body shapes. Versatile and trendy, these tops are a must-have for your 2025 wardrobe."
},
{
  id: 18,
  category: "shirt",
  name: "Men's Beefy-t T-Shirt, Heavyweight Cotton Tee, 1 Or 2 Pack, Big & Tall",
  img: "assets/img/products/shirt/2.jpg",
  imgs: [
    "assets/img/products/shirt/2.jpg",
    "assets/img/products/shirt/2.1.jpg",
    "assets/img/products/shirt/2.2.jpg"
  ],
  desc: "Experience superior comfort with the Men's Beefy-t T-Shirt, crafted from heavyweight cotton for lasting durability. Available in single or double packs and Big & Tall sizes, this tee is ideal for everyday wear. Its classic fit and soft feel make it a staple piece in any man's wardrobe."
},
{
  id: 19,
  category: "shirt",
  name: "Womens Cap Sleeve Summer Tops T Shirts Business Casual Dressy Spring Fashion Outfits Cute Trendy Clothes 2025",
  img: "assets/img/products/shirt/3.jpg",
  imgs: [
    "assets/img/products/shirt/3.jpg",
    "assets/img/products/shirt/3.1.jpg",
    "assets/img/products/shirt/3.2.jpg",
    "assets/img/products/shirt/3.3.jpg"
  ],
  desc: "Add a touch of elegance to your spring and summer outfits with these women's cap sleeve tops. Perfect for business casual or dressy occasions, these T-shirts blend comfort with a chic, trendy design. Lightweight and versatile, they are ideal for both work and weekend looks in 2025."
},
{
  id: 20,
  category: "shirt",
  name: "Womens Oversized T Shirts Loose Fit Crewneck Short Sleeve Tops Summer Casual Blouse Y2K 2025 Basic Tee Beach",
  img: "assets/img/products/shirt/4.jpg",
  imgs: [
    "assets/img/products/shirt/4.jpg",
    "assets/img/products/shirt/4.1.jpg",
    "assets/img/products/shirt/4.2.jpg",
    "assets/img/products/shirt/4.3.jpg"
  ],
  desc: "Embrace relaxed summer style with these women's oversized T-shirts featuring a loose fit and classic crewneck. Soft and breathable, they're perfect for beach days, casual outings, or Y2K-inspired looks. Effortlessly versatile, these basic tees are a go-to choice for 2025."
},
{
  id: 21,
  category: "shirt",
  name: "T-Shirts Short Sleeve V Neck Tees Tops for Women Fashion Trendy Lightweight Soft Casual Summer Outfits Clothes 2025",
  img: "assets/img/products/shirt/5.jpg",
  imgs: [
    "assets/img/products/shirt/5.jpg",
    "assets/img/products/shirt/5.1.jpg",
    "assets/img/products/shirt/5.2.jpg",
    "assets/img/products/shirt/5.3.jpg"
  ],
  desc: "Upgrade your summer wardrobe with these fashionable short sleeve V-neck tees for women. Made from lightweight, soft materials, they provide all-day comfort and a flattering fit. Perfect for casual outings or trendy summer outfits, these tops are a must-have for 2025."
},
{
  id: 22,
  category: "shirt",
  name: "Womens Oversized Tshirt Graphic Tees Crew Neck Summer Short Sleeve Loose Fit Tops",
  img: "assets/img/products/shirt/6.jpg",
  imgs: [
    "assets/img/products/shirt/6.jpg",
    "assets/img/products/shirt/6.1.jpg",
    "assets/img/products/shirt/6.2.jpg",
    "assets/img/products/shirt/6.3.jpg"
  ],
  desc: "Express your personality with these women's oversized graphic tees, featuring a comfortable crew neck and loose fit. The bold prints make these shirts stand out, perfect for summer days or casual hangouts. Soft and breathable, they're ideal for effortless everyday style."
},
{
  id: 23,
  category: "shirt",
  name: "Womens Short Sleeve Tops Summer T Shirts Round Neck Causal Fashion Basic Tee",
  img: "assets/img/products/shirt/7.jpg",
  imgs: [
    "assets/img/products/shirt/7.jpg",
    "assets/img/products/shirt/7.1.jpg",
    "assets/img/products/shirt/7.2.jpg",
    "assets/img/products/shirt/7.3.jpg"
  ],
  desc: "Enjoy easy-going style with these women's short sleeve summer T-shirts featuring a classic round neck. The simple yet fashionable design makes them perfect for everyday wear, whether at home or out with friends. Lightweight and comfortable, these basic tees are a seasonal essential."
},
{
  id: 24,
  category: "shirt",
  name: "Womens Basic T Shirts Summer Tops 2025 Crop Short Sleeve Slim Fit Tee Cute Gym Workout Clothes",
  img: "assets/img/products/shirt/8.jpg",
  imgs: [
    "assets/img/products/shirt/8.jpg",
    "assets/img/products/shirt/8.1.jpg",
    "assets/img/products/shirt/8.2.jpg",
    "assets/img/products/shirt/8.3.jpg"
  ],
  desc: "Stay active and stylish with these women's basic crop T-shirts, designed with a slim fit and short sleeves. Ideal for gym workouts or casual summer days, they offer a cute and trendy look for 2025. The soft, stretchable fabric ensures comfort during any activity."
},
{
  id: 25,
  category: "shirt",
  name: "Womens Off The Shoulder Tops Oversized T-Shirts Short Sleeve Tees Summer 2025 Casual Spring Fashion Clothes",
  img: "assets/img/products/shirt/9.jpg",
  imgs: [
    "assets/img/products/shirt/9.jpg",
    "assets/img/products/shirt/9.1.jpg",
    "assets/img/products/shirt/9.2.jpg",
    "assets/img/products/shirt/9.3.jpg"
  ],
  desc: "Make a statement with these women's off-the-shoulder oversized T-shirts, perfect for casual spring and summer outfits. The relaxed fit and short sleeves offer maximum comfort and effortless style. Versatile and fashionable, these tops are ideal for creating trendy looks in 2025."
},
{
  id: 26,
  category: "hoodie",
  name: "Womens Hoodies Oversized Sweatshirts Pullover Fleece Sweaters Long Sleeve Winter Fall Outfits Fashion Y2k Clothes",
  img: "assets/img/products/hoodie/1.jpg",
  imgs: [
    "assets/img/products/hoodie/1.jpg",
    "assets/img/products/hoodie/1.1.jpg",
    "assets/img/products/hoodie/1.2.jpg",
    "assets/img/products/hoodie/1.3.jpg"
  ],
  desc: "Stay warm and stylish in this women's oversized hoodie, designed with soft fleece for ultimate comfort during fall and winter. The pullover style and long sleeves make it perfect for layering over any outfit. Embrace trendy Y2K fashion with a cozy sweater that's both fashionable and functional."
},
{
  id: 27,
  category: "hoodie",
  name: "Mens Full Zip Hooded Fleece Drawstring Hoodies Pullover Sweatshirts Casual Long Sleeve Shirts",
  img: "assets/img/products/hoodie/2.jpg",
  imgs: [
    "assets/img/products/hoodie/2.jpg",
    "assets/img/products/hoodie/2.1.jpg",
    "assets/img/products/hoodie/2.2.jpg",
    "assets/img/products/hoodie/2.3.jpg"
  ],
  desc: "Upgrade your casual wardrobe with this men's full zip hooded fleece hoodie, featuring a drawstring hood and long sleeves. The soft material provides warmth and comfort for everyday wear, whether at home or outdoors. Versatile and easy to style, it's a must-have for any season."
},
{
  id: 28,
  category: "hoodie",
  name: "Men’s NuBlend Fleece Hoodies & Sweatshirts, Cotton Blend, Sizes S-3X",
  img: "assets/img/products/hoodie/3.jpg",
  imgs: [
    "assets/img/products/hoodie/3.jpg",
    "assets/img/products/hoodie/3.1.jpg",
    "assets/img/products/hoodie/3.2.jpg"
  ],
  desc: "Experience comfort and durability with men's NuBlend fleece hoodies and sweatshirts, made from a soft cotton blend. Available in sizes S-3X, these hoodies are perfect for any body type and offer a relaxed fit for everyday activities. Stylish and practical, they're ideal for layering in cooler weather."
},
{
  id: 29,
  category: "hoodie",
  name: "Men's Pullover Sweatshirt Hoodie, Big & Tall",
  img: "assets/img/products/hoodie/4.jpg",
  imgs: [
    "assets/img/products/hoodie/4.jpg",
    "assets/img/products/hoodie/4.1.jpg",
    "assets/img/products/hoodie/4.2.jpg",
    "assets/img/products/hoodie/4.3.jpg"
  ],
  desc: "Stay comfortable and cozy with this men's pullover sweatshirt hoodie, designed for Big & Tall sizes. The relaxed fit and soft fabric make it perfect for lounging or casual outings. Easy to pair with jeans or joggers, this hoodie is an essential addition to your wardrobe."
},
{
  id: 30,
  category: "hoodie",
  name: "Womens Oversized Hoodies Comfy Sweatshirts Fall Fashion 2025 Outfits Casual Tops Fleece Clothes with Pockets",
  img: "assets/img/products/hoodie/5.jpg",
  imgs: [
    "assets/img/products/hoodie/5.jpg",
    "assets/img/products/hoodie/5.1.jpg",
    "assets/img/products/hoodie/5.2.jpg",
    "assets/img/products/hoodie/5.3.jpg"
  ],
  desc: "Wrap yourself in comfort with this women's oversized hoodie, featuring soft fleece and convenient pockets. Perfect for fall fashion in 2025, these sweatshirts offer a relaxed fit for casual outings or cozy nights in. Stylish and practical, they're a must-have for every wardrobe."
},
{
  id: 31,
  category: "hoodie",
  name: "Women's Hoodies Sweatshirts Cute Long Sleeve Tops Loose Fleece Pullover Shirts with Pocket",
  img: "assets/img/products/hoodie/6.jpg",
  imgs: [
    "assets/img/products/hoodie/6.jpg",
    "assets/img/products/hoodie/6.1.jpg",
    "assets/img/products/hoodie/6.2.jpg",
    "assets/img/products/hoodie/6.3.jpg"
  ],
  desc: "Add a touch of charm to your look with these women's cute hoodies and sweatshirts, featuring long sleeves and a loose fit. The soft fleece material and handy pocket make them perfect for everyday comfort. Ideal for layering, these pullover shirts combine style and functionality effortlessly."
}
];
