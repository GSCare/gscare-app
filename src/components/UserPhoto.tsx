import { Image } from "react-native";

type Props = {
  sourceUrl: string;
  altDescription: string;
}

export function UserPhoto({ sourceUrl, altDescription, ...rest }: Props) {
  return (
    <Image
      source={{ uri: sourceUrl }}
      alt={altDescription}
      className="w-full h-full rounded-full border-2 border-gray-400 mr-3"
      {...rest}
    />
  )
}