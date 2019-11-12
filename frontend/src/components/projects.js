import React from 'react'
import { useQuery } from 'urql'
import { Button } from 'rebass'
import Flippy, { FrontSide, BackSide } from 'react-flippy'



const projQuery = `
  query {
    user(id: 1) {
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

const Projects = () => {

  const [result] = useQuery({
    query: projQuery
  });
  if (result.fetching) {
    return 'Loading...';
  } else if (result.error) {
    return "Data isn't flowing";
  }

  const projs = result.data.user
  return (
    <div>
      <center><h3>Projects</h3></center>
      <center>
        <div className="row">
          <div className="col-sm-6">
            <Flippy
              flipOnHover={true}
              flipDirection="horizontal">
              <FrontSide>
                <img src="https://cdn.pixabay.com/photo/2019/09/04/09/48/mammal-4451152_960_720.jpg" className="card-img-top" alt="" />
                <h5>{projs.Project1}</h5>
              </FrontSide><BackSide style={{ backgroundColor: 'hotpink' }}>
                <div className="card-body" style={{ width: `18rem` }}>
                  <p className="card-text">{projs.Project1desc}</p>
                  <a href={projs.Projecturl1} ><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
                </div></BackSide>
            </Flippy>
          </div><br />

          <div className="column">
            <Flippy
              flipOnHover={true}
              flipDirection="vertical">
              <FrontSide >
                <img src="https://cdn.pixabay.com/photo/2019/08/02/09/39/mugunghwa-4379251_960_720.jpg" className="card-img-top" alt="" />
                <h5>{projs.Project2}</h5>
              </FrontSide>
              <BackSide style={{ backgroundColor: 'aqua' }}>
                <div style={{ width: `18rem` }}>
                  <p className="card-text">{projs.Project2desc}</p>
                  <a href={projs.Projecturl2} ><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
                </div>
              </BackSide>
            </Flippy></div>

          <div className="col-md-6">
            <Flippy
              flipOnHover={true}
              flipDirection="vertical">
              <FrontSide>
                <img src="https://meenhacks.github.io/img/logo/MHACKS_transp.png" width="501" height="334" className="" alt="" />
                <h5>{projs.Project3}</h5>
              </FrontSide>
              <BackSide style={{ backgroundColor: 'aqua' }}>
                <div className="card-content" style={{ width: `18rem` }}>
                  <p className="card-text">{projs.Project3desc}</p>
                  <a href={projs.Projecturl3}><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
                </div>
              </BackSide>
            </Flippy></div>

          <div className="column">
            <Flippy
              flipOnHover={true}
              flipDirection="horizontal">
              <FrontSide >
                <img src="https://raw.githubusercontent.com/athul/blog/master/content/assets/n1.png" width="501" height="334" alt="" />
                <h5>{projs.Project4}</h5>
              </FrontSide >
              <BackSide style={{ backgroundColor: 'hotpink' }}>
                <div className="card-body" style={{ width: `18rem` }}>
                  <p className="card-text">{projs.Project4desc}</p>
                  <a href={projs.Projecturl4}><Button mr={3} color='white' bg='rebeccapurple'>Project Link</Button></a>
                </div>
              </BackSide>
            </Flippy>
          </div></div>
      </center>
    </div>
  )
}
export default Projects