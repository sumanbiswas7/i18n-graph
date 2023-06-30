import { Radio, Group } from "@mantine/core";
import { useEffect, useState } from "react";

export function SelectX({ onChange, data }) {
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
      // description="Select your preffered time unit"
    >
      <Group mt="xs">
        <Radio value="second" label={data.sec} />
        <Radio value="minute" label={data.min} />
        <Radio value="hour" label={data.hour} />
      </Group>
    </Radio.Group>
  );
}
