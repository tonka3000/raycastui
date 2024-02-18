import { Image, MenuBarExtra } from "@raycast/api";
import React from "react";

export interface MenuBarRootProps {
  children: React.ReactNode;
  icon?: Image.ImageLike;
  isLoading?: boolean;
  title?: string;
  tooltip?: string;
}

export function MenuBarRoot({ children, ...restProps }: MenuBarRootProps): JSX.Element {
  return <MenuBarExtra {...restProps}>{children}</MenuBarExtra>;
}
