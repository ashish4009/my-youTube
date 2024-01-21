import React from "react";

const VidCard = ({ info }) => {
  //   const { snippet, statistics } = info;
  //   const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-64">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={info?.snippet?.thumbnails?.high?.url}
      />
      <ul>
        <li className="font-bold">{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VidCard;
