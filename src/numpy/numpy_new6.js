var $builtinmodule = function (name) {
	let mod= {__name__: new Sk.builtin.str("numpy")};
    
    // func: numpy.arange
    var arange_f=function(start, stop, step , dtype) {
		Sk.builtin.pyCheckArgs("arange", arguments, 1, 4);
        Sk.builtin.pyCheckType("start", "number", Sk.builtin.checkNumber(start));
        var start_num;
        var stop_num;
        var step_num;
        var type=dtype || null;

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
        var arange_buffer = math.range(start_num, stop_num, step_num)['_data'];
        // set to float
        if (!dtype || dtype == null) {
            if (Sk.builtin.checkInt(start)) {
                dtype = Sk.builtin.int_;
                for (i = 0; i < arange_buffer.length; i++) {
                    arange_buffer[i] = Math.floor(arange_buffer[i]);
                }
            } else {
                dtype = Sk.builtin.float_;
                for (i = 0; i < arange_buffer.length; i++) {
                    arange_buffer[i] = parseFloat(arange_buffer[i]);
                }
            }
        }else{
            if(dtype == 'int'){
                dtype = Sk.builtin.int_;
                for (i = 0; i < arange_buffer.length; i++) {
                    arange_buffer[i] = Math.floor(arange_buffer[i]);
                }
            }else if(dtype == 'float'){
                dtype = Sk.builtin.float_;
                for (i = 0; i < arange_buffer.length; i++) {
                    arange_buffer[i] = parseFloat(arange_buffer[i]);
                }
            }
        }

        return Sk.ffi.remapToPy(arange_buffer);
	}
	mod.arange = new Sk.builtin.func(arange_f);
    
	return mod;
}
