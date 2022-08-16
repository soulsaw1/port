import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../fueture/User";

export default configureStore({ reducer: { user: userReducer } });