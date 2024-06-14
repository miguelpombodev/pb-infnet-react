import AvatarImage from "../../components/AvatarImage"
import { Container, Group, GroupsContainers, GroupsListContainer } from "./style"

function Groups () {
  return (
    <Container>
      <GroupsContainers>
        <h1>Grupos</h1>
        <GroupsListContainer>
          <Group>
            <AvatarImage />
            <div>
              <span>Grupo</span>
            </div>
          </Group>
          <Group>
            <AvatarImage />
            <div>
              <span>Grupo</span>
            </div>
          </Group>
          <Group>
            <AvatarImage />
            <div>
              <span>Grupo</span>
            </div>
          </Group>
          <Group>
            <AvatarImage />
            <div>
              <span>Grupo</span>
            </div>
          </Group>
          <Group>
            <AvatarImage />
            <div>
              <span>Grupo</span>
            </div>
          </Group>
          <Group>
            <AvatarImage />
            <div>
              <span>Grupo</span>
            </div>
          </Group>
          <Group>
            <AvatarImage />
            <div>
              <span>Grupo</span>
            </div>
          </Group>
        </GroupsListContainer>
      </GroupsContainers>
    </Container>
  )
}

export default Groups 