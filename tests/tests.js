(function(){
	// hello world
	test( "hello test", function() {
		ok( 1 == "1", "Passed!" );
	});

	// real tests below
	var cmd = com.jdonley83.g_filter_commander;

	test("simple split test", function(){
		result = cmd.process("a|b");
		equal(result[0], "a");
		equal(result[1], "b");
	});

	test("remove @ symbol from input", function(){
		result = cmd.process("a|@b");
		equal(result[1], "b");
	});

	test("alphabetize items test", function(){
		result = cmd.process("b|c|a");
		equal(result[0], "a");
		equal(result[1], "b");
		equal(result[2], "c");
	});
})();