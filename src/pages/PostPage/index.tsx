import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";


import { AvatarBadge, AvatarTopicContainer, Container, ContainerHeader, NewCommentButton, NewCommentContainer, NewCommentInput, TopicContainer, TopicDescriptionArea, TopicDescriptionContainer, TopicDescriptionDate } from "./style";
import AvatarImage from "../../components/AvatarImage";
import { ITopicCardsComponentProps, ITopicComments } from "../../interfaces/Topics";
import { IGroups } from "../../interfaces/Groups";
import { UserContext } from "../../context";

interface IResponses {
  commentsResponse: ITopicComments[];
  groupsResponse: IGroups[];
}

function PostPage () {
  const params = useParams();
  const { userLogged } = useContext(UserContext)
  const [windowWidth] = useState(document.documentElement.clientWidth)
  const [comments, setComments] = useState<ITopicComments[]>([])
  const [newComment, setNewComment] = useState('');
  const [topicLiked, setTopicLiked] = useState(false)
  const [topicDisliked, setTopicDisliked] = useState(false)
  const location = useLocation().state as ITopicCardsComponentProps

  async function getCommentsFromAPI (): Promise<IResponses> {
    const commentsResponse = await axios.get<ITopicComments[]>('https://jsonplaceholder.typicode.com/posts/1/comments')
    const groupsResponse = await axios.get<IGroups[]>('/groups.json')

    return {
        commentsResponse: commentsResponse.data,
        groupsResponse: groupsResponse.data
    }
  }

  function randomDate() {
    const rand = Math.floor(Math.random() * 365) * 1000 * 60 * 60 * 24;
    const dat = new Date(Date.now() + rand);
    return `${dat.getDate()}/${dat.getMonth() + 1}/${dat.getFullYear()}`;
  };

  function handleNewCommentText(e) {
    setNewComment(e.target.value);
  };

  function sendNewComment() {
    const today = new Date();
    const formattedDate = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(today);

    const newFormattedComment: ITopicComments = {
      name: userLogged.nickname,
      body: newComment,
      group: userLogged.group,
      date: formattedDate
    }
    setComments([...comments, newFormattedComment])
  }

  const handleLikesAndDislike = (optionRequired: string) => {
    if (optionRequired === 'LIKE') {
      setTopicLiked(true)
      setTopicDisliked(false)
    }

    if (optionRequired === 'DISLIKE') {
      setTopicDisliked(true)
      setTopicLiked(false)
    }
  }


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
          {/* <AvatarBadge>Badge Autor</AvatarBadge> */}
        </AvatarTopicContainer>
        <TopicDescriptionContainer>
          <div>
          <TopicDescriptionDate>22/10/2023</TopicDescriptionDate>
          <span>
          <FaRegThumbsUp size={windowWidth > 979 ? 30 : 25} onClick={() => handleLikesAndDislike("LIKE")} fill={topicLiked ? '#19dd19' : '#000'}/>
          <FaRegThumbsDown size={windowWidth > 979 ? 30 : 25} onClick={() => handleLikesAndDislike("DISLIKE")} fill={topicDisliked ? '#ff2929' : '#000'}/>
          </span>
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
      <NewCommentContainer>
        <NewCommentInput placeholder="Digite um comentário!" onChange={handleNewCommentText}/>
        <NewCommentButton onClick={sendNewComment}>Enviar</NewCommentButton>
      </NewCommentContainer>
    </Container>
  )
}

export default PostPage