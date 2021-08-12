var $builtinmodule = function (name) {
	var pgzhelper= {__name__: new Sk.builtin.str("pgzhelper")};
  //导入外部引入的库
  var math = Sk.importModule("math", false, false);
  var pygame = Sk.importModule("pygame", false, false);
  var pgzero = Sk.importModule("pgzero", false, false);
  var sys = Sk.importModule("sys", false, false);
  var time = Sk.importModule("time", false, false);

  var mod=sys.modules['__main__'];
  var _fullscreen=false;

  //函数：set_fullscreen()
  //设为全屏模式
	pgzhelper.set_fullscreen = new Sk.builtin.func(function() {
        Sk.builtin.pyCheckArgs("set_fullscreen", arguments, 0, 0);
        mod.screen.surface =Sk.misceval.callsim(pygame.$d['display.set_mode'],Sk.ffi.remapToPy((mod.WIDTH, mod.HEIGHT), pygame.FULLSCREEN));
        _fullscreen =true
    });


	return pgzhelper;
}
