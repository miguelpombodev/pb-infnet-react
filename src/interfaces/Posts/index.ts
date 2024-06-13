export default interface IPosts {
  userId: number;
  id: number;
  body: string;
  title: string;
  likes_count: number;
  comments_count: number;
}