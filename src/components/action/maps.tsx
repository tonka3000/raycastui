import { Icon, Action as RCAction, showHUD } from "@raycast/api";
import { Action } from ".";
import { getErrorMessage, showErrorToast } from "../../lib/utils";
import { Coordinates, MapType, MapsQuery, openInMaps } from "../../lib/maps";

export interface ActionOpenInMapsProps extends Omit<RCAction.Props, "title"> {
  /** The title displayed for submenu. */
  title?: string;
  /** The coordinate of the location which should be shown. */
  coordinates?: Coordinates;
  /** Which map type should be used like `Satellite` */
  mapType?: MapType;
}

/** Use {@link Action.OpenMaps} instead */
export function ActionOpenInMaps({ title, icon, coordinates, mapType, ...restProps }: ActionOpenInMapsProps) {
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
  return <Action {...restProps} title={title ?? "Open In Maps"} icon={icon ?? Icon.Pin} onAction={onAction} />;
}
