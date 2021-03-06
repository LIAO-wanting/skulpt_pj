var $builtinmodule = function (name) {
	let mod= {__name__: new Sk.builtin.str("blocklygame")};
    
    var svg = d3.select('#blocklySVG').append('svg');
    //其他变量设置
    var map=//迷宫布局
        [[0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 2, 1, 1, 1, 1, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]]
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
        img : "https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/pegman.png",
        tile_SHAPES : "",
        height : 52,
        width : 49,
        direction : DirectionType.EAST,
        x : 0,
        y : 0,
        stepSpeed : 150,
        type:"animate",
        coin_point:0
    };
    //迷宫变量
    var maze_SQUARE_SIZE = 50;
    var maze_ROWS=map.length;
    var maze_COLS=map[0].length;
    var maze={
        tiles: 'https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/maze_path.png',//地图路径图片
        marker: 'https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/marker.png',//终点图标图片
        background: 'https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/bg_astro.jpg',//地图背景图片
        wall:'https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/roadblock.png',
        award:'https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/award.png',
        SquareType :{//迷宫中方块的类型
            WALL: 0,
            OPEN: 1,
            START: 2,
            FINISH: 3,
            AWARD:4//金币奖励
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
        if(actor.type=='animate'){
            pegmanIcon.attr('x', x * maze_SQUARE_SIZE - d * actor.width + 1);
            pegmanIcon.attr('y', maze_SQUARE_SIZE * (y + 0.5) - actor.height / 2 - 8);
            if (opt_angle) {
              pegmanIcon.attr('transform', 'rotate(' + opt_angle + ', ' +
                  (x * maze_SQUARE_SIZE + maze_SQUARE_SIZE / 2) + ', ' +
                  (y * maze_SQUARE_SIZE + maze_SQUARE_SIZE / 2) + ')');
            } else {
              pegmanIcon.attr('transform', 'rotate(0, 0, 0)');
            }
        }else{
            pegmanIcon.attr('x', x * maze_SQUARE_SIZE + 1);
            pegmanIcon.attr('y', maze_SQUARE_SIZE * (y + 0.5) - actor.height / 2 );
        }
        var clipRect = $('#clipRect');
        clipRect.attr('x', x * maze_SQUARE_SIZE + 1);
        clipRect.attr('y', pegmanIcon.attr('y'));
      };

    var initPegman=function(){
        // Pegman's clipPath element, whose (x, y) is reset by Maze.displayPegman
        svg.append('clipPath').attr('id','pegmanClipPath')
        d3.select("#pegmanClipPath").append('rect').attr('id','clipRect').attr('width', actor.width).attr('height', actor.height)

        if(actor.type=="animate"){
            //绘制精灵.
            svg.append('image').attr('id','pegman').attr('width', actor.width * 21).attr('height',  actor.height).attr('clip-path', 'url(#pegmanClipPath)')
            .attr('xlink:href',actor.img)
        }else{
            //绘制精灵.
            svg.append('image').attr('id','pegman').attr('width', actor.width ).attr('height',  actor.height).attr('clip-path', 'url(#pegmanClipPath)')
            .attr('xlink:href',actor.img)
        }

        displayPegman(actor.x , actor.y , actor.direction*4 )
    }

    var drawMap=function(){
        svg.attr('id','game_stage')
        var scale = Math.max(maze_ROWS, maze_COLS) * maze_SQUARE_SIZE;
        svg.attr('viewBox', '0 -10 ' + scale + ' ' + (scale+10));

        // 绘制外框
        svg.append('rect').attr('x', 0).attr('y', 0).attr('width', maze.MAZE_WIDTH).attr('height', maze.MAZE_HEIGHT)
        .style('fill','#F1EEE7').style('stroke','#CCB').style('stroke-width','1');
        
        // for (var y = 0; y < maze_ROWS; y++) {
        //     for (var x = 0; x < maze_COLS; x++) {
        //         //绘制迷宫背景
        //         svg.append('image').attr('x', x*maze_SQUARE_SIZE).attr('y', y*maze_SQUARE_SIZE).attr('width', maze_SQUARE_SIZE).attr('height',maze_SQUARE_SIZE)
        //         .attr('xlink:href',maze.background)
        //     }
        // }
        svg.append('image').attr('x', 0).attr('y', 0).attr('width', maze_SQUARE_SIZE*maze_COLS).attr('height',maze_SQUARE_SIZE*maze_ROWS)
        .attr('xlink:href',maze.background)
        //初始化地图

        console.log(map)
        
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

                if(map[y][x]==0){//当地图中此处标记为障碍物时
                    svg.append('image').attr('x',x * maze_SQUARE_SIZE + (maze_SQUARE_SIZE/2 - maze_SQUARE_SIZE*0.8/2)).attr('y',y * maze_SQUARE_SIZE+ (maze_SQUARE_SIZE/2 - maze_SQUARE_SIZE*0.8/2)).attr('width',maze_SQUARE_SIZE*0.8 ).attr('height',maze_SQUARE_SIZE*0.8)
                    .attr('xlink:href',maze.wall)
                }else if(map[y][x]==4){//当地图中此处标记为金币时
                    svg.append('image').attr('id','coin'+y+x).attr('x',x * maze_SQUARE_SIZE+ (maze_SQUARE_SIZE/2 - maze_SQUARE_SIZE*0.5/2)).attr('y',y * maze_SQUARE_SIZE+ (maze_SQUARE_SIZE/2 - maze_SQUARE_SIZE*0.5/2)).attr('width',maze_SQUARE_SIZE*0.5).attr('height',maze_SQUARE_SIZE*0.5)
                    .attr('xlink:href',maze.award)
                }
            }
        }
        // 绘制终点图标
        svg.append('image').attr('id','finish').attr('width',  0.5 * maze_SQUARE_SIZE).attr('height',  0.5*maze_SQUARE_SIZE).attr('xlink:href',maze.marker)

        //定位：精灵与终点初始的位置
        // Locate the start and finish squares.
        for (var y = 0; y < maze_ROWS; y++) {
            for (var x = 0; x < maze_COLS; x++) {
                if (map[y][x] == maze.SquareType.START) {
                    actor.x= x;
                    actor.y= y;
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

    var highlight = function(id) {
        id=Sk.ffi.remapToJs(id)
        Blockly.mainWorkspace.highlightBlock(id);
    };

    var getpoint= function(block_id){
        return new Promise((resolve) => {
            // Do things
            setTimeout( () => {   
                var re=/block_id=([\s\S]*)/.exec(block_id)
                if(re!=null){
                    block_id=re[1];
                    highlight(block_id)
                }
                highlight(block_id)
                var point= actor.coin_point; 
                resolve(point);
            }, 800);
        })
    }

    var isDone = function(block_id) {
        return new Promise((resolve) => {
            // Do things
            setTimeout( () => {   
                var re=/block_id=([\s\S]*)/.exec(block_id)
                if(re!=null){
                    block_id=re[1];
                    highlight(block_id)
                }
                highlight(block_id)
                var isdone= Sk.ffi.remapToPy(checkFinish()); 
                resolve(isdone);
            }, 800);
        })
    }

    var isPathCheck=function(direction,block_id) {
        return new Promise((resolve) => {
            // Do things
            setTimeout( () => {   
                var state=false;
                var re=/block_id=([\s\S]*)/.exec(block_id)
                if(re!=null){
                    block_id=re[1];
                    highlight(block_id)
                }
                highlight(block_id);
                switch (direction) {
                    case 'left':
                        direction= 3
                        state=isPath(direction, null)
                        break;
                    case 'right':
                        direction= 1
                        state=isPath(direction, null)
                        break;
                };
                resolve(state);
            }, 800);
        })
    }

    /**
     * 检查精灵在移动的过程中是否吃到了金币
     * @param {<number>} x 当前精灵的横坐标.
     * @param {<number>} y 当前精灵的纵坐标.
     */
     var hasCoin=function(x , y) {
        if(map[y][x]==maze.SquareType.AWARD){//如果此处是金币
            setTimeout(function() {
                $('#coin'+y+x).remove()
            }, actor.stepSpeed * 3)
            map[y][x]=maze.SquareType.OPEN
            actor.coin_point+=1
        }
     }
    

    /**
     * 设置地图属性.
     * @param {string} block_id 高亮块的ID
     * @param {number} M_x为地图横向方格的数目（范围为3-10）,初始默认为8
     * @param {number} M_y为地图竖向方格的数目（范围为3-10）,初始默认为8
     * @param {string} startPos X, Y 起点位置的坐标.
     * @param {string} endPos X, Y 终点位置的坐标
     * @param {string} bg_pic为地图背景的图片
     */
    var setMap_f=function( M_x , M_y , startPos , endPos , bg_pic,block_id) {
        Sk.builtin.pyCheckArgs("setMap", arguments, 6, 6);
        map=[]
        if(bg_pic=='无可用地图'){
            bg_pic=""
        }

        return new Sk.misceval.promiseToSuspension(new Promise(function(resolve) {
            Sk.setTimeout(function() {
                //高亮效果
                var re=/block_id=([\s\S]*)/.exec(block_id)
                if(re!=null){
                    block_id=re[1];
                    highlight(block_id)
                } 

                if((M_x<3) || (M_x>20) || (M_y<3) || (M_y>20)){
                    throw Error("错误！超出地图可设置范围，请设置横纵方格数大于等于3，小于等于20")
                }
                M_x = Sk.ffi.remapToJs(M_x);
                M_y = Sk.ffi.remapToJs(M_y);
                maze_COLS=M_x;
                maze_ROWS=M_y;
                maze.MAZE_WIDTH= maze_SQUARE_SIZE * maze_COLS;
                maze.MAZE_HEIGHT=maze_SQUARE_SIZE * maze_ROWS;

                startPos =Sk.ffi.remapToJs(startPos)
                endPos =Sk.ffi.remapToJs(endPos)
    
                switch (Sk.ffi.remapToJs(bg_pic)){
                    case "bg_default":
                        maze.background ='https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/bg_default.png';//默认为方格
                        break;
                    case "bg_astro":
                        maze.background ='https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/bg_astro.jpg';//设置为管道
                        break;
                    case "bg_panda":
                        maze.background ='https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/bg_panda.jpg';//设置为竹子
                        break;
                }

                var re=/\((\d+),(\d+)\)/.exec(startPos);
                if(re!=null){
                    if((re[1]>M_x) || (re[1]<1) || (re[2]>M_y) || (re[2]<1)){
                        throw Error("错误！起点坐标超出地图范围！")
                    }
                }
                var re=/\((\d+),(\d+)\)/.exec(endPos);
                if(re!=null){
                    if((re[1]>M_x) || (re[1]<1) || (re[2]>M_y) || (re[2]<1)){
                        throw Error("错误！终点坐标超出地图范围！")
                    }
                }

                for (var i=0; i<M_y; i++){ 
                    var b = [];  //辅助数组
                    for(var j=0; j<M_x; j++){ 
                        var pos='('+(j+1)+','+(i+1)+')'
                        if( pos==startPos){
                            b[j]=maze.SquareType.START;
                        }else if(pos==endPos){
                            b[j]=maze.SquareType.FINISH;
                        }else{
                            b[j]=maze.SquareType.OPEN;
                        }
                    }
                    map[i]=b;
                }
                resolve(Sk.builtin.none.none$);
            }, 800);
        }));

    }
	mod.setMap = new Sk.builtin.func(setMap_f);

    /**
     * 设置路径类型，如果不对路径形状进行设置，则默认为方格.
     * 
     * @param {string} block_id 高亮块的ID
     * @param {string} path_type代表可通行路径的样式，默认为null
     */
    var setPathType_f=function(path_type,block_id) { 
        Sk.builtin.pyCheckArgs("setPathType", arguments, 2, 2);
        path_type = Sk.ffi.remapToJs(path_type);
        return new Sk.misceval.promiseToSuspension(new Promise(function(resolve) {
            Sk.setTimeout(function() {  
                //高亮效果
                var re=/block_id=([\s\S]*)/.exec(block_id)
                if(re!=null){
                    block_id=re[1];
                    highlight(block_id)
                }  

                switch (path_type){
                    case "default":
                        maze.tiles='https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/maze_path.png';//默认为方格
                        break;
                    case "pipeline":
                        maze.tiles='https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/tiles_astro.png';//设置为管道
                        break;
                    case "bamboo":
                        maze.tiles='https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/tiles_panda.png';//设置为竹子
                        break;
                }
                resolve(Sk.builtin.none.none$);
            }, 800);
        }));
    }
	mod.setPathType = new Sk.builtin.func(setPathType_f);

    /**
     * 在某处放置障碍或者金币.
     * 
     * @param {string} block_id 高亮块的ID
     * @param {number} Pos_x 放置物的x坐标位置.
     * @param {number} Pos_y 放置物的y坐标位置.
     * @param {string} type 放置物的类型：障碍或是金币
     */
    var placeItem_f=function(Pos_x , Pos_y , type,block_id) { 
        Sk.builtin.pyCheckArgs("placeItem", arguments, 4, 4);
        Pos_x = Sk.ffi.remapToJs(Pos_x);
        Pos_y = Sk.ffi.remapToJs(Pos_y);
        type=Sk.ffi.remapToJs(type);

        return new Sk.misceval.promiseToSuspension(new Promise(function(resolve) {
            Sk.setTimeout(function() {  
                //高亮效果
                var re=/block_id=([\s\S]*)/.exec(block_id)
                if(re!=null){
                    block_id=re[1];
                    highlight(block_id)
                } 

                if((map[Pos_y-1][Pos_x-1]==2)||(map[Pos_y-1][Pos_x-1]==3)){
                    throw Error("错误！不能将放置物位置设置在起点或终点坐标！")
                }else if((Pos_x>(map[0].length)) || (Pos_x< 0) || (Pos_y>(map.length)) || (Pos_y< 0)){
                    throw Error("错误！放置物坐标超过地图范围")
                }
  
                switch(type){
                    case "wall"://墙：障碍
                        map[Pos_y-1][Pos_x-1]=maze.SquareType.WALL;
                        break;
                    case "coin":
                        map[Pos_y-1][Pos_x-1]=maze.SquareType.AWARD;
                        break;
                }
                resolve(Sk.builtin.none.none$);
            }, 800);
        }));
    }
	mod.placeItem = new Sk.builtin.func(placeItem_f);


    var initMap_f=function(block_id) {
        return new Sk.misceval.promiseToSuspension(new Promise(function(resolve) {
            Sk.setTimeout(function() {  
                //高亮效果
                var re=/block_id=([\s\S]*)/.exec(block_id)
                if(re!=null){
                    block_id=re[1];
                    highlight(block_id)
                }   
                drawMap()
                resolve(Sk.builtin.none.none$);
            }, 800);
        }));
    }
	mod.initMap = new Sk.builtin.func(initMap_f);


    mod.Actor = Sk.misceval.buildClass(mod, function($gbl, $loc) {
        $loc.__init__ = new Sk.builtin.func(function(self,img , direction , block_id) {
            return new Sk.misceval.promiseToSuspension(new Promise(function(resolve) {
                Sk.setTimeout(function() {  
                    img= Sk.ffi.remapToJs(img) || 'pegman';
                    if(img=='无可用角色'){
                        img='pegman';
                    }
                    switch (img){
                        case "pegman":
                            actor.img='https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/pegman.png';//默认为方格
                            actor.type="animate"
                            break;
                        case "panda":
                            actor.img='https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/panda.png';//设置为管道
                            actor.type="animate"
                            break;
                        case "astro":
                            actor.img='https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/astro.png';//设置为竹子
                            actor.type="animate"
                            break;
                        case "robot":
                            actor.img='https://cdn.jsdelivr.net/gh/LIAO-wanting/skulpt_pj@main/pic/robot.png';//设置为竹子
                            actor.type="still"
                            break;

                    }

                    actor.direction =  Sk.ffi.remapToJs(direction) || DirectionType.EAST;
                    size=[52,49]//[height,width]//size需要根据方格的数目来确定
                    actor.coin_point=0
                    //高亮效果
                    var re=/block_id=([\s\S]*)/.exec(block_id)
                    if(re!=null){
                        block_id=re[1];
                        highlight(block_id)
                    }
                    
                    initPegman()
                    resolve(Sk.builtin.none.none$);
                }, 800);
            }));
                
        });
        // func: Actor.moveForward()
        $loc.moveForward=new Sk.builtin.func(function(self,block_id) {
            Sk.builtin.pyCheckArgs("moveForward", arguments, 2, 2);
            return new Sk.misceval.promiseToSuspension(new Promise(function(resolve) {
                Sk.setTimeout(function() {
                    var command= move(0) //0为向前移动
                    if(command==false){
                        maze.result=ResultType.FAILURE
                        alert("挑战失败")
                        throw Error("挑战失败，请修改代码后重新尝试！")
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
                    //高亮效果
                    var re=/block_id=([\s\S]*)/.exec(block_id)
                    if(re!=null){
                        block_id=re[1];
                        highlight(block_id)
                    }

                    hasCoin(actor.x,actor.y)
                    var state=checkFinish()
                    if(state==true){
                        setTimeout(function() {
                            alert("挑战成功！");
                        },1000)
                        resolve(Sk.builtin.none.none$);
                    }
                    resolve(Sk.builtin.none.none$);
                }, 800);
            }));
        });
        $loc.moveBackward=new Sk.builtin.func(function(self,block_id) {
            Sk.builtin.pyCheckArgs("moveBackward", arguments, 2, 2);
            return new Sk.misceval.promiseToSuspension(new Promise(function(resolve) {
                Sk.setTimeout(function() {
                    var command= move(2) //2为向后运动
                    if(command==false){
                        maze.result=ResultType.FAILURE
                        alert("挑战失败")
                        throw Error("挑战失败，请修改代码后重新尝试！")
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
                    var re=/block_id=([\s\S]*)/.exec(block_id)
                    if(re!=null){
                        block_id=re[1];
                        highlight(block_id)
                    }

                    hasCoin(actor.x,actor.y)
                    var state=checkFinish()
                    if(state==true){
                        setTimeout(function() {
                            alert("挑战成功！");
                        },1000)
                    }
                    resolve(Sk.builtin.none.none$);
                }, 800);
            }));
        });
        $loc.turn=new Sk.builtin.func(function(self,direction,block_id){
            Sk.builtin.pyCheckArgs("turn", arguments, 3, 3);
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
                    var re=/block_id=([\s\S]*)/.exec(block_id)
                    if(re!=null){
                        block_id=re[1];
                        highlight(block_id)
                    }
                    resolve(Sk.builtin.none.none$);
                }, 800);
            }));
        });
        $loc.isDone=new Sk.builtin.func(function(self,block_id){
            Sk.builtin.pyCheckArgs("isDone", arguments, 2, 2);
            return new Sk.misceval.promiseToSuspension(isDone(block_id).then((r) => Sk.ffi.remapToPy(r)));
        });
        $loc.isPath=new Sk.builtin.func(function(self,direction,block_id){
            Sk.builtin.pyCheckArgs("isPath", arguments, 3, 3);
            Sk.builtin.pyCheckType("direction", "string", Sk.builtin.checkString(direction));
            direction=Sk.ffi.remapToJs(direction)
            return new Sk.misceval.promiseToSuspension(isPathCheck(direction,block_id).then((r) => Sk.ffi.remapToPy(r)));
        });
        $loc.getPoint=new Sk.builtin.func(function(self,block_id){
            Sk.builtin.pyCheckArgs("getPoint", arguments, 2, 2);
            return new Sk.misceval.promiseToSuspension(getpoint(block_id).then((r) => Sk.ffi.remapToPy(r)));
        });
     

    }, "Actor")

	return mod;
}
