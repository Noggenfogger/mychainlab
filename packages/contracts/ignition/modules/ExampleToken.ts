import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("ExampleTokenModule", (m) => {
  const exampleToken = m.contract("ExampleToken");

  return { exampleToken };
});
