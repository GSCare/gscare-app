import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'
import { color } from 'native-base/lib/typescript/theme/styled-system';

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline"
};

export function Button({title, variant = "solid", ...rest}: Props) {
  const textWithShadowStyle = {
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  }

  return (
    <ButtonNativeBase 
      w="full"
      h={14}
      bg={variant === "outline" ? "transparent" : "Orange" }
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="Orange"
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "Orange50" : "AmberOrange"
      }}
      {...rest}
    >
      <Text
        color={ variant === "outline" ? "Orange" : "white"}
        fontFamily="heading"
        fontSize="sm"
        style={variant === "outline" && textWithShadowStyle}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}