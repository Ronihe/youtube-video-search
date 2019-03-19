import axios from 'axios';

import { NEXT_PAGE, GET_Q, PREVIOUS_PAGE, GET_NEW_VIDEOS } from './types';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const MAX = 12;

//const KEY = 'AIzaSyCY6AZpSw-4mNJRbmCn_Bp8T4jTiANrwjM';
//const KEY = 'AIzaSyAPw5O_9xI4yN_mxAepfwuS_Rn2qZieR5A';
const testData = {
  kind: 'youtube#searchListResponse',
  etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/bb38R2EzNH9Fe5955yo0bQoadvQ"',
  nextPageToken: 'CAwQAA',
  regionCode: 'US',
  pageInfo: {
    totalResults: 1000000,
    resultsPerPage: 12
  },
  items: [
    {
      kind: 'youtube#searchResult',
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/CIzHxn5Tg3A4s2nJ1YNkNe9bwj8"',
      id: {
        kind: 'youtube#video',
        videoId: 'hY7m5jjJ9mM'
      },
      snippet: {
        publishedAt: '2017-05-31T09:30:02.000Z',
        channelId: 'UC9obdDRxQkmn_4YpcBMTYLw',
        title: 'CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation',
        description:
          'Cats are amazing creatures because they make us laugh all the time! Watching funny cats is the hardest try not to laugh challenge! Just look how all these cats ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/hY7m5jjJ9mM/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/hY7m5jjJ9mM/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/hY7m5jjJ9mM/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Tiger FunnyWorks',
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/y6huGcmA93peFBJryGz70d5yuuo"',
      id: {
        kind: 'youtube#video',
        videoId: '4Rpb6CY4uZs'
      },
      snippet: {
        publishedAt: '2018-11-08T12:21:32.000Z',
        channelId: 'UCKbb29tcBER7xKMIMcbyCmw',
        title:
          'Funny Cats Annoying Babies and Babies Annoying Cats (PART 05)  - Youtube',
        description:
          'Subscribe to my second channel : https://www.youtube.com/channel/UCbY0M8pb1tq2UgtCov3nakQ?disable_polymer=true Funny Cats Annoying Babies and ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/4Rpb6CY4uZs/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/4Rpb6CY4uZs/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/4Rpb6CY4uZs/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Laugh Street',
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/Cfx-qmvxy1q7vNbkEU2D9SAtr1U"',
      id: {
        kind: 'youtube#video',
        videoId: 'gjXfuN_b81M'
      },
      snippet: {
        publishedAt: '2019-03-09T09:53:58.000Z',
        channelId: 'UCuPLku1Zrk6HMr2S51yGkpQ',
        title: 'Baby and Cat Fun and Fails Cute Babies and Pets Compilation',
        description:
          'Baby and Cat Fun and Fails Cute Babies and Pets Compilation #babyandcat #catandbaby #babiesandpets.',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/gjXfuN_b81M/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/gjXfuN_b81M/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/gjXfuN_b81M/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Funny And Cute Kitten Cat',
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/I3WvBGXR9dVOPCcIEiUg0nrsHUw"',
      id: {
        kind: 'youtube#video',
        videoId: 'EtH9Yllzjcc'
      },
      snippet: {
        publishedAt: '2017-11-18T21:00:00.000Z',
        channelId: 'UC3rrzHpFzshYjIMk8YFc52w',
        title:
          'Try Not To Laugh Challenge - Funny Cat &amp; Dog Vines compilation 2017',
        description:
          'Try Not To Laugh or Grin While Watching Funny Dogs & Cats Vines compilation 2017 IMPOSSIBLE CHALLENGE! Subscribe to CooL Vines ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/EtH9Yllzjcc/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/EtH9Yllzjcc/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/EtH9Yllzjcc/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'CooL Vines',
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/nQ923ufh6WeUXF3PZI3P_8EhSmw"',
      id: {
        kind: 'youtube#video',
        videoId: 'oZFAcp-Qfbs'
      },
      snippet: {
        publishedAt: '2018-10-24T14:24:19.000Z',
        channelId: 'UCNo5PGwGmfnEprEUUb9AGgw',
        title: 'World&#39;s Most Obedient Cat',
        description:
          "Prince Michael takes on a few new responsibilities while Aaron's caught under the weather. T-Shirt from video available here: https://shop.aaronsanimals.com/ ...",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/oZFAcp-Qfbs/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/oZFAcp-Qfbs/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/oZFAcp-Qfbs/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'AaronsAnimals',
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/Rzl4gkdBBI16Nq78O1qQWwyc5mk"',
      id: {
        kind: 'youtube#video',
        videoId: 'ow9EZ32Q_CI'
      },
      snippet: {
        publishedAt: '2019-03-18T18:33:55.000Z',
        channelId: 'UCE1OEA0mziDw3w9v-acgC3A',
        title: 'Shane Dawson RESPONDS To Cat DRAMA!',
        description:
          'Shane Dawson RESPONDS To Cat DRAMA! In this video I discuss Shane Dawson & his cat. Keemstar : https://www.youtube.com/watch?v=pSxmG2E3HQc ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/ow9EZ32Q_CI/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/ow9EZ32Q_CI/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/ow9EZ32Q_CI/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'THE VIEWERS VOICE',
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/ZZWHT4DP6vaLmD6t63gNxr8wziI"',
      id: {
        kind: 'youtube#video',
        videoId: '5yFfCAaedgA'
      },
      snippet: {
        publishedAt: '2019-01-27T19:43:34.000Z',
        channelId: 'UC09IvZwjpunzrdHH1EHok-w',
        title:
          '🤣 Funniest  😻 Cats and 🐶 Dogs - Awesome Funny Pet Animals&#39; Life Videos 😇',
        description:
          "Enjoy new funniest and very cute compilation of the week about try not laugh funny animals' life video. Cats are surely the most popular pets and awesome ...",
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/5yFfCAaedgA/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/5yFfCAaedgA/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/5yFfCAaedgA/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: "Funny Animals' Life",
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/PNt9osJUgv-eVuDGUfoptr1JiPQ"',
      id: {
        kind: 'youtube#video',
        videoId: 'SXRE6bUP2PI'
      },
      snippet: {
        publishedAt: '2019-03-10T06:05:58.000Z',
        channelId: 'UCTDDvSmzjw1OG2WBnDbD28w',
        title:
          'Little Kitten My Favorite Cat - Play Fun Kitten Pet Care Animation Games For Children By Fox &amp; Sheep',
        description:
          'Little Kitten - My Favorite Cat By Fox and Sheep GmbH ➔ Download Link Play iOS : http://apple.co/2hSp7Fd ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/SXRE6bUP2PI/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/SXRE6bUP2PI/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/SXRE6bUP2PI/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'PenguinGaming',
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/U5IY6gHzUKpS7ZGqn0E_LLGhdCg"',
      id: {
        kind: 'youtube#video',
        videoId: 'jXiMRecJHHk'
      },
      snippet: {
        publishedAt: '2019-03-18T21:00:03.000Z',
        channelId: 'UClFSU9_bUb4Rc6OYfTt5SPw',
        title:
          'The Shane Dawson Cat Controversy, Denial, &amp; Apology, J.K. Rowling Is A Retroactive Hero, &amp; More...',
        description:
          'Thank you for watching the Monday PDS and being a part of our weird family! Remember when you go to http://BeautifulBastard.com for amazing pomades, ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/jXiMRecJHHk/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/jXiMRecJHHk/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/jXiMRecJHHk/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'Philip DeFranco',
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/zxh4DMbo6RRvTNpGBQCBpzoY11U"',
      id: {
        kind: 'youtube#video',
        videoId: 'DXUAyRRkI6k'
      },
      snippet: {
        publishedAt: '2013-11-09T22:11:37.000Z',
        channelId: 'UCVUdHi-tdW5AKdzMiTPG97Q',
        title: 'Funny Cats and Kittens Meowing Compilation',
        description:
          'Here is a video of cats and kittens meowing to confuse your pets Puppies & Babies & Kitties OH MY! New videos all the time! Subscribe: ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/DXUAyRRkI6k/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/DXUAyRRkI6k/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/DXUAyRRkI6k/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'funnyplox',
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/S9KYXNBer0oAI8_bnO-SNtOUPt0"',
      id: {
        kind: 'youtube#video',
        videoId: 'HxM46vRJMZs'
      },
      snippet: {
        publishedAt: '2015-09-23T13:30:26.000Z',
        channelId: 'UC44eNyYMBavvHVvGwUWFHYw',
        title: 'Funny Cats Vine Compilation September 2015',
        description:
          'Check this if you like :) ➡ Anti Theft Backpack: http://bit.ly/2VXFxgT ✅ Free Shipping ✅ Lower Price ✅ Money Back Guarantee Try not to laugh :)))) Watch more ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/HxM46vRJMZs/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/HxM46vRJMZs/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/HxM46vRJMZs/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'CATS UPS AND DOWNS',
        liveBroadcastContent: 'none'
      }
    },
    {
      kind: 'youtube#searchResult',
      etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/ChuzzqYNAvCj2oGewAv2hEUot48"',
      id: {
        kind: 'youtube#video',
        videoId: 'k0QhnMJnJE0'
      },
      snippet: {
        publishedAt: '2017-06-30T09:16:29.000Z',
        channelId: 'UCyIqcxz-vR_o2GK4HWuZL8w',
        title: 'Waiter! Bring me food!',
        description:
          'The cat demands food by ringing the bell. The waiter brings him the menu. There are four dishes to choose from: Egg Spaghetti Fish Chicken What will the cat ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/k0QhnMJnJE0/default.jpg',
            width: 120,
            height: 90
          },
          medium: {
            url: 'https://i.ytimg.com/vi/k0QhnMJnJE0/mqdefault.jpg',
            width: 320,
            height: 180
          },
          high: {
            url: 'https://i.ytimg.com/vi/k0QhnMJnJE0/hqdefault.jpg',
            width: 480,
            height: 360
          }
        },
        channelTitle: 'CatPusic',
        liveBroadcastContent: 'none'
      }
    }
  ]
};
const KEY = 'AIzaSyBYjNe14Q0ik3HdVS-qFZkjadzYQ-iKaA0';
//get the input from the
export function getVideos(pageToken = '', q = '') {
  return async function(dispatch) {
    try {
      // const response = await axios.get(
      //   `${BASE_URL}?key=${KEY}&q=${q}&maxResults=${MAX}&part=snippet&pageToken=${pageToken}&type=video`
      // );
      console.log('next page is here?');
      // const response = await axios.get(`${BASE_URL}`, {
      //   params: {
      //     key: KEY,
      //     q,
      //     pageToken,
      //     maxResults: MAX,
      //     part: 'snippet',
      //     type: 'video'
      //   }
      // });
      // console.log(response);
      // const nextPageToken = response.data.nextPageToken;
      // response.data
      const nextPageToken = testData.nextPageToken;

      const videos = testData.items.map(video => ({
        videoId: video.id.videoId,
        src: video.snippet.thumbnails.medium.url,
        channel: video.snippet.channelTitle,
        title: video.snippet.title,
        publishedAt: video.snippet.publishedAt,
        description: video.snippet.description
      }));

      // if there is no morevideos
      // if there is no pageToken, dispatch getInitialVideos
      if (!pageToken)
        return dispatch(getInitialVideos(q, nextPageToken, videos));
      // if there is pageToken, dispatch getNewVideos
      if (pageToken) return dispatch(getNewVideos(nextPageToken, videos));
    } catch (err) {
      alert(err);
      console.log('error');
    }
  };
}

function getInitialVideos(q, nextPageToken, videos) {
  return {
    type: GET_Q,
    q,
    nextPageToken,
    videos
  };
}

function getNewVideos(nextPageToken, videos) {
  return {
    type: GET_NEW_VIDEOS,
    nextPageToken,
    videos
  };
}

export function previousVideos() {
  return {
    type: PREVIOUS_PAGE
  };
}

export function getNextVideos() {
  return {
    type: NEXT_PAGE
  };
}
