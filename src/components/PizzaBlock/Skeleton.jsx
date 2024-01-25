import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="130" r="130" />
    <rect x="0" y="280" rx="15" ry="15" width="280" height="27" />
    <rect x="0" y="318" rx="15" ry="15" width="280" height="88" />
    <rect x="0" y="423" rx="15" ry="15" width="95" height="27" />
    <rect x="125" y="412" rx="21" ry="21" width="155" height="45" />
  </ContentLoader>
);

export default Skeleton;
