function hitTestRectangle(r1, r2) {
    // 如果r2是坐标点
    if (Array.isArray(r2)) {
      r2.x = r2[0];
      r2.y = r2[1];
      r2.width = 0;
      r2.height = 0;
    }
  
    //Define the variables we'll need to calculate
    let hit;
  
    //hit will determine whether there's a collision
    hit = false;
  
    //Find the center points of each sprite
    r1.centerX = r1.x + r1.width / 2;
    r1.centerY = r1.y + r1.height / 2;
    r2.centerX = r2.x + r2.width / 2;
    r2.centerY = r2.y + r2.height / 2;
  
    //Find the half-widths and half-heights of each sprite
    r1.halfWidth = r1.width / 2;
    r1.halfHeight = r1.height / 2;
    r2.halfWidth = r2.width / 2;
    r2.halfHeight = r2.height / 2;
  
    //Calculate the distance vector between the sprites
    const vx = r1.centerX - r2.centerX;
    const vy = r1.centerY - r2.centerY;
  
    //Figure out the combined half-widths and half-heights
    const combinedHalfWidths = r1.halfWidth + r2.halfWidth;
    const combinedHalfHeights = r1.halfHeight + r2.halfHeight;
  
    //Check for a collision on the x axis
    if (Math.abs(vx) < combinedHalfWidths) {
  
      //A collision might be occuring. Check for a collision on the y axis
      if (Math.abs(vy) < combinedHalfHeights) {
  
        //There's definitely a collision happening
        hit = true;
      } else {
  
        //There's no collision on the y axis
        hit = false;
      }
    } else {
  
      //There's no collision on the x axis
      hit = false;
    }
  
    //`hit` will be either `true` or `false`
    return hit;
}


const defineProperty = function(obj, property) {
    return Sk.misceval.callsimOrSuspend(Sk.builtins.property, new Sk.builtin.func(function(self) {
      if (typeof obj === 'function') {
        return obj(self)
      } else {
        return Sk.ffi.remapToPy(self[obj][property])
      }
    }), new Sk.builtin.func(function(self, val) {
      if (typeof property === 'function') {
        property(self, val)
      } else {
        self[obj][property] = val.v;
      }
    }))
}

function textureRecources (resource) {
    function loadResource(resource) {
      let list;
      if (Array.isArray(resource)) {
        list = [...resource];
        resource = list[0]
      }
      return new Promise((resolve, reject) => {
        if (window.PIXI.utils.TextureCache[resource]) {
          resolve(window.PIXI.utils.TextureCache[resource])
        } else {
          window.PIXI.loader.add(list || resource).load(function() {
            const texture = window.PIXI.loader.resources[resource].texture;
            resolve(texture)
          });
        }
      })
    }
    if (/\.json$/.test(resource)) {
      if (JsonLoadedMap[resource]) {
        return loadResource(JsonLoadedMap[resource])
      } else {
        return fetch(resource).then((res) => {
          return res.json()
        }).then((res) => {
          const prefix = resource.replace('index.json', '');
          const resoureList = res.map((item) => {
            return prefix + item
          })
          JsonLoadedMap[resource] = resoureList;
          return loadResource(resoureList)
        })
      }
    } else {
      return loadResource(resource)
    }
}

var $builtinmodule = function (name) {
	let mod= {__name__: new Sk.builtin.str("pgzhelper")};
    //导入外部引入的库
    var math = Sk.importModule("math", false, true); 
    // var sys = Sk.importModule("sys", false, false);
    var time = Sk.importModule("time", false, true);
    var pgzero = Sk.importModule("pgzrun", false, true);

    // var mod=sys.modules['__main__'];
    // var _fullscreen=false;

    //函数：set_fullscreen()
    //设为全屏模式
	// mod.set_fullscreen = new Sk.builtin.func(function() {
    //     Sk.builtin.pyCheckArgs("set_fullscreen", arguments, 0, 0);
    // });

    //Actor类
    // mod.Actor = Sk.misceval.buildClass(mod, function($gbl, $loc) {
    //     //构造器函数
    //     $loc.__init__ = new Sk.builtin.func(function(self, image, pos, anchor, kwargs) {
    //         self._flip_x = false
    //         self._flip_y = false
    //         self._scale = 1
    //         self._mask =null
    //         self._animate_counter = 0
    //         self.fps = 5
    //         self.direction = 0
    //     });
    //     $loc.direction_to()=new Sk.builtin.func(function(self,) {
            
    //     });
    // }, "Actor");
    // Sk.abstr.setUpInheritance("Actor", mod.Actor, pgzero.Actor)
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
