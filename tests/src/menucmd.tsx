import { LaunchType, showHUD } from "@raycast/api";
import { MenuBarExtra } from "@raycast-community/ui";

export default function MenuCommand() {
  return (
    <MenuBarExtra title="MM">
      <MenuBarExtra.Item title="Item" subtitle="A Subtitle" onAction={() => showHUD("Simple Item")} />
      <MenuBarExtra.Submenu title="Submenu" subtitle="Subtitle" titleSeparator="|">
        <MenuBarExtra.Item title="Test" subtitle="Subtitle" onAction={() => {}} />
      </MenuBarExtra.Submenu>
      <MenuBarExtra.Section title="Text Limitation">
        <MenuBarExtra.Item
          title="This is a long text"
          textLimits={{ maxLength: 10 }}
          onAction={() => showHUD(`Long Text`)}
        />
        <MenuBarExtra.Item
          title="This is another long text without auto tooltip"
          textLimits={{ maxLength: 10, autoTooltip: false }}
          onAction={() => {}}
        />
        <MenuBarExtra.Item
          title="This is another long text with custom tooltip"
          tooltip="Some Tooltip"
          textLimits={{ maxLength: 10 }}
          onAction={() => {}}
        />
      </MenuBarExtra.Section>
      <MenuBarExtra.Section title="Title" subtitle="Subtitle">
        <MenuBarExtra.Item title="Sub 1" onAction={() => {}} />
      </MenuBarExtra.Section>
      <MenuBarExtra.Section title="Title" subtitle="Subtitle and Separator" titleSeparator="|">
        <MenuBarExtra.Item title="Sub 1" onAction={() => {}} />
      </MenuBarExtra.Section>
      <MenuBarExtra.Section title="No Children" /> {/* Is not visible if there are not children*/}
      <MenuBarExtra.Section
        title="Max. Children Section"
        childrenLimit={{
          max: 5,
          moreElement: (hidden) => (
            <MenuBarExtra.Item title={`... ${hidden}`} onAction={() => showHUD(`You have ${hidden} hidden elements`)} />
          ),
        }}
      >
        {Array.from(Array(10).keys()).map((i) => (
          <MenuBarExtra.Item key={i} title={`Item ${i}`} onAction={() => {}} />
        ))}
      </MenuBarExtra.Section>
      <MenuBarExtra.Section title="Actions">
        <MenuBarExtra.OpenInBrowser url="https://www.raycast.com" />
        <MenuBarExtra.CopyToClipboard content="Some Content" />
        <MenuBarExtra.LaunchCommand
          title="Launch Command"
          command={{
            name: "test",
            type: LaunchType.UserInitiated,
          }}
        />
      </MenuBarExtra.Section>
      <MenuBarExtra.Section title="Submenus">
        <MenuBarExtra.Submenu title="Submenu">
          <MenuBarExtra.Item title="Test" />
        </MenuBarExtra.Submenu>
      </MenuBarExtra.Section>
      <MenuBarExtra.Section title="Maps">
        <MenuBarExtra.OpenMaps />
        <MenuBarExtra.OpenMaps title="Coordinates" coordinates={{ long: 51.5007292, lat: -0.1272003 }} />
        <MenuBarExtra.OpenMaps title="Map Type" mapType="Satellite" />
      </MenuBarExtra.Section>
      <MenuBarExtra.Section title="Configure">
        <MenuBarExtra.ConfigureCommand />
        <MenuBarExtra.ConfigureExtension />
      </MenuBarExtra.Section>
    </MenuBarExtra>
  );
}
