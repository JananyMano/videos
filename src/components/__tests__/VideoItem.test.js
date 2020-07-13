import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";
import VideoItem from "../VideoItem";

let container = null;
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

beforeEach(() => {
  // met en place un élément DOM comme cible de rendu
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // nettoie en sortie de test
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Video Item component", () => {
  act(() => {
    render(<VideoItem key="2zToEPpFEN8" video={video} />, container);
  });
  expect(container.textContent).toBe(
    "SAINt JHN - Roses (Imanbek Remix) (Official Music Video)"
  );

  const component = renderer.create(
    <VideoItem key="2zToEPpFEN8" video={video} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

/*it("Video Item Selection", () => {
  const onChange = jest.fn();
  act(() => {
    render(<VideoItem key="2zToEPpFEN8" onChange={onChange} video={video} />, container);
  });
  expect(container.textContent).toBe(
    "SAINt JHN - Roses (Imanbek Remix) (Official Music Video)"
  );

  act(() => {
    container.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onChange).toHaveBeenCalledTimes(1);

  act(() => {
    for (let i = 0; i < 5; i++) {
      container.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  expect(onChange).toHaveBeenCalledTimes(6);
});*/
