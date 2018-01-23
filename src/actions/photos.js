import { toJson } from "unsplash-js";
import unsplash from "../helpers/unsplash";
import { 
  PHOTOS_FETCH_START,
  PHOTOS_FETCH_SUCCESS,
  PHOTOS_FETCH_ERROR,
  PHOTOS_DATA_RESET,
  PHOTO_FETCH_START,
  PHOTO_FETCH_SUCCESS,
  PHOTO_FETCH_ERROR
} from "../constants/ActionTypes";

export function fetchPhotos(collectionId, page = 1, order = 'latest') {
  return function(dispatch) {
    const exampleData = [
      {
          "id": "JfolIjRnveY",
          "created_at": "2017-08-22T22:16:09-04:00",
          "updated_at": "2017-11-01T13:04:17-04:00",
          "width": 2848,
          "height": 4288,
          "color": "#FEFFFF",
          "likes": 355,
          "liked_by_user": false,
          "description": null,
          "sponsored": false,
          "user": {
              "id": "7mejgcxfs9A",
              "updated_at": "2018-01-16T20:50:13-05:00",
              "username": "senjuti",
              "name": "Senjuti Kundu",
              "first_name": "Senjuti",
              "last_name": "Kundu",
              "twitter_username": null,
              "portfolio_url": null,
              "bio": null,
              "location": "Montreal",
              "total_likes": 0,
              "total_photos": 8,
              "total_collections": 0,
              "profile_image": {
                  "small": "https://images.unsplash.com/profile-fb-1502484703-2ed7d267d120.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=9a4a5fea62770653050385349ab78c5c",
                  "medium": "https://images.unsplash.com/profile-fb-1502484703-2ed7d267d120.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=675511a54a699defb7cb6b1df60f79b2",
                  "large": "https://images.unsplash.com/profile-fb-1502484703-2ed7d267d120.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=c794974bebe8d6da41dc03ba2eeeb51b"
              },
              "links": {
                  "self": "https://api.unsplash.com/users/senjuti",
                  "html": "https://unsplash.com/@senjuti",
                  "photos": "https://api.unsplash.com/users/senjuti/photos",
                  "likes": "https://api.unsplash.com/users/senjuti/likes",
                  "portfolio": "https://api.unsplash.com/users/senjuti/portfolio",
                  "following": "https://api.unsplash.com/users/senjuti/following",
                  "followers": "https://api.unsplash.com/users/senjuti/followers"
              }
          },
          "current_user_collections": [],
          "urls": {
              "raw": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
              "full": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=cc2ecc9403b1ae2b9ddae6aa2da1c6f6",
              "regular": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=29d6ffd858c932d8488b036796c3aea2",
              "small": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=f850b2a4fe53b609192a161e558e4d17",
              "thumb": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=6935edf18c4eb2ab7233426800f3aeb4"
          },
          "categories": [],
          "links": {
              "self": "https://api.unsplash.com/photos/JfolIjRnveY",
              "html": "https://unsplash.com/photos/JfolIjRnveY",
              "download": "https://unsplash.com/photos/JfolIjRnveY/download",
              "download_location": "https://api.unsplash.com/photos/JfolIjRnveY/download"
          }
      },
      {
          "id": "AtLajzgFyAQ",
          "created_at": "2017-04-11T04:31:41-04:00",
          "updated_at": "2017-11-01T16:38:41-04:00",
          "width": 3038,
          "height": 3038,
          "color": "#F6F3F0",
          "likes": 101,
          "liked_by_user": false,
          "description": "An elderly man browsing books in a bookstore in Athens",
          "sponsored": false,
          "user": {
              "id": "Goo9nyfeNYs",
              "updated_at": "2017-12-19T16:18:23-05:00",
              "username": "katergaris",
              "name": "Aris Sfakianakis",
              "first_name": "Aris",
              "last_name": "Sfakianakis",
              "twitter_username": "katergaris",
              "portfolio_url": "http://www.sfakianakisaris.com",
              "bio": "Living in Athens & Mykonos. Shooting mostly street photography, urban & landscape.",
              "location": "Athens, Greece",
              "total_likes": 60,
              "total_photos": 17,
              "total_collections": 1,
              "profile_image": {
                  "small": "https://images.unsplash.com/profile-1474876956783-f5cd1f2110fd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0c7c6ea1cded7d95aea0f1e26b1bd4d0",
                  "medium": "https://images.unsplash.com/profile-1474876956783-f5cd1f2110fd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=a2ea29f54d26672f3554ec0009307f0a",
                  "large": "https://images.unsplash.com/profile-1474876956783-f5cd1f2110fd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=f3fe78354a0720240069aae3670b54b5"
              },
              "links": {
                  "self": "https://api.unsplash.com/users/katergaris",
                  "html": "https://unsplash.com/@katergaris",
                  "photos": "https://api.unsplash.com/users/katergaris/photos",
                  "likes": "https://api.unsplash.com/users/katergaris/likes",
                  "portfolio": "https://api.unsplash.com/users/katergaris/portfolio",
                  "following": "https://api.unsplash.com/users/katergaris/following",
                  "followers": "https://api.unsplash.com/users/katergaris/followers"
              }
          },
          "current_user_collections": [],
          "urls": {
              "raw": "https://images.unsplash.com/photo-1491899266767-3c25337d78b5",
              "full": "https://images.unsplash.com/photo-1491899266767-3c25337d78b5?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=2a39bab784dc2ae3d9f6c92b91ea1e3a",
              "regular": "https://images.unsplash.com/photo-1491899266767-3c25337d78b5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=962e5eeb46ade225860a3348570b0bd0",
              "small": "https://images.unsplash.com/photo-1491899266767-3c25337d78b5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=2fa89c38054fc00ea2fc204d014d842d",
              "thumb": "https://images.unsplash.com/photo-1491899266767-3c25337d78b5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=1b809eff0d9a01337ba35ac949421740"
          },
          "categories": [],
          "links": {
              "self": "https://api.unsplash.com/photos/AtLajzgFyAQ",
              "html": "https://unsplash.com/photos/AtLajzgFyAQ",
              "download": "https://unsplash.com/photos/AtLajzgFyAQ/download",
              "download_location": "https://api.unsplash.com/photos/AtLajzgFyAQ/download"
          }
      },
      {
          "id": "Yz7zM5r9sU8",
          "created_at": "2018-01-17T08:30:34-05:00",
          "updated_at": "2018-01-17T09:21:57-05:00",
          "width": 5304,
          "height": 6630,
          "color": "#F8F9FB",
          "likes": 107,
          "liked_by_user": false,
          "description": null,
          "sponsored": false,
          "user": {
              "id": "NRxkenBdNCk",
              "updated_at": "2018-01-18T23:33:59-05:00",
              "username": "benjaminlossius",
              "name": "Benjamin Lossius",
              "first_name": "Benjamin",
              "last_name": "Lossius",
              "twitter_username": null,
              "portfolio_url": "https://www.instagram.com/benjaminlossius",
              "bio": null,
              "location": null,
              "total_likes": 22,
              "total_photos": 12,
              "total_collections": 0,
              "profile_image": {
                  "small": "https://images.unsplash.com/profile-1505895455612-3852aa41b7f1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0b43cf72bd4f318557b3f4d463429d61",
                  "medium": "https://images.unsplash.com/profile-1505895455612-3852aa41b7f1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=58feb9cd622b6197f219a3578b760034",
                  "large": "https://images.unsplash.com/profile-1505895455612-3852aa41b7f1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=571df6b7c7c7b615ad1f844f5b2ddd65"
              },
              "links": {
                  "self": "https://api.unsplash.com/users/benjaminlossius",
                  "html": "https://unsplash.com/@benjaminlossius",
                  "photos": "https://api.unsplash.com/users/benjaminlossius/photos",
                  "likes": "https://api.unsplash.com/users/benjaminlossius/likes",
                  "portfolio": "https://api.unsplash.com/users/benjaminlossius/portfolio",
                  "following": "https://api.unsplash.com/users/benjaminlossius/following",
                  "followers": "https://api.unsplash.com/users/benjaminlossius/followers"
              }
          },
          "current_user_collections": [],
          "urls": {
              "raw": "https://images.unsplash.com/photo-1516195668283-a704b125065d",
              "full": "https://images.unsplash.com/photo-1516195668283-a704b125065d?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=c8cf0e102a446c050d6c72cd6038eff9",
              "regular": "https://images.unsplash.com/photo-1516195668283-a704b125065d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=9589898c667d8a82b356e7a1772f42c9",
              "small": "https://images.unsplash.com/photo-1516195668283-a704b125065d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=703d17ac1a6c2664ee2b31e374f3dab5",
              "thumb": "https://images.unsplash.com/photo-1516195668283-a704b125065d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=0dbe14173ed850071fd3fe54784bfae9"
          },
          "categories": [],
          "links": {
              "self": "https://api.unsplash.com/photos/Yz7zM5r9sU8",
              "html": "https://unsplash.com/photos/Yz7zM5r9sU8",
              "download": "https://unsplash.com/photos/Yz7zM5r9sU8/download",
              "download_location": "https://api.unsplash.com/photos/Yz7zM5r9sU8/download"
          }
      },
      {
          "id": "MWULRHM3Vrg",
          "created_at": "2017-07-27T16:30:17-04:00",
          "updated_at": "2017-10-27T17:59:41-04:00",
          "width": 4898,
          "height": 3265,
          "color": "#FDE6D6",
          "likes": 17,
          "liked_by_user": false,
          "description": null,
          "sponsored": false,
          "user": {
              "id": "_kq6PROjX-E",
              "updated_at": "2018-01-15T04:50:52-05:00",
              "username": "doto",
              "name": "Linus Nylund",
              "first_name": "Linus",
              "last_name": "Nylund",
              "twitter_username": null,
              "portfolio_url": "https://www.instagram.com/d_o_t_o/",
              "bio": "A diving, surfing and exploring graphic designer living in Sweden. Trying to get out as much as possible, discovering the abundance and beauty of nature in Sweden and around the world.",
              "location": "Sweden",
              "total_likes": 197,
              "total_photos": 12,
              "total_collections": 0,
              "profile_image": {
                  "small": "https://images.unsplash.com/profile-1501249071791-3b7c254ea8a0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=9460619d4beb38697bd89444169acece",
                  "medium": "https://images.unsplash.com/profile-1501249071791-3b7c254ea8a0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=bec6301ca3e2439dc99b288a8ed12974",
                  "large": "https://images.unsplash.com/profile-1501249071791-3b7c254ea8a0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=1f068657ecbeeb8022b14774a464042d"
              },
              "links": {
                  "self": "https://api.unsplash.com/users/doto",
                  "html": "https://unsplash.com/@doto",
                  "photos": "https://api.unsplash.com/users/doto/photos",
                  "likes": "https://api.unsplash.com/users/doto/likes",
                  "portfolio": "https://api.unsplash.com/users/doto/portfolio",
                  "following": "https://api.unsplash.com/users/doto/following",
                  "followers": "https://api.unsplash.com/users/doto/followers"
              }
          },
          "current_user_collections": [],
          "urls": {
              "raw": "https://images.unsplash.com/photo-1501187099077-f209a85dfa5c",
              "full": "https://images.unsplash.com/photo-1501187099077-f209a85dfa5c?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=0a8c50a899ecc0c110c44c410feb56b4",
              "regular": "https://images.unsplash.com/photo-1501187099077-f209a85dfa5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=7a746b48e376b72ed9fb162371c65d29",
              "small": "https://images.unsplash.com/photo-1501187099077-f209a85dfa5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=ee05a71e9a13334b35d5812f796801de",
              "thumb": "https://images.unsplash.com/photo-1501187099077-f209a85dfa5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=ce8b1e94f62a9243b12e4f6d9d1a9128"
          },
          "categories": [],
          "links": {
              "self": "https://api.unsplash.com/photos/MWULRHM3Vrg",
              "html": "https://unsplash.com/photos/MWULRHM3Vrg",
              "download": "https://unsplash.com/photos/MWULRHM3Vrg/download",
              "download_location": "https://api.unsplash.com/photos/MWULRHM3Vrg/download"
          }
      },
      {
          "id": "dwQmWwTm-bg",
          "created_at": "2018-01-13T22:32:11-05:00",
          "updated_at": "2018-01-15T05:39:43-05:00",
          "width": 4480,
          "height": 6720,
          "color": "#211B1B",
          "likes": 78,
          "liked_by_user": false,
          "description": null,
          "sponsored": false,
          "user": {
              "id": "_KxvjlIlpUE",
              "updated_at": "2018-01-19T18:41:21-05:00",
              "username": "em04",
              "name": "emily reider",
              "first_name": "emily",
              "last_name": "reider",
              "twitter_username": "04__em",
              "portfolio_url": null,
              "bio": null,
              "location": null,
              "total_likes": 10,
              "total_photos": 11,
              "total_collections": 7,
              "profile_image": {
                  "small": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=0ad68f44c4725d5a3fda019bab9d3edc",
                  "medium": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=356bd4b76a3d4eb97d63f45b818dd358",
                  "large": "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ee8bbf5fb8d6e43aaaa238feae2fe90d"
              },
              "links": {
                  "self": "https://api.unsplash.com/users/em04",
                  "html": "https://unsplash.com/@em04",
                  "photos": "https://api.unsplash.com/users/em04/photos",
                  "likes": "https://api.unsplash.com/users/em04/likes",
                  "portfolio": "https://api.unsplash.com/users/em04/portfolio",
                  "following": "https://api.unsplash.com/users/em04/following",
                  "followers": "https://api.unsplash.com/users/em04/followers"
              }
          },
          "current_user_collections": [],
          "urls": {
              "raw": "https://images.unsplash.com/photo-1515911601378-97de98db6dda",
              "full": "https://images.unsplash.com/photo-1515911601378-97de98db6dda?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=61d6cbcf8d7d1dc0455345c2f7397437",
              "regular": "https://images.unsplash.com/photo-1515911601378-97de98db6dda?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=9d69732eada530959df1ce98cc0cf0d8",
              "small": "https://images.unsplash.com/photo-1515911601378-97de98db6dda?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=e10d5d58bf851533ac730b1f75e3b8e6",
              "thumb": "https://images.unsplash.com/photo-1515911601378-97de98db6dda?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=709caf7525a6d89de8c08d3b4ad2c9ca"
          },
          "categories": [],
          "links": {
              "self": "https://api.unsplash.com/photos/dwQmWwTm-bg",
              "html": "https://unsplash.com/photos/dwQmWwTm-bg",
              "download": "https://unsplash.com/photos/dwQmWwTm-bg/download",
              "download_location": "https://api.unsplash.com/photos/dwQmWwTm-bg/download"
          }
      },
      {
          "id": "WhzmU-uM_w0",
          "created_at": "2017-12-17T05:14:51-05:00",
          "updated_at": "2017-12-17T16:36:38-05:00",
          "width": 2992,
          "height": 3992,
          "color": "#E8F1EE",
          "likes": 192,
          "liked_by_user": false,
          "description": null,
          "sponsored": false,
          "user": {
              "id": "a58JdLmBCDI",
              "updated_at": "2018-01-12T17:28:11-05:00",
              "username": "joel_bryantt",
              "name": "Joel Bryant",
              "first_name": "Joel",
              "last_name": "Bryant",
              "twitter_username": null,
              "portfolio_url": "http://www.joelbryantt.com",
              "bio": "I'm a photographer, filmmaker & travel enthusiast. I started with a GoPro at the age of 13, I now own a Lumix GH4 and spend my time creating content for platforms like Unsplash, Shutterstock, YouTube & Instagram. Instagram - @joel.bryantt",
              "location": "Australia",
              "total_likes": 26,
              "total_photos": 12,
              "total_collections": 1,
              "profile_image": {
                  "small": "https://images.unsplash.com/profile-1513505450392-60f4b69443d8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=cb39996f0bbfcddaaa065eb55ffda492",
                  "medium": "https://images.unsplash.com/profile-1513505450392-60f4b69443d8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=c7140018b9646312aaa459a2148aca5b",
                  "large": "https://images.unsplash.com/profile-1513505450392-60f4b69443d8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=b7a0a0c9eb967c796eafefaff2b09e0c"
              },
              "links": {
                  "self": "https://api.unsplash.com/users/joel_bryantt",
                  "html": "https://unsplash.com/@joel_bryantt",
                  "photos": "https://api.unsplash.com/users/joel_bryantt/photos",
                  "likes": "https://api.unsplash.com/users/joel_bryantt/likes",
                  "portfolio": "https://api.unsplash.com/users/joel_bryantt/portfolio",
                  "following": "https://api.unsplash.com/users/joel_bryantt/following",
                  "followers": "https://api.unsplash.com/users/joel_bryantt/followers"
              }
          },
          "current_user_collections": [],
          "urls": {
              "raw": "https://images.unsplash.com/photo-1513505569796-3b940afda92c",
              "full": "https://images.unsplash.com/photo-1513505569796-3b940afda92c?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=f0f197f00772cecb5af89a597b1ee883",
              "regular": "https://images.unsplash.com/photo-1513505569796-3b940afda92c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=9693875d8bc9c8a9e95a38a125cfbaf4",
              "small": "https://images.unsplash.com/photo-1513505569796-3b940afda92c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=892fc5c409cbed6dfe18b7300e50855c",
              "thumb": "https://images.unsplash.com/photo-1513505569796-3b940afda92c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=0bfe00eee12c667d6a6a55a06cfeca0e"
          },
          "categories": [],
          "links": {
              "self": "https://api.unsplash.com/photos/WhzmU-uM_w0",
              "html": "https://unsplash.com/photos/WhzmU-uM_w0",
              "download": "https://unsplash.com/photos/WhzmU-uM_w0/download",
              "download_location": "https://api.unsplash.com/photos/WhzmU-uM_w0/download"
          }
      },
      {
          "id": "ozFULp0jV9M",
          "created_at": "2017-01-26T18:06:14-05:00",
          "updated_at": "2017-10-27T15:48:57-04:00",
          "width": 2334,
          "height": 3112,
          "color": "#1A1819",
          "likes": 261,
          "liked_by_user": false,
          "description": "People walking across the street at a crosswalk in Chinatown on a winter day",
          "sponsored": false,
          "user": {
              "id": "HIOGdA_ZPqo",
              "updated_at": "2018-01-17T12:53:01-05:00",
              "username": "hahnbo",
              "name": "Emanuel Hahn",
              "first_name": "Emanuel",
              "last_name": "Hahn",
              "twitter_username": "Hahnbo",
              "portfolio_url": "http://emanuelhahn.com",
              "bio": "Brooklyn-based photographer that loves portraits, beautiful places in the world and other nice things. http://instagram.com/hahnbo",
              "location": "New York",
              "total_likes": 15,
              "total_photos": 12,
              "total_collections": 0,
              "profile_image": {
                  "small": "https://images.unsplash.com/profile-1484609336249-858efd54d644?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=376756daae6a799913c6081b5bd899fd",
                  "medium": "https://images.unsplash.com/profile-1484609336249-858efd54d644?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=1f046431bfa92b3a4230e2787b595ea9",
                  "large": "https://images.unsplash.com/profile-1484609336249-858efd54d644?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=71d3635fd1ff1dbdce405ab76fde3653"
              },
              "links": {
                  "self": "https://api.unsplash.com/users/hahnbo",
                  "html": "https://unsplash.com/@hahnbo",
                  "photos": "https://api.unsplash.com/users/hahnbo/photos",
                  "likes": "https://api.unsplash.com/users/hahnbo/likes",
                  "portfolio": "https://api.unsplash.com/users/hahnbo/portfolio",
                  "following": "https://api.unsplash.com/users/hahnbo/following",
                  "followers": "https://api.unsplash.com/users/hahnbo/followers"
              }
          },
          "current_user_collections": [],
          "urls": {
              "raw": "https://images.unsplash.com/photo-1485471713588-42a5ae37ac18",
              "full": "https://images.unsplash.com/photo-1485471713588-42a5ae37ac18?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=d3a4caba8af9a9b16a93a39ff028174c",
              "regular": "https://images.unsplash.com/photo-1485471713588-42a5ae37ac18?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=1f9769f822d5c66576e97a81480fba2a",
              "small": "https://images.unsplash.com/photo-1485471713588-42a5ae37ac18?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=e66a8c27bf999e3fa02882a4306fc078",
              "thumb": "https://images.unsplash.com/photo-1485471713588-42a5ae37ac18?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=00fc6e034321fbc3a5ad87f718dd1e3e"
          },
          "categories": [],
          "links": {
              "self": "https://api.unsplash.com/photos/ozFULp0jV9M",
              "html": "https://unsplash.com/photos/ozFULp0jV9M",
              "download": "https://unsplash.com/photos/ozFULp0jV9M/download",
              "download_location": "https://api.unsplash.com/photos/ozFULp0jV9M/download"
          }
      },
      {
          "id": "5v1QSY62ZBs",
          "created_at": "2017-10-02T17:13:40-04:00",
          "updated_at": "2017-11-01T15:19:55-04:00",
          "width": 4288,
          "height": 2848,
          "color": "#0D0D0D",
          "likes": 281,
          "liked_by_user": false,
          "description": null,
          "sponsored": false,
          "user": {
              "id": "JW4NlXlflZY",
              "updated_at": "2018-01-17T10:17:15-05:00",
              "username": "jeffreyblum",
              "name": "Jeffrey Blum",
              "first_name": "Jeffrey",
              "last_name": "Blum",
              "twitter_username": "jeffreyblum",
              "portfolio_url": "http://www.instagram.com/jeffreyb76",
              "bio": "Digital Creative Director/Art director, Storyteller  @wemakesomething / Runner/ Marathoner / hobbyist Photographer / \r\n",
              "location": "New York",
              "total_likes": 69,
              "total_photos": 62,
              "total_collections": 2,
              "profile_image": {
                  "small": "https://images.unsplash.com/profile-1498764343397-43a170a270b0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=800ff4a3bdefe59067958fdc10878204",
                  "medium": "https://images.unsplash.com/profile-1498764343397-43a170a270b0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=46baa6224d18a429a5adfcdf70c80f35",
                  "large": "https://images.unsplash.com/profile-1498764343397-43a170a270b0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=5242e87fcea9338a59316567f4bc414e"
              },
              "links": {
                  "self": "https://api.unsplash.com/users/jeffreyblum",
                  "html": "https://unsplash.com/@jeffreyblum",
                  "photos": "https://api.unsplash.com/users/jeffreyblum/photos",
                  "likes": "https://api.unsplash.com/users/jeffreyblum/likes",
                  "portfolio": "https://api.unsplash.com/users/jeffreyblum/portfolio",
                  "following": "https://api.unsplash.com/users/jeffreyblum/following",
                  "followers": "https://api.unsplash.com/users/jeffreyblum/followers"
              }
          },
          "current_user_collections": [],
          "urls": {
              "raw": "https://images.unsplash.com/photo-1506978520653-bb3accebb1a3",
              "full": "https://images.unsplash.com/photo-1506978520653-bb3accebb1a3?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=b31f29b32bd14b34ca3769dc86f28180",
              "regular": "https://images.unsplash.com/photo-1506978520653-bb3accebb1a3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=43e37cb65ecfe3be8c4e2d1b13c50c55",
              "small": "https://images.unsplash.com/photo-1506978520653-bb3accebb1a3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=c6c10579fc98a6ad237190e9bdb7eccd",
              "thumb": "https://images.unsplash.com/photo-1506978520653-bb3accebb1a3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=65909515d3e2ef9a958a4a536950f90c"
          },
          "categories": [],
          "links": {
              "self": "https://api.unsplash.com/photos/5v1QSY62ZBs",
              "html": "https://unsplash.com/photos/5v1QSY62ZBs",
              "download": "https://unsplash.com/photos/5v1QSY62ZBs/download",
              "download_location": "https://api.unsplash.com/photos/5v1QSY62ZBs/download"
          }
      },
      {
          "id": "7bzbyafVTYg",
          "created_at": "2017-12-02T04:43:56-05:00",
          "updated_at": "2017-12-04T01:54:00-05:00",
          "width": 2859,
          "height": 1888,
          "color": "#080808",
          "likes": 22,
          "liked_by_user": false,
          "description": null,
          "sponsored": false,
          "user": {
              "id": "r01XoGoEPT8",
              "updated_at": "2018-01-22T08:05:10-05:00",
              "username": "ripato",
              "name": "Ricardo Gomez Angel",
              "first_name": "Ricardo",
              "last_name": "Gomez Angel",
              "twitter_username": null,
              "portfolio_url": "https://www.flickr.com/photos/rigoan/",
              "bio": null,
              "location": "Switzerland",
              "total_likes": 6205,
              "total_photos": 416,
              "total_collections": 0,
              "profile_image": {
                  "small": "https://images.unsplash.com/profile-1492187901140-48ac7eff801c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=2ed79bdbae69273d64e851067ad5d098",
                  "medium": "https://images.unsplash.com/profile-1492187901140-48ac7eff801c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=ea834c0e76f45af01fda9a78b3ff2eb3",
                  "large": "https://images.unsplash.com/profile-1492187901140-48ac7eff801c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=ebb3655f38ffa132a65604b28a53ce35"
              },
              "links": {
                  "self": "https://api.unsplash.com/users/ripato",
                  "html": "https://unsplash.com/@ripato",
                  "photos": "https://api.unsplash.com/users/ripato/photos",
                  "likes": "https://api.unsplash.com/users/ripato/likes",
                  "portfolio": "https://api.unsplash.com/users/ripato/portfolio",
                  "following": "https://api.unsplash.com/users/ripato/following",
                  "followers": "https://api.unsplash.com/users/ripato/followers"
              }
          },
          "current_user_collections": [],
          "urls": {
              "raw": "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d",
              "full": "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=2b9395628e8d4531398559ff50cad4ee",
              "regular": "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=6cf6adb89b2477da28a617f487218470",
              "small": "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=49e35e3b726b620eb6f645f223a181d1",
              "thumb": "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=7577b859ca12c1ab61871476602c3b9c"
          },
          "categories": [],
          "links": {
              "self": "https://api.unsplash.com/photos/7bzbyafVTYg",
              "html": "https://unsplash.com/photos/7bzbyafVTYg",
              "download": "https://unsplash.com/photos/7bzbyafVTYg/download",
              "download_location": "https://api.unsplash.com/photos/7bzbyafVTYg/download"
          }
      },
      {
          "id": "n31JPLu8_Pw",
          "created_at": "2017-12-13T08:33:24-05:00",
          "updated_at": "2017-12-18T21:06:53-05:00",
          "width": 1709,
          "height": 2560,
          "color": "#050407",
          "likes": 188,
          "liked_by_user": false,
          "description": null,
          "sponsored": false,
          "user": {
              "id": "fvJcgOm1yHc",
              "updated_at": "2018-01-21T16:50:30-05:00",
              "username": "ryoji__iwata",
              "name": "Ryoji Iwata",
              "first_name": "Ryoji",
              "last_name": "Iwata",
              "twitter_username": "Blueeeees",
              "portfolio_url": "http://www.iwataryoji.com",
              "bio": "Architect and photographer live in Tokyo Japan /\r\nSelected for “shot on iphone” campaign 2017 summer\r\n/instagram  @johnny777",
              "location": "Tokyo",
              "total_likes": 10,
              "total_photos": 30,
              "total_collections": 0,
              "profile_image": {
                  "small": "https://images.unsplash.com/profile-fb-1506599314-2dd48ded6be2.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=5fd0038ebc2865f81cc91071cf65b35d",
                  "medium": "https://images.unsplash.com/profile-fb-1506599314-2dd48ded6be2.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=ff047a11888852675ba0db30c36e9ee4",
                  "large": "https://images.unsplash.com/profile-fb-1506599314-2dd48ded6be2.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=58c995b96c3054491839ef358375f84e"
              },
              "links": {
                  "self": "https://api.unsplash.com/users/ryoji__iwata",
                  "html": "https://unsplash.com/@ryoji__iwata",
                  "photos": "https://api.unsplash.com/users/ryoji__iwata/photos",
                  "likes": "https://api.unsplash.com/users/ryoji__iwata/likes",
                  "portfolio": "https://api.unsplash.com/users/ryoji__iwata/portfolio",
                  "following": "https://api.unsplash.com/users/ryoji__iwata/following",
                  "followers": "https://api.unsplash.com/users/ryoji__iwata/followers"
              }
          },
          "current_user_collections": [],
          "urls": {
              "raw": "https://images.unsplash.com/photo-1513171920216-2640b288471b",
              "full": "https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=f785b8ade832ad14c784b42c5b091c24",
              "regular": "https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=f505d206b7e56258212f1aff14dd3003",
              "small": "https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=928498402a2e6412f7792eb3ec9765bc",
              "thumb": "https://images.unsplash.com/photo-1513171920216-2640b288471b?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=ddb78cc5c214de3dfb1815d74aabb230"
          },
          "categories": [],
          "links": {
              "self": "https://api.unsplash.com/photos/n31JPLu8_Pw",
              "html": "https://unsplash.com/photos/n31JPLu8_Pw",
              "download": "https://unsplash.com/photos/n31JPLu8_Pw/download",
              "download_location": "https://api.unsplash.com/photos/n31JPLu8_Pw/download"
          }
      }
    ];
    dispatch({ type: PHOTOS_FETCH_START });
    
    if(page === 1) {
        dispatch({ type: PHOTOS_DATA_RESET });
    }

    dispatch(fetchPhotosSuccess(exampleData));
    // unsplash.collections.getCollectionPhotos(collectionId, page, 10, order)
    //   .then(toJson)
    //   .then(json => {
        //   dispatch(fetchPhotosSuccess(json));
    // });
  }
}

export function fetchPhotosSuccess(data) {
  return {
    type: PHOTOS_FETCH_SUCCESS,
    payload: data
  };
}

export function fetchPhotosError(error) {
  return {
    type: PHOTOS_FETCH_ERROR,
    payload: error
  };
}

export function fetchPhoto(photoId) {
    return function(dispatch) {
      const exampleData = {
        "id": "JfolIjRnveY",
        "created_at": "2017-08-22T22:16:09-04:00",
        "updated_at": "2017-11-01T13:04:17-04:00",
        "width": 2848,
        "height": 4288,
        "color": "#FEFFFF",
        "description": null,
        "urls": {
            "raw": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
            "full": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE5OTQwfQ&s=0b6d9d9b7a9f069e58936258eca2d551",
            "regular": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE5OTQwfQ&s=19e4e956baa543627f15bb210827bfe0",
            "small": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE5OTQwfQ&s=22fade600c7a22197308d5fbf3e382a6",
            "thumb": "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE5OTQwfQ&s=7739cd55ad504d5d382247a7c35be903"
        },
        "categories": [],
        "links": {
            "self": "https://api.unsplash.com/photos/JfolIjRnveY",
            "html": "https://unsplash.com/photos/JfolIjRnveY",
            "download": "https://unsplash.com/photos/JfolIjRnveY/download",
            "download_location": "https://api.unsplash.com/photos/JfolIjRnveY/download"
        },
        "liked_by_user": false,
        "sponsored": false,
        "likes": 356,
        "user": {
            "id": "7mejgcxfs9A",
            "updated_at": "2018-01-16T20:50:13-05:00",
            "username": "senjuti",
            "name": "Senjuti Kundu",
            "first_name": "Senjuti",
            "last_name": "Kundu",
            "twitter_username": null,
            "portfolio_url": null,
            "bio": null,
            "location": "Montreal",
            "links": {
                "self": "https://api.unsplash.com/users/senjuti",
                "html": "https://unsplash.com/@senjuti",
                "photos": "https://api.unsplash.com/users/senjuti/photos",
                "likes": "https://api.unsplash.com/users/senjuti/likes",
                "portfolio": "https://api.unsplash.com/users/senjuti/portfolio",
                "following": "https://api.unsplash.com/users/senjuti/following",
                "followers": "https://api.unsplash.com/users/senjuti/followers"
            },
            "profile_image": {
                "small": "https://images.unsplash.com/profile-fb-1502484703-2ed7d267d120.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=9a4a5fea62770653050385349ab78c5c",
                "medium": "https://images.unsplash.com/profile-fb-1502484703-2ed7d267d120.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=675511a54a699defb7cb6b1df60f79b2",
                "large": "https://images.unsplash.com/profile-fb-1502484703-2ed7d267d120.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=c794974bebe8d6da41dc03ba2eeeb51b"
            },
            "total_likes": 0,
            "total_photos": 8,
            "total_collections": 0
        },
        "current_user_collections": [],
        "slug": null,
        "location": {
            "title": "Jeanne Mance Park, Montreal, Canada",
            "name": "Jeanne Mance Park",
            "city": "Montreal",
            "country": "Canada",
            "position": {
                "latitude": 45.5016889,
                "longitude": -73.567256
            }
        },
        "exif": {
            "make": "Nikon",
            "model": "NIKON D90",
            "exposure_time": "1/4000",
            "aperture": "2",
            "focal_length": "50",
            "iso": 100
        },
        "views": 1535171,
        "downloads": 22432
    };
      dispatch({ type: PHOTO_FETCH_START });
      dispatch(fetchPhotoSuccess(exampleData));
    //   unsplash.photos.getPhoto(photoId)
    //     .then(toJson)
    //     .then(json => {
    //         dispatch(fetchPhotoSuccess(json));
    //   });
    }
  }
  
  export function fetchPhotoSuccess(data) {
    return {
      type: PHOTO_FETCH_SUCCESS,
      payload: data
    };
  }
  
  export function fetchPhotoError(error) {
    return {
      type: PHOTO_FETCH_ERROR,
      payload: error
    };
  }