import axios from "axios";
import { BASE_URL } from "./base_url";

export async function get_graph_data(lang, unit) {
  try {
    const res = await axios.get(`${BASE_URL}/graph-data?unit=${unit}`, {
      headers: {
        "Accept-Language": lang || "en",
      },
    });
    if (res.status == 200) return { status: 200, data: res.data };
    else return { status: res.status, message: "Something wen't wrong" };
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
}
