import axios from "axios";

const KEY = "AIzaSyDlUY4iJ_Ay0zHTrUDKDhMsyDS6OyETg_k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
