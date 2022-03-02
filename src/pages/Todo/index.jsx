import React, { useState } from "react";

import { AddTask } from "./AddTasks";
import { Tasks } from "./Tasks";

import { Container } from "./style";

export const Todo = () => {
  return (
    <Container>
      <AddTask />
      <Tasks/>
    </Container>
  );
};
