import axios from "axios";

export function getTweets() {
  return axios.get(
    "https://api.twitter.com/1.1/search/tweets.json",
    { params: { q: "foo" } }
  )
}
