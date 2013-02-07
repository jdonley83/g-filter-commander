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

	test("remove multiple items test", function(){
		cmd.init("a|b|c|d");
		cmd.removeItem("b");
		cmd.removeItem("c");
		result = cmd.process();
		equal(result[1], "d");
	});

	test("do not allow multiple copies of items", function(){
		cmd.init("a|b|b|c");
		result = cmd.process();
		equal(result.length, 3);
		equal(result[2], "c");
	});

	test("do not allow multiple copies of items even when more than 2 copies exist", function(){
		cmd.init("a|b|b|b|c");
		result = cmd.process();
		equal(result.length, 3);
		equal(result[2], "c");
	});
})();