import React from "react";
import renderer from "react-test-renderer";
import VideoList from "../VideoList";

const videos = [
  {
    kind: "youtube#searchResult",
    etag: "ygFvJIkWB2gVp5TlojgTkzZICPg",
    id: {
      kind: "youtube#video",
      videoId: "2zToEPpFEN8",
    },
    snippet: {
      publishedAt: "2020-03-06T00:30:10Z",
      channelId: "UCxmkHW42679-8rLTAsRyIgA",
      title: "SAINt JHN - Roses (Imanbek Remix) (Official Music Video)",
      description:
        "SAINt JHN - Roses (Imanbek Remix) (Ghetto Lenny One Takes) [Lyric Video] Stream/Download/Buy: https://marvellousmusic.lnk.to/rosesID Official Video at ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2zToEPpFEN8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/2zToEPpFEN8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/2zToEPpFEN8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "SAINt JHN",
      liveBroadcastContent: "none",
      publishTime: "2020-03-06T00:30:10Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "eZyQYwSf1VryaVSV1gxQyrxJWP4",
    id: {
      kind: "youtube#video",
      videoId: "XHA-QM-q-3E",
    },
    snippet: {
      publishedAt: "2016-10-07T15:57:22Z",
      channelId: "UCxmkHW42679-8rLTAsRyIgA",
      title: "SAINt JHN - Roses [Official Music Video]",
      description:
        "SAINt JHN - Roses [Official Music Video] ✝️ Tour tickets available at http://SAINtJHN.com ✝️ http://ChristianSexClub.com Subscribe to my channel: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/XHA-QM-q-3E/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/XHA-QM-q-3E/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/XHA-QM-q-3E/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "SAINt JHN",
      liveBroadcastContent: "none",
      publishTime: "2016-10-07T15:57:22Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "zxTRMq2mDPbZhzzCCUdlllxZJoQ",
    id: {
      kind: "youtube#video",
      videoId: "jOMHWVv0xX4",
    },
    snippet: {
      publishedAt: "2020-01-21T15:59:51Z",
      channelId: "UCJ2cGU-CskWXRmzql5RgjKg",
      title: "SAINt JHN - ROSES (Official Video) - Imanbek Remix",
      description:
        "Download/Stream here: https://marvellousmusic.lnk.to/rosesID ○ Subscribe to MARVELLOUS here: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/jOMHWVv0xX4/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/jOMHWVv0xX4/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/jOMHWVv0xX4/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Marvellous",
      liveBroadcastContent: "none",
      publishTime: "2020-01-21T15:59:51Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "evrFkhvw3Iw2wxnJI5qV2PfHVCk",
    id: {
      kind: "youtube#video",
      videoId: "FyASdjZE0R0",
    },
    snippet: {
      publishedAt: "2015-06-16T07:00:01Z",
      channelId: "UCRzzwLpLiUNIs6YOPe33eMg",
      title: "The Chainsmokers - Roses (Audio) ft. ROZES",
      description:
        'The Chainsmokers debut album \'Memories... Do Not Open\' out April 7th featuring "Something Just Like This", "Paris" and 10 brand new songs from The ...',
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/FyASdjZE0R0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/FyASdjZE0R0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/FyASdjZE0R0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ChainsmokersVEVO",
      liveBroadcastContent: "none",
      publishTime: "2015-06-16T07:00:01Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "iJk7e8BtL2K69PmZtAR0avLdaqU",
    id: {
      kind: "youtube#video",
      videoId: "iq7gBr0I5AU",
    },
    snippet: {
      publishedAt: "2020-05-23T14:18:54Z",
      channelId: "UCl7cVzHngS0kg51TPrDbqlg",
      title: "SAINt JHN - ROSES (Imanbek Remix) (Lyrics)",
      description:
        "SAINt JHN - ROSES (Imanbek Remix) (Lyrics) Stream SAINt JHN - ROSES (Imanbek Remix) here: https://SaintJhn.lnk.to/RosesRemix SAINt JHN Soundcloud: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/iq7gBr0I5AU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/iq7gBr0I5AU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/iq7gBr0I5AU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Shadow Music",
      liveBroadcastContent: "none",
      publishTime: "2020-05-23T14:18:54Z",
    },
  },
];

it("s’affiche avec ou sans nom", () => {
  const component = renderer.create(<VideoList videos={videos} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
