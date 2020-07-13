import React from "react";
import renderer from "react-test-renderer";
import VideoDetail from "../VideoDetail";

const video = {
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
};
test("VideoDetail component", () => {
  const component = renderer.create(<VideoDetail video={video} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
