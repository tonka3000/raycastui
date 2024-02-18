import {
  Clipboard,
  Icon,
  Image,
  Keyboard,
  MenuBarExtra as RCMenuBarExtra,
  environment,
  launchCommand,
  open,
  openCommandPreferences,
  showHUD,
} from "@raycast/api";
import { showErrorToast, getErrorMessage } from "../../lib/utils";
import { LaunchOptions } from "../../lib/rctypes";
import { copyToClipboardWithHUD } from "./utils";
import { Coordinates, MapType, MapsQuery, openInMaps } from "../../lib/maps";

function shouldClip(text: string, maxLength: number = 100) {
  const ml = maxLength > 0 ? maxLength : 100;
  return text.length > ml;
}

function clipText(text: string, maxLength: number = 100) {
  const ml = maxLength > 0 ? maxLength : 100;
  if (text.length > ml) {
    return text.slice(0, ml) + " ...";
  }
  return text;
}

export interface TextLimitProps {
  maxLength: number;
  /** Show the full title as tooltip if the text is clipped. Default is true */
  autoTooltip?: boolean;
}

export interface MenuBarItemProps {
  // no props from Raycast (1.66.2)
  title: string;
  subtitle?: string;
  icon?: Image.ImageLike;
  shortcut?: Keyboard.Shortcut | undefined;
  onAction?: ((event: object) => void) | undefined;
  tooltip?: string;
  /** Clip text if defined */
  textLimits?: TextLimitProps;
}

/** Use {@link MenuBarExtra.Item} instead */
const MenuBarItem: React.FC<MenuBarItemProps> = ({ title, textLimits, tooltip, ...restProps }) => {
  const maxLength = textLimits?.maxLength || 100;
  const clipped = shouldClip(title, maxLength);
  const getTooltip = () => {
    if (tooltip) {
      return tooltip;
    }
    if (textLimits) {
      const att = textLimits.autoTooltip;
      if ((att === undefined || att === true) && clipped) {
        return title;
      }
    }
  };

  return <RCMenuBarExtra.Item title={title ? clipText(title, maxLength) : "?"} tooltip={getTooltip()} {...restProps} />;
};

export interface MenuBarItemConfigureCommandProps extends Omit<MenuBarItemProps, "title" | "onAction"> {
  /** The title displayed for the item */
  title?: string;
}

/**
 * Use {@link MenuBarExtra.ConfigureCommand} instead
 */
export function MenuBarItemConfigureCommand({
  title,
  shortcut,
  icon,
  ...restProps
}: MenuBarItemConfigureCommandProps): JSX.Element {
  return (
    <RCMenuBarExtra.Item
      title={title ?? "Configure Command"}
      shortcut={shortcut ?? { modifiers: ["cmd"], key: "," }}
      icon={icon ?? Icon.Gear}
      onAction={() => openCommandPreferences()}
      {...restProps}
    />
  );
}

export interface MenuBarOpenExtensionPreferencesItemProps extends Omit<MenuBarItemProps, "title" | "onAction"> {
  title?: string;
}

/**
 * Use {@link MenuBarExtra.ConfigureExtension} instead
 */
export function MenuBarOpenExtensionPreferencesItem({
  title,
  icon,
  shortcut,
  ...restProps
}: MenuBarOpenExtensionPreferencesItemProps) {
  const onAction = async () => {
    environment.commandName;
    try {
      await openCommandPreferences();
    } catch (error) {
      showErrorToast(getErrorMessage(error), "Could not launch Configure Extension Command");
      console.log(error);
    }
  };
  return (
    <MenuBarItem
      title={title ?? "Configure Extension"}
      shortcut={shortcut ?? { modifiers: ["opt", "cmd"], key: "," }}
      icon={icon ?? Icon.Gear}
      onAction={onAction}
      {...restProps}
    />
  );
}

export interface MenuBarOpenInBrowserItemProps extends Omit<MenuBarItemProps, "title"> {
  /** This url which should be opened */
  url: string;
  /** The title of the item */
  title?: string;
  /** Callback when the URL was opened in the browser */
  onOpen?: (url: string) => void;
}

/** Use {@link MenuBarExtra.OpenInBrowser} instead */
export function MenuBarOpenInBrowserItem({ title, url, onOpen, icon, ...restProps }: MenuBarOpenInBrowserItemProps) {
  const onAction = () => {
    open(url)
      .then(() => {
        if (onOpen) {
          onOpen(url);
        }
      })
      .catch((error) => showErrorToast(getErrorMessage(error)));
  };
  return (
    <MenuBarItem
      title={title ?? "Open In Browser"}
      icon={icon ?? { source: Icon.Globe }}
      onAction={onAction}
      {...restProps}
    />
  );
}

export interface MenuBarLaunchCommandItemProps extends MenuBarItemProps {
  /** The command + options which should be launched  */
  command: LaunchOptions;
}

/** Use {@link MenubarExtra.LaunchCommand} instead */
export function MenuBarLaunchCommandItem({ title, command, icon, ...restProps }: MenuBarLaunchCommandItemProps) {
  const onAction = async () => {
    try {
      await launchCommand(command);
    } catch (error) {
      showErrorToast(getErrorMessage(error));
    }
  };
  return (
    <MenuBarItem
      title={title ?? "Launch Command"}
      icon={icon ?? { source: Icon.Terminal }}
      onAction={onAction}
      {...restProps}
    />
  );
}

export interface MenuBarCopyToClipboardProps extends Omit<MenuBarItemProps, "title"> {
  /** The contents that will be copied to the clipboard */
  content: string | number | Clipboard.Content;
  /** The title displayed for the item */
  title?: string;
}

/** Use {@link MenuBarExtra.CopyToClipboard} instead */
export function MenuBarCopyToClipboard({ content, title, icon, onAction, ...restProps }: MenuBarCopyToClipboardProps) {
  const copyToClipboard = async () => {
    try {
      await copyToClipboardWithHUD(content);
    } catch (error) {
      showErrorToast(getErrorMessage(error));
    }
  };
  return (
    <RCMenuBarExtra.Item
      title={title ?? "Copy To Clipboard"}
      icon={icon ?? Icon.CopyClipboard}
      onAction={onAction ?? copyToClipboard}
      {...restProps}
    />
  );
}

export interface MenuBarOpenMapsProps extends Omit<MenuBarItemProps, "title"> {
  /** The title displayed for the item */
  title?: string;
  /** The coordinate of the location which should be shown */
  coordinates?: Coordinates;
  /** Which map type should be used like `Satellite` */
  mapType?: MapType;
}

/** Use {@link MenuBarExtra.OpenMaps} instead */
export function MenuBarOpenMaps({ title, icon, coordinates, mapType, ...restProps }: MenuBarOpenMapsProps) {
  const onAction = async () => {
    try {
      const query: MapsQuery = {
        coordinates,
        mapType,
      };
      showHUD("Open Maps");
      await openInMaps(query);
    } catch (error) {
      showErrorToast(getErrorMessage(error));
    }
  };
  return <MenuBarItem title={title ?? "Open Maps"} icon={icon ?? Icon.Pin} {...restProps} onAction={onAction} />;
}

export { MenuBarItem };
