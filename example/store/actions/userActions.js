import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../sevice/verbs";
import { BASE_URL } from "../../sevice/urls";

const getUsers = createAsyncThunk("users/getUsers",
    async () => {
      const response = await getRequest(BASE_URL);
      //console.log(response)
      //console.log(response.data)
      return response.data.results; // bir üst satırda gelen veriyi inceledikten sonra backend den ne gelmişse onu ekledik ( results)
    }
  
);

export {getUsers}