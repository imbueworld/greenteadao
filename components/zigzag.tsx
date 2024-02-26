"use client";

import Image from "next/image";
import React, { useState } from "react";

import FeatImage01 from '@/public/images/tranquilGarden.png'
import FeatImage02 from '@/public/images/teaTime.png'
import FeatImage03 from '@/public/images/zen.png'
import FeatImage04 from '@/public/images/Tea.png'
import FeatImage05 from '@/public/images/japanMap.png'
import FeatImage06 from '@/public/images/samurai.png'
import FeatImage07 from '@/public/images/samuraiTea.png'
import FeatImage08 from '@/public/images/samuraiTeaDrinking.png'
import MainImage from "../public/images/matcha-view.png";
import teaTwo from "../public/images/gtdApple.webp";
import teaFour from "../public/images/four.webp";
import teaSix from "../public/images/six.webp";
import teaEight from "../public/images/eight.webp";
import teaNine from "../public/images/nine.webp";
import teaTen from "../public/images/ten.webp";
import teaEleven from "../public/images/eleven.webp";
import teaTwelve from "../public/images/twelve.webp";
import teaThirteen from "../public/images/thirteen.webp";
import teaFourteen from "../public/images/fourteen.webp";
import teaFifteen from "../public/images/fifteen.webp";
import teaSixteen from "../public/images/sixteen.webp";
import teaSeventeen from "../public/images/seventeen.webp";
import teaEighteen from "../public/images/eighteen.webp";
import teaNineteen from "../public/images/nineteen.webp";
import teaTwenty from "../public/images/twenty.webp";
import teaTwentyone from "../public/images/twentyone.webp";
import teaTwentytwo from "../public/images/twentytwo.webp";
import teaTwentythree from "../public/images/twentythree.webp";
import tea24 from "../public/images/24.webp";
import tea25 from "../public/images/25.webp";
import tea26 from "../public/images/26.webp";
import tea27 from "../public/images/27.webp";
import tea28 from "../public/images/28.webp";
import tea29 from "../public/images/29.webp";
import tea30 from "../public/images/30.webp";
import tea31 from "../public/images/31.webp";
import tea32 from "../public/images/32.webp";
import tea33 from "../public/images/33.webp";
import tea34 from "../public/images/34.webp";
import tea35 from "../public/images/35.webp";
import tea36 from "../public/images/36.webp";
import tea38 from "../public/images/38.webp";
import tea39 from "../public/images/39.webp";
import tea40 from "../public/images/40.webp";
import tea41 from "../public/images/41.webp";
import tea42 from "../public/images/42.webp";
import tea43 from "../public/images/43.webp";
import tea44 from "../public/images/44.webp";
import tea45 from "../public/images/45.webp";
import tea46 from "../public/images/46.webp";
import tea47 from "../public/images/47.webp";
import matchaKit from "../public/images/matchakit.webp";
import teatime from "../public/images/meeting.jpg";
import jp from "../public/images/japanpalace.jpg";

import boxImgae from "../public/images/boximage.svg";

import { TeaItem, TeaItemProps } from "@/components/tea";
import "../app/css/tea.css";

const teas: TeaItemProps[] = [
  {
    number: "",
    prefecture: "Tokyo",
    description: "Matcha",
    outOfStock: false,
    imageUrl: matchaKit,
    extendedDescription:
      'In order to help you enjoy matcha at home, we have included an 80-piece chasen and a white bamboo tea scoop, along with Chakatas original matcha "蘖". This set is also recommended for those who are making matcha for the first time. MATCHA TEA CEREMONY HIKOBAE - This is Chakatas original matcha made with the nutritious and umami variety "Okumidori."',
  },
  {
    number: "01",
    prefecture: "Hokkaido",
    description: "More info soon",
    outOfStock: true,
    imageUrl: teaFour,
    extendedDescription: "",
  },
  {
    number: "02",
    prefecture: "Aomori",
    description: "Apple tea blend",
    outOfStock: false,
    imageUrl: teaTwo,
    extendedDescription:
      "A blend of roasted green tea and chips made from Fuji apples grown in Aomori prefecture that are slowly dried at low temperatures. A gorgeous apple aroma rises, and when you put it in your mouth, the sweetness of the apple blends perfectly with the aroma of the roasted tea.",
  },
  {
    number: "03",
    prefecture: "Iwate",
    description: "More info soon",
    outOfStock: true,
    imageUrl: teaTen,
    extendedDescription: "",
  },
  {
    number: "04",
    prefecture: "Miyagi",
    description: "Black Tea Yabukita",
    outOfStock: false,
    imageUrl: teaFour,
    extendedDescription:
      "A black tea made from thick tea leaves grown in the northernmost tea fields in the Momo district of Ishinomaki City.Beautiful reddish amber color. A refreshing scent reminiscent of a forest and a faint scent reminiscent of honey tickle your nostrils. When you put it in your mouth, the nose is filled with sweet aromas reminiscent of fruit candy, licorice, and vanilla, and the taste is rounded out by soft bitterness and astringency. I want to enjoy it slowly while taking a breather.",
  },
  {
    number: "05",
    prefecture: "Akita",
    description: "More info soon",
    outOfStock: true,
    imageUrl: teaFour,
    extendedDescription: "",
  },
  {
    number: "06",
    prefecture: "Yamagata",
    description: "Pear Tea Blend",
    outOfStock: false,
    imageUrl: teaSix,
    extendedDescription:
      'Steamed Tamaryoku tea is blended with chips made from "La France" pears from Yamagata Prefecture that are slowly dried at low temperatures. The gradation of scent is beautiful, starting with a faint yellow pear scent and then moving to a green scent. The aroma of pear and the taste of steamed Tamaryoku tea, which has just the right amount of umami, give it a new look.',
  },
  {
    number: "07",
    prefecture: "Fukishima",
    description: "More info soon",
    outOfStock: true,
    imageUrl: teaFour,
    extendedDescription: "",
  },
  {
    number: "08",
    prefecture: "Ibaraki",
    description: "Deep Steamed Sencha Fukumidori",
    outOfStock: false,
    imageUrl: teaEight,
    extendedDescription:
      'Deep-steamed sencha with a powerful flavor grown in Sashima, the northernmost tea-producing area in terms of economic production. The variety "Fukumidori" is cold-resistant and has a gorgeous aroma and astringent taste. A plump, sweet scent reminiscent of straw and green grass. When you put it in your mouth, it has a rich sweetness like corn and brown sugar, and ends with a bitterness like oolong tea. The scent that hits your nose is delicate and refreshing, with a mysterious aftertaste reminiscent of sandalwood. You can also enjoy the gap between taste and aroma.',
  },
  {
    number: "09",
    prefecture: "Tochigi",
    description: "Black Tea blend",
    outOfStock: false,
    imageUrl: teaNine,
    extendedDescription:
      'At Unganji Temple, one of Japans four major Zen dojos, we blend black tea made to strict quality standards with chips from Tochigis famous strawberry "Tochiotome" made using a special method. An elegant black tea scent with a bright strawberry scent. The sweetness of the strawberries wraps around the tannins of the black tea, and the slight addition of mint balances out the overall flavor.',
  },
  {
    number: "10",
    prefecture: "Gunma",
    description: "Umeda Tea Blend",
    outOfStock: false,
    imageUrl: teaTen,
    extendedDescription:
      'The Umeda area in the mountainous area of ​​Kiryu City has long been a high-quality tea producing region due to its extreme temperature differences. A blend of "Umeda tea", which still exists today, and mulberry leaves made into sencha. The aroma of high-quality, astringent sencha tea is wrapped in the gentle sweetness of mulberry leaves, creating a well-balanced green scent. The aroma suggests a strong taste, but it is not harsh, it is soft, and the silky texture is pleasant.',
  },
  {
    number: "11",
    prefecture: "Miyagi",
    description: "Deep Steamed Sencha Yume Wakaba",
    outOfStock: false,
    imageUrl: teaEleven,
    extendedDescription:
      'Deep-steamed green tea from the rare variety "Yume Wakaba" that was born in Sayama, one of the traditional tea producing areas.A refreshing and sweet scent reminiscent of young grass and violets. When you put it in your mouth, it has a thick sweetness similar to that of tortoiseshell candy, and finishes off with a deep astringency. As it cools, a mellow, sweet aroma reminiscent of chestnuts and corn emerges, and you can enjoy the change in flavor.',
  },
  {
    number: "12",
    prefecture: "Chiba",
    description: "Deep Steamed Sencha Yachimata Kaori",
    outOfStock: false,
    imageUrl: teaTwelve,
    extendedDescription:
      'Tea from Yachimata, which was famous as a major tea producing area during the Meiji period. Even now, there are more than a dozen producers working diligently to preserve the "tea town" of its past. Sencha is made by steaming native tea leaves grown as seedlings in this area until it has just the right amount of sweetness. Bright green color with a faint hint of chestnut. A well-balanced tea with just the right amount of bitterness, you can drink it for a long time without getting tired of drinking it.',
  },
  {
    number: "13",
    prefecture: "Tokyo",
    description: "Wilted sencha Yume Kaori",
    outOfStock: false,
    imageUrl: teaThirteen,
    extendedDescription:
      'The Nishitama area of ​​Tokyo is adjacent to western Saitama Prefecture and is included in the Sayama tea production area. Among them, the tea produced in Tokyo is called "Tokyo Sayama Tea." Light withering brings out the gorgeous lily flowers, young leaves, and a sweet, blue fragrance reminiscent of kidney beans, highlighting the uniqueness of the Yume Kaori variety. Although it has a rich and complex taste, it goes down the throat mellow and has a pleasant balance of umami, sweetness, and bitterness. Not only can you enjoy it with Japanese sweets, but you can also feel satisfied just by tasting the tea.',
  },
  {
    number: "14",
    prefecture: "Kanagawa",
    description: "Kabusecha Wilted Yabukita",
    outOfStock: false,
    imageUrl: teaFourteen,
    extendedDescription:
      "Tea leaves are cultivated in the foothills of the Tanzawa Mountains and cultivated in solid soil. It is coated to add umami flavor, and when it wilts, it acquires a gorgeous aroma. The dense, dark green color is vivid to the eyes. A fresh blue scent reminiscent of young grass and mochi mochi emerges. When you put it in your mouth, it has a sweetness with a slight saltiness similar to bamboo shoots or sakuramochi, and a cigar-like aroma hits your nose. You can enjoy the beautiful harmony that is delicate yet aromatic, reminiscent of Japanese sweets.",
  },
  {
    number: "15",
    prefecture: "Niigata",
    description: "Wilted sencha native",
    outOfStock: false,
    imageUrl: teaFifteen,
    extendedDescription:
      "Sencha is made by wilting the powerful native tea leaves that grow wild in Murakami, the northernmost tea-producing region and famous as a snowy country. It has a warm golden yellow color and a bluish tomato-like scent and a nostalgic sweet scent reminiscent of straw that tickles your nostrils. When you take a sip, aromas reminiscent of vanilla and maple come to your nose. It has a chewy flavor and sweetness similar to mooncakes or sesame paste, but has a sharp bitterness that leaves an impression. The lingering scent lasts, so you can enjoy the aftertaste.",
  },
  {
    number: "16",
    prefecture: "Toyama",
    description: "Batabata Tea ",
    outOfStock: false,
    imageUrl: teaSixteen,
    extendedDescription:
      'This is a type of black tea that has been passed down in the Hirudan area of ​​Asahi Town for a long time, and is fermented using koji mold. It is called "Batabata tea" because it is whisked with a husband and wife chasen while making a sound.The fragrance of burnt wood, the bitter and sweet scent reminiscent of cacao, and the nostalgic scent of being in an old folk house rise up. When you put it in your mouth, it has a slight sourness and a transparent sweetness like mizuyokan. A pleasant astringency reminiscent of nuts and tortoiseshell candy finishes the finish. A soothing and gentle taste.',
  },
  {
    number: "17",
    prefecture: "Ishikawa",
    description: "Uchikoshi Bocha Blend",
    outOfStock: false,
    imageUrl: teaSeventeen,
    extendedDescription:
      "A blend of roasted tea made with stem tea from Kaga Uchikoshi and rosemary stems that have been heated to resemble Kaga stick tea. Fragrant roasted tea with a distinctive rosemary flavor. Although it has a unique taste when you put it in your mouth, it becomes more coherent as you drink it. It iss so comfortable that you will become addicted to it.",
  },
  {
    number: "18",
    prefecture: "Fukui",
    description: "Bancha with beans",
    outOfStock: false,
    imageUrl: teaEighteen,
    extendedDescription:
      "Bancha with beans is a popular everyday tea in the Echizen region, combining roasted soybeans with sweetness and aromatic roasted green tea.A fragrant aroma with smoky aromas like roasted nuts and brown sugar tickles your nostrils. When you put it in your mouth, it has a sweet and aromatic taste similar to a cookie or sponge cake. The sweetness of the roasted soybeans, which is full of minerals, gives the flavor a three-dimensional feel. It has a mild astringent taste and is pleasant to drink, and is also recommended for cold brew. I would like to enjoy it with something salty.",
  },
  {
    number: "19",
    prefecture: "Yamanashi",
    description: "Regular steamed tea Yabukita",
    outOfStock: false,
    imageUrl: teaNineteen,
    extendedDescription:
      'A transparent green tea grown without pesticides in the mountainous area of ​​Nanbu Town overlooking the Southern Alps. The isolated, foggy, south-facing single tea plantation is named "Ohinata." The aroma is reminiscent of young leaves, seaweed, and boiled bamboo shoots. When you put it in your mouth, it has a gentle flavor reminiscent of brown rice or Tsukimi dango, and a sweetness similar to honey. A light astringency that brings harmony to the taste. When paired with moist Western sweets like cake, you can also enjoy the sweet scent of flowers.',
  },
  {
    number: "20",
    prefecture: "Nagano",
    description: "Super Lightly Steamed Sencha Yabukita",
    outOfStock: false,
    imageUrl: teaTwenty,
    extendedDescription:
      'A rare sencha made by hand-harvesting tea leaves grown in a tea plantation in a deep valley called "Nakai Samurai no Shichimagari" and finishing them with ultra-shallow steaming.Along with the fresh aroma of young leaves, a rich aroma reminiscent of vegetables and grains emerges. When you put it in your mouth, you can enjoy the gap in flavor between the rich sweetness of candied black beans and chestnuts, and the wild, wild astringency. The overall taste is dry. The subtle aroma enhances the aftertaste.',
  },
  {
    number: "21",
    prefecture: "Gifu",
    description: "regular steamed tea Yabukita",
    outOfStock: false,
    imageUrl: teaTwentyone,
    extendedDescription:
      'Among the tea plantations in Higashi Shirakawa Village, which has a long history, Sencha is produced in a single field spread out in concentric circles on a slope at an altitude of 500 meters, commonly known as the "Guru Guru Tea Garden." It has a distinctly refreshing, green aroma reminiscent of legumes such as green soybeans. When you put it in your mouth, the moist, sweet aroma of steamed sweet potatoes fills your nose, and the sweetness that you feel when you bite into a rice cake gently spreads out. It has an addictive taste that is both orthodox and new, making you want to drink it over and over again.',
  },
  {
    number: "22",
    prefecture: "Shizuoka",
    description: "Deep Steamed Sencha Tsuyuhikari",
    outOfStock: false,
    imageUrl: teaTwentytwo,
    extendedDescription:
      "Makinohara is known as the birthplace of the deep steaming method. Tsuyuhikari, a variety with high potential, is unique among the many deep-steamed green tea varieties. Along with the scent of green seaweed and silk pods, the elegant sweet scent of white flowers tickles your nostrils. When you put it in your mouth, it has a sweetness and richness that almost feels thick, and a sweet, warm aroma reminiscent of freshly boiled edamame fills your nose. Contrary to what you might expect from the deep green color, the astringency is mild. A refreshing aftertaste that makes you feel herbal.",
  },
  {
    number: "23",
    prefecture: "Aichi",
    description: "Cold tea",
    outOfStock: false,
    imageUrl: teaTwentythree,
    extendedDescription:
      "Bancha has been passed down in the Asuke region since ancient times and is made during the coldest season. The tea leaves are grown using only the power of nature, without any pesticides or fertilizers, and are steamed over an open fire and dried in the sun. There is a scent of sunlight that makes you feel like you are walking in an autumn forest, and a refreshing scent that reminds you of shiso. When you put it in your mouth, it has a warm flavor reminiscent of potatoes and chestnuts, with a hint of sugar-like sweetness, and the natural scent of green plants passes through your nose. The gentle bitterness and astringency disappear without leaving a lingering aftertaste. A fleeting yet deep flavor.",
  },
  {
    number: "24",
    prefecture: "Mie",
    description: "Regular steamed tea native",
    outOfStock: false,
    imageUrl: tea24,
    extendedDescription:
      "Sencha is a sencha made from indigenous tea leaves that has been rooted in the Kutsukake area at the foot of Suzuka Pass on the border of Mie and Shiga prefectures for over 100 years. Along with the gorgeous scent of violets, a spicy scent reminiscent of cinnamon and cumin tickles your nostrils. When you put it in your mouth, a simple, gentle aroma reminiscent of seaweed and freshly cooked white rice fills your nose, followed by a combination of firm sweetness reminiscent of Japanese sweets and a pleasant bitterness. One of the pleasures is the aroma and taste that change depending on the temperature of the hot water.",
  },
  {
    number: "25",
    prefecture: "Shiga",
    description: "Regular steamed tea Yabukita",
    outOfStock: false,
    imageUrl: tea25,
    extendedDescription:
      "Sencha made in Asamiya has a long history, dating back to the Heian period when tea seeds were brought to Japan. The rich, sweet scent of chestnuts and brown rice tickles your nostrils. When you put it in your mouth, you can feel the deep sweetness of dried potatoes. The bitterness of the wild vegetables and hops enhances the elegant sweetness and umami, so you will not get tired of drinking it. The overall taste is well-balanced and has depth, making you realize once again the deliciousness that can only be found in green tea.",
  },
  {
    number: "26",
    prefecture: "Kyoto",
    description: "Roasted bancha",
    outOfStock: false,
    imageUrl: tea26,
    extendedDescription:
      'It is also known as "Kyobancha", which has a unique smoky aroma.',
  },
  {
    number: "27",
    prefecture: "Osaka",
    description: "Osaka Blend",
    outOfStock: false,
    imageUrl: tea27,
    extendedDescription:
      "Herbal tea with a taste reminiscent of Osaka, blended mainly with Osaka lemon balm, spearmint, and mallow blue. A spicy scent with an impact reminiscent of Japanese pepper and pepper. In the mouth, a refreshing citrus acidity and a Worcestershire sauce-like sweetness pass through the nose. It has an appetizing aroma of various herbs, a refreshing bitterness, and a flavor reminiscent of green seaweed. I want to enjoy it with Osaka food.",
  },
  {
    number: "28",
    prefecture: "Hyogo",
    description: "Sun-dried raw Bancha",
    outOfStock: false,
    imageUrl: tea28,
    extendedDescription:
      "A traditional bancha made from tea leaves grown in the natural tea fields deep in the mountains of Tamba, exposed to the bright sunlight, and dried in the sun. Aromas of bamboo leaves and blue citrus fruits. When you put it in your mouth, the sweetness of grapes passes through your nose, along with the subtle umami of sea minerals, and the acidity and astringency of fermentation. The taste does not change much even when it gets cold, so you can enjoy it on a daily basis regardless of the season.",
  },
  {
    number: "29",
    prefecture: "Nara",
    description: "wilted sencha Saemidori",
    outOfStock: false,
    imageUrl: tea29,
    extendedDescription:
      "A wilted sencha from the Tsukigase district, located on the border between Nara and Kyoto. By withering the tea leaves grown through natural recycling methods, the unique aroma of the tea tree is brought out. The sweet and gorgeous scent is reminiscent of yellow flowers, with a hint of milky nuance. When you put it in your mouth, the sweet and mellow aroma of dried fruits hits your nose, followed by a sweetness reminiscent of chestnuts and cauliflower. The bitterness is mild, but the taste is refreshing and sharp.",
  },
  {
    number: "30",
    prefecture: "Wakayama",
    description: "Kamairi Bancha",
    outOfStock: false,
    imageUrl: tea30,
    extendedDescription:
      "Kama-iri bancha has been passed down in the mountainous area of ​​Hongu in Oku-Kumano since ancient times. Unlike regular bancha, it is made from soft new leaves that just sprout in early summer, and becomes a semi-fermented tea while being rolled and dried. It has a sour plum-like aroma and a faint smokiness. When you put it in your mouth, you can feel the astringency and calm sweetness of green plums, and the aroma that hits your nose is refreshing. A rich aroma and a taste that you will not get tired of drinking. You can enjoy it with traditional tea porridge or as a pairing with meals.",
  },
  {
    number: "31",
    prefecture: "Tottori",
    description: "Deep steamed covered tea",
    outOfStock: false,
    imageUrl: tea31,
    extendedDescription:
      'The variety "Sayamaka Kaori," which has an impressive strong flavor and was cultivated in red clay soil overlooking Mt. Daisen, a famous peak in the Chugoku region, was combined with "Yabukita" and "Tsuyuhikari." The tea is covered for about three weeks during cultivation, resulting in a tea that brings out its sweetness and flavor. Beneath the refreshing scent of a fresh green forest, a faint scent of roasted seaweed tickles your nostrils. When you put it in your mouth, it has a soft sweetness reminiscent of chestnuts, and a gentle flavor reminiscent of elegant kelp soup stock. The moderate astringency balances the overall taste, allowing you to enjoy a long-lasting',
  },
  {
    number: "32",
    prefecture: "Shimane",
    description: "Botebote tea",
    outOfStock: false,
    imageUrl: tea32,
    extendedDescription:
      "Botebote tea is also part of the food culture of the Izumo region. Whip the mixture with a whisk with salt on the tip and eat it like ochazuke. It is characterized by the inclusion of tea flowers in the bancha to make it foam better.  It has a sweet scent like white flower nectar and a faint hint of smoke. When you put it in your mouth, the sweet and aromatic aroma of barley and corn enters your nose, followed by a slight sweetness with a sour taste reminiscent of fermentation. It is eaten with white rice and pickles, but it can also be enjoyed with cheese.",
  },
  {
    number: "33",
    prefecture: "Okayama",
    description: "Mimasaka Bancha",
    outOfStock: false,
    imageUrl: tea33,
    extendedDescription:
      "The Mimasaka bancha manufacturing method, in which tea leaves are boiled in a large pot along with the branches and dried in the sun, has been passed down since the Muromachi period. The tea leaves are unique in that they are sprinkled with tea broth during the drying process, giving the tea leaves a shiny amber color. A sweet and heavy scent like cacao, an earthy scent like stepping on fallen leaves, and a nostalgic scent reminiscent of being in an old folk house. When you put it in your mouth, a slightly sweet aroma hits your nose, and you can feel the sweetness of boiled sugar. A slight astringency remains, but it fades away with the lingering finish.",
  },
  {
    number: "34",
    prefecture: "Hiroshima",
    description: "Cold bancha",
    outOfStock: false,
    imageUrl: tea34,
    extendedDescription:
      "Bancha is produced in tea fields carved out of the mountains of Shigemachi Town in the mountainous region of Hiroshima Prefecture, by cutting off branches that have grown over the winter in early spring in preparation for the new tea season. The aroma is reminiscent of firewood, and the bitter sweetness of chocolate tickles your nostrils. When you put it in your mouth, the sweet, bluish scent of bamboo dumplings enters your nose, and the soft sweetness unique to the branches gently spreads out. The smooth, aromatic taste makes it perfect as a sake chaser.",
  },
  {
    number: "35",
    prefecture: "Yamaguchi",
    description: "Kamairicha Yabukita",
    outOfStock: false,
    imageUrl: tea35,
    extendedDescription:
      'The Ono district of Ube City is the only place in the Chugoku region where Kamairicha is produced. Tea leaves grown in poor soil with strong red soil have a strong sweetness and rich flavor. Along with the fragrant aroma called "Kamako," which is unique to Kamairicha, a pure sweet scent reminiscent of white flowers tickles the nostrils. When you put it in your mouth, the sweet and aromatic aroma of cacao and caramel enters your nose, and you can feel the deep sweetness of dried fruit. The bitter and astringent taste is mild, and the faint umami of bonito flakes is impressive.',
  },
  {
    number: "36",
    prefecture: "Tokushima",
    description: "Awa Bancha",
    outOfStock: false,
    imageUrl: tea36,
    extendedDescription:
      "This post-fermented tea is produced only in the towns of Kamikatsu and Aioi, deep in the Shikoku Mountains, using lactic acid fermentation. It has also been designated as a national important intangible ethnic cultural property. It has a sweet and sour aroma reminiscent of fresh apples and tomatoes, with a slight soy sauce-like aroma. When you put it in your mouth, the refreshing sourness of raspberry leaves your nose along with the sweetness reminiscent of vegetables. You can enjoy the scent of oak barrels and keep drinking it smoothly.",
  },
  {
    number: "37",
    prefecture: "Kagawa",
    description: "More info soon",
    outOfStock: true,
    imageUrl: teaFour,
    extendedDescription: "",
  },
  {
    number: "38",
    prefecture: "Ehime",
    description: "Ishizuchi Black Tea",
    outOfStock: false,
    imageUrl: tea38,
    extendedDescription:
      "Post-fermented tea is produced at the foot of Mt. Ishizuchi, the highest mountain in western Japan, using the traditional method passed down by Kukai. It is produced through fermentation with filamentous fungi and then lactic acid fermentation. The sharp sourness of cassis is followed by the sweet sourness of apple cider vinegar. When you put it in your mouth, the spicy scent of cinnamon and the sweet and sour scent of tomato and grapefruit come to your nose. The mellow sourness and flavor of yogurt gently finishes the dish.",
  },
  {
    number: "39",
    prefecture: "Kochi",
    description: "Goishicha",
    outOfStock: false,
    imageUrl: tea39,
    extendedDescription:
      "A post-fermented tea that has been passed down for a long time in a region deep in the mountains near the Yoshino River. It is said that the name comes from the fact that the tea leaves are pickled in large barrels, cut into squares while remaining layered, and dried in the sun, resembling Go stones. Along with the impactful fermented aromas of miso and Daitokuji natto, there are scents of violets and anise. When you put it in your mouth, a sharp sourness reminiscent of citrus fruits coats your tongue, but deep within that, you can also feel the sweetness of flower nectar. Smells of cacao and cigars permeate the nose, and the deep aftertaste is reminiscent of red wine.",
  },
  {
    number: "40",
    prefecture: "Fukuoka",
    description: "Traditional Hon Gyokuro",
    outOfStock: false,
    imageUrl: tea40,
    extendedDescription:
      'Yame is famous for producing the highest quality Gyokuro tea. "Yame Traditional Hon Gyokuro" is the only Japanese tea to receive GI certification, and strict standards are set for thorough quality control and technical training. The droplets that drip from the silky, needle-like, glossy tea leaves are a transparent light yellow-green color. The sweet and mellow aromas of green seaweed and puffed sweet potatoes make you expect the finest flavor before you even take a bite. The thick flavor is overflowing with minerality, reminiscent of kelp soup stock or salted koji. The aroma lingers long after passing through the throat, allowing you to enjoy the rich flavor with both your tongue and nose.',
  },
  {
    number: "41",
    prefecture: "Saga",
    description: "Kamairicha Sayama Midori",
    outOfStock: false,
    imageUrl: tea41,
    extendedDescription:
      'Ureshino is said to be the first place where kamairicha was introduced to Japan. A rare tea made only from the rare variety "Sayama Midori" in this area. The smoky, rich pot aroma is reminiscent of whiskey or roasted brown rice. When you put it in your mouth, it has a sweet taste reminiscent of corn and amanatto, and a refreshing, green scent reminiscent of grass mochi and mint fills your nose. Although the tea color is light, it is more satisfying to drink than it looks.',
  },
  {
    number: "42",
    prefecture: "Nagasaki",
    description: "Steamed Tamaryoku tea with straw",
    outOfStock: false,
    imageUrl: tea42,
    extendedDescription:
      'In the tea fields of Higashisonogi, which is located in a mountainous region overlooking the ocean in the distance, the newly sprouting tea leaves are covered with straw for a certain period of time before being picked. The traditional "warakake" method, in which the young leaves glistening in the morning dew are gently protected and nurtured by the straw, produces a rich aroma and rich flavor. It has a green aroma reminiscent of young grass and spinach, accompanied by a faint aroma reminiscent of dashi stock. When you put it in your mouth, a lush sweetness reminiscent of edamame passes through your nose, followed by a umami flavor similar to kelp stock. The strong astringency tightens the overall taste, resulting in a well-defined flavor.',
  },
  {
    number: "43",
    prefecture: "Kumamoto",
    description: "Steamed Tamaryoku Tea Sae Akari",
    outOfStock: false,
    imageUrl: tea43,
    extendedDescription:
      'Kumamoto, a tea-producing region with a long history, cultivates its soil in the traditional way. The variety "Sae Akari" has a distinctive aroma and flavor, and the soil with active natural circulation allows the tea trees inherent power to be demonstrated, making it unique. It has a green, sweet scent like freshly boiled edamame, accompanied by a milky, relaxing scent. When you put it in your mouth, the aroma reminiscent of zunda mochi fills your nose, and the rich flavor of vegetable stock spreads out. High-quality bitterness brings together the complex flavors and leaves a pleasant aftertaste.',
  },
  {
    number: "44",
    prefecture: "Oita",
    description: "Deep steamed green tea",
    outOfStock: false,
    imageUrl: tea44,
    extendedDescription:
      "In the scenic Yabakei Valley, located in the mountains of Oita and often shrouded in morning mist, healthy soil is cultivated by making the most of the rich natural benefits. The teas of Yabukita, Saemidori, and Okumidori, which are exquisitely combined according to the type of crop, have a rich aroma of young leaves, and are dense and sticky, yet have a very smooth texture. The aftertaste is long and pleasant.",
  },
  {
    number: "45",
    prefecture: "Miyazaki",
    description: "Kamairicha Sakimidori",
    outOfStock: false,
    imageUrl: tea45,
    extendedDescription:
      'Gokase has been the main producer of kamairicha since ancient times. Tea is produced in tea plantations located in the mountains at high altitudes, without using pesticides or fertilizers, to pursue the natural aroma of tea. Only the new shoots of the "Sakimidori" variety, which was born in Miyazaki, are hand-harvested to achieve both a rich aroma and natural flavor. The scent of fresh cucumber and young grass spreads. The mouthfeel is soft, with a refreshing sweetness that resembles fruit juice, and the scent of white flowers, reminiscent of gardenia, wafts through the nose. The bitterness is modest and the taste is sharp and astringent. A gorgeous fragrance lingers in the aftertaste.',
  },
  {
    number: "46",
    prefecture: "Kagoshima",
    description: "Deep Steamed Sencha Yutaka Midori",
    outOfStock: false,
    imageUrl: tea46,
    extendedDescription:
      'Yutaka Midori, the representative variety of Kagoshima, a major tea producing region that competes with Shizuoka for the best in Japan, has supported the development and evolution of Kagoshimas tea industry. "Yutaka Midori", which is grown outdoors, has a distinctly blue aroma and a strong bitter taste, which is rare in Kagoshima, where covered cultivation is the norm. Behind the lush green scent reminiscent of grass and spinach, there is a faint sweet scent like caramel. When you put it in your mouth, you can enjoy the warm sweetness of bamboo shoots, the umami of boiled beans, and the bittersweet aftertaste of cacao and bitter chocolate.',
  },
  {
    number: "47",
    prefecture: "Okinawa",
    description: "Black tea",
    outOfStock: false,
    imageUrl: tea47,
    extendedDescription:
      'A completely pesticide-free tea plantation located in the northern part of Okinawas main island called "Yanbaru." Kunigami Marge, a red clay from Yanbaru, is weakly acidic and suitable for making black tea, resulting in a rich aroma and mellow flavor. The manufacturing method, which is made in coexistence with nature, brings out a variety of flavors each year. The 2022 wine has scents of plum, raspberry, and sweet vinegar. When you take a sip, the slightly sweet and sour fruit-like sweetness and refreshing citrus scent will hit your nose, giving you the feeling of having been raised in a tropical country. The sharp astringency that lingers in the aftertaste is impressive.',
  },
];

export default function Zigzag() {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="mb-8">
              <Image
                src={MainImage}
                alt="Descriptive Alt Text"
                className="mx-auto"
              />
            </div>
            <h1 className="h2 mb-4">We think green tea is awesome.</h1>
            <p className="text-xl text-gray-400">
              You might want to scroll down if you think so too
            </p>
            <div className="w-full flex justify-center mt-6">
              <a
                href="https://mint.greenteadao.eth.limo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn text-gray-600 bg-gray-100 hover:bg-white shadow">
                  Get Tea!
                </button>
              </a>
            </div>
            <div className="animate-bounce flex items-center justify-center w-full mt-10">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <h1 className="text-center h2 mb-4">The story!</h1>

          {/* Items with adjusted padding-top to start below the frame of the first opening */}
          <div className="grid gap-20 pt-16">
            {" "}
            {/* Adjust this pt-16 value as needed */}
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage05}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  <h3 className="h3 mb-3">🌱 Leaf the Ordinary Behind</h3>
                  <p className="text-xl text-gray-300 mb-4">
                    {" "}
                    In the land of rising sun, green tea isn't just a beverage,
                    it's a lifestyle.
                  </p>{" "}
                  <br></br> <p className="text-xl text-gray-300 mb-4"></p>
                  <ul className="text-lg text-gray-400 -mb-2"></ul>
                </div>
              </div>
            </div>
            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage04}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  <h3 className="h3 mb-3"></h3>
                  <p className="text-xl text-gray-300 mb-4">
                    Forget the status quo; here's to the mavericks of matcha,
                    the samurais of sencha! Your cup, your rules.
                  </p>
                </div>
              </div>
            </div>
            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage06}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  {/* <h3 className="h3 mb-3">Keep projects on schedule</h3> */}
                  <p className="text-xl text-gray-300 mb-4">
                    Welcome to Green Tea DAO, where we revere the leaf as a
                    samurai respects their blade.
                  </p>{" "}
                  <br></br>{" "}
                  <p className="text-xl text-gray-300 mb-4">
                    Because here, every leaf tells a story—steeped in history,
                    not pesticides.
                  </p>
                </div>
              </div>
            </div>
            {/* 4th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage01}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  {/* <h3 className="h3 mb-3">Keep projects on schedule</h3> */}
                  <p className="text-xl text-gray-300 mb-4">
                    Your tea corner isn't just a tea corner... It's a silent
                    dojo where every sip is a kata, perfecting the art of
                    relaxation.
                  </p>
                </div>
              </div>
            </div>
            {/* 5th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage02}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  {/* <h3 className="h3 mb-3">Keep projects on schedule</h3> */}
                  <p className="text-xl text-gray-300 mb-4">
                    And at Green Tea DAO, we don't have influencers; we have
                    leaf-luencers. They don't push products; they push petals.
                    Green tea petals, steeped in hot water, not in hot gossip.
                  </p>
                </div>
              </div>
            </div>
            {/* 6th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage03}
                  width={540}
                  height={405}
                  alt="Features 02"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  {/* <h3 className="h3 mb-3">Keep projects on schedule</h3> */}
                  <p className="text-xl text-gray-300 mb-4">
                    Oh, and Our aesthetics? Sharper than a samurai sword and
                    more calming than a haiku in a breeze.
                  </p>
                </div>
              </div>
            </div>
            {/* 7th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <Image
                  className="max-w-full mx-auto md:max-w-none h-auto"
                  src={FeatImage08}
                  width={540}
                  height={405}
                  alt="Features 03"
                />
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  {/* <h3 className="h3 mb-3">Keep projects on schedule</h3> */}
                  <p className="text-xl text-gray-300 mb-4">
                    So, grab your favorite mug, pinky up, and join us. It’s not
                    just a cup of tea, it’s a movement steeped in tradition and
                    a hint of rebellion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Items with adjusted padding-top to start below the frame of the first opening */}
          <div className="grid gap-20 pt-16">
            {" "}
            {/* Adjust this pt-16 value as needed */}
          </div>
          <hr
            style={{
              borderTop: "1px solid #999",
              padding: "30px",
              paddingTop: "25px",
            }}
          />
          <div className="max-w-3xl mx-auto text-center mb-20">
            <Image
              src={boxImgae}
              alt="Japan Map"
              className="mx-auto"
              width={500}
              height={300}
            />
          </div>
          <h2 className="text-center text-2xl font-bold my-4">
            Meet the Tea from the Prefectures of Japan
          </h2>
          <p className="text-center text-xl text-gray-400">
            A variety of local teas from every prefecture - enough tea to last
            you 5 months.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <button
              onClick={handleToggle}
              style={{
                textAlign: "center",
                border: "1px solid",
                padding: "15px",
                borderRadius: "5px",
                marginBottom: "10px",
                opacity: 0.67,
              }}
            >
              {isOpen ? "Hide teas" : "Show all teas"}
              {isOpen ? "▲" : "▼"}
            </button>
          </div>

          {isOpen && (
            <div className="tea">
              {teas.map((tea, index) => (
                <TeaItem key={index} {...tea} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
