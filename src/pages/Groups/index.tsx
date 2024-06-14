import axios from "axios"
import AvatarImage from "../../components/AvatarImage"
import { IGroups } from "../../interfaces/Groups"
import { Container, Group, GroupsContainers, GroupsListContainer } from "./style"
import { useEffect, useState } from "react"

function Groups () {
  const [groupsList, setGroupsList] = useState<IGroups[]>([])
  const getPostFromAPI = async () => {
    const response = await axios.get<IGroups[]>('/groups.json')

    return response.data
  }

  useEffect(() => {
    async function fetchData () {
      const responseData = await getPostFromAPI()

      setGroupsList(responseData)
    }

    fetchData()
  })



  return (
    <Container>
      <GroupsContainers>
        <h1>Grupos</h1>
        <GroupsListContainer>
          {groupsList && groupsList.map(group => (
            <Group>
            <AvatarImage avatarSourceLink={group.picture}/>
              <div>
                <span>{group.name}</span>
              </div>
            </Group>
          ))}
        </GroupsListContainer>
      </GroupsContainers>
    </Container>
  )
}

export default Groups 