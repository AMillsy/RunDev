import MainFeed from "../MainFeed";
import "./Homepage.css";
import { useQuery } from "@apollo/client";
import { QUERY_POST, QUERY_ME_HOMEPAGE_FOLLOW } from "../../utils/query";
import Developers from "../Aside";
import peopleicon from "../../images/peopleicon.jpg";
const mock = require("../Aside/mock.json");

const Homepage = () => {
  const { loading, data, error } = useQuery(QUERY_POST);
  const { loading: followLoad, data: followData } = useQuery(
    QUERY_ME_HOMEPAGE_FOLLOW
  );

  console.log(followData);

  if (error) return <h2>Error loading data</h2>;
  if (loading) return <p>Loading data</p>;
  return (
    <>
      <article className="main">
        <div className="devs">
          <div className="devs-title">
            <img src={peopleicon} className="devs-image" />
            <h3 className="devs">DEVELOPERS</h3>
          </div>
          {followData?.me &&
            followData.me.following.map(function ({ username, image, _id }) {
              return (
                <Developers
                  name={username}
                  picture={image}
                  key={_id}
                  id={_id}
                />
              );
            })}
        </div>
        <div className="feed">
          {data.posts.map(function ({
            _id,
            image,
            title,
            likes,
            description,
            commentCount,
          }) {
            return (
              <MainFeed
                key={_id}
                imgSrc={image}
                postId={_id}
                title={title}
                likes={likes}
                description={description}
                commentCount={commentCount}
              />
            );
          })}
        </div>
      </article>
    </>
  );
};

export default Homepage;
