"use client";

import { init, Form } from "@feathery/react";

export default function Home() {
  init("sdk-key");
  return <Form formName="SMS Signup1" />;
}
