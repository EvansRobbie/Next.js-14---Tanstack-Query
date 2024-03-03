"use client";
import { useGetTodos } from "@/data/getTodos";
import React from "react";

const Todo = () => {
  const { data } = useGetTodos();
  console.log(data);
  return <div>Todo</div>;
};

export default Todo;
