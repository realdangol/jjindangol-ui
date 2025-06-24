import type { ReactElement } from "react";

type IconProps<Props = {}> = {
  size?: number | string;
  color?: string;
} & Props;

type PolymorphicIconComponent<Props = {}> = (props: IconProps<Props>) => ReactElement;

export default function withPolymorphicIcon<Props = {}>(
  IconComponent: (props: Omit<IconProps<Props>, "color">) => ReactElement
): PolymorphicIconComponent<Props> {
  return (props: IconProps<Props>) => {
    const DEFAULT_SIZE = 24;
    const size = !props.size || isNaN(Number(props.size)) ? DEFAULT_SIZE : Number(props.size);

    return (
      <span
        style={{
          color: props.color,
        }}
      >
        <IconComponent {...props} size={size} />
      </span>
    );
  };
}
