export interface IAvatarInfos {
  avatarSourceLink: string
  avatarAltTitle: string
  avatarTitle: string
}

export interface ITopicInfos {
  id: string,
  authorName: string,
  groupName: string,
  topicTitle: string,
  topicDescription: string,
  avatar_infos: IAvatarInfos
  comments_count: number,
  likes_count: number
}

export interface ITopicCardsComponentProps {
  topicId: string,
  authorName: string,
  groupName: string,
  topicTitle: string,
  topicDescription: string,
  avatarProps?: IAvatarInfos,
  likesQuantity?: number,
  commentsQuantity: number
}


export interface ITopicComments {
  name: string;
  body: string;
  date?: string;
  group: string;
}
