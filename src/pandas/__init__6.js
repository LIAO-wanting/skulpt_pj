var $builtinmodule = function (name) {
	let mod= {__name__: new Sk.builtin.str("pandas")};
    
    // func: pandas.Series()
    mod.Series=new Sk.builtin.func(function(dict,index) {
        // Parse arguments
        var dict= Sk.ffi.remapToJs(dict)
        var dict_index= Sk.ffi.remapToJs(index) || [];
        var s="error"
        if(dict_index.length==0){//没有传入index值
            s = new dfd.Series(dict)
        }else{
            s = new dfd.Series(dict, {index:dict_index })
        }
        s.print()
        return Sk.ffi.remapToPy(s)
    })

	return mod;
}
