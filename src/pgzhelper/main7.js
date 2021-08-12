var $builtinmodule = function (name) {
	let mod= {__name__: new Sk.builtin.str("pgzhelper")};
    //导入外部引入的库
    var math = Sk.importModule("math", false, true); 
    // var sys = Sk.importModule("sys", false, false);
    var time = Sk.importModule("time", false, true);
    var pgzero = Sk.importModule("pgzrun", false, true);

    // 重写角色类
    mod.Actor = Sk.misceval.buildClass(mod, function($gbl, $loc) {
        $loc.__init__ = new Sk.builtin.func(function(self, actorName, pos , anchor, kwargs) {
            return new Sk.misceval.promiseToSuspension(new Promise(function(resolve) {
                var anc=Sk.ffi.remapToJs(anchor) || 0.5;
                //helper新的属性
                self._flip_x = false
                self._flip_y = false
                self._scale = 1
                self._mask =null
                self._animate_counter = 0
                self.fps = 5
                self.direction = 0

                actorName = Sk.ffi.remapToJs(actorName);
                pos = Sk.ffi.remapToJs(pos) || [];
                textureRecources(actorName).then(function(texture) {
                const sprite = new Sprite(texture)
                sprite.zOrder=1
                self.sprite = sprite;
                self.sprite.anchor.set(anc);
                self.sprite.x = transX(pos[0] || 0)
                self.sprite.y = transY(pos[1] || 0)
                self.actorName = actorName;
                resolve(void 0)
                })
            }));
        });

        $loc.x = defineProperty(function(self){
            return Sk.ffi.remapToPy(transX(self.sprite.x, true))
            }, function(self, val){
            self.sprite.x = transX(val.v)
        });

        $loc.y = defineProperty(function(self){
            return Sk.ffi.remapToPy(transY(self.sprite.y, true))
            }, function(self, val){
            self.sprite.y = transY(val.v)
        });

        $loc.width = defineProperty('sprite', 'width');
        $loc.height = defineProperty('sprite', 'height');

        $loc.pos = defineProperty(function(self) {
            return Sk.ffi.remapToPy(transPos([self.sprite.x, self.sprite.y], true))
            }, function (self, val) {
            const pos = transPos(Sk.ffi.remapToJs(val))
            self.sprite.x = pos[0];
            self.sprite.y = pos[1];
            self['sprite']['pos'] = [pos[0], pos[1]];
        });

        $loc.angle = defineProperty('sprite', 'angle');
        $loc.show  = defineProperty('sprite', 'visible');
        $loc.image = defineProperty(function(self) {
            return Sk.ffi.remapToPy(self['sprite']['texture'])
            }, function (self, val) {
            return new Sk.misceval.promiseToSuspension(new Promise(function(resolve) {
                textureRecources(val.v).then(function(texture) {
                self['sprite']['texture'] = texture;
                resolve(void 0)
                })
            }))
        });

        $loc.frame = defineProperty(function(self) {
            return Sk.ffi.remapToPy(self['sprite']['texture'])
            }, function (self, val) {
            return new Sk.misceval.promiseToSuspension(new Promise(function(resolve) {
                textureRecources(self.actorName[val.v-1] || `./assets/${self.actorName}/造型${val.v}.png`).then(function(texture) {
                self['sprite']['texture'] = texture;
                resolve(void 0)
                })
            }))
        });

        $loc.distance_to = new Sk.builtin.func(function(self, pos) {
            pos = transPos(Sk.ffi.remapToJs(pos));
            // 计算两点距离：|AB| = √((x1-x2)²+(y1-y2)²)
            return Sk.ffi.remapToPy(Math.round(Math.abs(Math.sqrt(Math.pow(self.sprite.x - pos[0], 2) + Math.pow(self.sprite.y - pos[1], 2)))))
        });

        $loc.angle_to = new Sk.builtin.func(function(self, pos) {
            pos = transPos(Sk.ffi.remapToJs(pos));
            // 计算两点角度：arcsin(|y1-y2| ÷ √((x1-x2)²+(y1-y2)²)) ÷ π ×180
            const x1 = self.sprite.y;
            const x2 = pos[0];
            const y1 = self.sprite.y;
            const y2 = pos[1];
            const x = Math.abs(x1-x2);
            const y = Math.abs(y1-y2);
            const z = Math.sqrt(x*x+y*y);
            return Sk.ffi.remapToPy(Math.round(Math.asin(y/z)/Math.PI*180))
        });

        $loc.collide_point = new Sk.builtin.func(function(self, pos) {
            return hitTestRectangle(self.sprite, transPos(Sk.ffi.remapToJs(pos)))
        });

        $loc.collide_actor = new Sk.builtin.func(function(self, actor) {
            return hitTestRectangle(self.sprite, actor.sprite)
        });

        $loc.colliderect = new Sk.builtin.func(function(self, actor) {
            return hitTestRectangle(self.sprite, actor.sprite)
        });

        $loc.remove = new Sk.builtin.func(function(self) {
            app.stage.removeChild(self.sprite);
        });

        $loc.draw = new Sk.builtin.func(function(self) {
            app.stage.addChild(self.sprite);
        });

        //helper方法
        $loc.direction_to=new Sk.builtin.func(function(self) {
            
        });
    }, 'Actor')

	return mod;
}
