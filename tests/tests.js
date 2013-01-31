(function(){
	// hello world
	test( "hello test", function() {
		ok( 1 == "1", "Passed!" );
	});

	// real tests below
	var cmd = com.jdonley83.g_filter_commander;

	test("simple split test", function(){
		cmd.init("a|b");
		result = cmd.process();
		equal(result[0], "a");
		equal(result[1], "b");
	});

	test("remove @ symbol from input", function(){
		cmd.init("a|@b");
		result = cmd.process();
		equal(result[1], "b");
	});

	test("alphabetize items test", function(){
		cmd.init("b|c|a");
		result = cmd.process();
		equal(result[0], "a");
		equal(result[1], "b");
		equal(result[2], "c");
	});

	test("add item test", function(){
		cmd.init("a|c");
		cmd.addItem("b");
		result = cmd.process();
		equal(result[0], "a");
		equal(result[1], "b");
		equal(result[2], "c");
	});

	test("remove item test", function(){
		cmd.init("a|b|c");
		cmd.removeItem("b");
		result = cmd.process();
		equal(result[1], "c");
	});
})();