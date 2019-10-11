QUnit.test("test half to full abc", function(assert) {
    assert.ok("ａｂｃｄｅｆ" === toFullWidth("abcdef"), "Passed!");
});

QUnit.test("test half to full num", function(assert) {
    assert.ok("１２３４５６７８９０" === toFullWidth("1234567890"));
});

QUnit.test("test half to full symbol", function(assert){
    assert.ok("＝＜＞\u3000～－" === toFullWidth("=<>\u0020~-"));
});

QUnit.test("test delete space", function(assert){
    assert.ok("" === deleteSpace("\u0020\u0020\u0020\u0020"));
});

QUnit.test("test cut string", function(assert){
    assert.ok("abc" === cutString("abcdefg", 3));
});

QUnit.test("test full and length", function(assert){
    assert.ok("ＬｉｂｅｒａｌＡｒｔｓＣｏｍｍ" === full_and_length("Liberal Arts Community", 15));
});