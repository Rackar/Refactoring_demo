let plays = require("../lib/plays.json");
let invoices = require("../lib/invoices.json");
var assert = require("assert");
var first = require("../lib/first");

it("初始程序返回计算结果", function() {
  var result = first.statement(invoices[0], plays);
  assert.equal(
    result,
    "Statement for BigCo\n  Hamlet: $650.00 (55 seats)\n  As You Like It: $580.00 (35 seats)\n  Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n"
  );
});
