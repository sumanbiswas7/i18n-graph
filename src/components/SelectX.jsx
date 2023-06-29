import { Radio, Group } from "@mantine/core";
import { useEffect, useState } from "react";

export function SelectX({ onChange }) {
  const [value, setValue] = useState("minute");

  useEffect(() => {
    if (onChange) onChange(value);
  }, [value]);

  return (
    <Radio.Group
      value={value}
      onChange={setValue}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        marginTop: 15,
      }}
      // label="Select your preffered time unit"
      description="Select your preffered time unit"
    >
      <Group mt="xs">
        <Radio value="second" label="Seconds" />
        <Radio value="minute" label="Minutes" />
        <Radio value="hour" label="Hours" />
      </Group>
    </Radio.Group>
  );
}
