var $builtinmodule = function (name) {
	let mod= {__name__: new Sk.builtin.str("numpy")};
    
    // func: numpy.arange
    var arange_f=function(start, stop, step) {
		Sk.builtin.pyCheckArgs("arange", arguments, 1, 3);
        Sk.builtin.pyCheckType("start", "number", Sk.builtin.checkNumber(start));
        var start_num;
        var stop_num;
        var step_num;

        if (stop === undefined && step === undefined) {
            start_num = 0;
            stop_num = Sk.ffi.remapToJs(start);
            step_num = Sk.ffi.remapToJs(1);
        } else if (step === undefined) {
            start_num = Sk.ffi.remapToJs(start);
            stop_num = Sk.ffi.remapToJs(stop);
            step_num = 1;
        } else {
            start_num = Sk.ffi.remapToJs(start);
            stop_num = Sk.ffi.remapToJs(stop);
            step_num = Sk.ffi.remapToJs(step);
        }
        // 返回生成的array
        var arange_buffer = math.range(start_num, stop_num, step_num);
        return Sk.ffi.remapToPy(arange_buffer.v);
	}
	mod.arange = new Sk.builtin.func(arange_f);
    
	return mod;
}
