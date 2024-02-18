import { ActionPanel, List } from "@raycast/api";
import { Action } from "@raycast-community/ui";

export default function MyTest() {
  return (
    <List>
      <List.Section title="Actions">
        <List.Item
          title="Numeric"
          actions={
            <ActionPanel>
              <Action.Numeric
                title="Choose Number with Custom Number"
                limits={{ min: { value: 5.5 }, max: { value: 10 } }}
                predefined={{ min: 5.5, max: 10 }}
                onFormat={(v) => v.toPrecision(2)}
                onValueChanged={(v) => console.log(`Number changed to ${v}`)}
                enableCustomNumber={true}
              />
              <Action.Numeric
                title="Choose Number From Preselection"
                limits={{ min: { value: 2 }, max: { value: 8 } }}
                predefined={[2, 3, 4, 5, 6, 7, 8]}
                onValueChanged={(v) => console.log(`Number changed to ${v}`)}
              />
              <Action.Numeric
                title="Choose Number Default"
                limits={{ min: { value: 2 }, max: { value: 8 } }}
                predefined={{ min: 1, max: 10, steps: 10 }}
                defaultValue={6.1}
                onValueChanged={(v) => console.log(`Number changed to ${v}`)}
              />
              <Action.Numeric
                title="Choose Number No Min"
                limits={{ max: { value: 8 } }}
                predefined={{ min: 1, max: 10, steps: 10 }}
                defaultValue={2}
                onValueChanged={(v) => console.log(`Number changed to ${v}`)}
                enableCustomNumber={true}
              />
              <Action.Numeric
                title="Custom Format"
                predefined={{ min: 1, max: 10, steps: 10 }}
                onFormat={(v) => `${v.toPrecision(2)} °C`}
                onValueChanged={(v) => console.log(`Number changed to ${v}`)}
                enableCustomNumber={true}
              />
            </ActionPanel>
          }
        />
        <List.Item
          title="Maps"
          actions={
            <ActionPanel>
              <Action.OpenMaps title="Coordinates" coordinates={{ long: 51.5007292, lat: -0.1272003 }} />
              <Action.OpenMaps title="Map Type" mapType="Satellite" />
            </ActionPanel>
          }
        />
        <List.Item
          title="Configure"
          actions={
            <ActionPanel>
              <Action.OpenExtensionPreferences />
              <Action.OpenCommandPreferences />
            </ActionPanel>
          }
        />
      </List.Section>
    </List>
  );
}
