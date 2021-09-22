var $builtinmodule = function (name) {
	let mod= {__name__: new Sk.builtin.str("blocklygame")};
    
    //其他变量设置
    var maze_level=2
    var map=[//迷宫布局
        //Level1
        [[0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 3, 0, 0, 0],
        [0, 0, 2, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]],
        //level2
        [[0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 1, 1, 1, 1, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]],
        //level3
        // Level 6.
        [[0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 1, 0, 0],
        [0, 1, 1, 3, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0],
        [0, 2, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]],
    ][maze_level]
    var DirectionType={//角色方向的类型
        NORTH: 0,
        EAST: 1,
        SOUTH: 2,
        WEST: 3
    }
    var ResultType = {
        UNSET: 0,
        SUCCESS: 1,
        FAILURE: -1,
        TIMEOUT: 2,
        ERROR: -2
    }
    var tile_SHAPES = {
        '10010': [4, 0],  // Dead ends
        '10001': [3, 3],
        '11000': [0, 1],
        '10100': [0, 2],
        '11010': [4, 1],  // Vertical
        '10101': [3, 2],  // Horizontal
        '10110': [0, 0],  // Elbows
        '10011': [2, 0],
        '11001': [4, 2],
        '11100': [2, 3],
        '11110': [1, 1],  // Junctions
        '10111': [1, 0],
        '11011': [2, 1],
        '11101': [1, 2],
        '11111': [2, 2],  // Cross
        'null0': [4, 3],  // Empty
        'null1': [3, 0],
        'null2': [3, 1],
        'null3': [0, 3],
        'null4': [1, 3]
    }
    // 角色变量
    var actor={
        img : "https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/astro.png",
        tile_SHAPES : "",
        height : 52,
        width : 49,
        direction : DirectionType.EAST,
        x : 0,
        y : 0,
        stepSpeed : 150
    };
    //迷宫变量
    var maze_SQUARE_SIZE = 50;
    var maze_ROWS=map.length;
    var maze_COLS=map[0].length;
    var maze={
        tiles: 'https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/tiles_astro.png',//地图路径图片
        marker: 'https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/marker.png',//终点图标图片
        background: 'https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/bg_astro.jpg',//地图背景图片
        SquareType :{//迷宫中方块的类型
            WALL: 0,
            OPEN: 1,
            START: 2,
            FINISH: 3
        },
        //迷宫部分参数指定
        MAZE_WIDTH : maze_SQUARE_SIZE * maze_COLS,
        MAZE_HEIGHT : maze_SQUARE_SIZE * maze_ROWS,
        PATH_WIDTH : maze_SQUARE_SIZE / 3,
        result :  ResultType.UNSET,
        finish : {x:0,y:0}
    };
    
    
    //pidList = [] 暂时先不设置，后续根据需要设置

    /**
     * Display Pegman at the specified location, facing the specified direction.
     * @param {number} x Horizontal grid (or fraction thereof).
     * @param {number} y Vertical grid (or fraction thereof).
     * @param {number} d Direction (0 - 15) or dance (16 - 17).
     * @param {number=} opt_angle Optional angle (in degrees) to rotate Pegman.
     */
    var displayPegman = function(x, y, d, opt_angle) {
        var pegmanIcon = $('#pegman');
        pegmanIcon.attr('x', x * maze_SQUARE_SIZE - d * actor.width + 1);
        pegmanIcon.attr('y', maze_SQUARE_SIZE * (y + 0.5) - actor.height / 2 - 8);
        if (opt_angle) {
          pegmanIcon.attr('transform', 'rotate(' + opt_angle + ', ' +
              (x * maze_SQUARE_SIZE + maze_SQUARE_SIZE / 2) + ', ' +
              (y * maze_SQUARE_SIZE + maze_SQUARE_SIZE / 2) + ')');
        } else {
          pegmanIcon.attr('transform', 'rotate(0, 0, 0)');
        }
      
        var clipRect = $('#clipRect');
        clipRect.attr('x', x * maze_SQUARE_SIZE + 1);
        clipRect.attr('y', pegmanIcon.attr('y'));
      };

    var drawMap=function(){
        var svg = d3.select('#blocklySVG').append('svg');
        var scale = Math.max(maze_ROWS, maze_COLS) * maze_SQUARE_SIZE;
        svg.attr('viewBox', '0 0 ' + scale + ' ' + scale);

        // 绘制外框
        svg.append('rect').attr('x', 0).attr('y', 0).attr('width', maze.MAZE_WIDTH).attr('height', maze.MAZE_HEIGHT)
        .style('fill','#F1EEE7').style('stroke','#CCB').style('stroke-width','1');
        //绘制迷宫背景
        svg.append('image').attr('x', 0).attr('y', 0).attr('width', maze.MAZE_WIDTH).attr('height', maze.MAZE_HEIGHT)
        .attr('xlink:href',maze.background)

        //初始化地图
        var normalize = function(x, y) {
            if (x < 0 || x >= maze_COLS || y < 0 || y >= maze_ROWS) {
              return '0';
            }
            return (map[y][x] == maze.SquareType.WALL) ? '0' : '1';
        };
        // 依次判断格子的类型，并绘制相应格子内的图形
        var tileId = 0;
        for (var y = 0; y < maze_ROWS; y++) {
            for (var x = 0; x < maze_COLS; x++) {
                // 标记每个格子的“弯曲状态”.
                var tileShape = normalize(x, y) +
                    normalize(x, y - 1) +  // North.
                    normalize(x + 1, y) +  // West.
                    normalize(x, y + 1) +  // South.
                    normalize(x - 1, y);   // East.

                // 绘制路径.
                if (!tile_SHAPES[tileShape]) {
                    // Empty square.  Use null0 for large areas, with null1-4 for borders.
                    // Add some randomness to avoid large empty spaces.
                    if (tileShape == '00000' && Math.random() > 0.3) {
                        tileShape = 'null0';
                    } else {
                        tileShape = 'null' + Math.floor(1 + Math.random() * 4);
                    }
                }
                var left = tile_SHAPES[tileShape][0];
                var top = tile_SHAPES[tileShape][1];
                // Tile's clipPath element.
                svg.append('clipPath').attr('id','tileClipPath' + tileId)
                d3.select("#tileClipPath" + tileId).append('rect').attr('x', x * maze_SQUARE_SIZE).attr('y', y * maze_SQUARE_SIZE).attr('width',  maze_SQUARE_SIZE).attr('height',  maze_SQUARE_SIZE)
               
                // Tile sprite.
                svg.append('image').attr('x',(x - left) * maze_SQUARE_SIZE).attr('y',(y - top) * maze_SQUARE_SIZE).attr('width',maze_SQUARE_SIZE * 5).attr('height',maze_SQUARE_SIZE * 4)
                .attr('clip-path', 'url(#tileClipPath' + tileId + ')').attr('xlink:href',maze.tiles)
                tileId++;
            }
        }

        // 绘制终点图标
        svg.append('image').attr('id','finish').attr('width', 20).attr('height', 34).attr('xlink:href',maze.marker)
        
        // Pegman's clipPath element, whose (x, y) is reset by Maze.displayPegman
        svg.append('clipPath').attr('id','pegmanClipPath')
        d3.select("#pegmanClipPath").append('rect').attr('id','clipRect').attr('width', actor.height).attr('height', actor.height)

        //绘制精灵.
        svg.append('image').attr('id','pegman').attr('width', actor.width * 21).attr('height',  actor.height).attr('clip-path', 'url(#pegmanClipPath)')
        .attr('xlink:href',actor.img)

        //定位：精灵与终点初始的位置
        // Locate the start and finish squares.
        for (var y = 0; y < maze_ROWS; y++) {
            for (var x = 0; x < maze_COLS; x++) {
                if (map[y][x] == maze.SquareType.START) {
                    actor.x= x;
                    actor.y= y;
                    displayPegman(actor.x , actor.y , actor.direction*4 )
                } else if (map[y][x] == maze.SquareType.FINISH) {
                    // Move the finish icon into position.
                    var finishIcon = $('#finish');
                    finishIcon.attr('x', maze_SQUARE_SIZE * (x + 0.5) -
                        finishIcon.attr('width') / 2);
                    finishIcon.attr('y', maze_SQUARE_SIZE * (y + 0.6) -
                        finishIcon.attr('height'));
                    maze.finish={x:x,y:y}
                }
            }
        }

    }

    var init=function(){
        drawMap();
    }

    //检查是否已到终点
    var checkFinish=function(){
        maze.result = actor.x != maze.finish.x || actor.y != maze.finish.y ?
        ResultType.UNSET : ResultType.SUCCESS;
        if(maze.result==ResultType.SUCCESS){
            return true
        }else{
            return false
        }
    }
    /**
     * Is there a path next to pegman?
     * @param {number} direction Direction to look
     *     (0 = forward, 1 = right, 2 = backward, 3 = left).
     * @param {?string} id ID of block that triggered this action.
     *     Null if called as a helper function in Maze.move().
     * @return {boolean} True if there is a path.
     */
    var isPath=function(direction,id){
        var effectiveDirection = actor.direction + direction;
        var square;
        var command;
        switch (constrainDirection4(effectiveDirection)) {
            case DirectionType.NORTH:
                square = map[actor.y - 1] && map[actor.y - 1][actor.x];
                command = 'look_north';
                break;
            case DirectionType.EAST:
                square = map[actor.y][actor.x + 1];
                command = 'look_east';
                break;
            case DirectionType.SOUTH:
                square = map[actor.y + 1] && map[actor.y + 1][actor.x];
                command = 'look_south';
                break;
            case DirectionType.WEST:
                square = map[actor.y][actor.x - 1];
                command = 'look_west';
                break;
        }
        if (id) {
            return [command , square !== maze.SquareType.WALL && square !== undefined ]
        }
        return square !== maze.SquareType.WALL && square !== undefined;
    };

    var constrainDirection4 = function(d) {
        d = Math.round(d) % 4;
        if (d < 0) {
            d += 4;
        }
        return d;
    };
    var constrainDirection16 = function(d) {
        d = Math.round(d) % 16;
        if (d < 0) {
          d += 16;
        }
        return d;
      };
    
    /**
     * Attempt to move pegman forward or backward.
     * @param {number} direction Direction to move (0 = forward, 2 = backward).
     * @param {string} id ID of block that triggered this action.
     * @throws {true} If the end of the maze is reached.
     * @throws {false} If Pegman collides with a wall.
     */
    var move = function(direction) {
        if (!isPath(direction, null)) {
            return false
        }
        // If moving backward, flip the effective direction.
        var effectiveDirection = actor.direction + direction;
        var command;
        switch (constrainDirection4(effectiveDirection)) {
            case DirectionType.NORTH:
                command = 'north';
                break;
            case DirectionType.EAST:
                command = 'east';
                break;
            case DirectionType.SOUTH:
                command = 'south';
                break;
            case DirectionType.WEST:
                command = 'west';
                break;
            }
        return command
    };

    /**
     * Turn pegman left or right.
     * @param {number} direction Direction to turn (0 = left, 1 = right).
     * @param {string} id ID of block that triggered this action.
     */
    var turn = function(direction) {
        var command;
        if (direction=='right') {
            // Right turn (clockwise).
            command='right'
        } else {
            // Left turn (counterclockwise).
            command='left'
        }
        return command
    };

    /**
     * Schedule the animations for a move or turn.
     * @param {!Array.<number>} startPos X, Y and direction starting points.
     * @param {!Array.<number>} endPos X, Y and direction ending points.
     */
    var schedule = function(startPos, endPos) {
        var deltas = [(endPos[0] - startPos[0]) / 4, (endPos[1] - startPos[1]) / 4, (endPos[2] - startPos[2]) / 4];
        displayPegman(startPos[0] + deltas[0], startPos[1] + deltas[1], constrainDirection16(startPos[2] + deltas[2]));
        setTimeout(function() {
            displayPegman(startPos[0] + deltas[0] * 2, startPos[1] + deltas[1] * 2, constrainDirection16(startPos[2] + deltas[2] * 2));
        }, actor.stepSpeed);
        setTimeout(function() {
            displayPegman(startPos[0] + deltas[0] * 3, startPos[1] + deltas[1] * 3, constrainDirection16(startPos[2] + deltas[2] * 3));
        }, actor.stepSpeed * 2)
        setTimeout(function() {
            displayPegman(endPos[0], endPos[1], constrainDirection16(endPos[2]));
        }, actor.stepSpeed * 3)
    };

    mod.Actor = Sk.misceval.buildClass(mod, function($gbl, $loc) {
        $loc.__init__ = new Sk.builtin.func(function(self, img , direction , tile_SHAPES , size ) {
                img= Sk.ffi.remapToJs(img);
                actor.img = Sk.ffi.remapToJs(img);

                direction =  direction || DirectionType.EAST;
                tile_SHAPES = tile_SHAPES || "";
                size=size || [52,49]//[height,width]

                init()
        });
        // func: Actor.moveForward()
        $loc.moveForward=new Sk.builtin.func(function(self) {
            Sk.builtin.pyCheckArgs("moveForward", arguments, 1, 1);
            return new Sk.misceval.promiseToSuspension(new Promise(function(resolve) {
                Sk.setTimeout(function() {
                    var command= move(0) //0为向前移动
                    if(command==false){
                        maze.result=ResultType.FAILURE
                        alert("挑战失败")
                    }
                    switch (command) {
                        case 'north':
                            schedule([actor.x, actor.y, actor.direction * 4],
                                            [actor.x, actor.y - 1, actor.direction * 4]);
                            actor.y--;
                            break;
                        case 'east':
                            schedule([actor.x, actor.y, actor.direction * 4],
                                            [actor.x + 1, actor.y, actor.direction * 4]);
                            actor.x++;
                            break;
                        case 'south':
                            schedule([actor.x, actor.y, actor.direction * 4],
                                            [actor.x, actor.y + 1, actor.direction * 4]);
                            actor.y++;
                            break;
                        case 'west':
                            schedule([actor.x, actor.y, actor.direction * 4],
                                        [actor.x - 1, actor.y, actor.direction * 4]);
                            actor.x--;
                            break;
                    }
                    var state=checkFinish()
                    if(state==true){
                        alert("挑战成功！")
                        resolve(Sk.builtin.none.none$);
                    }
                    resolve(Sk.builtin.none.none$);
                }, 800);
            }));
        });
        $loc.moveBackward=new Sk.builtin.func(function(self) {
            Sk.builtin.pyCheckArgs("moveBackward", arguments, 1, 1);
            return new Sk.misceval.promiseToSuspension(new Promise(function(resolve) {
                Sk.setTimeout(function() {
                    var command= move(2) //2为向后运动
                    if(command==false){
                        maze.result=ResultType.FAILURE
                        alert("挑战失败")
                    }
                    switch (command) {
                        case 'north':
                            schedule([actor.x, actor.y, actor.direction * 4],
                                            [actor.x, actor.y - 1, actor.direction * 4]);
                            actor.y--;
                            break;
                        case 'east':
                            schedule([actor.x, actor.y, actor.direction * 4],
                                            [actor.x + 1, actor.y, actor.direction * 4]);
                            actor.x++;
                            break;
                        case 'south':
                            schedule([actor.x, actor.y, actor.direction * 4],
                                            [actor.x, actor.y + 1, actor.direction * 4]);
                            actor.y++;
                            break;
                        case 'west':
                            schedule([actor.x, actor.y, actor.direction * 4],
                                        [actor.x - 1, actor.y, actor.direction * 4]);
                            actor.x--;
                            break;
                    }
                    var state=checkFinish()
                    if(state==true){
                        alert("挑战成功！")
                    }
                    resolve(Sk.builtin.none.none$);
                }, 800);
            }));
        });
        $loc.turn=new Sk.builtin.func(function(self,direction){
            Sk.builtin.pyCheckArgs("turn", arguments, 2, 2);
            Sk.builtin.pyCheckType("direction", "string", Sk.builtin.checkString(direction));
            return new Sk.misceval.promiseToSuspension(new Promise(function(resolve) {
                Sk.setTimeout(function() {
                    direction=Sk.ffi.remapToJs(direction)
                    var command=turn(direction)
                    switch (command) {
                        case 'left':
                            schedule([actor.x, actor.y, actor.direction * 4], [actor.x, actor.y, actor.direction * 4 - 4]);
                            actor.direction = constrainDirection4(actor.direction - 1);
                            break;
                        case 'right':
                            schedule([actor.x, actor.y, actor.direction * 4], [actor.x, actor.y, actor.direction * 4 + 4]);
                            actor.direction = constrainDirection4(actor.direction + 1);
                            break;
                    }
                    resolve(Sk.builtin.none.none$);
                }, 800);
            }));
        });
        $loc.isDone=new Sk.builtin.func(function(self){
            Sk.builtin.pyCheckArgs("isDone", arguments, 1, 1);
            return Sk.ffi.remapToPy(checkFinish())
        });
        $loc.isPath=new Sk.builtin.func(function(self,direction){
            Sk.builtin.pyCheckArgs("isPath", arguments, 2, 2);
            Sk.builtin.pyCheckType("direction", "string", Sk.builtin.checkString(direction));
            direction=Sk.ffi.remapToJs(direction)
            var state=false
            switch (direction) {
                case 'left':
                    direction= 3
                    state=isPath(direction, null)
                    return state
                case 'right':
                    direction= 1
                    state=isPath(direction, null)
                    return state
            }
        });

    }, "Actor")

	return mod;
}
