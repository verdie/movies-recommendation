import React from 'react'
import {shallow} from 'enzyme'
import GenresItem from './GenresItem'
import toJson from 'enzyme-to-json'
const mockMovies = [
  {
    "popularity": 18.559,
    "vote_count": 1960,
    "video": false,
    "poster_path": "\/76KMEI1ZNU9HEZ4pmHTwgwa0u6d.jpg",
    "id": 153518,
    "adult": false,
    "backdrop_path": "\/k15COpeexV5Ad0tuLjBW2jQFoOz.jpg",
    "original_language": "en",
    "original_title": "The Angry Birds Movie",
    "genre_ids": [
      12, 16, 35
    ],
    "title": "The Angry Birds Movie",
    "vote_average": 6,
    "overview": "An island populated entirely by happy, flightless birds or almost entirely. In t" +
        "his paradise, Red, a bird with a temper problem, speedy Chuck, and the volatile " +
        "Bomb have always been outsiders. But when the island is visited by mysterious gr" +
        "een piggies, it’s up to these unlikely outcasts to figure out what the pigs are " +
        "up to.",
    "release_date": "2016-05-20"
  }, {
    "popularity": 33.267,
    "vote_count": 13172,
    "video": false,
    "poster_path": "\/4PiiNGXj1KENTmCBHeN6Mskj2Fq.jpg",
    "id": 284052,
    "adult": false,
    "backdrop_path": "\/am7uBFYnOY9xzxOXnvGgtoIOne9.jpg",
    "original_language": "en",
    "original_title": "Doctor Strange",
    "genre_ids": [
      28, 12, 14, 878
    ],
    "title": "Doctor Strange",
    "vote_average": 7.4,
    "overview": "After his career is destroyed, a brilliant but arrogant surgeon gets a new lease" +
        " on life when a sorcerer takes him under her wing and trains him to defend the w" +
        "orld against evil.",
    "release_date": "2016-11-04"
  }, {
    "popularity": 32.071,
    "vote_count": 6997,
    "video": false,
    "poster_path": "\/6w1VjTPTjTaA5oNvsAg0y4H6bou.jpg",
    "id": 262500,
    "adult": false,
    "backdrop_path": "\/xOKGkKwfK79xjmBd1EiIbPpc71k.jpg",
    "original_language": "en",
    "original_title": "Insurgent",
    "genre_ids": [
      28, 12, 878, 53
    ],
    "title": "Insurgent",
    "vote_average": 6.3,
    "overview": "Beatrice Prior must confront her inner demons and continue her fight against a p" +
        "owerful alliance which threatens to tear her society apart.",
    "release_date": "2015-03-20"
  }, {
    "popularity": 30.034,
    "id": 18,
    "video": false,
    "vote_count": 6468,
    "vote_average": 7.4,
    "title": "The Fifth Element",
    "release_date": "1997-05-09",
    "original_language": "en",
    "original_title": "The Fifth Element",
    "genre_ids": [
      12, 14, 28, 53, 878
    ],
    "backdrop_path": "\/qlGoGQSVMzIjGbpvXzZUOH1FjNu.jpg",
    "adult": false,
    "overview": "In 2257, a taxi driver is unintentionally given the task of saving a young girl " +
        "who is part of the key that will ensure the survival of humanity.",
    "poster_path": "\/zaFa1NRZEnFgRTv5OVXkNIZO78O.jpg"
  }, {
    "popularity": 23.861,
    "vote_count": 10692,
    "video": false,
    "poster_path": "\/lQCkPLDxFONmgzrWLvq085v1g2d.jpg",
    "id": 37724,
    "adult": false,
    "backdrop_path": "\/6bjRujKSnCVSrzC1qjmqfAyaiET.jpg",
    "original_language": "en",
    "original_title": "Skyfall",
    "genre_ids": [
      28, 12, 53
    ],
    "title": "Skyfall",
    "vote_average": 7.1,
    "overview": "When Bond's latest assignment goes gravely wrong and agents around the world are" +
        " exposed, MI6 is attacked forcing M to relocate the agency. These events cause h" +
        "er authority and position to be challenged by Gareth Mallory, the new Chairman o" +
        "f the Intelligence and Security Committee. With MI6 now compromised from both in" +
        "side and out, M is left with one ally she can trust: Bond. 007 takes to the shad" +
        "ows - aided only by field agent, Eve - following a trail to the mysterious Silva" +
        ", whose lethal and hidden motives have yet to reveal themselves.",
    "release_date": "2012-11-09"
  }, {
    "popularity": 28.325,
    "vote_count": 2940,
    "video": false,
    "poster_path": "\/bbYNNEGLXrV3lJpHDg7CKaPscCb.jpg",
    "id": 1368,
    "adult": false,
    "backdrop_path": "\/xiBsA8Qj5KhO4cUKz6RHDtKpBGs.jpg",
    "original_language": "en",
    "original_title": "First Blood",
    "genre_ids": [
      28, 12, 53, 10752
    ],
    "title": "First Blood",
    "vote_average": 7.4,
    "overview": "When former Green Beret John Rambo is harassed by local law enforcement and arre" +
        "sted for vagrancy, the Vietnam vet snaps, runs for the hills and rat-a-tat-tats " +
        "his way into the action-movie hall of fame. Hounded by a relentless sheriff, Ram" +
        "bo employs heavy-handed guerilla tactics to shake the cops off his tail.",
    "release_date": "1982-10-22"
  }, {
    "popularity": 33.655,
    "vote_count": 6004,
    "video": false,
    "poster_path": "\/qWjRfBwr4VculczswwojXgoU0mq.jpg",
    "id": 608,
    "adult": false,
    "backdrop_path": "\/cITp4EM8HEKrlhXDEeGNy2IB8D9.jpg",
    "original_language": "en",
    "original_title": "Men in Black II",
    "genre_ids": [
      28, 12, 35, 878
    ],
    "title": "Men in Black II",
    "vote_average": 6.3,
    "overview": "Kay and Jay reunite to provide our best, last and only line of defense against a" +
        " sinister seductress who levels the toughest challenge yet to the MIB's untarnis" +
        "hed mission statement – protecting Earth from the scum of the universe. It's bee" +
        "n four years since the alien-seeking agents averted an intergalactic disaster of" +
        " epic proportions. Now it's a race against the clock as Jay must convince Kay – " +
        "who not only has absolutely no memory of his time spent with the MIB, but is als" +
        "o the only living person left with the expertise to save the galaxy – to reunite" +
        " with the MIB before the earth submits to ultimate destruction.",
    "release_date": "2002-07-03"
  }, {
    "popularity": 25.064,
    "vote_count": 7572,
    "video": false,
    "poster_path": "\/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
    "id": 333339,
    "adult": false,
    "backdrop_path": "\/5a7lMDn3nAj2ByO0X1fg6BhUphR.jpg",
    "original_language": "en",
    "original_title": "Ready Player One",
    "genre_ids": [
      12, 878
    ],
    "title": "Ready Player One",
    "vote_average": 7.6,
    "overview": "When the creator of a popular video game system dies, a virtual contest is creat" +
        "ed to compete for his fortune.",
    "release_date": "2018-03-29"
  }, {
    "popularity": 19.563,
    "vote_count": 7604,
    "video": false,
    "poster_path": "\/ng8ALjSDhUmwLl7vtjUWIZNQSlt.jpg",
    "id": 70981,
    "adult": false,
    "backdrop_path": "\/rRhoMIqgdX9wEtRUOLsqXKkH9I0.jpg",
    "original_language": "en",
    "original_title": "Prometheus",
    "genre_ids": [
      12, 9648, 878
    ],
    "title": "Prometheus",
    "vote_average": 6.4,
    "overview": "A team of explorers discover a clue to the origins of mankind on Earth, leading " +
        "them on a journey to the darkest corners of the universe. There, they must fight" +
        " a terrifying battle to save the future of the human race.",
    "release_date": "2012-06-08"
  }, {
    "popularity": 26.787,
    "vote_count": 11247,
    "video": false,
    "poster_path": "\/maP4MTfPCeVD2FZbKTLUgriOW4R.jpg",
    "id": 12444,
    "adult": false,
    "backdrop_path": "\/8YA36faYlkpfp6aozcGsqq68pZ9.jpg",
    "original_language": "en",
    "original_title": "Harry Potter and the Deathly Hallows: Part 1",
    "genre_ids": [
      12, 14, 10751
    ],
    "title": "Harry Potter and the Deathly Hallows: Part 1",
    "vote_average": 7.8,
    "overview": "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and d" +
        "estroy the remaining Horcruxes, putting an end to Voldemort's bid for immortalit" +
        "y. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death E" +
        "aters on the loose, the world is more dangerous than ever.",
    "release_date": "2010-11-19"
  }, {
    "popularity": 24.407,
    "id": 177677,
    "video": false,
    "vote_count": 5426,
    "vote_average": 7.1,
    "title": "Mission: Impossible - Rogue Nation",
    "release_date": "2015-07-31",
    "original_language": "en",
    "original_title": "Mission: Impossible - Rogue Nation",
    "genre_ids": [
      28, 12
    ],
    "backdrop_path": "\/8XeLfNQrDmFQmPTqxapfWUnKiLf.jpg",
    "adult": false,
    "overview": "Ethan and team take on their most impossible mission yet—eradicating 'The Syndic" +
        "ate', an International and highly-skilled rogue organisation committed to destro" +
        "ying the IMF.",
    "poster_path": "\/z2sJd1OvAGZLxgjBdSnQoLCfn3M.jpg"
  }, {
    "popularity": 27.527,
    "vote_count": 10799,
    "video": false,
    "poster_path": "\/eA2D86Y6VPWuUzZyatiLBwpTilQ.jpg",
    "id": 1930,
    "adult": false,
    "backdrop_path": "\/ujAY1ad7yS2TfV0GDNGUZ7DK0mo.jpg",
    "original_language": "en",
    "original_title": "The Amazing Spider-Man",
    "genre_ids": [
      28, 12, 14
    ],
    "title": "The Amazing Spider-Man",
    "vote_average": 6.5,
    "overview": "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leav" +
        "ing him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter i" +
        "s trying to figure out who he is and how he got to be the person he is today. As" +
        " Peter discovers a mysterious briefcase that belonged to his father, he begins a" +
        " quest to understand his parents' disappearance – leading him directly to Oscorp" +
        " and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is " +
        "set on a collision course with Connors' alter ego, The Lizard, Peter will make l" +
        "ife-altering choices to use his powers and shape his destiny to become a hero.",
    "release_date": "2012-07-04"
  }, {
    "popularity": 28.173,
    "vote_count": 50,
    "video": false,
    "poster_path": "\/wmiC67ium8Is9Fg7PkTAK7cnHj0.jpg",
    "id": 480105,
    "adult": false,
    "backdrop_path": "\/3uG3aOhEzFCjcQulsJQiAzLSrw8.jpg",
    "original_language": "en",
    "original_title": "47 Meters Down: Uncaged",
    "genre_ids": [
      12, 27, 53
    ],
    "title": "47 Meters Down: Uncaged",
    "vote_average": 5.6,
    "overview": "A group of backpackers diving in a ruined underwater city discover that they hav" +
        "e stumbled into the territory of the ocean's deadliest shark species.",
    "release_date": "2019-08-16"
  }, {
    "popularity": 23.405,
    "vote_count": 6224,
    "video": false,
    "poster_path": "\/zlWBxz2pTA9p45kUTrI8AQiKrHm.jpg",
    "id": 36557,
    "adult": false,
    "backdrop_path": "\/xq6hXdBpDPIXWjtmvbFmtLvBFJt.jpg",
    "original_language": "en",
    "original_title": "Casino Royale",
    "genre_ids": [
      28, 12, 53
    ],
    "title": "Casino Royale",
    "vote_average": 7.4,
    "overview": "Le Chiffre, a banker to the world's terrorists, is scheduled to participate in a" +
        " high-stakes poker game in Montenegro, where he intends to use his winnings to e" +
        "stablish his financial grip on the terrorist market. M sends Bond—on his maiden " +
        "mission as a 00 Agent—to attend this game and prevent Le Chiffre from winning. W" +
        "ith the help of Vesper Lynd and Felix Leiter, Bond enters the most important pok" +
        "er game in his already dangerous career.",
    "release_date": "2006-11-17"
  }, {
    "popularity": 18.468,
    "id": 79,
    "video": false,
    "vote_count": 1122,
    "vote_average": 7.5,
    "title": "Hero",
    "release_date": "2002-12-19",
    "original_language": "zh",
    "original_title": "英雄",
    "genre_ids": [
      18, 12, 28, 36
    ],
    "backdrop_path": "\/xC9DRxpKgqJKDYLa9mkNa74eX4q.jpg",
    "adult": false,
    "overview": "One man defeated three assassins who sought to murder the most powerful warlord " +
        "in pre-unified China.",
    "poster_path": "\/xkJnow23eDxwQXB0iIWAWkBF47y.jpg"
  }, {
    "popularity": 30.053,
    "vote_count": 6815,
    "video": false,
    "poster_path": "\/9TO4MUGtidmylYZFGPKwR33is8N.jpg",
    "id": 812,
    "adult": false,
    "backdrop_path": "\/5OeY4U2rzePxWq2rkqMajUx2gz7.jpg",
    "original_language": "en",
    "original_title": "Aladdin",
    "genre_ids": [
      12, 16, 14, 10749, 10751
    ],
    "title": "Aladdin",
    "vote_average": 7.6,
    "overview": "Princess Jasmine grows tired of being forced to remain in the palace, so she sne" +
        "aks out into the marketplace, in disguise, where she meets street-urchin Aladdin" +
        ".  The couple falls in love, although Jasmine may only marry a prince.  After be" +
        "ing thrown in jail, Aladdin becomes embroiled in a plot to find a mysterious lam" +
        "p, with which the evil Jafar hopes to rule the land.",
    "release_date": "1992-11-25"
  }, {
    "popularity": 28.162,
    "id": 348350,
    "video": false,
    "vote_count": 4166,
    "vote_average": 6.6,
    "title": "Solo: A Star Wars Story",
    "release_date": "2018-05-25",
    "original_language": "en",
    "original_title": "Solo: A Star Wars Story",
    "genre_ids": [
      28, 12, 878
    ],
    "backdrop_path": "\/5DUqFLgkLsJxyqPCAcgTivZy2SX.jpg",
    "adult": false,
    "overview": "Through a series of daring escapades deep within a dark and dangerous criminal u" +
        "nderworld, Han Solo meets his mighty future copilot Chewbacca and encounters the" +
        " notorious gambler Lando Calrissian.",
    "poster_path": "\/3IGbjc5ZC5yxim5W0sFING2kdcz.jpg"
  }, {
    "popularity": 27.208,
    "vote_count": 12121,
    "video": false,
    "poster_path": "\/jUFjMoLh8T2CWzHUSjKCojI5SHu.jpg",
    "id": 673,
    "adult": false,
    "backdrop_path": "\/wUpBH6RIH4uOiWoPjj8MKUemu9F.jpg",
    "original_language": "en",
    "original_title": "Harry Potter and the Prisoner of Azkaban",
    "genre_ids": [
      12, 14, 10751
    ],
    "title": "Harry Potter and the Prisoner of Azkaban",
    "vote_average": 7.9,
    "overview": "Harry, Ron and Hermione return to Hogwarts for another magic-filled year. Harry " +
        "comes face to face with danger yet again, this time in the form of escaped convi" +
        "ct, Sirius Black—and turns to sympathetic Professor Lupin for help.",
    "release_date": "2004-06-04"
  }, {
    "popularity": 25.914,
    "id": 98566,
    "video": false,
    "vote_count": 4398,
    "vote_average": 5.8,
    "title": "Teenage Mutant Ninja Turtles",
    "release_date": "2014-08-08",
    "original_language": "en",
    "original_title": "Teenage Mutant Ninja Turtles",
    "genre_ids": [
      878, 28, 12, 14, 35
    ],
    "backdrop_path": "\/OqCXGt5nl1cHPeotxCDvXLLe6p.jpg",
    "adult": false,
    "overview": "The city needs heroes. Darkness has settled over New York City as Shredder and h" +
        "is evil Foot Clan have an iron grip on everything from the police to the politic" +
        "ians. The future is grim until four unlikely outcast brothers rise from the sewe" +
        "rs and discover their destiny as Teenage Mutant Ninja Turtles. The Turtles must " +
        "work with fearless reporter April and her wise-cracking cameraman Vern Fenwick t" +
        "o save the city and unravel Shredder's diabolical plan.",
    "poster_path": "\/oDL2ryJ0sV2bmjgshVgJb3qzvwp.jpg"
  }, {
    "popularity": 24.166,
    "vote_count": 0,
    "video": false,
    "poster_path": "\/3ybZEptTTW6RRzrxh4zAByAnUCj.jpg",
    "id": 290859,
    "adult": false,
    "backdrop_path": "\/9AxDdV2uqlxbtXWpwZTFs7mI2hm.jpg",
    "original_language": "en",
    "original_title": "Terminator: Dark Fate",
    "genre_ids": [
      28, 12, 878
    ],
    "title": "Terminator: Dark Fate",
    "vote_average": 0,
    "overview": "27 years after the events of Terminator 2: Judgment Day, a new, modified liquid " +
        "metal Terminator is sent from the future by Skynet in order to terminate Dani Ra" +
        "mos, a hybrid cyborg human, and her friends. Sarah Connor comes to their aid, as" +
        " well as the original Terminator, for a fight for the future.",
    "release_date": "2019-11-01"
  }
]

describe('GenresItem component', () => {
it('renders correctly', () => {
  const wrapper = shallow(<GenresItem/>)
  wrapper.setState({movies: mockMovies});

  expect(toJson(wrapper)).toMatchSnapshot()
})
})
