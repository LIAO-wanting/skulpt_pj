var $builtinmodule = function (name) {
	var pgzhelper= {__name__: new Sk.builtin.str("pgzhelper")};
    //导入外部引入的库
    var math = Sk.importModule("math", false, false); 
    var sys = Sk.importModule("sys", false, false);
    var time = Sk.importModule("time", false, false);
    var pgzero = Sk.importModule("pgzrun", false, false);

    var mod=sys.modules['__main__'];
    var _fullscreen=false;
    console.log(mod)

    

	return pgzhelper;
}
