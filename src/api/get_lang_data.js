import axios from "axios";
import { BASE_URL } from "./base_url";

export async function get_lang_data(lang) {
  try {
    const res = await axios.get(`${BASE_URL}/lang-data`, {
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
