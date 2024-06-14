import { useEffect, useState } from "react"
import axios from "axios"

import AvatarImage from "../../components/AvatarImage"
import { Container, RankUser, RankUsersContainers, RankingListContainer } from "./style"
import { IRankUser } from "../../interfaces/Rank"

function Ranking () {
  const [rankList, setRankList] = useState<IRankUser[]>([])
  
  const getPostFromAPI = async () => {
    const response = await axios.get<IRankUser[]>('/rank.json')

    return response.data
  }

  useEffect(() => {
    async function fetchData () {
      const responseData = await getPostFromAPI()

      setRankList(responseData)
    }

    fetchData()
  }, [])
  return (
    <Container>
      <RankUsersContainers>
        <h1>Ranking</h1>
      <RankingListContainer>
      {rankList && rankList.map(rank => (
            <RankUser>
            <AvatarImage avatarSourceLink={rank.picture}/>
              <div>
                <span>{rank.name}</span>
              </div>
            </RankUser>
          ))}
      </RankingListContainer>
      </RankUsersContainers>
    </Container>
  )
}

export default Ranking