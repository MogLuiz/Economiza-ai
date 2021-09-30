// Packages
import React, { createContext, useState, useContext } from "react";

// Types
import { IAuthContext } from "./types";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);
