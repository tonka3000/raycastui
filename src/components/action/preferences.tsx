import { openCommandPreferences, Action as RCAction, Icon } from "@raycast/api";
import { Action } from ".";
import { showErrorToast, getErrorMessage } from "../../lib/utils";

export interface ActionOpenExtensionPreferencesProps extends Omit<RCAction.Props, "title" | "onAction"> {
  title?: string;
}

/** Use {@link Action.OpenExtensionPreferences} instead */
export function ActionOpenExtensionPreferences({ title, icon, ...restProps }: ActionOpenExtensionPreferencesProps) {
  const onAction = async () => {
    try {
      await openCommandPreferences();
    } catch (error) {
      showErrorToast(getErrorMessage(error), "Could not launch Configure Extension Command");
    }
  };
  return <Action title={title ?? "Configure Extension"} {...restProps} icon={icon ?? Icon.Gear} onAction={onAction} />;
}

export interface ActionOpenCommandPreferencesProps extends Omit<RCAction.Props, "title" | "onAction"> {
  title?: string;
}

/** Use {@link Action.OpenCommandPreferences} instead */
export function ActionOpenCommandPreferences({ title, icon, ...restProps }: ActionOpenCommandPreferencesProps) {
  const onAction = async () => {
    try {
      await openCommandPreferences();
    } catch (error) {
      showErrorToast(getErrorMessage(error), "Could not launch Configure Command");
    }
  };
  return <Action title={title ?? "Configure Command"} {...restProps} icon={icon ?? Icon.Gear} onAction={onAction} />;
}
