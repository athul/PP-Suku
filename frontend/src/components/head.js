import React from "react"
import { Link } from 'rebass'
import { useQuery } from 'urql'
import { GitHub, Instagram, Twitter, Linkedin } from 'react-feather'

const headQuery = `
query {
    user(id: 1) {
      Name
      Bio
      College
      dob
      Phone
      Email
      Designations
      GitHub
      Twitter
      LinkedIn
      Instagram
    }
  }
`
const Heads = () => {
  const [result] = useQuery({
    query: headQuery
  });
  if (result.fetching) {
    return 'Loading...';
  } else if (result.error) {
    return "Server is Down I guess";
  }

  const head = result.data.user
  return (
    <div className="card-body" style={{
      color: `crimson`
    }}>
      <center><img src={"https://avatars1.githubusercontent.com/" + head.GitHub + "?size=200"} alt="" /><br />
        <p className="title has-text-danger">{head.Name}</p>
      </center>

      <center>
        <h6 className="is-size-3"><u>About </u>: {head.Bio}</h6>
        <h6 className="is-size-3" style={{ color: `SLATEBLUE` }}><u>College</u>: {head.College}</h6>
        <h6 className="is-size-3"><u>Date of Birth</u>: {head.dob}</h6>
        <h6 className="is-size-3"><u>Phone</u>: {head.Phone}</h6>
        <h6 className="is-size-3"><u>Email</u>: {head.Email}</h6>
        <h6 className="is-size-3" style={{ color: `SLATEBLUE` }}>{head.Designations}</h6>
        <span>
          <Link px={3} variant='nav' href={"https://github.com/" + head.GitHub}> <GitHub size='36' color='black' /> </Link>
          <Link px={3} variant='nav' href={"https://twitter.com/" + head.Twitter}><Twitter size='36' color='aqua' /></Link>
          <Link px={3} variant='nav' href={"https://linkedin.com/" + head.LinkedIn}><Linkedin size='36' color='blue' /></Link>
          <Link px={3} variant='nav' href={"https://instagram.com/" + head.Instagram}><Instagram size='36' color='magenta' /></Link>
        </span>
      </center>
    </div >
  )
}
export default Heads