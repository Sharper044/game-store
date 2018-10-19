-- This file is never ran. It is simply for documentation. These commands have already been ran in the database. --

CREATE TABLE gs_products (
  id SERIAL PRIMARY KEY,
  name TEXT,
  description TEXT,
  photo_url TEXT,
  price MONEY,
  rating DECIMAL
);

CREATE TABLE gs_customers (
  id SERIAL PRIMARY KEY,
  user_id TEXT,
  email TEXT
);

CREATE TABLE gs_orders (
  id SERIAL PRIMARY KEY,
  cart_id INTEGER,
  order_time TIMESTAMP WITH TIME ZONE,
  customer_id INTEGER
);

CREATE TABLE gs_carts (
  id SERIAL PRIMARY KEY,
  customer_id INTEGER,
  active BOOLEAN
);

CREATE TABLE gs_cart_items (
  id SERIAL PRIMARY KEY,
  cart_id INTEGER,
  product_id INTEGER,
  quantity INTEGER
);

-- The following data comes from the top 10 games currently listed (10/16/2018) at board game geek (https://boardgamegeek.com/browse/boardgame) --
INSERT INTO gs_products ( name, photo_url, price, rating, description )
VALUES ('Gloomhaven', 'https://cf.geekdo-images.com/imagepage/img/-nnzXSm6wDQvH5lckCzUtaaprGE=/fit-in/900x600/filters:no_upscale()/pic2437871.jpg', 139.99, 8.9, 'Gloomhaven is a game of Euro-inspired tactical combat in a persistent world of shifting motives. Players will take on the role of a wandering adventurer with their own special set of skills and their own reasons for traveling to this dark corner of the world. Players must work together out of necessity to clear out menacing dungeons and forgotten ruins. In the process, they will enhance their abilities with experience and loot, discover new locations to explore and plunder, and expand an ever-branching story fueled by the decisions they make. This is a game with a persistent and changing world that is ideally played over many game sessions. After a scenario, players will make decisions on what to do, which will determine how the story continues, kind of like a “Choose Your Own Adventure” book. Playing through a scenario is a cooperative affair where players will fight against automated monsters using an innovative card system to determine the order of play and what a player does on their turn. Each turn, a player chooses two cards to play out of their hand. The number on the top card determines their initiative for the round. Each card also has a top and bottom power, and when it is a player’s turn in the initiative order, they determine whether to use the top power of one card and the bottom power of the other, or vice-versa. Players must be careful, though, because over time they will permanently lose cards from their hands. If they take too long to clear a dungeon, they may end up exhausted and be forced to retreat.'),
('Pandemic Legacy: Season 1', 'https://cf.geekdo-images.com/imagepage/img/vuhGm0iS67iW8Z1019HsPmijRUU=/fit-in/900x600/filters:no_upscale()/pic2452831.png', 8.7, 49.99, 'Pandemic Legacy is a co-operative campaign game, with an overarching story-arc played through 12-24 sessions, depending on how well your group does at the game. At the beginning, the game starts very similar to basic Pandemic, in which your team of disease-fighting specialists races against the clock to travel around the world, treating disease hotspots while researching cures for each of four plagues before they get out of hand. During a players turn, they have four actions available, with which they may travel around in the world in various ways (sometimes needing to discard a card), build structures like research stations, treat diseases (removing one cube from the board; if all cubes of a color have been removed, the disease has been eradicated), trade cards with other players, or find a cure for a disease (requiring five cards of the same color to be discarded while at a research station). Each player has a unique role with special abilities to help them at these actions. After a player has taken their actions, they draw two cards. These cards can include epidemic cards, which will place new disease cubes on the board, and can lead to an outbreak, spreading disease cubes even further. Outbreaks additionally increase the panic level of a city, making that city more expensive to travel to. Each month in the game, you have two chances to achieve that months objectives. If you succeed, you win and immediately move on to the next month. If you fail, you have a second chance, with more funding for beneficial event cards. During the campaign, new rules and components will be introduced. These will sometimes require you to permanently alter the components of the game; this includes writing on cards, ripping up cards, and placing permanent stickers on components. Your characters can gain new skills, or detrimental effects. A character can even be lost entirely, at which point its no longer available for play. Part of the Pandemic series'),
('Through the Ages: A New Story of Civilization', 'https://cf.geekdo-images.com/imagepage/img/lewVt7gXhfpps_hIHU5mrP75ypY=/fit-in/900x600/filters:no_upscale()/pic2663291.jpg', 8.6, 45.07, 'Through the Ages: A New Story of Civilization is the new edition of Through the Ages: A Story of Civilization, with many changes small and large to the games cards over its three ages and extensive changes to how military works. Through the Ages is a civilization building game. Each player attempts to build the best civilization through careful resource management, discovering new technologies, electing the right leaders, building wonders and maintaining a strong military. Weakness in any area can be exploited by your opponents. The game takes place throughout the ages beginning in the age of antiquity and ending in the modern age. One of the primary mechanisms in TTA is card drafting. Technologies, wonders, and leaders come into play and become easier to draft the longer they are in play. In order to use a technology you will need enough science to discover it, enough food to create a population to man it and enough resources (ore) to build the building to use it. While balancing the resources needed to advance your technology you also need to build a military. Military is built in the same way as civilian buildings. Players that have a weak military will be preyed upon by other players. There is no map in the game so you cannot lose territory, but players with higher military will steal resources, science, kill leaders, take population or culture. It is very difficult to win with a large military, but it is very easy to lose because of a weak one. Victory is achieved by the player whose nation has the most culture at the end of the modern age.'),
('Terraforming Mars', 'https://cf.geekdo-images.com/imagepage/img/KDvX1OWjYVlNfy8otZcb17xjvlc=/fit-in/900x600/filters:no_upscale()/pic3548924.jpg' 8.4, 47.62, 'In the 2400s, mankind begins to terraform the planet Mars. Giant corporations, sponsored by the World Government on Earth, initiate huge projects to raise the temperature, the oxygen level, and the ocean coverage until the environment is habitable. In Terraforming Mars, you play one of those corporations and work together in the terraforming process, but compete for getting victory points that are awarded not only for your contribution to the terraforming, but also for advancing human infrastructure throughout the solar system, and doing other commendable things. The players acquire unique project cards (from over two hundred different ones) by buying them to their hand. The projects (cards) can represent anything from introducing plant life or animals, hurling asteroids at the surface, building cities, to mining the moons of Jupiter and establishing greenhouse gas industries to heat up the atmosphere. The cards can give you immediate bonuses, as well as increasing your production of different resources. Many cards also have requirements and they become playable when the temperature, oxygen, or ocean coverage increases enough. Buying cards is costly, so there is a balance between buying cards (3 megacredits per card) and actually playing them (which can cost anything between 0 to 41 megacredits, depending on the project). Standard Projects are always available to complement your cards. Your basic income, as well as your basic score, is based on your Terraform Rating (starting at 20), which increases every time you raise one of the three global parameters. However, your income is complemented with your production, and you also get VPs from many other sources. Each player keeps track of their production and resources on their player boards, and the game uses six types of resources: MegaCredits, Steel, Titanium, Plants, Energy, and Heat. On the game board, you compete for the best places for your city tiles, ocean tiles, and greenery tiles. You also compete for different Milestones and Awards worth many VPs. Each round is called a generation (guess why) and consists of the following phases: 1) Player order shifts clockwise. 2) Research phase: All players buy cards from four privately drawn. 3) Action phase: Players take turns doing 1-2 actions from these options: Playing a card, claiming a Milestone, funding an Award, using a Standard project, converting plant into greenery tiles (and raising oxygen), converting heat into a temperature raise, and using the action of a card in play. The turn continues around the table (sometimes several laps) until all players have passed. 4) Production phase: Players get resources according to their terraform rating and production parameters. When the three global parameters (temperature, oxygen, ocean) have all reached their goal, the terraforming is complete, and the game ends after that generation. Count your Terraform Rating and other VPs to determine the winning corporation!'),
('Twilight Struggle', 'https://cf.geekdo-images.com/imagepage/img/LiVktx6kjqelxE1gB8EIVP8ZHYM=/fit-in/900x600/filters:no_upscale()/pic361592.jpg', 8.3, 37.49, '"Now the trumpet summons us again, not as a call to bear arms, though arms we need; not as a call to battle, though embattled we are – but a call to bear the burden of a long twilight struggle..." – John F. Kennedy In 1945, unlikely allies toppled Hitlers war machine, while humanitys most devastating weapons forced the Japanese Empire to its knees in a storm of fire. Where once there stood many great powers, there then stood only two. The world had scant months to sigh its collective relief before a new conflict threatened. Unlike the titanic struggles of the preceding decades, this conflict would be waged not primarily by soldiers and tanks, but by spies and politicians, scientists and intellectuals, artists and traitors. Twilight Struggle is a two-player game simulating the forty-five year dance of intrigue, prestige, and occasional flares of warfare between the Soviet Union and the United States. The entire world is the stage on which these two titans fight to make the world safe for their own ideologies and ways of life. The game begins amidst the ruins of Europe as the two new "superpowers" scramble over the wreckage of the Second World War, and ends in 1989, when only the United States remained standing. Twilight Struggle inherits its fundamental systems from the card-driven classics We the People and Hannibal: Rome vs. Carthage. It is a quick-playing, low-complexity game in that tradition. The game map is a world map of the period, whereon players move units and exert influence in attempts to gain allies and control for their superpower. As with GMTs other card-driven games, decision-making is a challenge; how to best use ones cards and units given consistently limited resources? Twilight Struggles Event cards add detail and flavor to the game. They cover a vast array of historical happenings, from the Arab-Israeli conflicts of 1948 and 1967, to Vietnam and the U.S. peace movement, to the Cuban Missile Crisis and other such incidents that brought the world to the brink of nuclear annihilation. Subsystems capture the prestige-laden Space Race as well as nuclear tensions, with the possibility of game-ending nuclear war.'),
('Star Wars: Rebellion', 'https://cf.geekdo-images.com/imagepage/img/0dNGA2gNqxzNWG-bmqrC2BbRaws=/fit-in/900x600/filters:no_upscale()/pic2737530.png', 8.5, 84.95, 'Star Wars: Rebellion is a board game of epic conflict between the Galactic Empire and Rebel Alliance for two to four players! Experience the Galactic Civil War like never before. In Rebellion, you control the entire Galactic Empire or the fledgling Rebel Alliance. You must command starships, account for troop movements, and rally systems to your cause. Given the differences between the Empire and Rebel Alliance, each side has different win conditions, and youll need to adjust your play style depending on who you represent: As the Imperial player, you can command legions of Stormtroopers, swarms of TIEs, Star Destroyers, and even the Death Star. You rule the galaxy by fear, relying on the power of your massive military to enforce your will. To win the game, you need to snuff out the budding Rebel Alliance by finding its base and obliterating it. Along the way, you can subjugate worlds or even destroy them. As the Rebel player, you can command dozens of troopers, T-47 airspeeders, Corellian corvettes, and fighter squadrons. However, these forces are no match for the Imperial military. In terms of raw strength, youll find yourself clearly overmatched from the very outset, so youll need to rally the planets to join your cause and execute targeted military strikes to sabotage Imperial build yards and steal valuable intelligence. To win the Galactic Civil War, youll need to sway the galaxys citizens to your cause. If you survive long enough and strengthen your reputation, you inspire the galaxy to a full-scale revolt, and you win. Featuring more than 150 plastic miniatures and two game boards that account for thirty-two of the Star Wars galaxys most notable systems, Rebellion features a scope that is as large and sweeping as any Star Wars game before it. Yet for all its grandiosity, Rebellion remains intensely personal, cinematic, and heroic. As much as your success depends upon the strength of your starships, vehicles, and troops, it depends upon the individual efforts of such notable characters as Leia Organa, Mon Mothma, Grand Moff Tarkin, and Emperor Palpatine. As civil war spreads throughout the galaxy, these leaders are invaluable to your efforts, and the secret missions they attempt will evoke many of the most inspiring moments from the classic trilogy. You might send Luke Skywalker to receive Jedi training on Dagobah or have Darth Vader spring a trap that freezes Han Solo in carbonite!'),
('Scythe', 'https://cf.geekdo-images.com/imagepage/img/VrePp6I9_HXw_NtBe4NFcwF5dRQ=/fit-in/900x600/filters:no_upscale()/pic3163924.jpg', 8.3, 46.91, 'It is a time of unrest in 1920s Europa. The ashes from the first great war still darken the snow. The capitalistic city-state known simply as “The Factory”, which fueled the war with heavily armored mechs, has closed its doors, drawing the attention of several nearby countries. Scythe is an engine-building game set in an alternate-history 1920s period. It is a time of farming and war, broken hearts and rusted gears, innovation and valor. In Scythe, each player represents a character from one of five factions of Eastern Europe who are attempting to earn their fortune and claim their factions stake in the land around the mysterious Factory. Players conquer territory, enlist new recruits, reap resources, gain villagers, build structures, and activate monstrous mechs. Each player begins the game with different resources (power, coins, combat acumen, and popularity), a different starting location, and a hidden goal. Starting positions are specially calibrated to contribute to each faction’s uniqueness and the asymmetrical nature of the game (each faction always starts in the same place). Scythe gives players almost complete control over their fate. Other than each player’s individual hidden objective card, the only elements of luck or variability are “encounter” cards that players will draw as they interact with the citizens of newly explored lands. Each encounter card provides the player with several options, allowing them to mitigate the luck of the draw through their selection. Combat is also driven by choices, not luck or randomness. Scythe uses a streamlined action-selection mechanism (no rounds or phases) to keep gameplay moving at a brisk pace and reduce downtime between turns. While there is plenty of direct conflict for players who seek it, there is no player elimination. Every part of Scythe has an aspect of engine-building to it. Players can upgrade actions to become more efficient, build structures that improve their position on the map, enlist new recruits to enhance character abilities, activate mechs to deter opponents from invading, and expand their borders to reap greater types and quantities of resources. These engine-building aspects create a sense of momentum and progress throughout the game. The order in which players improve their engine adds to the unique feel of each game, even when playing one faction multiple times.'),
('Gaia Project', 'https://cf.geekdo-images.com/imagepage/img/KzUut4GgRXPc0zrFcEJhh4u2Ueo=/fit-in/900x600/filters:no_upscale()/pic3548175.jpg', 8.6, 79.99, 'Gaia Project is a new game in the line of Terra Mystica. As in the original Terra Mystica, fourteen different factions live on seven different kinds of planets, and each faction is bound to their own home planets, so to develop and grow, they must terraform neighboring planets into their home environments in competition with the other groups. In addition, Gaia planets can be used by all factions for colonization, and Transdimensional planets can be changed into Gaia planets. All factions can improve their skills in six different areas of development — Terraforming, Navigation, Artificial Intelligence, Gaiaforming, Economy, Research — leading to advanced technology and special bonuses. To do all of that, each group has special skills and abilities. The playing area is made of ten sectors, allowing a variable set-up and thus an even bigger replay value than its predecessor Terra Mystica. A two-player game is hosted on seven sectors.'),
('Terra Mystica', 'https://cf.geekdo-images.com/imagepage/img/JS90_q_U-h5Xe9Dn2jTTky-FqOs=/fit-in/900x600/filters:no_upscale()/pic1356616.jpg', 8.2, 63.29, 'In the land of Terra Mystica dwell 14 different peoples in seven landscapes, and each group is bound to its own home environment, so to develop and grow, they must terraform neighboring landscapes into their home environments in competition with the other groups. Terra Mystica is a game with very little luck that rewards strategic planning. Each player governs one of the 14 groups. With subtlety and craft, the player must attempt to rule as great an area as possible and to develop that groups skills. There are also four religious cults in which you can progress. To do all that, each group has special skills and abilities. Taking turns, the players execute their actions on the resources they have at their disposal. Different buildings allow players to develop different resources. Dwellings allow for more workers. Trading houses allow players to make money. Strongholds unlock a groups special ability, and temples allow you to develop religion and your terraforming and seafaring skills. Buildings can be upgraded: Dwellings can be developed into trading houses; trading houses can be developed into strongholds or temples; one temple can be upgraded to become a sanctuary. Each group must also develop its terraforming skill and its skill with boats to use the rivers. The groups in question, along with their home landscape, are: Desert (Fakirs, Nomads) Plains (Halflings, Cultists) Swamp (Alchemists, Darklings) Lake (Mermaids, Swarmlings) Forest (Witches, Auren) Mountain (Dwarves, Engineers) Wasteland (Giants, Chaos Magicians) Proximity to other groups is a double-edged sword in Terra Mystica. Being close to other groups gives you extra power, but it also means that expanding is more difficult...'),
('Great Western Trail', 'https://cf.geekdo-images.com/imagepage/img/yb940ZsNQPpjUX7PK7Jx9YH_87o=/fit-in/900x600/filters:no_upscale()/pic3113247.jpg', 8.3, 69.94, 'America in the 19th century: You are a rancher and repeatedly herd your cattle from Texas to Kansas City, where you send them off by train. This earns you money and victory points. Needless to say, each time you arrive in Kansas City, you want to have your most valuable cattle in tow. However, the "Great Western Trail" not only requires that you keep your herd in good shape, but also that you wisely use the various buildings along the trail. Also, it might be a good idea to hire capable staff: cowboys to improve your herd, craftsmen to build your very own buildings, or engineers for the important railroad line.If you cleverly manage your herd and navigate the opportunities and pitfalls of Great Western Trail, you surely will gain the most victory points and win the game.');
