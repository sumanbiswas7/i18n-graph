import axios from "axios";

export async function get_lang_data(lang) {
  try {
    const res = await axios.get("http://localhost:5000/lang-data", {
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
