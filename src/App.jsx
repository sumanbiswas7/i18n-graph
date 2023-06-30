import React, { useEffect, useState } from "react";
import { Tabs } from "@mantine/core";
import { SelectX } from "./components/SelectX";
import "./App.css";
import { TempChart } from "./components/TempChart";
import { HumidChart } from "./components/HumidChart";
import { CombinedChart } from "./components/CombinedChart";
import { colors } from "./colors";
import { LanguagePicker } from "./components/LanguagePicker";
import { get_lang_data } from "./api/get_lang_data";
import { get_graph_data } from "./api/get_graph_data";

export default function App() {
  const [data, setData] = useState([]);
  const [lang, setLang] = useState(null);
  const [unit, setUnit] = useState("min");

  useEffect(() => {
    updateLanguageData("en");
    updateGraphData("en", "min");
  }, []);

  /**
   * --------------------
   *       Update
   * --------------------
   */
  async function updateLanguageData(lang) {
    const res = await get_lang_data(lang);
    if (res.status == 200) setLang(res.data);
  }

  async function updateGraphData(lang, unit) {
    const res = await get_graph_data(lang, unit);
    if (res.status == 200) setData(res.data);
  }

  /**
   * --------------------
   *       Handlers
   * --------------------
   */
  async function handleLanguageChange(lang) {
    updateGraphData(lang, unit);
    updateLanguageData(lang);
  }

  async function handleXSelectChange(unit) {
    updateGraphData(lang.language, unit);
    setUnit(unit);
  }

  if (lang == null) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <Tabs defaultValue={"combined"}>
        <Tabs.List style={{ marginBottom: 10 }}>
          <Tabs.Tab value="temp">{lang.tabs?.names?.temp}</Tabs.Tab>
          <Tabs.Tab value="humid">{lang.tabs?.names?.humid}</Tabs.Tab>
          <Tabs.Tab value="combined">{lang.tabs?.names?.combined}</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="temp">
          <TempChart
            data={data}
            color={colors[0]}
            maxL={lang.graph?.labels?.maxTemp}
            minL={lang.graph?.labels?.minTemp}
          />
        </Tabs.Panel>
        <Tabs.Panel value="humid">
          <HumidChart
            data={data}
            color={colors[1]}
            maxL={lang.graph?.labels?.maxHumid}
            minL={lang.graph?.labels?.minHumid}
          />
        </Tabs.Panel>
        <Tabs.Panel value="combined">
          <CombinedChart
            data={data}
            color1={colors[0]}
            color2={colors[1]}
            maxTL={lang.graph?.labels?.maxTemp}
            minTL={lang.graph?.labels?.minTemp}
            maxHL={lang.graph?.labels?.maxHumid}
            minHL={lang.graph?.labels?.minHumid}
          />
        </Tabs.Panel>
      </Tabs>

      <div style={{ width: 1000 }} className="bottom-container">
        <SelectX onChange={handleXSelectChange} data={lang.times.units} />
        <LanguagePicker onChange={handleLanguageChange} />
      </div>
    </div>
  );
}
