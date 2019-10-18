import React from 'react'
import {Box,Card,Text,Button,Link} from 'rebass'
import {Helmet} from "react-helmet"
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import {GitHub,Instagram,Twitter,Linkedin} from 'react-feather'
import {useQuery} from 'urql'

const dataQuery=`
  query {
    user(id: 1) {
      Name
      Bio
      College
      dob
      Phone
      Email
      Designations
      Skill1
      Skill2
      Skill3
      Skill4
      GitHub
      Twitter
      LinkedIn
      Instagram
      Project1
      Project1desc
      Projecturl1
      Project2
      Project2desc
      Projecturl2
      Project3
      Project3desc
      Projecturl3
      Project4
      Project4desc
      Projecturl4
    }
  }

`
const UserData = () => {
  const [result] = useQuery({
    query: dataQuery}) ;
      if (result.fetching) {
        return 'Loading...';
      } else if (result.error) {
        return "Wabba Lubba Dubb Dubbb";
      }
      console.log(result.data.user)
        console.log(typeof(result))
        const tres=Array.from(result.data.user)
        console.log(tres)
        //baaki work aakunilla, check console msgs
    return (
    <div>
        {tres.map(({Name,Bio,College,dob,Phone,Email,Designations,Skill1,Skill2,Skill3,Skill4,GitHub,Twitter,LinkedIn,Instagram,Project1,Project1desc,Projecturl1,Project2,Project2desc,Projecturl2,Project3,Project3desc,Projecturl3,Project4,Project4desc,Projecturl4}) => (
        <div className="card" >
          <Helmet>
            <link rel="shortcut icon" type="image/png" href={"https://avatars1.githubusercontent.com/"+GitHub+"?size=16"}/>
            <title>{Name}</title>
          </Helmet>
            <div className="card-body" style={{
              color:`crimson`
            }}>
                <center><img src={"https://avatars1.githubusercontent.com/"+GitHub+"?size=200"} alt=""/><br/>
                <p className="title has-text-danger">{Name}</p>
              </center>
              
                <center>
                <h6 className="is-size-3"><u>About </u>: {Bio}</h6>
                <h6 className="is-size-3" style={{color:`SLATEBLUE`}}><u>College</u>: {College}</h6>
                <h6 className="is-size-3"><u>Date of Birth</u>: {dob}</h6>
                <h6 className="is-size-3"><u>Phone</u>: {Phone}</h6>
                <h6 className="is-size-3"><u>Email</u>: {Email}</h6>
                <h6 className="is-size-3" style={{color:`SLATEBLUE`}}>{Designations}</h6>
                <span>
                <Link px={3} variant='nav' href= {"https://github.com/"+GitHub}><GitHub size='36' color='black'/></Link>
                <Link px={3} variant='nav' href={"https://twitter.com/"+Twitter}><Twitter size='36' color='aqua'/></Link>
                <Link px={3} variant='nav' href={"https://linkedin.com/"+LinkedIn}><Linkedin size='36' color='blue'/></Link>
                <Link px={3} variant='nav' href={"https://instagram.com/"+Instagram}><Instagram size='36' color='magenta'/></Link>
                </span>
                </center>
            </div >
            <div className="box-shadow-large p-3">
            <div className="columns">
              <div className="column">
                <Box width={256} bg='#ffddaa' color='white'>
                <Card sx={{p: 2,borderRadius: 2,boxShadow: '0 0 16px rgba(0, 0, 0, .25)',}}>
                <Text fontSize={12}>{Skill1}</Text></Card>
                </Box>
              </div>
              <div className="column">
              <Box width={256} bg='#ddaa00'>
              <Card sx={{p: 2,borderRadius: 2,boxShadow: '0 0 16px rgba(0, 0, 0, .25)',}}>
              <Text fontSize={12}>{Skill2}</Text></Card>
               </Box>
              </div>
              <div className="column">
              <Box width={256} bg='#221144'>
              <Card sx={{p: 2,borderRadius: 2,boxShadow: '0 0 16px rgba(0, 0, 0, .25)',}}>
              <Text fontSize={12}>{Skill3}</Text></Card>
               </Box>
              </div>
              <div className="column">
              <Box width={256} bg='#7744ff' color='white'>
              <Card sx={{p: 2,borderRadius: 2,boxShadow: '0 0 16px rgba(0, 0, 0, .25)',}}>
              <Text fontSize={12}>{Skill4}</Text></Card>
               </Box>
              </div>
              </div>
            </div>
            <hr/>
            <center><h3>Projects</h3></center>
            <center>
            <div className="row">
            <div className="col-sm-6">
              <Flippy
                flipOnHover={true}
                flipDirection="horizontal">
              <FrontSide>
            <img src="https://cdn.pixabay.com/photo/2019/09/04/09/48/mammal-4451152_960_720.jpg" className="card-img-top" alt="" />
            <h5>{Project1}</h5>
          </FrontSide><BackSide style={{ backgroundColor:'hotpink'}}>
          <div className="card-body" style={{width:`18rem`}}>
            <p className="card-text">{Project1desc}</p>
            <a href={Projecturl1} ><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
            </div></BackSide>
          </Flippy>
            </div><br/>

            <div className="column">
              <Flippy
                flipOnHover={true}
                flipDirection="vertical">
              <FrontSide >
            <img src="https://cdn.pixabay.com/photo/2019/08/02/09/39/mugunghwa-4379251_960_720.jpg" className="card-img-top" alt="" />
            <h5>{Project2}</h5>
          </FrontSide>
            <BackSide style={{ backgroundColor:'aqua'}}>
            <div  style={{width:`18rem`}}>
            <p className="card-text">{Project2desc}</p>
            <a href={Projecturl2} ><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
            </div>
            </BackSide>
          </Flippy></div>

        <div className="col-md-6">
            <Flippy
              flipOnHover={true}
              flipDirection="vertical">
              <FrontSide>
            <img src="https://meenhacks.github.io/img/logo/MHACKS_transp.png" width="501" height="334" className=""  alt="" />
            <h5>{Project3}</h5>
          </FrontSide>
            <BackSide style={{ backgroundColor:'aqua'}}>
          <div className="card-content" style={{width:`18rem`}}>
            <p className="card-text">{Project3desc}</p>
            <a href={Projecturl3}><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
          </div>
        </BackSide>
          </Flippy></div>

        <div className="column">
            <Flippy
              flipOnHover={true}
              flipDirection="horizontal">
            <FrontSide >
            <img src="https://raw.githubusercontent.com/athul/blog/master/content/assets/n1.png" width="501" height="334"  alt="" />
            <h5>{Project4}</h5>
            </FrontSide >
            <BackSide style={{ backgroundColor:'hotpink'}}>
          <div className="card-body" style={{width:`18rem`}}>
            <p className="card-text">{Project4desc}</p>
            <a href={Projecturl4}><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
            </div>
            </BackSide>
            </Flippy>
            </div></div>
            </center>
        </div>

        ))}
        </div>);
    };
export default UserData
