import type { ComponentProps, CSSProperties } from "react";
import { FaCss3Alt, FaHtml5, FaPython } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { GrMysql } from "react-icons/gr";
import { IoBusiness, IoLogoJavascript, IoSettings } from "react-icons/io5";
import type { IconType } from "react-icons";

export const ICON_MAP = {
  FaHtml5,
  FaCss3Alt,
  IoLogoJavascript,
  GrMysql,
  FaPython,
  IoSettings,
  GoGraph,
  IoBusiness,
} satisfies Record<string, IconType>;

export type CategoryIconName = keyof typeof ICON_MAP;

type IconProps = ComponentProps<IconType>;

export function renderIcon(identifier: string, props?: IconProps) {
  const Icon = ICON_MAP[identifier as keyof typeof ICON_MAP];

  if (Icon) {
    return <Icon {...props} />;
  }

  return (
    <span
      aria-hidden={props?.["aria-hidden"]}
      aria-label={props?.["aria-label"]}
      className={props?.className}
      role={props?.role}
      style={props?.style as CSSProperties | undefined}
      title={props?.title}
    >
      ?
    </span>
  );
}
