import { AvatarPictureContainer } from "./style";

interface IAvatarProps {
  avatarSourceLink?: string;
  avatarAltTitle?: string;
  avatarTitle?: string;
}

function AvatarImage({avatarSourceLink, avatarAltTitle, avatarTitle}: IAvatarProps) {
  return <AvatarPictureContainer 
                    src={avatarSourceLink || "https://static-00.iconduck.com/assets.00/avatar-default-symbolic-icon-479x512-n8sg74wg.png"} 
                    alt={avatarAltTitle || "default_user"} 
                    title={avatarTitle || "default_user"}
                  />
}

export default AvatarImage;