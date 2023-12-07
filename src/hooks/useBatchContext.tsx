"use client";
import { useContext } from "react";
import { BatchContext } from "../contexts/BatchContext";

export const useBatchContext = () => useContext(BatchContext);
