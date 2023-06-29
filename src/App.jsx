import React, { useEffect, useState } from "react";
import { Tabs } from "@mantine/core";
import { generate_random_data } from "./helpers/generate_data";
import { SelectX } from "./components/SelectX";
import "./App.css";
import { TempChart } from "./components/TempChart";
import { HumidChart } from "./components/HumidChart";
import { CombinedChart } from "./components/CombinedChart";
import { colors } from "./colors";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const gen_data = generate_random_data(100);
    setData(gen_data);
  }, []);

  async function handleXSelectChange(value) {
    const new_data = generate_random_data(100, value);
    setData(new_data);
  }

  return (
    <div className="container">
      <Tabs defaultValue={"combined"}>
        <Tabs.List style={{ marginBottom: 10 }}>
          <Tabs.Tab value="temp">Temprature</Tabs.Tab>
          <Tabs.Tab value="humid">Humidity</Tabs.Tab>
          <Tabs.Tab value="combined">Combined</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="temp">
          <TempChart data={data} color={colors[0]} />
        </Tabs.Panel>
        <Tabs.Panel value="humid">
          <HumidChart data={data} color={colors[1]} />
        </Tabs.Panel>
        <Tabs.Panel value="combined">
          <CombinedChart data={data} color1={colors[0]} color2={colors[1]} />
        </Tabs.Panel>
      </Tabs>

      <SelectX onChange={handleXSelectChange} />
    </div>
  );
}
