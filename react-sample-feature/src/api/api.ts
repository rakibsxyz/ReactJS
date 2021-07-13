import axios from "axios";
const user: any = process.env.REACT_APP_USER_URL;

export async function GetMonsters() {
    try{
      const result = await axios.get(user);
      return result.data;
    }
    catch(error){
      return {};
    }
  }