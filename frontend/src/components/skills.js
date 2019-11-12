import React from 'react'
import { Box, Card, Text } from 'rebass'
import { useQuery } from 'urql'

const skillQuery = `
  query {
    user(id: 1) {
      Skill1
      Skill2
      Skill3
      Skill4
    }
  }

`
const Skills = () => {
  const [result] = useQuery({
    query: skillQuery
  });
  if (result.fetching) {
    return 'Loading...';
  } else if (result.error) {
    return "Data isn't flowing well";
  }

  const skill = result.data.user
  return (
    <div className="box-shadow-large p-3">
      <div className="columns">
        <div className="column">
          <Box width={256} bg='#ffddaa' color='white'>
            <Card sx={{ p: 2, borderRadius: 2, boxShadow: '0 0 16px rgba(0, 0, 0, .25)', }}>
              <Text fontSize={12}>{skill.Skill1}</Text></Card>
          </Box>
        </div>
        <div className="column">
          <Box width={256} bg='#ddaa00'>
            <Card sx={{ p: 2, borderRadius: 2, boxShadow: '0 0 16px rgba(0, 0, 0, .25)', }}>
              <Text fontSize={12}>{skill.Skill2}</Text></Card>
          </Box>
        </div>
        <div className="column">
          <Box width={256} bg='#221144'>
            <Card sx={{ p: 2, borderRadius: 2, boxShadow: '0 0 16px rgba(0, 0, 0, .25)', }}>
              <Text fontSize={12}>{skill.Skill3}</Text></Card>
          </Box>
        </div>
        <div className="column">
          <Box width={256} bg='#7744ff' color='white'>
            <Card sx={{ p: 2, borderRadius: 2, boxShadow: '0 0 16px rgba(0, 0, 0, .25)', }}>
              <Text fontSize={12}>{skill.Skill4}</Text></Card>
          </Box>
        </div>
      </div>
    </div>
  )
}
export default Skills