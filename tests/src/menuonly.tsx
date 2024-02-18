import { MenuBarExtra } from "@raycast-community/ui";
import { showHUD } from "@raycast/api";

export default function MenuCommand() {
  return <MenuBarExtra.RootOnly title="MO" onAction={() => showHUD("Menu Clicked")} />;
}
