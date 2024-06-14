import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { HiOutlineHeart } from "react-icons/hi";

import { AvatarBadge, AvatarTopicContainer, Container, ContainerHeader, TopicContainer, TopicDescriptionArea, TopicDescriptionContainer, TopicDescriptionDate } from "./style";
import AvatarImage from "../../components/AvatarImage";
import { ITopicCardsComponentProps, ITopicComments } from "../../interfaces/Topics";
import { IGroups } from "../../interfaces/Groups";

interface IResponses {
  commentsResponse: ITopicComments[];
  groupsResponse: IGroups[];
}

function PostPage () {
  const params = useParams();
  const [windowWidth] = useState(document.documentElement.clientWidth)
  const [comments, setComments] = useState<ITopicComments[]>([])
  const [topicLiked, setTopicLiked] = useState(false)
  const location = useLocation().state as ITopicCardsComponentProps

  async function getCommentsFromAPI (): Promise<IResponses> {
    const commentsResponse = await axios.get<ITopicComments[]>('https://jsonplaceholder.typicode.com/posts/1/comments')
    const groupsResponse = await axios.get<IGroups[]>('/groups.json')

    return {
        commentsResponse: commentsResponse.data,
        groupsResponse: groupsResponse.data
    }
  }

  const randomDate = () => {
    const rand = Math.floor(Math.random() * 365) * 1000 * 60 * 60 * 24;
    const dat = new Date(Date.now() + rand);
    return `${dat.getDate()}/${dat.getMonth() + 1}/${dat.getFullYear()}`;
  };

  useEffect(() => {
    async function fetchCommentsData () {
      const { commentsResponse, groupsResponse } = await getCommentsFromAPI()
      
      commentsResponse.forEach(comment => {
        comment.date = randomDate()
        comment.group = groupsResponse[Math.floor(Math.random() * groupsResponse.length + 1)].name
        return comment
      }); 
      
      setComments(commentsResponse)
    }

    fetchCommentsData()
  }, [])

  return (
    <Container>
      <ContainerHeader>
        <h1>{location.topicTitle}</h1>      
        <span>ID: {params.id}</span> 
      </ContainerHeader>
      <TopicContainer>
        <AvatarTopicContainer>
          <AvatarImage avatarSourceLink={location.avatarProps?.avatarSourceLink} avatarAltTitle={location.avatarProps?.avatarAltTitle} avatarTitle={location.avatarProps?.avatarTitle}/>
          <div>
            <p>{location.authorName}</p>
            <span>{location.groupName}</span>
          </div>
          <AvatarBadge>Badge Autor</AvatarBadge>
        </AvatarTopicContainer>
        <TopicDescriptionContainer>
          <div>
          <TopicDescriptionDate>22/10/2023</TopicDescriptionDate>
          <HiOutlineHeart size={windowWidth > 979 ? 30 : 25} onClick={() => setTopicLiked(!topicLiked)} fill={topicLiked ? '#ff2929' : '#ffff'}/>
          </div>
          <TopicDescriptionArea readOnly rows={10} value={location.topicDescription}/>
        </TopicDescriptionContainer>
      </TopicContainer>
      {comments && comments.sort(
        (previousDate, currentDate) => (previousDate.date > currentDate.date) ? 1 : ((currentDate.date > previousDate.date) ? -1 : 0)
      ).map((comment, idx) => (
      <TopicContainer key={idx}>
        <AvatarTopicContainer>
          <AvatarImage />
          <div>
            <p>{comment.name}</p>
            <span>{comment.group}</span>
          </div>
          <AvatarBadge>Badge Autor</AvatarBadge>
        </AvatarTopicContainer>
        <TopicDescriptionContainer>
        <div>
          <TopicDescriptionDate>{comment.date}</TopicDescriptionDate>
          </div>
          <TopicDescriptionArea readOnly rows={10} value={comment.body} />
        </TopicDescriptionContainer>
      </TopicContainer>
      )
      )}
    </Container>
  )
}

export default PostPage