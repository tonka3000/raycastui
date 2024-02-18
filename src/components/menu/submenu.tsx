import { Image, MenuBarExtra as RCMenuBarExtra } from "@raycast/api";
import { ReactNode } from "react";
import { joinNonEmpty } from "./utils";

export interface MenuBarSubmenuProps {
  title: string;
  subtitle?: string;
  /** The separator which will be used when a subtitle is set */
  titleSeparator?: string;
  icon?: Image.ImageLike | undefined;
  children?: ReactNode;
}

/** Use {@link MenuBarExtra.Submenu} instead */
export function MenuBarSubmenu({
  title,
  titleSeparator,
  subtitle,
  children,
  ...restProps
}: MenuBarSubmenuProps): JSX.Element {
  const sep = titleSeparator && titleSeparator.trim().length > 0 ? titleSeparator.trim() : "";
  const fullTitle = joinNonEmpty(
    [title, subtitle].filter((e) => e),
    ` ${sep} `,
  );
  return (
    <RCMenuBarExtra.Submenu title={fullTitle ?? ""} {...restProps}>
      {children}
    </RCMenuBarExtra.Submenu>
  );
}
