import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import SearchInput from './SearchInput';
import CardResult from './CardResult';
import './Search.css';

const nissaResults = {
  "cards": [
    {
      "name": "Nissa Revane",
      "manaCost": "{2}{G}{G}",
      "cmc": 4,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Planeswalker — Nissa",
      "types": [
        "Planeswalker"
      ],
      "subtypes": [
        "Nissa"
      ],
      "rarity": "Special",
      "set": "pMEI",
      "setName": "Media Inserts",
      "text": "+1: Search your library for a card named Nissa's Chosen and put it onto the battlefield. Then shuffle your library.\n+1: You gain 2 life for each Elf you control.\n−7: Search your library for any number of Elf creature cards and put them onto the battlefield. Then shuffle your library.",
      "artist": "Jaime Jones",
      "number": "27",
      "layout": "normal",
      "loyalty": 2,
      "releaseDate": "2010-06-15",
      "rulings": [
        {
          "date": "2009-10-01",
          "text": "You may activate Nissa's first ability even if you know you have no cards named Nissa's Chosen in your library. You must still shuffle your library in that situation."
        },
        {
          "date": "2009-10-01",
          "text": "You may activate Nissa's second ability even if you control no Elves."
        }
      ],
      "foreignNames": [
        {
          "name": "妮莎瑞文",
          "language": "Chinese Simplified"
        },
        {
          "name": "Nissa Revane",
          "language": "French"
        },
        {
          "name": "Nissa Revane",
          "language": "German"
        },
        {
          "name": "Nissa Revane",
          "language": "Italian"
        },
        {
          "name": "ニッサ・レヴェイン",
          "language": "Japanese"
        },
        {
          "name": "Nissa Revane",
          "language": "Portuguese (Brazil)"
        },
        {
          "name": "Нисса Ревейн",
          "language": "Russian"
        },
        {
          "name": "Nissa Revane",
          "language": "Spanish"
        }
      ],
      "printings": [
        "pMEI",
        "ZEN"
      ],
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        },
        {
          "format": "Zendikar Block",
          "legality": "Legal"
        }
      ],
      "source": "Duels of the Planeswalkers PC/Steam Launch Promotion",
      "id": "83163f24e4fc0284c90f842bf072a7659a2983e9"
    },
    {
      "name": "Nissa, Worldwaker",
      "manaCost": "{3}{G}{G}",
      "cmc": 5,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Planeswalker — Nissa",
      "types": [
        "Planeswalker"
      ],
      "subtypes": [
        "Nissa"
      ],
      "rarity": "Special",
      "set": "pMEI",
      "setName": "Media Inserts",
      "text": "+1: Target land you control becomes a 4/4 Elemental creature with trample. It's still a land.\n+1: Untap up to four target Forests.\n−7: Search your library for any number of basic land cards, put them onto the battlefield, then shuffle your library. Those lands become 4/4 Elemental creatures with trample. They're still lands.",
      "artist": "Jae Lee",
      "number": "103",
      "layout": "normal",
      "loyalty": 3,
      "releaseDate": "2014-07-24",
      "rulings": [
        {
          "date": "2014-07-18",
          "text": "The type-changing effects of the first and third abilities don't have a duration. They last indefinitely."
        },
        {
          "date": "2014-07-18",
          "text": "If the land targeted by the first ability entered the battlefield this turn, it won't be able to attack and its activated abilities with {T} in the cost (including its mana ability) can't be activated (unless something gives it haste). The same is true for the lands put onto the battlefield with the third ability."
        }
      ],
      "foreignNames": [
        {
          "name": "醒世师妮莎",
          "language": "Chinese Simplified"
        },
        {
          "name": "醒世師妮莎",
          "language": "Chinese Traditional"
        },
        {
          "name": "Nissa, éveilleuse de mondes",
          "language": "French"
        },
        {
          "name": "Nissa die Weltenerweckerin",
          "language": "German"
        },
        {
          "name": "Nissa del Mondo Risvegliato",
          "language": "Italian"
        },
        {
          "name": "世界を目覚めさせる者、ニッサ",
          "language": "Japanese"
        },
        {
          "name": "세계를 깨우는 니사",
          "language": "Korean"
        },
        {
          "name": "Nissa, Despertadora do Mundo",
          "language": "Portuguese (Brazil)"
        },
        {
          "name": "Нисса, Пробудившая Мир",
          "language": "Russian"
        },
        {
          "name": "Nissa, despertadora del mundo",
          "language": "Spanish"
        }
      ],
      "printings": [
        "pMEI",
        "M15"
      ],
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "source": "Hasbro Toy Shop Booth San Diego Comic-Con Box Set Sale",
      "id": "f893e10c3fb5b9e6b4a1c7a1d487f9cd5375606a"
    },
    {
      "name": "Nissa's Revelation",
      "manaCost": "{5}{G}{G}",
      "cmc": 7,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Sorcery",
      "types": [
        "Sorcery"
      ],
      "rarity": "Special",
      "set": "pPRE",
      "setName": "Prerelease Events",
      "text": "Scry 5, then reveal the top card of your library. If it's a creature card, you draw cards equal to its power and you gain life equal to its toughness.",
      "flavor": "The evil inside the mountain pulsed at Nissa in a shock wave of madness.",
      "artist": "Izzy",
      "number": "225",
      "layout": "normal",
      "rulings": [
        {
          "date": "2015-06-22",
          "text": "If the top card of your library isn't a creature card or it's a creature card with power 0 or less, you won't draw any cards. Otherwise, the first card you draw will be the card you revealed."
        }
      ],
      "foreignNames": [
        {
          "name": "妮莎的启示",
          "language": "Chinese Simplified"
        },
        {
          "name": "妮莎的啟示",
          "language": "Chinese Traditional"
        },
        {
          "name": "Révélation de Nissa",
          "language": "French"
        },
        {
          "name": "Nissas Offenbarung",
          "language": "German"
        },
        {
          "name": "Rivelazione di Nissa",
          "language": "Italian"
        },
        {
          "name": "ニッサの天啓",
          "language": "Japanese"
        },
        {
          "name": "니사의 계시",
          "language": "Korean"
        },
        {
          "name": "Revelação de Nissa",
          "language": "Portuguese (Brazil)"
        },
        {
          "name": "Откровение Ниссы",
          "language": "Russian"
        },
        {
          "name": "Revelación de Nissa",
          "language": "Spanish"
        }
      ],
      "printings": [
        "pPRE",
        "ORI"
      ],
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "source": "Magic Origins",
      "id": "33ebc56f5c1c4891b7f8f7910147922bbd07a541"
    },
    {
      "name": "Nissa, Vastwood Seer",
      "names": [
        "Nissa, Vastwood Seer",
        "Nissa, Sage Animist"
      ],
      "manaCost": "{2}{G}",
      "cmc": 3,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Legendary Creature — Elf Scout",
      "supertypes": [
        "Legendary"
      ],
      "types": [
        "Creature"
      ],
      "subtypes": [
        "Elf",
        "Scout"
      ],
      "rarity": "Special",
      "set": "pPRE",
      "setName": "Prerelease Events",
      "text": "When Nissa, Vastwood Seer enters the battlefield, you may search your library for a basic Forest card, reveal it, put it into your hand, then shuffle your library.\nWhenever a land enters the battlefield under your control, if you control seven or more lands, exile Nissa, then return her to the battlefield transformed under her owner's control.",
      "artist": "",
      "number": "226",
      "power": "2",
      "toughness": "2",
      "layout": "double-faced",
      "rulings": [
        {
          "date": "2015-06-22",
          "text": "Nissa, Vastwood Seer is exiled as a result of her second triggered ability. If she enters the battlefield while you control seven or more lands, she won't automatically be exiled and transform."
        },
        {
          "date": "2015-06-22",
          "text": "Each face of a double-faced card has its own set of characteristics: name, types, subtypes, power and toughness, loyalty, abilities, and so on. While a double-faced card is on the battlefield, consider only the characteristics of the face that's currently up. The other set of characteristics is ignored. While a double-faced card isn't on the battlefield, consider only the characteristics of its front face."
        },
        {
          "date": "2015-06-22",
          "text": "The converted mana cost of a double-faced card not on the battlefield is the converted mana cost of its front face."
        },
        {
          "date": "2015-06-22",
          "text": "The back face of a double-faced card (in the case of Magic Origins, the planeswalker face) can't be cast."
        },
        {
          "date": "2015-06-22",
          "text": "Although the two rules are similar, the \"legend rule\" and the \"planeswalker uniqueness rule\" affect different kinds of permanents. You can control two of this permanent, one front face-up and the other back-face up at the same time. However, if the former is exiled and enters the battlefield transformed, you'll then control two planeswalkers with the same subtype. You'll choose one to remain on the battlefield, and the other will be put into its owner's graveyard."
        },
        {
          "date": "2015-06-22",
          "text": "A double-faced card enters the battlefield with its front face up by default, unless a spell or ability instructs you to put it onto the battlefield transformed, in which case it enters with its back face up."
        },
        {
          "date": "2015-06-22",
          "text": "A Magic Origins planeswalker that enters the battlefield because of the ability of its front face will enter with loyalty counters as normal."
        },
        {
          "date": "2015-06-22",
          "text": "In some rare cases, a spell or ability may cause one of these five cards to transform while it's a creature (front face up) on the battlefield. If this happens, the resulting planeswalker won't have any loyalty counters on it and will subsequently be put into its owner's graveyard."
        },
        {
          "date": "2015-06-22",
          "text": "You can activate one of the planeswalker's loyalty abilities the turn it enters the battlefield. However, you may do so only during one of your main phases when the stack is empty. For example, if the planeswalker enters the battlefield during combat, there will be an opportunity for your opponent to remove it before you can activate one of its abilities."
        },
        {
          "date": "2015-06-22",
          "text": "If a double-faced card is manifested, it will be put onto the battlefield face down (this is also true if it's put onto the battlefield face down some other way). Note that \"face down\" is not synonymous with \"with its back face up.\" A manifested double-faced card is a 2/2 creature with no name, mana cost, creature types, or abilities. While face down, it can't transform. If the front face of a manifested double-faced card is a creature card, you can turn it face up by paying its mana cost. If you do, its front face will be up. A double-faced card on the battlefield can't be turned face down."
        },
        {
          "date": "2016-04-08",
          "text": "The back face of a double-faced card doesn't have a mana cost. A double-faced permanent with its back face up has a converted mana cost equal to the converted mana cost of its front face. Each back face has a color indicator that defines its color."
        },
        {
          "date": "2016-07-13",
          "text": "For more information on double-faced cards, see the Shadows over Innistrad mechanics article (http://magic.wizards.com/en/articles/archive/feature/shadows-over-innistrad-mechanics)."
        }
      ],
      "foreignNames": [
        {
          "name": "广林预言师妮莎",
          "language": "Chinese Simplified"
        },
        {
          "name": "廣林預言師妮莎",
          "language": "Chinese Traditional"
        },
        {
          "name": "Nissa, voyante de Vastebois",
          "language": "French"
        },
        {
          "name": "Nissa, Seherin aus Riesenholz",
          "language": "German"
        },
        {
          "name": "Nissa, Veggente di Boscovasto",
          "language": "Italian"
        },
        {
          "name": "巨森の予見者、ニッサ",
          "language": "Japanese"
        },
        {
          "name": "광활림의 예언자 니사",
          "language": "Korean"
        },
        {
          "name": "Nissa, Vidente de Matavasta",
          "language": "Portuguese (Brazil)"
        },
        {
          "name": "Нисса, Провидица Широколесья",
          "language": "Russian"
        },
        {
          "name": "Nissa, vidente del Bosque Extenso",
          "language": "Spanish"
        }
      ],
      "printings": [
        "pPRE",
        "ORI"
      ],
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "source": "Magic Origins",
      "id": "e912fa1c43466156609b373d5f9ee2168ba21dd2"
    },
    {
      "name": "Nissa's Renewal",
      "manaCost": "{5}{G}",
      "cmc": 6,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Sorcery",
      "types": [
        "Sorcery"
      ],
      "rarity": "Special",
      "set": "pPRE",
      "setName": "Prerelease Events",
      "text": "Search your library for up to three basic land cards, put them onto the battlefield tapped, then shuffle your library. You gain 7 life.",
      "flavor": "Her connection to the plane restored, Nissa felt the power of Zendikar surge through her.",
      "artist": "Lius Lasahido",
      "number": "275",
      "layout": "normal",
      "foreignNames": [
        {
          "name": "妮莎重光",
          "language": "Chinese Simplified"
        },
        {
          "name": "妮莎重光",
          "language": "Chinese Traditional"
        },
        {
          "name": "Renouveau de Nissa",
          "language": "French"
        },
        {
          "name": "Nissas Erneuerung",
          "language": "German"
        },
        {
          "name": "Rinnovamento di Nissa",
          "language": "Italian"
        },
        {
          "name": "ニッサの復興",
          "language": "Japanese"
        },
        {
          "name": "니사의 회생",
          "language": "Korean"
        },
        {
          "name": "Renovação de Nissa",
          "language": "Portuguese (Brazil)"
        },
        {
          "name": "Обновление Ниссы",
          "language": "Russian"
        },
        {
          "name": "Renovación de Nissa",
          "language": "Spanish"
        }
      ],
      "printings": [
        "pPRE",
        "BFZ"
      ],
      "legalities": [
        {
          "format": "Battle for Zendikar Block",
          "legality": "Legal"
        },
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Standard",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "source": "Battle for Zendikar",
      "id": "17165ac7dcaa256f47ade4e802b753990e104a72"
    },
    {
      "name": "Nissa's Pilgrimage",
      "manaCost": "{2}{G}",
      "cmc": 3,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Sorcery",
      "types": [
        "Sorcery"
      ],
      "rarity": "Special",
      "set": "pFNM",
      "setName": "Friday Night Magic",
      "text": "Search your library for up to two basic Forest cards, reveal those cards, and put one onto the battlefield tapped and the rest into your hand. Then shuffle your library.\nSpell mastery — If there are two or more instant and/or sorcery cards in your graveyard, search your library for up to three basic Forest cards instead of two.",
      "artist": "Christine Choi",
      "number": "188",
      "layout": "normal",
      "releaseDate": "2016-01-01",
      "rulings": [
        {
          "date": "2015-06-22",
          "text": "If you only find one basic Forest card, you'll put it onto the battlefield tapped. You won't be able to put it into your hand, even if you want to."
        },
        {
          "date": "2015-06-22",
          "text": "If the spell mastery ability applies, and you find three basic Forest cards, one of them will be put onto the battlefield tapped and two of them will be put into your hand."
        },
        {
          "date": "2015-06-22",
          "text": "Check to see if there are two or more instant and/or sorcery cards in your graveyard as the spell resolves to determine whether the spell mastery ability applies. The spell itself won't count because it's still on the stack as you make this check."
        }
      ],
      "foreignNames": [
        {
          "name": "妮莎的朝圣",
          "language": "Chinese Simplified"
        },
        {
          "name": "妮莎的朝聖",
          "language": "Chinese Traditional"
        },
        {
          "name": "Pèlerinage de Nissa",
          "language": "French"
        },
        {
          "name": "Nissas Pilgerreise",
          "language": "German"
        },
        {
          "name": "Pellegrinaggio di Nissa",
          "language": "Italian"
        },
        {
          "name": "ニッサの巡礼",
          "language": "Japanese"
        },
        {
          "name": "니사의 순례",
          "language": "Korean"
        },
        {
          "name": "Peregrinação de Nissa",
          "language": "Portuguese (Brazil)"
        },
        {
          "name": "Паломничество Ниссы",
          "language": "Russian"
        },
        {
          "name": "Peregrinación de Nissa",
          "language": "Spanish"
        }
      ],
      "printings": [
        "pFNM",
        "ORI"
      ],
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "source": "Friday Night Magic prize",
      "id": "448439bfc13f8401e6e3a1a4858415ed8f16bba2"
    },
    {
      "name": "Nissa's Chosen",
      "manaCost": "{G}{G}",
      "cmc": 2,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Creature — Elf Warrior",
      "types": [
        "Creature"
      ],
      "subtypes": [
        "Elf",
        "Warrior"
      ],
      "rarity": "Special",
      "set": "pWPN",
      "setName": "Wizards Play Network",
      "text": "If Nissa's Chosen would die, put it on the bottom of its owner's library instead.",
      "artist": "Sam Wood",
      "number": "34",
      "power": "2",
      "toughness": "3",
      "layout": "normal",
      "releaseDate": "2009",
      "foreignNames": [
        {
          "name": "妮莎精卫",
          "language": "Chinese Simplified"
        },
        {
          "name": "Élu de Nissa",
          "language": "French"
        },
        {
          "name": "Nissas Ausgewählter",
          "language": "German"
        },
        {
          "name": "Prescelto di Nissa",
          "language": "Italian"
        },
        {
          "name": "ニッサに選ばれし者",
          "language": "Japanese"
        },
        {
          "name": "Escolhido de Nissa",
          "language": "Portuguese (Brazil)"
        },
        {
          "name": "Избранник Ниссы",
          "language": "Russian"
        },
        {
          "name": "Elegido de Nissa",
          "language": "Spanish"
        }
      ],
      "printings": [
        "pWPN",
        "ZEN",
        "DDR"
      ],
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        },
        {
          "format": "Zendikar Block",
          "legality": "Legal"
        }
      ],
      "source": "Zendikar Game Day",
      "id": "a28db10d4aae84704288c9352059eeae96fcc9cb"
    },
    {
      "name": "Nissa Revane",
      "manaCost": "{2}{G}{G}",
      "cmc": 4,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Planeswalker — Nissa",
      "types": [
        "Planeswalker"
      ],
      "subtypes": [
        "Nissa"
      ],
      "rarity": "Mythic Rare",
      "set": "ZEN",
      "setName": "Zendikar",
      "text": "+1: Search your library for a card named Nissa's Chosen and put it onto the battlefield. Then shuffle your library.\n+1: You gain 2 life for each Elf you control.\n−7: Search your library for any number of Elf creature cards and put them onto the battlefield. Then shuffle your library.",
      "artist": "Jaime Jones",
      "number": "170",
      "layout": "normal",
      "multiverseid": 190411,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=190411&type=card",
      "loyalty": 2,
      "rulings": [
        {
          "date": "2009-10-01",
          "text": "You may activate Nissa's first ability even if you know you have no cards named Nissa's Chosen in your library. You must still shuffle your library in that situation."
        },
        {
          "date": "2009-10-01",
          "text": "You may activate Nissa's second ability even if you control no Elves."
        }
      ],
      "foreignNames": [
        {
          "name": "妮莎瑞文",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=204788&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 204788
        },
        {
          "name": "Nissa Revane",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=204519&type=card",
          "language": "French",
          "multiverseid": 204519
        },
        {
          "name": "Nissa Revane",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=204250&type=card",
          "language": "German",
          "multiverseid": 204250
        },
        {
          "name": "Nissa Revane",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=203174&type=card",
          "language": "Italian",
          "multiverseid": 203174
        },
        {
          "name": "ニッサ・レヴェイン",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=203981&type=card",
          "language": "Japanese",
          "multiverseid": 203981
        },
        {
          "name": "Nissa Revane",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=203712&type=card",
          "language": "Portuguese (Brazil)",
          "multiverseid": 203712
        },
        {
          "name": "Нисса Ревейн",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=203443&type=card",
          "language": "Russian",
          "multiverseid": 203443
        },
        {
          "name": "Nissa Revane",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=202905&type=card",
          "language": "Spanish",
          "multiverseid": 202905
        }
      ],
      "printings": [
        "pMEI",
        "ZEN"
      ],
      "originalText": "+1: Search your library for a card named Nissa's Chosen and put it onto the battlefield. Then shuffle your library.\n+1: You gain 2 life for each Elf you control.\n-7: Search your library for any number of Elf creature cards and put them onto the battlefield. Then shuffle your library.",
      "originalType": "Planeswalker — Nissa",
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        },
        {
          "format": "Zendikar Block",
          "legality": "Legal"
        }
      ],
      "id": "8f16cd8d11dfd19c0dce33a157a75ab83f960675"
    },
    {
      "name": "Nissa's Chosen",
      "manaCost": "{G}{G}",
      "cmc": 2,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Creature — Elf Warrior",
      "types": [
        "Creature"
      ],
      "subtypes": [
        "Elf",
        "Warrior"
      ],
      "rarity": "Common",
      "set": "ZEN",
      "setName": "Zendikar",
      "text": "If Nissa's Chosen would die, put it on the bottom of its owner's library instead.",
      "flavor": "\"Nissa will save the elves, but only the ones who have proved their worth.\"",
      "artist": "Jaime Jones",
      "number": "171",
      "power": "2",
      "toughness": "3",
      "layout": "normal",
      "multiverseid": 185699,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=185699&type=card",
      "foreignNames": [
        {
          "name": "妮莎精卫",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=204789&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 204789
        },
        {
          "name": "Élu de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=204520&type=card",
          "language": "French",
          "multiverseid": 204520
        },
        {
          "name": "Nissas Ausgewählter",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=204251&type=card",
          "language": "German",
          "multiverseid": 204251
        },
        {
          "name": "Prescelto di Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=203175&type=card",
          "language": "Italian",
          "multiverseid": 203175
        },
        {
          "name": "ニッサに選ばれし者",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=203982&type=card",
          "language": "Japanese",
          "multiverseid": 203982
        },
        {
          "name": "Escolhido de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=203713&type=card",
          "language": "Portuguese (Brazil)",
          "multiverseid": 203713
        },
        {
          "name": "Избранник Ниссы",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=203444&type=card",
          "language": "Russian",
          "multiverseid": 203444
        },
        {
          "name": "Elegido de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=202906&type=card",
          "language": "Spanish",
          "multiverseid": 202906
        }
      ],
      "printings": [
        "pWPN",
        "ZEN",
        "DDR"
      ],
      "originalText": "If Nissa's Chosen would be put into a graveyard from the battlefield, put it on the bottom of its owner's library instead.",
      "originalType": "Creature — Elf Warrior",
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        },
        {
          "format": "Zendikar Block",
          "legality": "Legal"
        }
      ],
      "id": "c449140770e7ea12f456a4132ad37553449d53be"
    },
    {
      "name": "Nissa, Worldwaker",
      "manaCost": "{3}{G}{G}",
      "cmc": 5,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Planeswalker — Nissa",
      "types": [
        "Planeswalker"
      ],
      "subtypes": [
        "Nissa"
      ],
      "rarity": "Mythic Rare",
      "set": "M15",
      "setName": "Magic 2015 Core Set",
      "text": "+1: Target land you control becomes a 4/4 Elemental creature with trample. It's still a land.\n+1: Untap up to four target Forests.\n−7: Search your library for any number of basic land cards, put them onto the battlefield, then shuffle your library. Those lands become 4/4 Elemental creatures with trample. They're still lands.",
      "artist": "Peter Mohrbacher",
      "number": "187",
      "layout": "normal",
      "multiverseid": 383328,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383328&type=card",
      "loyalty": 3,
      "rulings": [
        {
          "date": "2014-07-18",
          "text": "The type-changing effects of the first and third abilities don't have a duration. They last indefinitely."
        },
        {
          "date": "2014-07-18",
          "text": "If the land targeted by the first ability entered the battlefield this turn, it won't be able to attack and its activated abilities with {T} in the cost (including its mana ability) can't be activated (unless something gives it haste). The same is true for the lands put onto the battlefield with the third ability."
        }
      ],
      "foreignNames": [
        {
          "name": "醒世师妮莎",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383612&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 383612
        },
        {
          "name": "醒世師妮莎",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383896&type=card",
          "language": "Chinese Traditional",
          "multiverseid": 383896
        },
        {
          "name": "Nissa, éveilleuse de mondes",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=384464&type=card",
          "language": "French",
          "multiverseid": 384464
        },
        {
          "name": "Nissa die Weltenerweckerin",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=384180&type=card",
          "language": "German",
          "multiverseid": 384180
        },
        {
          "name": "Nissa del Mondo Risvegliato",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=384748&type=card",
          "language": "Italian",
          "multiverseid": 384748
        },
        {
          "name": "世界を目覚めさせる者、ニッサ",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=385032&type=card",
          "language": "Japanese",
          "multiverseid": 385032
        },
        {
          "name": "세계를 깨우는 니사",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=385316&type=card",
          "language": "Korean",
          "multiverseid": 385316
        },
        {
          "name": "Nissa, Despertadora do Mundo",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=385600&type=card",
          "language": "Portuguese (Brazil)",
          "multiverseid": 385600
        },
        {
          "name": "Нисса, Пробудившая Мир",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=385884&type=card",
          "language": "Russian",
          "multiverseid": 385884
        },
        {
          "name": "Nissa, despertadora del mundo",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386168&type=card",
          "language": "Spanish",
          "multiverseid": 386168
        }
      ],
      "printings": [
        "pMEI",
        "M15"
      ],
      "originalText": "+1: Target land you control becomes a 4/4 Elemental creature with trample. It's still a land.\n+1: Untap up to four target Forests.\n−7: Search your library for any number of basic land cards, put them onto the battlefield, then shuffle your library. Those lands become 4/4 Elemental creatures with trample. They're still lands.",
      "originalType": "Planeswalker — Nissa",
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "id": "56d6e6fd4c046a0c392de24119fb7dfe12cb5b67"
    },
    {
      "name": "Nissa's Expedition",
      "manaCost": "{4}{G}",
      "cmc": 5,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Sorcery",
      "types": [
        "Sorcery"
      ],
      "rarity": "Uncommon",
      "set": "M15",
      "setName": "Magic 2015 Core Set",
      "text": "Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of that creature's color.)\nSearch your library for up to two basic land cards, put them onto the battlefield tapped, then shuffle your library.",
      "artist": "Dan Scott",
      "number": "188",
      "layout": "normal",
      "multiverseid": 383329,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383329&type=card",
      "rulings": [
        {
          "date": "2014-07-18",
          "text": "The rules for convoke have changed slightly since it last appeared in an expansion. Previously, convoke reduced the cost to cast a spell. Under current rules, you tap creatures at the same time you pay the spell's costs. Tapping a creature this way is simply another way to pay."
        },
        {
          "date": "2014-07-18",
          "text": "Convoke doesn't change a spell's mana cost or converted mana cost."
        },
        {
          "date": "2014-07-18",
          "text": "When calculating a spell's total cost, include any alternative costs, additional costs, or anything else that increases or reduces the cost to cast the spell. Convoke applies after the total cost is calculated."
        },
        {
          "date": "2014-07-18",
          "text": "Because convoke isn't an alternative cost, it can be used in conjunction with alternative costs."
        },
        {
          "date": "2014-07-18",
          "text": "Tapping a multicolored creature using convoke will pay for {1} or one mana of your choice of any of that creature's colors."
        },
        {
          "date": "2014-07-18",
          "text": "When using convoke to cast a spell with {G}."
        },
        {
          "date": "2014-07-18",
          "text": "If a creature you control has a mana ability with {T} in the cost, activating that ability while casting a spell with convoke will result in the creature being tapped when you pay the spell's costs. You won't be able to tap it again for convoke. Similarly, if you sacrifice a creature to activate a mana ability while casting a spell with convoke, that creature won't be on the battlefield when you pay the spell's costs, so you won't be able to tap it for convoke."
        }
      ],
      "foreignNames": [
        {
          "name": "妮莎的探险",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383613&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 383613
        },
        {
          "name": "妮莎的探險",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=383897&type=card",
          "language": "Chinese Traditional",
          "multiverseid": 383897
        },
        {
          "name": "Expédition de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=384465&type=card",
          "language": "French",
          "multiverseid": 384465
        },
        {
          "name": "Nissas Expedition",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=384181&type=card",
          "language": "German",
          "multiverseid": 384181
        },
        {
          "name": "Spedizione di Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=384749&type=card",
          "language": "Italian",
          "multiverseid": 384749
        },
        {
          "name": "ニッサの探検",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=385033&type=card",
          "language": "Japanese",
          "multiverseid": 385033
        },
        {
          "name": "니사의 탐험",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=385317&type=card",
          "language": "Korean",
          "multiverseid": 385317
        },
        {
          "name": "Expedição de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=385601&type=card",
          "language": "Portuguese (Brazil)",
          "multiverseid": 385601
        },
        {
          "name": "Экспедиция Ниссы",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=385885&type=card",
          "language": "Russian",
          "multiverseid": 385885
        },
        {
          "name": "Expedición de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=386169&type=card",
          "language": "Spanish",
          "multiverseid": 386169
        }
      ],
      "printings": [
        "M15"
      ],
      "originalText": "Convoke (Your creatures can help cast this spell. Each creature you tap while casting this spell pays for {1} or one mana of that creature's color.)\nSearch your library for up to two basic land cards, put them onto the battlefield tapped, then shuffle your library.",
      "originalType": "Sorcery",
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "id": "07ebd5c02fa74f3e6389909b35ce32f07dd7b677"
    },
    {
      "name": "Nissa, Vastwood Seer",
      "names": [
        "Nissa, Vastwood Seer",
        "Nissa, Sage Animist"
      ],
      "manaCost": "{2}{G}",
      "cmc": 3,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Legendary Creature — Elf Scout",
      "supertypes": [
        "Legendary"
      ],
      "types": [
        "Creature"
      ],
      "subtypes": [
        "Elf",
        "Scout"
      ],
      "rarity": "Mythic Rare",
      "set": "ORI",
      "setName": "Magic Origins",
      "text": "When Nissa, Vastwood Seer enters the battlefield, you may search your library for a basic Forest card, reveal it, put it into your hand, then shuffle your library.\nWhenever a land enters the battlefield under your control, if you control seven or more lands, exile Nissa, then return her to the battlefield transformed under her owner's control.",
      "artist": "Wesley Burt",
      "number": "189a",
      "power": "2",
      "toughness": "2",
      "layout": "double-faced",
      "multiverseid": 398438,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=398438&type=card",
      "rulings": [
        {
          "date": "2015-06-22",
          "text": "Nissa, Vastwood Seer is exiled as a result of her second triggered ability. If she enters the battlefield while you control seven or more lands, she won't automatically be exiled and transform."
        },
        {
          "date": "2015-06-22",
          "text": "Each face of a double-faced card has its own set of characteristics: name, types, subtypes, power and toughness, loyalty, abilities, and so on. While a double-faced card is on the battlefield, consider only the characteristics of the face that's currently up. The other set of characteristics is ignored. While a double-faced card isn't on the battlefield, consider only the characteristics of its front face."
        },
        {
          "date": "2015-06-22",
          "text": "The converted mana cost of a double-faced card not on the battlefield is the converted mana cost of its front face."
        },
        {
          "date": "2015-06-22",
          "text": "The back face of a double-faced card (in the case of Magic Origins, the planeswalker face) can't be cast."
        },
        {
          "date": "2015-06-22",
          "text": "Although the two rules are similar, the \"legend rule\" and the \"planeswalker uniqueness rule\" affect different kinds of permanents. You can control two of this permanent, one front face-up and the other back-face up at the same time. However, if the former is exiled and enters the battlefield transformed, you'll then control two planeswalkers with the same subtype. You'll choose one to remain on the battlefield, and the other will be put into its owner's graveyard."
        },
        {
          "date": "2015-06-22",
          "text": "A double-faced card enters the battlefield with its front face up by default, unless a spell or ability instructs you to put it onto the battlefield transformed, in which case it enters with its back face up."
        },
        {
          "date": "2015-06-22",
          "text": "A Magic Origins planeswalker that enters the battlefield because of the ability of its front face will enter with loyalty counters as normal."
        },
        {
          "date": "2015-06-22",
          "text": "In some rare cases, a spell or ability may cause one of these five cards to transform while it's a creature (front face up) on the battlefield. If this happens, the resulting planeswalker won't have any loyalty counters on it and will subsequently be put into its owner's graveyard."
        },
        {
          "date": "2015-06-22",
          "text": "You can activate one of the planeswalker's loyalty abilities the turn it enters the battlefield. However, you may do so only during one of your main phases when the stack is empty. For example, if the planeswalker enters the battlefield during combat, there will be an opportunity for your opponent to remove it before you can activate one of its abilities."
        },
        {
          "date": "2015-06-22",
          "text": "If a double-faced card is manifested, it will be put onto the battlefield face down (this is also true if it's put onto the battlefield face down some other way). Note that \"face down\" is not synonymous with \"with its back face up.\" A manifested double-faced card is a 2/2 creature with no name, mana cost, creature types, or abilities. While face down, it can't transform. If the front face of a manifested double-faced card is a creature card, you can turn it face up by paying its mana cost. If you do, its front face will be up. A double-faced card on the battlefield can't be turned face down."
        },
        {
          "date": "2016-04-08",
          "text": "The back face of a double-faced card doesn't have a mana cost. A double-faced permanent with its back face up has a converted mana cost equal to the converted mana cost of its front face. Each back face has a color indicator that defines its color."
        },
        {
          "date": "2016-07-13",
          "text": "For more information on double-faced cards, see the Shadows over Innistrad mechanics article (http://magic.wizards.com/en/articles/archive/feature/shadows-over-innistrad-mechanics)."
        }
      ],
      "foreignNames": [
        {
          "name": "广林预言师妮莎",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=398715&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 398715
        },
        {
          "name": "廣林預言師妮莎",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=398992&type=card",
          "language": "Chinese Traditional",
          "multiverseid": 398992
        },
        {
          "name": "Nissa, voyante de Vastebois",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=399546&type=card",
          "language": "French",
          "multiverseid": 399546
        },
        {
          "name": "Nissa, Seherin aus Riesenholz",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=399269&type=card",
          "language": "German",
          "multiverseid": 399269
        },
        {
          "name": "Nissa, Veggente di Boscovasto",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=399823&type=card",
          "language": "Italian",
          "multiverseid": 399823
        },
        {
          "name": "巨森の予見者、ニッサ",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400100&type=card",
          "language": "Japanese",
          "multiverseid": 400100
        },
        {
          "name": "광활림의 예언자 니사",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400377&type=card",
          "language": "Korean",
          "multiverseid": 400377
        },
        {
          "name": "Nissa, Vidente de Matavasta",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400654&type=card",
          "language": "Portuguese (Brazil)",
          "multiverseid": 400654
        },
        {
          "name": "Нисса, Провидица Широколесья",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400931&type=card",
          "language": "Russian",
          "multiverseid": 400931
        },
        {
          "name": "Nissa, vidente del Bosque Extenso",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=401208&type=card",
          "language": "Spanish",
          "multiverseid": 401208
        }
      ],
      "printings": [
        "pPRE",
        "ORI"
      ],
      "originalText": "When Nissa, Vastwood Seer enters the battlefield, you may search your library for a basic Forest card, reveal it, put it into your hand, then shuffle your library.Whenever a land enters the battlefield under your control, if you control seven or more lands, exile Nissa, then return her to the battlefield transformed under her owner's control.",
      "originalType": "Legendary Creature — Elf Scout",
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "id": "54d82f772bafa89bdc1573dd956552c9e7d3766e"
    },
    {
      "name": "Nissa, Sage Animist",
      "names": [
        "Nissa, Vastwood Seer",
        "Nissa, Sage Animist"
      ],
      "cmc": 3,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Planeswalker — Nissa",
      "types": [
        "Planeswalker"
      ],
      "subtypes": [
        "Nissa"
      ],
      "rarity": "Mythic Rare",
      "set": "ORI",
      "setName": "Magic Origins",
      "text": "+1: Reveal the top card of your library. If it's a land card, put it onto the battlefield. Otherwise, put it into your hand.\n−2: Create a legendary 4/4 green Elemental creature token named Ashaya, the Awoken World.\n−7: Untap up to six target lands. They become 6/6 Elemental creatures. They're still lands.",
      "artist": "Wesley Burt",
      "number": "189b",
      "layout": "double-faced",
      "multiverseid": 398432,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=398432&type=card",
      "loyalty": 3,
      "rulings": [
        {
          "date": "2015-06-22",
          "text": "You can activate Nissa, Sage Animist's second ability even if you already control an Ashaya, the Awoken World. Just after the second token is created, you'll choose one to remain on the battlefield. The other will be put into your graveyard and subsequently cease to exist."
        },
        {
          "date": "2015-06-22",
          "text": "If a land becomes a creature but hasn't continuously been under its controller's control since that player's most recent turn began, it won't be able to attack and its abilities with {T} in the cost (including mana abilities) won't be able to be activated. In other words, look at how long the permanent itself has been under your control, not how long it's been a creature."
        }
      ],
      "foreignNames": [
        {
          "name": "物灵智者妮莎",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=398709&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 398709
        },
        {
          "name": "物靈智者妮莎",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=398986&type=card",
          "language": "Chinese Traditional",
          "multiverseid": 398986
        },
        {
          "name": "Nissa, sage animiste",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=399540&type=card",
          "language": "French",
          "multiverseid": 399540
        },
        {
          "name": "Nissa, die weise Animistin",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=399263&type=card",
          "language": "German",
          "multiverseid": 399263
        },
        {
          "name": "Nissa, Saggia Animista",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=399817&type=card",
          "language": "Italian",
          "multiverseid": 399817
        },
        {
          "name": "精霊信者の賢人、ニッサ",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400094&type=card",
          "language": "Japanese",
          "multiverseid": 400094
        },
        {
          "name": "현명한 정령숭배자 니사",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400371&type=card",
          "language": "Korean",
          "multiverseid": 400371
        },
        {
          "name": "Nissa, Sábia Animista",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400648&type=card",
          "language": "Portuguese (Brazil)",
          "multiverseid": 400648
        },
        {
          "name": "Нисса, Премудрый Анимист",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400925&type=card",
          "language": "Russian",
          "multiverseid": 400925
        },
        {
          "name": "Nissa, animista sabia",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=401202&type=card",
          "language": "Spanish",
          "multiverseid": 401202
        }
      ],
      "printings": [
        "ORI"
      ],
      "originalText": "+1: Reveal the top card of your library. If it's a land card, put it onto the battlefield. Otherwise, put it into your hand.−2: Put a legendary 4/4 green Elemental creature token named Ashaya, the Awoken World onto the battlefield.−7: Untap up to six target lands. They become 6/6 Elemental creatures. They're still lands.",
      "originalType": "Planeswalker — Nissa",
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "id": "e8b7cc901afb032ab1f8113c946ebdb63da6e4ab"
    },
    {
      "name": "Nissa's Pilgrimage",
      "manaCost": "{2}{G}",
      "cmc": 3,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Sorcery",
      "types": [
        "Sorcery"
      ],
      "rarity": "Common",
      "set": "ORI",
      "setName": "Magic Origins",
      "text": "Search your library for up to two basic Forest cards, reveal those cards, and put one onto the battlefield tapped and the rest into your hand. Then shuffle your library.\nSpell mastery — If there are two or more instant and/or sorcery cards in your graveyard, search your library for up to three basic Forest cards instead of two.",
      "artist": "Matt Stewart",
      "number": "190",
      "layout": "normal",
      "multiverseid": 398593,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=398593&type=card",
      "rulings": [
        {
          "date": "2015-06-22",
          "text": "If you only find one basic Forest card, you'll put it onto the battlefield tapped. You won't be able to put it into your hand, even if you want to."
        },
        {
          "date": "2015-06-22",
          "text": "If the spell mastery ability applies, and you find three basic Forest cards, one of them will be put onto the battlefield tapped and two of them will be put into your hand."
        },
        {
          "date": "2015-06-22",
          "text": "Check to see if there are two or more instant and/or sorcery cards in your graveyard as the spell resolves to determine whether the spell mastery ability applies. The spell itself won't count because it's still on the stack as you make this check."
        }
      ],
      "foreignNames": [
        {
          "name": "妮莎的朝圣",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=398870&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 398870
        },
        {
          "name": "妮莎的朝聖",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=399147&type=card",
          "language": "Chinese Traditional",
          "multiverseid": 399147
        },
        {
          "name": "Pèlerinage de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=399701&type=card",
          "language": "French",
          "multiverseid": 399701
        },
        {
          "name": "Nissas Pilgerreise",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=399424&type=card",
          "language": "German",
          "multiverseid": 399424
        },
        {
          "name": "Pellegrinaggio di Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=399978&type=card",
          "language": "Italian",
          "multiverseid": 399978
        },
        {
          "name": "ニッサの巡礼",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400255&type=card",
          "language": "Japanese",
          "multiverseid": 400255
        },
        {
          "name": "니사의 순례",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400532&type=card",
          "language": "Korean",
          "multiverseid": 400532
        },
        {
          "name": "Peregrinação de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400809&type=card",
          "language": "Portuguese (Brazil)",
          "multiverseid": 400809
        },
        {
          "name": "Паломничество Ниссы",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=401086&type=card",
          "language": "Russian",
          "multiverseid": 401086
        },
        {
          "name": "Peregrinación de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=401363&type=card",
          "language": "Spanish",
          "multiverseid": 401363
        }
      ],
      "printings": [
        "pFNM",
        "ORI"
      ],
      "originalText": "Search your library for up to two basic Forest cards, reveal those cards, and put one onto the battlefield tapped and the rest into your hand. Then shuffle your library.Spell mastery — If there are two or more instant and/or sorcery cards in your graveyard, search your library for up to three basic Forest cards instead of two.",
      "originalType": "Sorcery",
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "id": "3e4d43a4ca7d467949d977c8a2ca10518844891c"
    },
    {
      "name": "Nissa's Revelation",
      "manaCost": "{5}{G}{G}",
      "cmc": 7,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Sorcery",
      "types": [
        "Sorcery"
      ],
      "rarity": "Rare",
      "set": "ORI",
      "setName": "Magic Origins",
      "text": "Scry 5, then reveal the top card of your library. If it's a creature card, you draw cards equal to its power and you gain life equal to its toughness.",
      "flavor": "The evil inside the mountain pulsed at Nissa in a shock wave of madness.",
      "artist": "Izzy",
      "number": "191",
      "layout": "normal",
      "multiverseid": 398506,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=398506&type=card",
      "rulings": [
        {
          "date": "2015-06-22",
          "text": "If the top card of your library isn't a creature card or it's a creature card with power 0 or less, you won't draw any cards. Otherwise, the first card you draw will be the card you revealed."
        }
      ],
      "foreignNames": [
        {
          "name": "妮莎的启示",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=398783&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 398783
        },
        {
          "name": "妮莎的啟示",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=399060&type=card",
          "language": "Chinese Traditional",
          "multiverseid": 399060
        },
        {
          "name": "Révélation de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=399614&type=card",
          "language": "French",
          "multiverseid": 399614
        },
        {
          "name": "Nissas Offenbarung",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=399337&type=card",
          "language": "German",
          "multiverseid": 399337
        },
        {
          "name": "Rivelazione di Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=399891&type=card",
          "language": "Italian",
          "multiverseid": 399891
        },
        {
          "name": "ニッサの天啓",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400168&type=card",
          "language": "Japanese",
          "multiverseid": 400168
        },
        {
          "name": "니사의 계시",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400445&type=card",
          "language": "Korean",
          "multiverseid": 400445
        },
        {
          "name": "Revelação de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400722&type=card",
          "language": "Portuguese (Brazil)",
          "multiverseid": 400722
        },
        {
          "name": "Откровение Ниссы",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=400999&type=card",
          "language": "Russian",
          "multiverseid": 400999
        },
        {
          "name": "Revelación de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=401276&type=card",
          "language": "Spanish",
          "multiverseid": 401276
        }
      ],
      "printings": [
        "pPRE",
        "ORI"
      ],
      "originalText": "Scry 5, then reveal the top card of your library. If it's a creature card, you draw cards equal to its power and you gain life equal to its toughness.",
      "originalType": "Sorcery",
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "id": "3609bec095839f5e68369aec25481375bf80cd6d"
    },
    {
      "name": "Nissa's Renewal",
      "manaCost": "{5}{G}",
      "cmc": 6,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Sorcery",
      "types": [
        "Sorcery"
      ],
      "rarity": "Rare",
      "set": "BFZ",
      "setName": "Battle for Zendikar",
      "text": "Search your library for up to three basic land cards, put them onto the battlefield tapped, then shuffle your library. You gain 7 life.",
      "flavor": "Her connection to the plane restored, Nissa felt the power of Zendikar surge through her.",
      "artist": "Lius Lasahido",
      "number": "180",
      "layout": "normal",
      "multiverseid": 401969,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=401969&type=card",
      "foreignNames": [
        {
          "name": "妮莎重光",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=402268&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 402268
        },
        {
          "name": "妮莎重光",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=402567&type=card",
          "language": "Chinese Traditional",
          "multiverseid": 402567
        },
        {
          "name": "Renouveau de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=403165&type=card",
          "language": "French",
          "multiverseid": 403165
        },
        {
          "name": "Nissas Erneuerung",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=402866&type=card",
          "language": "German",
          "multiverseid": 402866
        },
        {
          "name": "Rinnovamento di Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=403464&type=card",
          "language": "Italian",
          "multiverseid": 403464
        },
        {
          "name": "ニッサの復興",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=403763&type=card",
          "language": "Japanese",
          "multiverseid": 403763
        },
        {
          "name": "니사의 회생",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=404062&type=card",
          "language": "Korean",
          "multiverseid": 404062
        },
        {
          "name": "Renovação de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=404361&type=card",
          "language": "Portuguese (Brazil)",
          "multiverseid": 404361
        },
        {
          "name": "Обновление Ниссы",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=404660&type=card",
          "language": "Russian",
          "multiverseid": 404660
        },
        {
          "name": "Renovación de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=404959&type=card",
          "language": "Spanish",
          "multiverseid": 404959
        }
      ],
      "printings": [
        "pPRE",
        "BFZ"
      ],
      "originalText": "Search your library for up to three basic land cards, put them onto the battlefield tapped, then shuffle your library. You gain 7 life.",
      "originalType": "Sorcery",
      "legalities": [
        {
          "format": "Battle for Zendikar Block",
          "legality": "Legal"
        },
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Standard",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "id": "7bce6d3f5066b503c68e64125834ee1b78f12809"
    },
    {
      "name": "Nissa, Voice of Zendikar",
      "manaCost": "{1}{G}{G}",
      "cmc": 3,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Planeswalker — Nissa",
      "types": [
        "Planeswalker"
      ],
      "subtypes": [
        "Nissa"
      ],
      "rarity": "Mythic Rare",
      "set": "OGW",
      "setName": "Oath of the Gatewatch",
      "text": "+1: Create a 0/1 green Plant creature token.\n−2: Put a +1/+1 counter on each creature you control.\n−7: You gain X life and draw X cards, where X is the number of lands you control.",
      "artist": "Raymond Swanland",
      "number": "138",
      "layout": "normal",
      "multiverseid": 407648,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=407648&type=card",
      "loyalty": 3,
      "foreignNames": [
        {
          "name": "赞迪卡之声妮莎",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=407834&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 407834
        },
        {
          "name": "贊迪卡之聲妮莎",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408020&type=card",
          "language": "Chinese Traditional",
          "multiverseid": 408020
        },
        {
          "name": "Nissa, voix de Zendikar",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408392&type=card",
          "language": "French",
          "multiverseid": 408392
        },
        {
          "name": "Nissa, Stimme Zendikars",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408206&type=card",
          "language": "German",
          "multiverseid": 408206
        },
        {
          "name": "Nissa, Voce di Zendikar",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408578&type=card",
          "language": "Italian",
          "multiverseid": 408578
        },
        {
          "name": "ゼンディカーの代弁者、ニッサ",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408764&type=card",
          "language": "Japanese",
          "multiverseid": 408764
        },
        {
          "name": "젠디카르의 목소리 니사",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408950&type=card",
          "language": "Korean",
          "multiverseid": 408950
        },
        {
          "name": "Nissa, Voz de Zendikar",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409136&type=card",
          "language": "Portuguese (Brazil)",
          "multiverseid": 409136
        },
        {
          "name": "Нисса, Голос Зендикара",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409322&type=card",
          "language": "Russian",
          "multiverseid": 409322
        },
        {
          "name": "Nissa, la voz de Zendikar",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409508&type=card",
          "language": "Spanish",
          "multiverseid": 409508
        }
      ],
      "printings": [
        "OGW",
        "DDR"
      ],
      "originalText": "+1: Put a 0/1 green Plant creature token onto the battlefield.\n−2: Put a +1/+1 counter on each creature you control.\n−7: You gain X life and draw X cards, where X is the number of lands you control.",
      "originalType": "Planeswalker — Nissa",
      "legalities": [
        {
          "format": "Battle for Zendikar Block",
          "legality": "Legal"
        },
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Standard",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "id": "ad8ccc27916504302bf130a89e175b56af77b531"
    },
    {
      "name": "Nissa's Judgment",
      "manaCost": "{4}{G}",
      "cmc": 5,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Sorcery",
      "types": [
        "Sorcery"
      ],
      "rarity": "Uncommon",
      "set": "OGW",
      "setName": "Oath of the Gatewatch",
      "text": "Support 2. (Put a +1/+1 counter on each of up to two target creatures.)\nChoose up to one target creature an opponent controls. Each creature you control with a +1/+1 counter on it deals damage equal to its power to that creature.",
      "artist": "Tyler Jacobson",
      "number": "139",
      "layout": "normal",
      "multiverseid": 407649,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=407649&type=card",
      "rulings": [
        {
          "date": "2016-01-22",
          "text": "You finish the support action before any creatures deal damage. Creatures that get a +1/+1 counter will deal damage to the creature an opponent controls, if applicable."
        },
        {
          "date": "2016-01-22",
          "text": "As Nissa's Judgment resolves, if at least one of its targets is still legal, it will resolve, affecting only targets that are still legal at that time. If none of its targets are still legal at that time, it will be countered and none of its effects will happen."
        },
        {
          "date": "2016-01-22",
          "text": "You can't put more than one +1/+1 counter on any one target using the support action."
        },
        {
          "date": "2016-01-22",
          "text": "Support can target a creature you don't control."
        },
        {
          "date": "2016-01-22",
          "text": "If a spell with support has other abilities that target creatures, those abilities and the support ability can target the same creature."
        }
      ],
      "foreignNames": [
        {
          "name": "妮莎的裁决",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=407835&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 407835
        },
        {
          "name": "妮莎的裁決",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408021&type=card",
          "language": "Chinese Traditional",
          "multiverseid": 408021
        },
        {
          "name": "Jugement selon Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408393&type=card",
          "language": "French",
          "multiverseid": 408393
        },
        {
          "name": "Nissas Richtspruch",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408207&type=card",
          "language": "German",
          "multiverseid": 408207
        },
        {
          "name": "Verdetto di Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408579&type=card",
          "language": "Italian",
          "multiverseid": 408579
        },
        {
          "name": "ニッサの裁き",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408765&type=card",
          "language": "Japanese",
          "multiverseid": 408765
        },
        {
          "name": "니사의 심판",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408951&type=card",
          "language": "Korean",
          "multiverseid": 408951
        },
        {
          "name": "Julgamento de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409137&type=card",
          "language": "Portuguese (Brazil)",
          "multiverseid": 409137
        },
        {
          "name": "Правосудие Ниссы",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409323&type=card",
          "language": "Russian",
          "multiverseid": 409323
        },
        {
          "name": "Juicio de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409509&type=card",
          "language": "Spanish",
          "multiverseid": 409509
        }
      ],
      "printings": [
        "OGW"
      ],
      "originalText": "Support 2. (Put a +1/+1 counter on each of up to two target creatures.)\nChoose up to one target creature an opponent controls. Each creature you control with a +1/+1 counter on it deals damage equal to its power to that creature.",
      "originalType": "Sorcery",
      "legalities": [
        {
          "format": "Battle for Zendikar Block",
          "legality": "Legal"
        },
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Standard",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "id": "acb0019abc829ceed9c748b084d8a001537d4a1c"
    },
    {
      "name": "Oath of Nissa",
      "manaCost": "{G}",
      "cmc": 1,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Legendary Enchantment",
      "supertypes": [
        "Legendary"
      ],
      "types": [
        "Enchantment"
      ],
      "rarity": "Rare",
      "set": "OGW",
      "setName": "Oath of the Gatewatch",
      "text": "When Oath of Nissa enters the battlefield, look at the top three cards of your library. You may reveal a creature, land, or planeswalker card from among them and put it into your hand. Put the rest on the bottom of your library in any order.\nYou may spend mana as though it were mana of any color to cast planeswalker spells.",
      "flavor": "\"For the life of every plane, I will keep watch.\"",
      "artist": "Wesley Burt",
      "number": "140",
      "layout": "normal",
      "multiverseid": 407650,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=407650&type=card",
      "rulings": [
        {
          "date": "2016-01-22",
          "text": "Each of the Oaths is legendary: if you control more than one of any particular Oath, you choose one to remain on the battlefield and the others are put into your graveyard."
        },
        {
          "date": "2016-01-22",
          "text": "The \"legend rule\" checks the full names of legendary permanents. You can control Oath of Gideon and Oath of Chandra at the same time, for example."
        },
        {
          "date": "2016-01-22",
          "text": "Even if you control a particular Oath, you can cast another of that Oath to take advantage of its enters-the-battlefield ability. It will enter the battlefield, causing its first ability to trigger. You will then choose one to keep, as detailed above, and then its enters-the-battlefield ability will resolve."
        }
      ],
      "foreignNames": [
        {
          "name": "妮莎的誓约",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=407836&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 407836
        },
        {
          "name": "妮莎的誓約",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408022&type=card",
          "language": "Chinese Traditional",
          "multiverseid": 408022
        },
        {
          "name": "Serment de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408394&type=card",
          "language": "French",
          "multiverseid": 408394
        },
        {
          "name": "Nissas Eid",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408208&type=card",
          "language": "German",
          "multiverseid": 408208
        },
        {
          "name": "Giuramento di Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408580&type=card",
          "language": "Italian",
          "multiverseid": 408580
        },
        {
          "name": "ニッサの誓い",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408766&type=card",
          "language": "Japanese",
          "multiverseid": 408766
        },
        {
          "name": "니사의 맹세",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=408952&type=card",
          "language": "Korean",
          "multiverseid": 408952
        },
        {
          "name": "Juramento de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409138&type=card",
          "language": "Portuguese (Brazil)",
          "multiverseid": 409138
        },
        {
          "name": "Клятва Ниссы",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409324&type=card",
          "language": "Russian",
          "multiverseid": 409324
        },
        {
          "name": "Juramento de Nissa",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=409510&type=card",
          "language": "Spanish",
          "multiverseid": 409510
        }
      ],
      "printings": [
        "OGW"
      ],
      "originalText": "When Oath of Nissa enters the battlefield, look at the top three cards of your library. You may reveal a creature, land, or planeswalker card from among them and put it into your hand. Put the rest on the bottom of your library in any order.\nYou may spend mana as though it were mana of any color to cast planeswalker spells.",
      "originalType": "Legendary Enchantment",
      "legalities": [
        {
          "format": "Battle for Zendikar Block",
          "legality": "Legal"
        },
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Standard",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "id": "eeb4812f2fadb5d52166f6c5922997847dd5d71b"
    },
    {
      "name": "Nissa, Voice of Zendikar",
      "manaCost": "{1}{G}{G}",
      "cmc": 3,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Planeswalker — Nissa",
      "types": [
        "Planeswalker"
      ],
      "subtypes": [
        "Nissa"
      ],
      "rarity": "Mythic Rare",
      "set": "DDR",
      "setName": "Duel Decks: Nissa vs. Ob Nixilis",
      "text": "+1: Create a 0/1 green Plant creature token.\n−2: Put a +1/+1 counter on each creature you control.\n−7: You gain X life and draw X cards, where X is the number of lands you control.",
      "artist": "Raymond Swanland",
      "number": "1",
      "layout": "normal",
      "multiverseid": 417424,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=417424&type=card",
      "loyalty": 3,
      "foreignNames": [
        {
          "name": "ゼンディカーの代弁者、ニッサ",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=417499&type=card",
          "language": "Japanese",
          "multiverseid": 417499
        }
      ],
      "printings": [
        "OGW",
        "DDR"
      ],
      "originalText": "+1: Put a 0/1 green Plant creature token onto the battlefield.\n−2: Put a +1/+1 counter on each creature you control.\n−7: You gain X life and draw X cards, where X is the number of lands you control.",
      "originalType": "Planeswalker — Nissa",
      "legalities": [
        {
          "format": "Battle for Zendikar Block",
          "legality": "Legal"
        },
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Standard",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "id": "4648cfca3be20fdd1f65429dfe78301687a5fe55"
    },
    {
      "name": "Nissa's Chosen",
      "manaCost": "{G}{G}",
      "cmc": 2,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Creature — Elf Warrior",
      "types": [
        "Creature"
      ],
      "subtypes": [
        "Elf",
        "Warrior"
      ],
      "rarity": "Common",
      "set": "DDR",
      "setName": "Duel Decks: Nissa vs. Ob Nixilis",
      "text": "If Nissa's Chosen would die, put it on the bottom of its owner's library instead.",
      "flavor": "Once, Nissa selected worthy fighters to defend the Joraga. Now, she gathers forces to defend all of Zendikar.",
      "artist": "Jaime Jones",
      "number": "14",
      "power": "2",
      "toughness": "3",
      "layout": "normal",
      "multiverseid": 417437,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=417437&type=card",
      "foreignNames": [
        {
          "name": "ニッサに選ばれし者",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=417512&type=card",
          "language": "Japanese",
          "multiverseid": 417512
        }
      ],
      "printings": [
        "pWPN",
        "ZEN",
        "DDR"
      ],
      "originalText": "If Nissa's Chosen would die, put it on the bottom of its owner's library instead.",
      "originalType": "Creature — Elf Warrior",
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        },
        {
          "format": "Zendikar Block",
          "legality": "Legal"
        }
      ],
      "id": "6f266a493bea14f2adf4d3b9041815c426c5eb25"
    },
    {
      "name": "Nissa, Vital Force",
      "manaCost": "{3}{G}{G}",
      "cmc": 5,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Planeswalker — Nissa",
      "types": [
        "Planeswalker"
      ],
      "subtypes": [
        "Nissa"
      ],
      "rarity": "Mythic Rare",
      "set": "KLD",
      "setName": "Kaladesh",
      "text": "+1: Untap target land you control. Until your next turn, it becomes a 5/5 Elemental creature with haste. It's still a land.\n−3: Return target permanent card from your graveyard to your hand.\n−6: You get an emblem with \"Whenever a land enters the battlefield under your control, you may draw a card.\"",
      "artist": "Clint Cearley",
      "number": "163",
      "layout": "normal",
      "multiverseid": 417736,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=417736&type=card",
      "loyalty": 5,
      "rulings": [
        {
          "date": "2016-09-20",
          "text": "You can activate Nissa's first ability targeting a land that's already untapped."
        },
        {
          "date": "2016-09-20",
          "text": "After resolving Nissa's first ability, the target land still has any abilities it had before it became a creature and any other types it had."
        },
        {
          "date": "2016-09-20",
          "text": "A permanent card is an artifact, creature, enchantment, land, or planeswalker card."
        }
      ],
      "foreignNames": [
        {
          "name": "生机妮莎",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=418000&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 418000
        },
        {
          "name": "生機妮莎",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=418264&type=card",
          "language": "Chinese Traditional",
          "multiverseid": 418264
        },
        {
          "name": "Nissa, force vitale",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=418792&type=card",
          "language": "French",
          "multiverseid": 418792
        },
        {
          "name": "Nissa, Macht des Lebens",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=418528&type=card",
          "language": "German",
          "multiverseid": 418528
        },
        {
          "name": "Nissa, Forza Vitale",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=419056&type=card",
          "language": "Italian",
          "multiverseid": 419056
        },
        {
          "name": "生命の力、ニッサ",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=419320&type=card",
          "language": "Japanese",
          "multiverseid": 419320
        },
        {
          "name": "생명력의 원천 니사",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=419584&type=card",
          "language": "Korean",
          "multiverseid": 419584
        },
        {
          "name": "Nissa, Força Vital",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=419848&type=card",
          "language": "Portuguese (Brazil)",
          "multiverseid": 419848
        },
        {
          "name": "Нисса, Жизненная Сила",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420112&type=card",
          "language": "Russian",
          "multiverseid": 420112
        },
        {
          "name": "Nissa, fuerza vital",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420376&type=card",
          "language": "Spanish",
          "multiverseid": 420376
        }
      ],
      "printings": [
        "KLD"
      ],
      "originalText": "+1: Untap target land you control. Until your next turn, it becomes a 5/5 Elemental creature with haste. It's still a land.\n−3: Return target permanent card from your graveyard to your hand.\n−6: You get an emblem with \"Whenever a land enters the battlefield under your control, you may draw a card.\"",
      "originalType": "Planeswalker — Nissa",
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Kaladesh Block",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Standard",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "id": "6af15c8a155714c139094eacc5f5ca243ed3e11c"
    },
    {
      "name": "Nissa, Nature's Artisan",
      "manaCost": "{4}{G}{G}",
      "cmc": 6,
      "colors": [
        "Green"
      ],
      "colorIdentity": [
        "G"
      ],
      "type": "Planeswalker — Nissa",
      "types": [
        "Planeswalker"
      ],
      "subtypes": [
        "Nissa"
      ],
      "rarity": "Mythic Rare",
      "set": "KLD",
      "setName": "Kaladesh",
      "text": "+3: You gain 3 life.\n−4: Reveal the top two cards of your library. Put all land cards from among them onto the battlefield and the rest into your hand.\n−12: Creatures you control get +5/+5 and gain trample until end of turn.",
      "artist": "Willian Murai",
      "number": "270",
      "layout": "normal",
      "multiverseid": 420483,
      "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420483&type=card",
      "loyalty": 5,
      "rulings": [
        {
          "date": "2016-09-20",
          "text": "The set of creatures affected by Nissa's last ability is determined as the ability resolves. Creatures you begin to control later in the turn and noncreature permanents that become creatures later in the turn won't get +5/+5 or gain trample."
        }
      ],
      "foreignNames": [
        {
          "name": "自然巧匠妮莎",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420493&type=card",
          "language": "Chinese Simplified",
          "multiverseid": 420493
        },
        {
          "name": "自然巧匠妮莎",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420503&type=card",
          "language": "Chinese Traditional",
          "multiverseid": 420503
        },
        {
          "name": "Nissa, artisane de la nature",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420523&type=card",
          "language": "French",
          "multiverseid": 420523
        },
        {
          "name": "Nissa, Schöpferin der Natur",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420513&type=card",
          "language": "German",
          "multiverseid": 420513
        },
        {
          "name": "Nissa, Artigiana della Natura",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420533&type=card",
          "language": "Italian",
          "multiverseid": 420533
        },
        {
          "name": "自然の職工、ニッサ",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420543&type=card",
          "language": "Japanese",
          "multiverseid": 420543
        },
        {
          "name": "자연의 장인 니사",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420553&type=card",
          "language": "Korean",
          "multiverseid": 420553
        },
        {
          "name": "Nissa, Artesã da Natureza",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420563&type=card",
          "language": "Portuguese (Brazil)",
          "multiverseid": 420563
        },
        {
          "name": "Нисса, Мастер Природы",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420573&type=card",
          "language": "Russian",
          "multiverseid": 420573
        },
        {
          "name": "Nissa, artesana de la naturaleza",
          "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420583&type=card",
          "language": "Spanish",
          "multiverseid": 420583
        }
      ],
      "printings": [
        "KLD"
      ],
      "originalText": "+3: You gain 3 life.\n−4: Reveal the top two cards of your library. Put all land cards from among them onto the battlefield and the rest into your hand.\n−12: Creatures you control get +5/+5 and gain trample until end of turn.",
      "originalType": "Planeswalker — Nissa",
      "legalities": [
        {
          "format": "Commander",
          "legality": "Legal"
        },
        {
          "format": "Kaladesh Block",
          "legality": "Legal"
        },
        {
          "format": "Legacy",
          "legality": "Legal"
        },
        {
          "format": "Modern",
          "legality": "Legal"
        },
        {
          "format": "Standard",
          "legality": "Legal"
        },
        {
          "format": "Vintage",
          "legality": "Legal"
        }
      ],
      "id": "77c03bf0a126c3ec186a7e827104a5a4f5dfa365"
    }
  ]
};

class Search extends Component {
  render() {
    return (
			<div className="Search">
				<Panel header="Card Search:" className="CardSearch">
					<SearchInput/>
				</Panel>
				<Panel className="Results" header="Results">
					<ListGroup className="ResultsList">
						{ nissaResults.cards.map( (card, index) => {
							if(card.imageUrl){
								return (
									<ListGroupItem key={index}>
										<CardResult {...card}/>
									</ListGroupItem>
								)
							}
						} ) }	
					</ListGroup>
				</Panel>
      </div>
    );
  }
}

export default Search;
