import axios from "axios";

const baseUrl = "https://api.twelvedata.com/stocks?source=docs&exchange=NYSE";
//const apiKey = "e2da6d0e68cd48f59ae0d8503ca64118";

export const request = async () => {
  try {
    const { data } = await axios.get(baseUrl);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};
