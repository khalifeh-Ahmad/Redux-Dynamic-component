import { configureStore } from "@reduxjs/toolkit";
import mdl from "./modalSlice";

export default configureStore({
  reducer: { modal: mdl },
});
