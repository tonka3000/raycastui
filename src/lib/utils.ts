import { Clipboard, LaunchType, Toast, environment, showToast } from "@raycast/api";

export async function showErrorToast(message: string, title?: string): Promise<void> {
  if (environment.launchType === LaunchType.Background) {
    // don't show in background schedule otherwise we will get an exception
    console.error("showErrorToast can not be launch in Background");
    return;
  }
  const t = title || "Something went wrong";
  showToast({
    style: Toast.Style.Failure,
    title: t,
    message: message,
    primaryAction: {
      title: "Copy Error Message",
      onAction: (toast) => Clipboard.copy(`${t}: ${toast.message ?? ""}`),
      shortcut: { modifiers: ["cmd", "shift"], key: "c" },
    },
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getErrorMessage(error: unknown | any): string {
  if (error instanceof Error) {
    return error.message;
  } else {
    if (typeof error === "string") {
      return error as string;
    }
    return "Unknown Error";
  }
}
