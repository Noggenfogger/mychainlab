// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.34;

import {Counter} from "./Counter.sol";
import {Test} from "forge-std/Test.sol";

contract CounterTest is Test {
  Counter counter;

  function setUp() public {
    counter = new Counter();
  }

  function test_InitialValue() public view {
    require(counter.x() == 0, "Initial value should be 0");
  }

  // 接受参数：模糊测试
  function testFuzz_Inc(uint8 x) public {
    for (uint8 i = 0; i < x; i++) {
      counter.inc();
    }
    require(counter.x() == x, "Value after calling inc x times should be x");
  }

  function test_IncByZero() public {
    vm.expectRevert(); // 期望失败
    counter.incBy(0);
  }

  function test_IncEmitsIncrementEvent() public {
    vm.expectEmit(); // 第一步：开启事件检查
    emit Counter.Increment(1); // 第二步：期望模版事件

    counter.inc(); // 第三步： 实际调用，对比期望值
  }
}
