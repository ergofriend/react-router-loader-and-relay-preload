import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";

const missionListQuery = graphql`
  query MissionListQuery {
    missions {
      id
      name
    }
  }
`;

export const MissionList = () => {
  const data = useLazyLoadQuery(missionListQuery, {});
  console.log(data);
  return <div>MissionList</div>;
};
