import { Image } from "react-native";
import React from "react"; // Certifique-se de importar React

type Props = {
  sourceUrl: string;
  altDescription: string;
}

export function UserPhoto({ sourceUrl, altDescription, ...rest }: Props) {
  return (
    <Image
      source={{ uri: sourceUrl }}
      accessibilityLabel={altDescription} // Use accessibilityLabel em vez de alt
      style={{ width: "100%", height: "100%", borderRadius: 9999, borderWidth: 2, borderColor: "#9ca3af", marginRight: 12 }}
      {...rest}
    />
  );
}


// import { Image } from "react-native";

// type Props = {
//   sourceUrl: string;
//   altDescription: string;
// }

// export function UserPhoto({ sourceUrl, altDescription, ...rest }: Props) {
//   return (
//     <Image
//       source={{ uri: sourceUrl }}
//       alt={altDescription}
//       className="w-full h-full rounded-full border-2 border-gray-400 mr-3"
//       {...rest}
//     />
//   )
// }