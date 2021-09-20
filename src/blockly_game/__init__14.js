var $builtinmodule = function (name) {
	let mod= {__name__: new Sk.builtin.str("blocklygame")};
    
    //其他变量设置
    var maze_level=0
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
    };
    
    
    //pidList = [] 暂时先不设置，后续根据需要设置

    var drawMap=function(){
        var svg = $('#svgMaze');
        var scale = Math.max(maze_ROWS, maze_COLS) * maze_SQUARE_SIZE;
        svg.attr('viewBox', '0 0 ' + scale + ' ' + scale);

        console.log("enter1")
        // 绘制外框
        Blockly.utils.dom.createSvgElement('rect', {
            'height': maze.MAZE_HEIGHT,
            'width': maze.MAZE_WIDTH,
            'fill': '#F1EEE7',
            'stroke-width': 1,
            'stroke': '#CCB'
        }, svg);
        //绘制迷宫背景
        var tile = Blockly.utils.dom.createSvgElement('image', {
            'height': maze.MAZE_HEIGHT,
            'width': maze.MAZE_WIDTH,
            'x': 0,
            'y': 0
          }, svg);
        tile.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href',
            maze.background);

        console.log("enter2")
        //初始化地图
        var normalize = function(x, y) {
            if (x < 0 || x >= maze.COLS || y < 0 || y >= maze_ROWS) {
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
                var tileClip = Blockly.utils.dom.createSvgElement('clipPath', {
                    'id': 'tileClipPath' + tileId
                    }, svg);
                Blockly.utils.dom.createSvgElement('rect', {
                    'height': maze_SQUARE_SIZE,
                    'width': maze_SQUARE_SIZE,
                    'x': x * maze_SQUARE_SIZE,
                    'y': y * maze_SQUARE_SIZE
                    }, tileClip);
                // Tile sprite.
                var tile = Blockly.utils.dom.createSvgElement('image', {
                    'height': maze_SQUARE_SIZE * 4,
                    'width': maze_SQUARE_SIZE * 5,
                    'clip-path': 'url(#tileClipPath' + tileId + ')',
                    'x': (x - left) * maze_SQUARE_SIZE,
                    'y': (y - top) * maze_SQUARE_SIZE
                    }, svg);
                tile.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href',
                    maze.tiles);
                tileId++;
            }
        }
        console.log("enter3")
        // 绘制终点图标
        var finishMarker = Blockly.utils.dom.createSvgElement('image', {
            'id': 'finish',
            'height': 34,
            'width': 20
        }, svg);
        finishMarker.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href',
            maze.marker);
        
        // Pegman's clipPath element, whose (x, y) is reset by Maze.displayPegman
        var pegmanClip = Blockly.utils.dom.createSvgElement('clipPath', {
            'id': 'pegmanClipPath'
        }, svg);
        Blockly.utils.dom.createSvgElement('rect', {
            'id': 'clipRect',
            'height': actor.height,
            'width': actor.height
        }, pegmanClip);

        //绘制精灵.
        var pegmanIcon = Blockly.utils.dom.createSvgElement('image', {
            'id': 'pegman',
            'height': actor.height,
            'width': actor.width * 21, // 49 * 21 = 1029
            'clip-path': 'url(#pegmanClipPath)'
        }, svg);
        pegmanIcon.setAttributeNS(Blockly.utils.dom.XLINK_NS, 'xlink:href',
            actor.img);
    }

    var init=function(){
        drawMap();
    }

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
           
        })
    }, "Actor")

	return mod;
}
