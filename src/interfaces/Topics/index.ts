export interface IAvatarInfos {
  avatarSourceLink: string
  avatarAltTitle: string
  avatarTitle: string
}

export interface ITopicInfos {
  id: string,
  topicTitle: string,
  topicDescription: string,
  avatar_infos: IAvatarInfos
  comments_count: number,
  likes_count: number
}