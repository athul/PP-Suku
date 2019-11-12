import React from 'react'
import { Helmet } from "react-helmet"
import { useQuery } from 'urql'

const dataQuery = `
  query {
    user(id: 1) {
      Name
      GitHub
    }
  }

`
const UserData = () => {
  const [result] = useQuery({
    query: dataQuery
  });
  if (result.fetching) {
    return 'Loading...';
  } else if (result.error) {
    return "Wabba Lubba Dubb Dubbb";
  }

  const tres = result.data.user

  return (
    <div>
      <div className="card" >
        <Helmet>
          <link rel="shortcut icon" type="image/png" href={"https://avatars1.githubusercontent.com/" + tres.GitHub + "?size=16"} />
          <title>{tres.Name}</title>
        </Helmet>
      </div>
    </div>
  )
}

export default UserData
