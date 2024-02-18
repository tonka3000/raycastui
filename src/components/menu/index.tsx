export * from "./root";
export * from "./item";
export * from "./section";
export * from "./submenu";
import { LaunchType, MenuBarExtra as RCMenuBarExtra, environment } from "@raycast/api";
import { MenuBarRoot, MenuBarRootProps } from "./root";
import {
  MenuBarCopyToClipboard,
  MenuBarCopyToClipboardProps,
  MenuBarItem,
  MenuBarItemConfigureCommand,
  MenuBarItemConfigureCommandProps,
  MenuBarItemProps,
  MenuBarLaunchCommandItem,
  MenuBarLaunchCommandItemProps,
  MenuBarOpenExtensionPreferencesItem,
  MenuBarOpenExtensionPreferencesItemProps,
  MenuBarOpenInBrowserItem,
  MenuBarOpenInBrowserItemProps,
  MenuBarOpenMaps,
  MenuBarOpenMapsProps,
} from "./item";
import { MenuBarSection, MenuBarSectionProps } from "./section";
import { MenuBarSubmenu, MenuBarSubmenuProps } from "./submenu";

interface MenuBarExtraOnlyProps extends Omit<MenuBarRootProps, "children"> {
  onAction?: () => void;
}

function MenuBarExtraOnlyFunction(props: { onAction: () => void }) {
  if (environment.launchType === LaunchType.UserInitiated) {
    props.onAction();
  }
  return null;
}

/** Use {@link MenuBarExtra.RootOnly} instead */
function MenuBarExtraOnly({ onAction, ...restProps }: MenuBarExtraOnlyProps) {
  return <MenuBarRoot {...restProps}>{onAction && <MenuBarExtraOnlyFunction onAction={onAction} />}</MenuBarRoot>;
}

interface MenuBarExtraProps extends RCMenuBarExtra.Props {
  children?: React.ReactNode;
}

const MenuBarExtra: React.FC<MenuBarExtraProps> & {
  /**
   * An item in the {@link MenuBarExtra} or {@link MenuBarExtra.Submenu}.
   *
   * @example
   * ```tsx
   * import { MenuBarExtra } from "@raycast-community/ui";
   * import { LaunchType, showHUD } from "@raycast/api";
   *
   * export default function MenuCommand() {
   *   return (
   *     <MenuBarExtra title="Raycast UI Menu Command">
   *       <MenuBarExtra.Item
   *         title={`${"#".repeat(100)}`}
   *         textLimits={{ maxLength: 10 }}
   *         onAction={() => showHUD("Child Menu from Menubar")}
   *       />
   *   );
   * }
   */
  Item: typeof MenuBarItem;
  /**
   * Menubar Section. The section will be shown when there is at least one child.
   *
   * @example
   * ```tsx
   * import { MenuBarExtra } from "@raycast-community/ui";
   *
   * export default function MenuCommand() {
   *   return (
   *     <MenuBarExtra title="Menu">
   *       <MenuBarExtra.Section title="Title" subtitle="Subtitle">
   *         <MenuBarExtra.Item title="Item" />
   *       </MenuBarExtra.Section>
   *     </MenuBarExtra>
   *   );
   * }
   * ```
   */
  Section: typeof MenuBarSection;
  /**
   * A group of related {@link MenuBarExtra.Item} or {@link MenuBarExtra.Submenu}
   *
   * @example
   * ```tsx
   * import { MenuBarExtra } from "@raycast-community/ui";
   *
   * export default function MenuCommand() {
   *   return (
   *     <MenuBarExtra title="Menu">
   *       <MenuBarExtra.Submenu title="Submenu" subtitle="Subtitle" titleSeparator="|">
   *         <MenuBarExtra.Item title="Test" />
   *       </MenuBarExtra.Submenu>
   *     </MenuBarExtra>
   *   );
   * }
   * ```
   */
  Submenu: typeof MenuBarSubmenu;
  /**
   * @experimental
   *
   * Only show a MenubarExtra without any items. Start the given action on user click.
   *
   * Warning: The onAction will also get called on the command activation e.g. during loading or reloading.
   *
   * @example
   * ```tsx
   * import { MenuBarExtra } from "@raycast-community/ui";
   * import { showHUD } from "@raycast/api";
   *
   * export default function MenuCommand() {
   *   return <MenuBarExtra.RootOnly title="Root Only" onAction={() => showHUD("Menu Clicked")} />;
   * }
   * ```
   */
  RootOnly: typeof MenuBarExtraOnly;
  /**
   * Open the given url in the default browser
   *
   * @example
   * ```tsx
   * import { MenuBarExtra } from "@raycast-community/ui";
   *
   * export default function MenuCommand() {
   *   return (
   *     <MenuBarExtra title="Menu">
   *       <MenuBarExtra.OpenInBrowser url="https://www.raycast.com" />
   *     </MenuBarExtra>
   *   );
   * }
   * ```
   */
  OpenInBrowser: typeof MenuBarOpenInBrowserItem;
  /**
   * Copy given content to the clipboard
   *
   * @example
   * ```tsx
   * import { MenuBarExtra } from "@raycast-community/ui";
   *
   * export default function MenuCommand() {
   *   return (
   *     <MenuBarExtra title="Menu">
   *       <MenuBarExtra.CopyToClipboard content="Some Content" />
   *     </MenuBarExtra>
   *   );
   * }
   * ```
   */
  CopyToClipboard: typeof MenuBarCopyToClipboard;
  /**
   * Launch the given Raycast command {@link LaunchOptions}
   *
   * @example
   * ```tsx
   * import { MenuBarExtra } from "@raycast-community/ui";
   *
   * export default function MenuCommand() {
   *   return (
   *     <MenuBarExtra title="Menu">
   *       <MenuBarExtra.LaunchCommand
   *         title="Launch Command"
   *         command={{
   *           name: "test",
   *           type: LaunchType.UserInitiated,
   *         }}
   *       />
   *     </MenuBarExtra>
   *   );
   * }
   * ```
   */
  LaunchCommand: typeof MenuBarLaunchCommandItem;
  /**
   * Open the current Command Preferences
   *
   * @example
   * ```tsx
   * import { MenuBarExtra } from "@raycast-community/ui";
   *
   * export default function MenuCommand() {
   *   return (
   *     <MenuBarExtra title="MenuBar">
   *       <MenuBarExtra.ConfigureCommand />
   *     </MenuBarExtra>
   *   );
   * }
   * ```
   * */
  ConfigureCommand: typeof MenuBarItemConfigureCommand;
  /**
   * Open the current Extension Preferences
   *
   * @example
   * ```tsx
   * import { MenuBarExtra } from "@raycast-community/ui";
   *
   * export default function MenuCommand() {
   *   return (
   *     <MenuBarExtra title="MenuBar">
   *       <MenuBarExtra.ConfigureExtension />
   *     </MenuBarExtra>
   *   );
   * }
   * ```
   */
  ConfigureExtension: typeof MenuBarOpenExtensionPreferencesItem;
  /** Open Apple Maps
   *
   * @example
   * ```tsx
   * import { MenuBarExtra } from "@raycast-community/ui";
   *
   * export default function MenuCommand() {
   *   return (
   *     <MenuBarExtra title="MenuBar">
   *       <MenuBarExtra.Section title="Maps">
   *         <MenuBarExtra.OpenMaps />
   *         <MenuBarExtra.OpenMaps title="Coordinates" coordinates={{ long: 51.5007292, lat: -0.1272003 }} />
   *         <MenuBarExtra.OpenMaps title="Map Type" mapType="Satellite" />
   *       </MenuBarExtra.Section>
   *     </MenuBarExtra>
   *   );
   * }
   * ```
   */
  OpenMaps: typeof MenuBarOpenMaps;
} = ({ children, ...restProps }) => {
  return <MenuBarRoot {...restProps}>{children}</MenuBarRoot>;
};

MenuBarExtra.Item = MenuBarItem;
MenuBarExtra.Section = MenuBarSection;
MenuBarExtra.Submenu = MenuBarSubmenu;
MenuBarExtra.RootOnly = MenuBarExtraOnly;
MenuBarExtra.OpenInBrowser = MenuBarOpenInBrowserItem;
MenuBarExtra.CopyToClipboard = MenuBarCopyToClipboard;
MenuBarExtra.LaunchCommand = MenuBarLaunchCommandItem;
MenuBarExtra.ConfigureCommand = MenuBarItemConfigureCommand;
MenuBarExtra.ConfigureExtension = MenuBarOpenExtensionPreferencesItem;
MenuBarExtra.OpenMaps = MenuBarOpenMaps;

namespace MenuBarExtra {
  export type Props = MenuBarRootProps;

  export namespace RootOnly {
    export type Props = MenuBarExtraOnlyProps;
  }

  export namespace Item {
    export type Props = MenuBarItemProps;
  }

  export namespace Section {
    export type Props = MenuBarSectionProps;
  }

  export namespace Submenu {
    export type Props = MenuBarSubmenuProps;
  }

  export namespace OpenInBrowser {
    export type Props = MenuBarOpenInBrowserItemProps;
  }

  export namespace CopyToClipboard {
    export type Props = MenuBarCopyToClipboardProps;
  }

  export namespace LaunchCommand {
    export type Props = MenuBarLaunchCommandItemProps;
  }

  export namespace ConfigureCommand {
    export type Props = MenuBarItemConfigureCommandProps;
  }

  export namespace ConfigureExtension {
    export type Props = MenuBarOpenExtensionPreferencesItemProps;
  }

  export namespace OpenMaps {
    export type Props = MenuBarOpenMapsProps;
  }
}

export { MenuBarExtra };
