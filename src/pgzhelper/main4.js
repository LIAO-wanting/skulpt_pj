var $builtinmodule = function (name) {
	var pgzhelper= {__name__: new Sk.builtin.str("pgzhelper")};
    //导入外部引入的库
    var math = Sk.importModule("math", false, true); 
    // var sys = Sk.importModule("sys", false, false);
    var time = Sk.importModule("time", false, true);
    var pgzero = Sk.importModule("pgzrun", false, true);

    mod.Actor = Sk.misceval.buildClass(mod, function($gbl, $loc) {
        //构造器函数
        $loc.__init__ = new Sk.builtin.func(function(self, image, pos, anchor, kwargs) {
            self._flip_x = false
            self._flip_y = false
            self._scale = 1
            self._mask =null
            self._animate_counter = 0
            self.fps = 5
            self.direction = 0
        });
        $loc.direction_to()=new Sk.builtin.func(function(self,) {
            
        });
    }, "Actor");
    Sk.abstr.setUpInheritance("Actor", mod.Actor, pgzero.Actor)
	
    return pgzhelper;
}
