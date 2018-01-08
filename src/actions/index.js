import { FETCH_RESTAURANTS } from './types';
import axios from 'axios';

export async function fetchRestaurants(city) {
  return {
    type: FETCH_RESTAURANTS,
    payload: resp
  };
}

const resp = {
    "businesses": [
        {
            "id": "skøg-urban-hub-brno",
            "name": "SKØG Urban Hub",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/FlkqNWuth9REzsxJI00zPw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sk%C3%B8g-urban-hub-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 16,
            "categories": [
                {
                    "alias": "bars",
                    "title": "Bars"
                },
                {
                    "alias": "cafes",
                    "title": "Cafes"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 49.19397,
                "longitude": 16.60747
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Dominikanske namesti 5",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Dominikanske namesti 5",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420608216601",
            "display_phone": "+420 608 216 601",
            "distance": 2302.383602656
        },
        {
            "id": "bistro-franz-brno",
            "name": "Bistro Franz",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/xiIJxsUisM1ooZl-X8mG9Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/bistro-franz-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 12,
            "categories": [
                {
                    "alias": "bistros",
                    "title": "Bistros"
                },
                {
                    "alias": "organic_stores",
                    "title": "Organic Stores"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 49.1996012,
                "longitude": 16.6024777
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Veveří 461/14",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Veveří 461/14",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420606608896",
            "display_phone": "+420 606 608 896",
            "distance": 1774.688580554
        },
        {
            "id": "hotel-pegas-brno-brno-3",
            "name": "Hotel Pegas Brno",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/WZdFjxnD4v88S_GBq6HNAQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/hotel-pegas-brno-brno-3?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 12,
            "categories": [
                {
                    "alias": "czech",
                    "title": "Czech"
                },
                {
                    "alias": "brasseries",
                    "title": "Brasseries"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 49.1962,
                "longitude": 16.60711
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Jakubská 120/4",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Jakubská 120/4",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420542210104",
            "display_phone": "+420 542 210 104",
            "distance": 2190.910736348
        },
        {
            "id": "indická-restaurace-annapurna-brno",
            "name": "Indická restaurace Annapurna",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/W1NpTZwKh4OvBHMtySUkRQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/indick%C3%A1-restaurace-annapurna-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 12,
            "categories": [
                {
                    "alias": "indpak",
                    "title": "Indian"
                },
                {
                    "alias": "himalayan",
                    "title": "Himalayan/Nepalese"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 49.1922116946498,
                "longitude": 16.612331034954
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Josefská 427/14",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Josefská 427/14",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420774995122",
            "display_phone": "+420 774 995 122",
            "distance": 2704.521297572
        },
        {
            "id": "café-a-bar-v-melounovém-cukru-brno",
            "name": "Café & Bar V Melounovém cukru",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/NmOgQym916PDSYtgW5psoQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/caf%C3%A9-a-bar-v-melounov%C3%A9m-cukru-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 11,
            "categories": [
                {
                    "alias": "cafes",
                    "title": "Cafes"
                },
                {
                    "alias": "bars",
                    "title": "Bars"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 49.192945464193,
                "longitude": 16.6118512796364
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Františkánská 17",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Františkánská 17",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420774422478",
            "display_phone": "+420 774 422 478",
            "distance": 2639.994810272
        },
        {
            "id": "kafec-brno",
            "name": "Kafec",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/_Bw2Bcc9qAWJlYhriHzHbA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/kafec-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 12,
            "categories": [
                {
                    "alias": "desserts",
                    "title": "Desserts"
                },
                {
                    "alias": "cafes",
                    "title": "Cafes"
                },
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 49.1993218,
                "longitude": 16.6028307
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "Veveří 10",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Veveří 10",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420773699929",
            "display_phone": "+420 773 699 929",
            "distance": 1805.165134936
        },
        {
            "id": "monte-bú-brno",
            "name": "Monte Bú",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/oBhVdhe85dtv_jN0EoqrUA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/monte-b%C3%BA-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 13,
            "categories": [
                {
                    "alias": "steak",
                    "title": "Steakhouses"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 49.2012669617906,
                "longitude": 16.5839723545687
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "Údolní 76",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Údolní 76",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420543234856",
            "display_phone": "+420 543 234 856",
            "distance": 419.165316786
        },
        {
            "id": "koishi-brno",
            "name": "Koishi",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/4dDRV5z-wg5xEjBEQTYTpQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/koishi-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 9,
            "categories": [
                {
                    "alias": "japanese",
                    "title": "Japanese"
                },
                {
                    "alias": "asianfusion",
                    "title": "Asian Fusion"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 49.1965294,
                "longitude": 16.6012707
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "Údolní 11",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Údolní 11",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "",
            "display_phone": "",
            "distance": 1778.27322447
        },
        {
            "id": "forhaus-wine-a-restaurant-brno",
            "name": "Forhaus - Wine & Restaurant",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/2mY9qLGRe72eNGE5qrLdwA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/forhaus-wine-a-restaurant-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 11,
            "categories": [
                {
                    "alias": "austrian",
                    "title": "Austrian"
                },
                {
                    "alias": "wine_bars",
                    "title": "Wine Bars"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 49.1924053,
                "longitude": 16.6043065
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Pekarska 4",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Pekarska 4",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420702200047",
            "display_phone": "+420 702 200 047",
            "distance": 2174.703877878
        },
        {
            "id": "cattani-brno",
            "name": "Cattani",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/_mOp4oK8GV35_r2Hw2QQ7w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/cattani-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 7,
            "categories": [
                {
                    "alias": "italian",
                    "title": "Italian"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 49.1991468,
                "longitude": 16.6030441
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "Veveří 6",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Veveří 6",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "",
            "display_phone": "",
            "distance": 1823.940017244
        },
        {
            "id": "buddha-brno",
            "name": "Buddha",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/7zYs51X7iJxwCUHLXevXUA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/buddha-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 7,
            "categories": [
                {
                    "alias": "indpak",
                    "title": "Indian"
                },
                {
                    "alias": "himalayan",
                    "title": "Himalayan/Nepalese"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 49.1949149212295,
                "longitude": 16.6074979415011
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Náměstí Svobody 21",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Náměstí Svobody 21",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420723222040",
            "display_phone": "+420 723 222 040",
            "distance": 2264.741461924
        },
        {
            "id": "soul-bistro-brno",
            "name": "Soul Bistro",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/X-7CocyCm92Qz8yYKwbmyA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/soul-bistro-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 8,
            "categories": [
                {
                    "alias": "bistros",
                    "title": "Bistros"
                },
                {
                    "alias": "modern_european",
                    "title": "Modern European"
                },
                {
                    "alias": "breakfast_brunch",
                    "title": "Breakfast & Brunch"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 49.197078185524,
                "longitude": 16.610496433284
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Jezuitská 7/10",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Jezuitská 7/10",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420773179212",
            "display_phone": "+420 773 179 212",
            "distance": 2401.79993742
        },
        {
            "id": "podnebí-brno",
            "name": "Podnebí",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/YEwdI40q8NsjAdihCUAabA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/podneb%C3%AD-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 8,
            "categories": [
                {
                    "alias": "coffee",
                    "title": "Coffee & Tea"
                },
                {
                    "alias": "italian",
                    "title": "Italian"
                },
                {
                    "alias": "cafes",
                    "title": "Cafes"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 49.1960374,
                "longitude": 16.6020904
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Údolní 5",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Údolní 5",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420542211372",
            "display_phone": "+420 542 211 372",
            "distance": 1853.3178752079998
        },
        {
            "id": "restaurace-flavours-brno",
            "name": "Restaurace Flavours",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/GWzumKzaKU0unK7unTeGMw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/restaurace-flavours-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 5,
            "categories": [
                {
                    "alias": "vegetarian",
                    "title": "Vegetarian"
                },
                {
                    "alias": "indpak",
                    "title": "Indian"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 49.1961549245523,
                "longitude": 16.6088759154081
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Běhounská 12/14",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Běhounská 12/14",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420725372595",
            "display_phone": "+420 725 372 595",
            "distance": 2315.014024844
        },
        {
            "id": "lokál-u-caipla-brno",
            "name": "Lokál U Caipla",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/REpwOs9gg2DIQ77R1jAh0Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/lok%C3%A1l-u-caipla-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 6,
            "categories": [
                {
                    "alias": "gastropubs",
                    "title": "Gastropubs"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 49.1959222779609,
                "longitude": 16.6094520275085
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "Kozí 3 (Dvořákova)",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Kozí 3 (Dvořákova)",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420731594671",
            "display_phone": "+420 731 594 671",
            "distance": 2362.591908868
        },
        {
            "id": "café-placzek-brno-střed",
            "name": "Café Placzek",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/c0eh-Jng17xuQaXvCtn4Gg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/caf%C3%A9-placzek-brno-st%C5%99ed?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 6,
            "categories": [
                {
                    "alias": "bagels",
                    "title": "Bagels"
                },
                {
                    "alias": "cafes",
                    "title": "Cafes"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 49.19408,
                "longitude": 16.61076
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "Minoritská 4",
                "address2": "",
                "address3": "",
                "city": "Brno-střed",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Minoritská 4",
                    "602 00 Brno-střed",
                    "Czech Republic"
                ]
            },
            "phone": "+420602205555",
            "display_phone": "+420 602 205 555",
            "distance": 2519.9353103939998
        },
        {
            "id": "taiwan-bento-brno",
            "name": "Taiwan Bento",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/cDCHMuwYXB3DAfyZruOlwg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/taiwan-bento-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 6,
            "categories": [
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "asianfusion",
                    "title": "Asian Fusion"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 49.1917264,
                "longitude": 16.6111466
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Josefská 25",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Josefská 25",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420542210503",
            "display_phone": "+420 542 210 503",
            "distance": 2649.38965439
        },
        {
            "id": "rebio-velký-špalíček-brno",
            "name": "Rebio - Velký Špalíček",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/PpTZm0R80OEP7ht-J6UtXA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/rebio-velk%C3%BD-%C5%A1pal%C3%AD%C4%8Dek-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 6,
            "categories": [
                {
                    "alias": "vegetarian",
                    "title": "Vegetarian"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 49.1932762,
                "longitude": 16.6069791
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Velký Špalíček",
                "address2": "Mečová 2",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Velký Špalíček",
                    "Mečová 2",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420543214878",
            "display_phone": "+420 543 214 878",
            "distance": 2301.807458936
        },
        {
            "id": "potrefená-husa-brno-střed",
            "name": "Potrefená Husa",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/wQGDHe9z-brD_hHX4XwF0g/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/potrefen%C3%A1-husa-brno-st%C5%99ed?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 8,
            "categories": [
                {
                    "alias": "pubs",
                    "title": "Pubs"
                },
                {
                    "alias": "czech",
                    "title": "Czech"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 49.19248,
                "longitude": 16.60742
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "Starobrněnská 3",
                "address2": "",
                "address3": "",
                "city": "Brno-střed",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Starobrněnská 3",
                    "602 00 Brno-střed",
                    "Czech Republic"
                ]
            },
            "phone": "+420601601680",
            "display_phone": "+420 601 601 680",
            "distance": 2369.604768852
        },
        {
            "id": "jedna-báseň-brno-střed-brno",
            "name": "Jedna báseň - Brno Střed",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/wJoQq6anyjZaMDO_3h5TJA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/jedna-b%C3%A1se%C5%88-brno-st%C5%99ed-brno?adjust_creative=NOkOZoX0tmwr6wVlJ-5VxQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=NOkOZoX0tmwr6wVlJ-5VxQ",
            "review_count": 4,
            "categories": [
                {
                    "alias": "restaurants",
                    "title": "Restaurants"
                },
                {
                    "alias": "bars",
                    "title": "Bars"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 49.1958613121777,
                "longitude": 16.6124445873203
            },
            "transactions": [],
            "price": "$",
            "location": {
                "address1": "Sukova 2",
                "address2": "",
                "address3": "",
                "city": "Brno",
                "zip_code": "602 00",
                "country": "CZ",
                "state": "JM",
                "display_address": [
                    "Sukova 2",
                    "602 00 Brno",
                    "Czech Republic"
                ]
            },
            "phone": "+420542211444",
            "display_phone": "+420 542 211 444",
            "distance": 2573.075234392
        }
    ],
    "total": 40,
    "region": {
        "center": {
            "longitude": 16.5783691406,
            "latitude": 49.2021622964
        }
    }
};
