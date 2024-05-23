const Examples=[
  {
    name:"Bullseye",
    html:`<!DOCTYPE html>
<html lang="en" >
  <head>
    <meta charset="UTF-8">
    <title>Bullseye Game</title>
  
  </head>
  <body>
  <svg id="game" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 400" overflow="visible">
    <linearGradient id="ArcGradient" >
        <stop offset="0"  stop-color="#fff" stop-opacity=".2"/>
        <stop offset="50%" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
      <path id="arc" fill="none" stroke="url(#ArcGradient)" stroke-width="4" d="M100,250c250-400,550-400,800,0"  pointer-events="none"/>
      <defs>
          <g id="arrow">
              <line x2="60" fill="none" stroke="#888" stroke-width="2" />
              <polygon fill="#888" points="64 0 58 2 56 0 58 -2" />
              <polygon fill="#88ce02" points="2 -3 -4 -3 -1 0 -4 3 2 3 5 0" />
          </g>
      </defs>
      <g id="target">
          <path fill="#FFF" d="M924.2,274.2c-21.5,21.5-45.9,19.9-52,3.2c-4.4-12.1,2.4-29.2,14.2-41c11.8-11.8,29-18.6,41-14.2 C944.1,228.3,945.7,252.8,924.2,274.2z" />
          <path fill="#F4531C" d="M915.8,265.8c-14.1,14.1-30.8,14.6-36,4.1c-4.1-8.3,0.5-21.3,9.7-30.5s22.2-13.8,30.5-9.7 C930.4,235,929.9,251.7,915.8,265.8z" />
          <path fill="#FFF" d="M908.9,258.9c-8,8-17.9,9.2-21.6,3.5c-3.2-4.9-0.5-13.4,5.6-19.5c6.1-6.1,14.6-8.8,19.5-5.6 C918.1,241,916.9,250.9,908.9,258.9z" />
          <path fill="#F4531C" d="M903.2,253.2c-2.9,2.9-6.7,3.6-8.3,1.7c-1.5-1.8-0.6-5.4,2-8c2.6-2.6,6.2-3.6,8-2 C906.8,246.5,906.1,250.2,903.2,253.2z" />
      </g>
      <g id="bow" fill="none" stroke-linecap="round" vector-effect="non-scaling-stroke" pointer-events="none">
        <polyline fill="none" stroke="#ddd" stroke-linecap="round" points="88,200 88,250 88,300"/>
        <path fill="none" stroke="#88ce02" stroke-width="3" stroke-linecap="round" d="M88,300 c0-10.1,12-25.1,12-50s-12-39.9-12-50"/>
      </g>
    <g class="arrow-angle"><use x="100" y="250" xlink:href="#arrow"/></g>
    <clipPath id="mask">
      <polygon opacity=".5" points="0,0 1500,0 1500,200 970,290 950,240 925,220 875,280 890,295 920,310 0,350" pointer-events="none"/>
    </clipPath>
    <g class="arrows" clip-path="url(#mask)"  pointer-events="none">
    </g>
    <g class="miss" fill="#aaa" opacity="0" transform="translate(0, 100)">
      <path d="M358 194L363 118 386 120 400 153 416 121 440 119 446 203 419 212 416 163 401 180 380 160 381 204"/>
      <path d="M450 120L458 200 475 192 474 121"/>
      <path d="M537 118L487 118 485 160 515 162 509 177 482 171 482 193 529 199 538 148 501 146 508 133 537 137"/>
      <path d="M540 202L543 178 570 186 569 168 544 167 546 122 590 116 586 142 561 140 560 152 586 153 586 205"/>
      <path d="M595,215l5-23l31,0l-5,29L595,215z M627,176l13-70l-41-0l-0,70L627,176z"/>
    </g>
    <g class="bullseye" fill="#F4531C" opacity="0">
      <path d="M322,159l15-21l-27-13l-32,13l15,71l41-14l7-32L322,159z M292,142h20l3,8l-16,8 L292,142z M321,182l-18,9l-4-18l23-2V182z"/>
      <path d="M340 131L359 125 362 169 381 167 386 123 405 129 392 183 351 186z"/>
      <path d="M413 119L402 188 450 196 454 175 422 175 438 120z"/>
      <path d="M432 167L454 169 466 154 451 151 478 115 453 113z"/>
      <path d="M524 109L492 112 466 148 487 155 491 172 464 167 463 184 502 191 513 143 487 141 496 125 517 126z"/>
      <path d="M537 114L512 189 558 199 566 174 533 175 539 162 553 164 558 150 543 145 547 134 566 148 575 124z"/>
      <path d="M577 118L587 158 570 198 587 204 626 118 606 118 598 141 590 112z"/>
      <path d="M635 122L599 198 643 207 649 188 624 188 630 170 639 178 645 162 637 158 649 143 662 151 670 134z"/>
      <path d="M649,220l4-21l28,4l-6,25L649,220z M681,191l40-79l-35-8L659,184L681,191z"/>
    </g>
    <g class="hit" fill="#ffcc00" opacity="0" transform="translate(180, -80) rotate(12) ">
      <path d="M383 114L385 195 407 191 406 160 422 155 418 191 436 189 444 112 423 119 422 141 407 146 400 113"/>
      <path d="M449 185L453 113 477 112 464 186"/>
      <path d="M486 113L484 130 506 130 481 188 506 187 520 131 540 135 545 119"/>
      <path d="M526,195l5-20l22,5l-9,16L526,195z M558,164l32-44l-35-9l-19,51L558,164z"/>
    </g>
  <!-- 	<line x1= "875", y1= "280", x2= "925", y2= "220" stroke="red"/>
  
  <circle class="point" r="7" fill="purple" opacity=".4"/> -->
  </svg>
  
  <span>Pull back an arrow and launch it!</span>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js'></script>
  <script src='//s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin.min.js'></script>
  
  </body>
  </html>`,
    css: `body{
  margin:0;
  background:#222;
  
  margin:20px;
}
svg{
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
}
span{
  color:white;
  font-family:sans-serif;
  opacity:.3;
}`,
    javascript:`var svg = document.querySelector("svg");
var cursor = svg.createSVGPoint();
var arrows = document.querySelector(".arrows");
var randomAngle = 0;

// center of target
var target = {
  x: 900,
  y: 249.5
};

// target intersection line segment
var lineSegment = {
  x1: 875,
  y1: 280,
  x2: 925,
  y2: 220
};

// bow rotation point
var pivot = {
  x: 100,
  y: 250
};
aim({
  clientX: 320,
  clientY: 300
});



// set up start drag event
window.addEventListener("mousedown", draw);

function draw(e) {
  // pull back arrow
  randomAngle = (Math.random() * Math.PI * 0.03) - 0.015;
  TweenMax.to(".arrow-angle use", 0.3, {
    opacity: 1
  });
  window.addEventListener("mousemove", aim);
  window.addEventListener("mouseup", loose);
  aim(e);
}



function aim(e) {
  // get mouse position in relation to svg position and scale
  var point = getMouseSVG(e);
  point.x = Math.min(point.x, pivot.x - 7);
  point.y = Math.max(point.y, pivot.y + 7);
  var dx = point.x - pivot.x;
  var dy = point.y - pivot.y;
  // Make it more difficult by adding random angle each time
  var angle = Math.atan2(dy, dx) + randomAngle;
  var bowAngle = angle - Math.PI;
  var distance = Math.min(Math.sqrt((dx * dx) + (dy * dy)), 50);
  var scale = Math.min(Math.max(distance / 30, 1), 2);
  TweenMax.to("#bow", 0.3, {
    scaleX: scale,
    rotation: bowAngle + "rad",
    transformOrigin: "right center"
  });
  var arrowX = Math.min(pivot.x - ((1 / scale) * distance), 88);
  TweenMax.to(".arrow-angle", 0.3, {
    rotation: bowAngle + "rad",
    svgOrigin: "100 250"
  });
  TweenMax.to(".arrow-angle use", 0.3, {
    x: -distance
  });
  TweenMax.to("#bow polyline", 0.3, {
    attr: {
      points: "88,200 " + Math.min(pivot.x - ((1 / scale) * distance), 88) + ",250 88,300"
    }
  });

  var radius = distance * 9;
  var offset = {
    x: (Math.cos(bowAngle) * radius),
    y: (Math.sin(bowAngle) * radius)
  };
  var arcWidth = offset.x * 3;

  TweenMax.to("#arc", 0.3, {
    attr: {
      d: "M100,250c" + offset.x + "," + offset.y + "," + (arcWidth - offset.x) + "," + (offset.y + 50) + "," + arcWidth + ",50"
    },
      autoAlpha: distance/60
  });

}

function loose() {
  // release arrow
  window.removeEventListener("mousemove", aim);
  window.removeEventListener("mouseup", loose);

  TweenMax.to("#bow", 0.4, {
    scaleX: 1,
    transformOrigin: "right center",
    ease: Elastic.easeOut
  });
  TweenMax.to("#bow polyline", 0.4, {
    attr: {
      points: "88,200 88,250 88,300"
    },
    ease: Elastic.easeOut
  });
  // duplicate arrow
  var newArrow = document.createElementNS("http://www.w3.org/2000/svg", "use");
  newArrow.setAttributeNS('http://www.w3.org/1999/xlink', 'href', "#arrow");
  arrows.appendChild(newArrow);
  
  // animate arrow along path
  var path = MorphSVGPlugin.pathDataToBezier("#arc");
  TweenMax.to([newArrow], 0.5, {
    force3D: true,
    bezier: {
      type: "cubic",
      values: path,
      autoRotate: ["x", "y", "rotation"]
    },
    onUpdate: hitTest,
    onUpdateParams: ["{self}"],
    onComplete: onMiss,
    ease: Linear.easeNone
  });
  TweenMax.to("#arc", 0.3, {
    opacity: 0
  });
  //hide previous arrow
  TweenMax.set(".arrow-angle use", {
    opacity: 0
  });
}

function hitTest(tween) {
  // check for collisions with arrow and target
  var arrow = tween.target[0];
  var transform = arrow._gsTransform;
  var radians = transform.rotation * Math.PI / 180;
  var arrowSegment = {
    x1: transform.x,
    y1: transform.y,
    x2: (Math.cos(radians) * 60) + transform.x,
    y2: (Math.sin(radians) * 60) + transform.y
  }

  var intersection = getIntersection(arrowSegment, lineSegment);
  if (intersection.segment1 && intersection.segment2) {
    tween.pause();
    var dx = intersection.x - target.x;
    var dy = intersection.y - target.y;
    var distance = Math.sqrt((dx * dx) + (dy * dy));
    var selector = ".hit";
    if (distance < 7) {
      selector = ".bullseye"
    }
    showMessage(selector);
  }

}

function onMiss() {
  // Damn!
  showMessage(".miss");
}

function showMessage(selector) {
  // handle all text animations by providing selector
  TweenMax.killTweensOf(selector);
  TweenMax.killChildTweensOf(selector);
  TweenMax.set(selector, {
    autoAlpha: 1
  });
  TweenMax.staggerFromTo(selector + " path", .5, {
    rotation: -5,
    scale: 0,
    transformOrigin: "center"
  }, {
    scale: 1,
    ease: Back.easeOut
  }, .05);
  TweenMax.staggerTo(selector + " path", .3, {
    delay: 2,
    rotation: 20,
    scale: 0,
    ease: Back.easeIn
  }, .03);
}



function getMouseSVG(e) {
  // normalize mouse position within svg coordinates
  cursor.x = e.clientX;
  cursor.y = e.clientY;
  return cursor.matrixTransform(svg.getScreenCTM().inverse());
}

function getIntersection(segment1, segment2) {
  // find intersection point of two line segments and whether or not the point is on either line segment
  var dx1 = segment1.x2 - segment1.x1;
  var dy1 = segment1.y2 - segment1.y1;
  var dx2 = segment2.x2 - segment2.x1;
  var dy2 = segment2.y2 - segment2.y1;
  var cx = segment1.x1 - segment2.x1;
  var cy = segment1.y1 - segment2.y1;
  var denominator = dy2 * dx1 - dx2 * dy1;
  if (denominator == 0) {
    return null;
  }
  var ua = (dx2 * cy - dy2 * cx) / denominator;
  var ub = (dx1 * cy - dy1 * cx) / denominator;
  return {
    x: segment1.x1 + ua * dx1,
    y: segment1.y1 + ua * dy1,
    segment1: ua >= 0 && ua <= 1,
    segment2: ub >= 0 && ub <= 1
  };
}`
  },
  {
    name:"Snake-Game",
    html:`<!DOCTYPE html>
<html lang="en" >
  <head>
    <meta charset="UTF-8">
    <title>Snake Game</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" type="text/javascript"></script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">

  </head>
  <body>
    <div class="score">0</div>
    <div class="stage"></div>

  </body>
</html>
    `,
    css: `
/*================================================

General

================================================*/

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  background: radial-gradient(#333, #111);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  font: 100%/1.5 sans-serif;
  overflow: hidden;
}

/*================================================

Score

================================================*/

.score {
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  font-weight: bold;
  padding-top: 5px;
  text-align: center;
}

/*================================================

Stage

================================================*/

.stage {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
}

/*================================================

Tiles

================================================*/

.tile {
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  transition-property:
    background,
    box-shadow,
    opacity,
    transform
  ;
  transform: translateZ(0);
  transition-duration: 3000ms;
}

.tile:before {
  bottom: 0;
  content: '';
  height: 0;
  left: 0;
  margin: auto;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  transition: opacity 300ms;
}

.tile.path:before {
  opacity: 1;
}

.tile.up:before {
  border-bottom: 4px inset rgba(255, 255, 255, 0.15);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
}

.tile.down:before {
  border-top: 4px inset rgba(255, 255, 255, 0.15);
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
}

.tile.left:before { 
  border-right: 4px inset rgba(255, 255, 255, 0.15);
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
}

.tile.right:before { 
  border-left: 4px inset rgba(255, 255, 255, 0.15);
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
}

@media (max-width: 900px), (max-height: 900px) {
  .tile.up:before,
  .tile.down:before,
  .tile.left:before,
  .tile.right:before {
    border-width: 3px;
  }
}

@media (max-width: 500px), (max-height: 500px) {
  .tile.up:before,
  .tile.down:before,
  .tile.left:before,
  .tile.right:before {
    border-width: 2px;
  }
}

.tile.pressed {
  background: rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.6);
  transition-duration: 0ms;
}
    `,
    javascript:`
/*================================================

Polyfill

================================================*/

(function(){ 'use strict';

  /*================================================

  Request Animation Frame

  ================================================*/
  
  var lastTime = 0;
  var vendors = [ 'webkit', 'moz' ];
  for( var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x ) {
    window.requestAnimationFrame = window[ vendors[ x ] + 'RequestAnimationFrame' ];
    window.cancelAnimationFrame = window[ vendors[ x ] + 'CancelAnimationFrame' ] || window[ vendors[ x ] + 'CancelRequestAnimationFrame' ];
  }

  if( !window.requestAnimationFrame ) {
    window.requestAnimationFrame = function( callback, element ) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
      var id = window.setTimeout(
        function() { 
          callback( currTime + timeToCall ); 
        }, timeToCall );
      lastTime = currTime + timeToCall;
      return id;
    }
  }

  if( !window.cancelAnimationFrame ) {
    window.cancelAnimationFrame = function( id ) {
      clearTimeout( id );
    }
  }

})();

/*================================================

DOM Manipulation

================================================*/

(function(){ 'use strict';

  function hasClass( elem, className ) {
    return new RegExp( ' ' + className + ' ' ).test( ' ' + elem.className + ' ' );
  };

  function addClass( elem, className ) {
    if( !hasClass(elem, className ) ) {
      elem.className += ' ' + className;
    }
  };

  function removeClass( elem, className ) {
    var newClass = ' ' + elem.className.replace( /[\\t\\r\\n]/g, ' ' ) + ' ';
    if( hasClass( elem, className ) ) {
      while( newClass.indexOf(' ' + className + ' ' ) >= 0 ) {
        newClass = newClass.replace( ' ' + className + ' ', ' ' );
      }
      elem.className = newClass.replace( /^\s+|\s+$/g, '' );
    }
  };

  function toggleClass( elem, className ) {
    var newClass = ' ' + elem.className.replace( /[\\t\\r\\n]/g, ' ' ) + ' ';
    if( hasClass(elem, className ) ) {
      while( newClass.indexOf( ' ' + className + ' ' ) >= 0 ) {
        newClass = newClass.replace( ' ' + className + ' ' , ' ' );
      }
      elem.className = newClass.replace( /^\s+|\s+$/g, '' );
    } else {
      elem.className += ' ' + className;
    }
  };

})();

/*================================================

Core

================================================*/

g = {};

(function(){ 'use strict';

  /*================================================

  Math

  ================================================*/

  g.m = Math;
  g.mathProps = 'E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min'.split( ' ' );
  for ( var i = 0; i < g.mathProps.length; i++ ) {
    g[ g.mathProps[ i ] ] = g.m[ g.mathProps[ i ] ];
  }
  g.m.TWO_PI = g.m.PI * 2;

  /*================================================

  Miscellaneous

  ================================================*/

  g.isset = function( prop ) {
    return typeof prop != 'undefined';
  };

  g.log = function() {
    if( g.isset( g.config ) && g.config.debug && window.console ){
      console.log( Array.prototype.slice.call( arguments ) );
    }
  };

})();

/*================================================

Group

================================================*/

(function(){ 'use strict';

  g.Group = function() {
    this.collection = [];
    this.length = 0;
  };

  g.Group.prototype.add = function( item ) {
    this.collection.push( item );
    this.length++;
  };

  g.Group.prototype.remove = function( index ) {
    if( index < this.length ) {
      this.collection.splice( index, 1 );
      this.length--;
    }
  };

  g.Group.prototype.empty = function() {
    this.collection.length = 0;
    this.length = 0;
  };

  g.Group.prototype.each = function( action, asc ) {
    var asc = asc || 0,
      i;
    if( asc ) {
      for( i = 0; i < this.length; i++ ) {
        this.collection[ i ][ action ]( i );
      }
    } else {
      i = this.length;
      while( i-- ) {
        this.collection[ i ][ action ]( i );
      }
    }
  };

})();

/*================================================

Utilities

================================================*/

(function(){ 'use strict';

  g.util = {};

  /*================================================

  Random

  ================================================*/
  
  g.util.rand = function( min, max ) {
    return g.m.random() * ( max - min ) + min;
  };

  g.util.randInt = function( min, max ) {
    return g.m.floor( g.m.random() * ( max - min + 1) ) + min;
  };

}());

/*================================================

State

================================================*/

(function(){ 'use strict';

  g.states = {};

  g.addState = function( state ) {
    g.states[ state.name ] = state;
  };

  g.setState = function( name ) {
    if( g.state ) {
      g.states[ g.state ].exit();
    }
    g.state = name;
    g.states[ g.state ].init();
  };

  g.currentState = function() {
    return g.states[ g.state ];
  };

}());

/*================================================

Time

================================================*/

(function(){ 'use strict';

  g.Time = function() {
    this.reset();
  }

  g.Time.prototype.reset = function() {
    this.now = Date.now();
    this.last = Date.now();
    this.delta = 60;
    this.ndelta = 1;
    this.elapsed = 0;
    this.nelapsed = 0;
    this.tick = 0;
  };

  g.Time.prototype.update = function() {
    this.now = Date.now();
    this.delta = this.now - this.last;
    this.ndelta = Math.min( Math.max( this.delta / ( 1000 / 60 ), 0.0001 ), 10 );
    this.elapsed += this.delta;
    this.nelapsed += this.ndelta;
    this.last = this.now;
    this.tick++;
  };

})();

/*================================================

Grid Entity

================================================*/

(function(){ 'use strict';

  g.Grid = function( cols, rows ) {
    this.cols = cols;
    this.rows = rows;
    this.tiles = [];
    for( var x = 0; x < cols; x++ ) {
      this.tiles[ x ] = [];
      for( var y = 0; y < rows; y++ ) {
        this.tiles[ x ].push( 'empty' );
      }
    }
  };

  g.Grid.prototype.get = function( x, y ) {
    return this.tiles[ x ][ y ];
  };

  g.Grid.prototype.set = function( x, y, val ) {
    this.tiles[ x ][ y ] = val;
  };

})();

/*================================================

Board Tile Entity

================================================*/

(function(){ 'use strict';

  g.BoardTile = function( opt ) {
    this.parentState = opt.parentState;
    this.parentGroup = opt.parentGroup;
    this.col = opt.col;
    this.row = opt.row;
    this.x = opt.x;
    this.y = opt.y;
    this.z = 0;
    this.w = opt.w;
    this.h = opt.h;
    this.elem = document.createElement( 'div' );
    this.elem.style.position = 'absolute';
    this.elem.className = 'tile';
    this.parentState.stageElem.appendChild( this.elem );
    this.classes = {
      pressed: 0,
      path: 0,
      up: 0,
      down: 0,
      left: 0,
      right: 0
    }
    this.updateDimensions();
  };

  g.BoardTile.prototype.update = function() {
    for( var k in this.classes ) {
      if( this.classes[ k ] ) {
        this.classes[ k ]--;
      }
    }

    if( this.parentState.food.tile.col == this.col || this.parentState.food.tile.row == this.row ) {
      this.classes.path = 1;
      if( this.col < this.parentState.food.tile.col ) {
        this.classes.right = 1;
      } else {
        this.classes.right = 0;
      }
      if( this.col > this.parentState.food.tile.col ) {
        this.classes.left = 1;
      } else {
        this.classes.left = 0;
      }
      if( this.row > this.parentState.food.tile.row ) {
        this.classes.up = 1;
      } else {
        this.classes.up = 0;
      }
      if( this.row < this.parentState.food.tile.row ) {
        this.classes.down = 1;
      } else {
        this.classes.down = 0;
      }
    } else {
      this.classes.path = 0;
    }

    if( this.parentState.food.eaten ) {
      this.classes.path = 0;
    }
  };

  g.BoardTile.prototype.updateDimensions = function() {
    this.x = this.col * this.parentState.tileWidth;
    this.y = this.row * this.parentState.tileHeight;
    this.w = this.parentState.tileWidth - this.parentState.spacing;
    this.h = this.parentState.tileHeight - this.parentState.spacing;
    this.elem.style.left = this.x + 'px';
    this.elem.style.top = this.y + 'px';
    this.elem.style.width = this.w + 'px';
    this.elem.style.height = this.h + 'px';
  };

  g.BoardTile.prototype.render = function() {
    var classString = '';
    for( var k in this.classes ) {
      if( this.classes[ k ] ) {
        classString += k + ' ';
      }
    }
    this.elem.className = 'tile ' + classString;
  };

})();

/*================================================

Snake Tile Entity

================================================*/

(function(){ 'use strict';

  g.SnakeTile = function( opt ) {
    this.parentState = opt.parentState;
    this.parentGroup = opt.parentGroup;
    this.col = opt.col;
    this.row = opt.row;
    this.x = opt.x;
    this.y = opt.y;
    this.w = opt.w;
    this.h = opt.h;
    this.color = null;
    this.scale = 1;
    this.rotation = 0;
    this.blur = 0;
    this.alpha = 1;
    this.borderRadius = 0;
    this.borderRadiusAmount = 0;
    this.elem = document.createElement( 'div' );
    this.elem.style.position = 'absolute';
    this.parentState.stageElem.appendChild( this.elem );
  };

  g.SnakeTile.prototype.update = function( i ) {
    this.x = this.col * this.parentState.tileWidth;
    this.y = this.row * this.parentState.tileHeight;
    if( i == 0 ) {
      this.color = '#fff';
      this.blur = this.parentState.dimAvg * 0.03 + Math.sin( this.parentState.time.elapsed / 200 ) * this.parentState.dimAvg * 0.015;
      if( this.parentState.snake.dir == 'n' ) {
        this.borderRadius = this.borderRadiusAmount + '% ' + this.borderRadiusAmount + '% 0 0';
      } else if( this.parentState.snake.dir == 's' ) {
        this.borderRadius = '0 0 ' + this.borderRadiusAmount + '% ' + this.borderRadiusAmount + '%';
      } else if( this.parentState.snake.dir == 'e' ) {
        this.borderRadius = '0 ' + this.borderRadiusAmount + '% ' + this.borderRadiusAmount + '% 0';
      } else if( this.parentState.snake.dir == 'w' ) {
        this.borderRadius = this.borderRadiusAmount + '% 0 0 ' + this.borderRadiusAmount + '%';
      }
    } else {
      this.color = '#fff';
      this.blur = 0;
      this.borderRadius = '0';
    }
    this.alpha = 1 - ( i / this.parentState.snake.tiles.length ) * 0.6;
    this.rotation = ( this.parentState.snake.justAteTick / this.parentState.snake.justAteTickMax ) * 90;
    this.scale = 1 + ( this.parentState.snake.justAteTick / this.parentState.snake.justAteTickMax ) * 1;
  };

  g.SnakeTile.prototype.updateDimensions = function() {
    this.w = this.parentState.tileWidth - this.parentState.spacing;
    this.h = this.parentState.tileHeight - this.parentState.spacing;
  };

  g.SnakeTile.prototype.render = function( i ) {
    this.elem.style.left = this.x + 'px';
    this.elem.style.top = this.y + 'px';
    this.elem.style.width = this.w + 'px';
    this.elem.style.height = this.h + 'px';
    this.elem.style.backgroundColor = 'rgba(255, 255, 255, ' + this.alpha + ')';
    this.elem.style.boxShadow = '0 0 ' + this.blur + 'px #fff';
    this.elem.style.borderRadius = this.borderRadius;
  };

})();

/*================================================

Food Tile Entity

================================================*/

(function(){ 'use strict';

  g.FoodTile = function( opt ) {
    this.parentState = opt.parentState;
    this.parentGroup = opt.parentGroup;
    this.col = opt.col;
    this.row = opt.row;
    this.x = opt.x;
    this.y = opt.y;
    this.w = opt.w;
    this.h = opt.h;
    this.blur = 0;
    this.scale = 1;
    this.hue = 100;
    this.opacity = 0;
    this.elem = document.createElement( 'div' );
    this.elem.style.position = 'absolute';
    this.parentState.stageElem.appendChild( this.elem );
  };

  g.FoodTile.prototype.update = function() {
    this.x = this.col * this.parentState.tileWidth;
    this.y = this.row * this.parentState.tileHeight;
    this.blur = this.parentState.dimAvg * 0.03 + Math.sin( this.parentState.time.elapsed / 200 ) * this.parentState.dimAvg * 0.015;
    this.scale = 0.8 + Math.sin( this.parentState.time.elapsed / 200 ) * 0.2;

    if( this.parentState.food.birthTick || this.parentState.food.deathTick ) {
      if( this.parentState.food.birthTick ) {
        this.opacity = 1 - ( this.parentState.food.birthTick / 1 ) * 1;
      } else {
        this.opacity = ( this.parentState.food.deathTick / 1 ) * 1;
      }
    } else {
      this.opacity = 1;
    }
  };

  g.FoodTile.prototype.updateDimensions = function() {
    this.w = this.parentState.tileWidth - this.parentState.spacing;
    this.h = this.parentState.tileHeight - this.parentState.spacing;
  };

  g.FoodTile.prototype.render = function() {
    this.elem.style.left = this.x + 'px';
    this.elem.style.top = this.y + 'px';
    this.elem.style.width = this.w + 'px';
    this.elem.style.height = this.h + 'px';
    this.elem.style[ 'transform' ] = 'translateZ(0) scale(' + this.scale + ')';
    this.elem.style.backgroundColor = 'hsla(' + this.hue + ', 100%, 60%, 1)';
    this.elem.style.boxShadow = '0 0 ' + this.blur + 'px hsla(' + this.hue + ', 100%, 60%, 1)';
    this.elem.style.opacity = this.opacity;
  };

})();

/*================================================

Snake Entity

================================================*/

(function(){ 'use strict';

  g.Snake = function( opt ) {
    this.parentState = opt.parentState;
    this.dir = 'e',
    this.currDir = this.dir;
    this.tiles = [];
    for( var i = 0; i < 5; i++ ) {
      this.tiles.push( new g.SnakeTile({
        parentState: this.parentState,
        parentGroup: this.tiles,
        col: 8 - i,
        row: 3,
        x: ( 8 - i ) * opt.parentState.tileWidth,
        y: 3 * opt.parentState.tileHeight,
        w: opt.parentState.tileWidth - opt.parentState.spacing,
        h: opt.parentState.tileHeight - opt.parentState.spacing
      }));
    }
    this.last = 0;
    this.updateTick = 10;
    this.updateTickMax = this.updateTick;
    this.updateTickLimit = 3;
    this.updateTickChange = 0.2;
    this.deathFlag = 0;
    this.justAteTick = 0;
    this.justAteTickMax = 1;
    this.justAteTickChange = 0.05;

    // sync data grid of the play state
    var i = this.tiles.length;

    while( i-- ) {
      this.parentState.grid.set( this.tiles[ i ].col, this.tiles[ i ].row, 'snake' );
    }
  };

  g.Snake.prototype.updateDimensions = function() {
    var i = this.tiles.length;
    while( i-- ) {
      this.tiles[ i ].updateDimensions();
    }
  };

  g.Snake.prototype.update = function() {
    if( this.parentState.keys.up ) {
      if( this.dir != 's' && this.dir != 'n' && this.currDir != 's' && this.currDir != 'n' ) {
        this.dir = 'n';
      }
    } else if( this.parentState.keys.down) {
      if( this.dir != 'n' && this.dir != 's' && this.currDir != 'n' && this.currDir != 's' ) {
        this.dir = 's';
      }
    } else if( this.parentState.keys.right ) {
      if( this.dir != 'w' && this.dir != 'e' && this.currDir != 'w' && this.currDir != 'e' ) {
        this.dir = 'e';
      }
    } else if( this.parentState.keys.left ) {
      if( this.dir != 'e' && this.dir != 'w' && this.currDir != 'e' && this.currDir != 'w' ) {
        this.dir = 'w';
      }
    }

    this.parentState.keys.up = 0;
    this.parentState.keys.down = 0;
    this.parentState.keys.right = 0;
    this.parentState.keys.left = 0;

    this.updateTick += this.parentState.time.ndelta;
    if( this.updateTick >= this.updateTickMax ) {
      // reset the update timer to 0, or whatever leftover there is
      this.updateTick = ( this.updateTick - this.updateTickMax );

      // rotate snake block array
      this.tiles.unshift( new g.SnakeTile({
        parentState: this.parentState,
        parentGroup: this.tiles,
        col: this.tiles[ 0 ].col,
        row: this.tiles[ 0 ].row,
        x: this.tiles[ 0 ].col * this.parentState.tileWidth,
        y: this.tiles[ 0 ].row * this.parentState.tileHeight,
        w: this.parentState.tileWidth - this.parentState.spacing,
        h: this.parentState.tileHeight - this.parentState.spacing
      }));
      this.last = this.tiles.pop();
      this.parentState.stageElem.removeChild( this.last.elem );

      this.parentState.boardTiles.collection[ this.last.col + ( this.last.row * this.parentState.cols ) ].classes.pressed = 2;

      // sync data grid of the play state
      var i = this.tiles.length;

      while( i-- ) {
        this.parentState.grid.set( this.tiles[ i ].col, this.tiles[ i ].row, 'snake' );
      }
      this.parentState.grid.set( this.last.col, this.last.row, 'empty' );


      // move the snake's head
      if ( this.dir == 'n' ) {
        this.currDir = 'n';
        this.tiles[ 0 ].row -= 1;
      } else if( this.dir == 's' ) {
        this.currDir = 's';
        this.tiles[ 0 ].row += 1;
      } else if( this.dir == 'w' ) {
        this.currDir = 'w';
        this.tiles[ 0 ].col -= 1;
      } else if( this.dir == 'e' ) {
        this.currDir = 'e';
        this.tiles[ 0 ].col += 1;
      }

      // wrap walls
      this.wallFlag = false;
      if( this.tiles[ 0 ].col >= this.parentState.cols ) {
        this.tiles[ 0 ].col = 0;
        this.wallFlag = true;
      }
      if( this.tiles[ 0 ].col < 0 ) {
        this.tiles[ 0 ].col = this.parentState.cols - 1;
        this.wallFlag = true;
      }
      if( this.tiles[ 0 ].row >= this.parentState.rows ) {
        this.tiles[ 0 ].row = 0;
        this.wallFlag = true;
      }
      if( this.tiles[ 0 ].row < 0 ) {
        this.tiles[ 0 ].row = this.parentState.rows - 1;
        this.wallFlag = true;
      }

      // check death by eating self
      if( this.parentState.grid.get( this.tiles[ 0 ].col, this.tiles[ 0 ].row ) == 'snake' ) {
        this.deathFlag = 1;
        clearTimeout( this.foodCreateTimeout );
      }

      // check eating of food
      if( this.parentState.grid.get( this.tiles[ 0 ].col, this.tiles[ 0 ].row ) == 'food' ) {
        this.tiles.push( new g.SnakeTile({
          parentState: this.parentState,
          parentGroup: this.tiles,
          col: this.last.col,
          row: this.last.row,
          x: this.last.col * this.parentState.tileWidth,
          y: this.last.row * this.parentState.tileHeight,
          w: this.parentState.tileWidth - this.parentState.spacing,
          h: this.parentState.tileHeight - this.parentState.spacing
        }));
        if( this.updateTickMax - this.updateTickChange > this.updateTickLimit ) {
          this.updateTickMax -= this.updateTickChange;
        }
        this.parentState.score++;
        this.parentState.scoreElem.innerHTML = this.parentState.score;
        this.justAteTick = this.justAteTickMax;

        this.parentState.food.eaten = 1;
        this.parentState.stageElem.removeChild( this.parentState.food.tile.elem );

        var _this = this;
        
        this.foodCreateTimeout = setTimeout( function() {
          _this.parentState.food = new g.Food({
            parentState: _this.parentState
          });
        }, 300);
      }

      // check death by eating self
      if( this.deathFlag ) {
        g.setState( 'play' );
      }
    }

    // update individual snake tiles
    var i = this.tiles.length;
    while( i-- ) {
      this.tiles[ i ].update( i );
    }

    if( this.justAteTick > 0 ) {
      this.justAteTick -= this.justAteTickChange;
    } else if( this.justAteTick < 0 ) {
      this.justAteTick = 0;
    }
  };

  g.Snake.prototype.render = function() {
    // render individual snake tiles
    var i = this.tiles.length;
    while( i-- ) {
      this.tiles[ i ].render( i );
    }
  };

})();

/*================================================

Food Entity

================================================*/

(function(){ 'use strict';

  g.Food = function( opt ) {
    this.parentState = opt.parentState;
    this.tile = new g.FoodTile({
      parentState: this.parentState,
      col: 0,
      row: 0,
      x: 0,
      y: 0,
      w: opt.parentState.tileWidth - opt.parentState.spacing,
      h: opt.parentState.tileHeight - opt.parentState.spacing
    });
    this.reset();
    this.eaten = 0;
    this.birthTick = 1;
    this.deathTick = 0;
    this.birthTickChange = 0.025;
    this.deathTickChange = 0.05;
  };

  g.Food.prototype.reset = function() {
    var empty = [];
    for( var x = 0; x < this.parentState.cols; x++) {
      for( var y = 0; y < this.parentState.rows; y++) {
        var tile = this.parentState.grid.get( x, y );
        if( tile == 'empty' ) {
          empty.push( { x: x, y: y } );
        }
      }
    }
    var newTile = empty[ g.util.randInt( 0, empty.length - 1 ) ];
    this.tile.col = newTile.x;
    this.tile.row = newTile.y;
  };

  g.Food.prototype.updateDimensions = function() {
    this.tile.updateDimensions();
  };

  g.Food.prototype.update = function() {
    // update food tile
    this.tile.update();

    if( this.birthTick > 0 ) {
      this.birthTick -= this.birthTickChange;
    } else if( this.birthTick < 0 ) {
      this.birthTick = 0;
    }

    // sync data grid of the play state
    this.parentState.grid.set( this.tile.col, this.tile.row, 'food' );
  };

  g.Food.prototype.render = function() {
    this.tile.render();
  };

})();
    
/*================================================

Play State

================================================*/

(function(){ 'use strict';

  function StatePlay() {
    this.name = 'play';
  }

  StatePlay.prototype.init = function() {
    this.scoreElem = document.querySelector( '.score' );
    this.stageElem = document.querySelector( '.stage' );
    this.dimLong = 28;
    this.dimShort = 16;
    this.padding = 0.25;
    this.boardTiles = new g.Group();
    this.keys = {};
    this.foodCreateTimeout = null;
    this.score = 0;
    this.scoreElem.innerHTML = this.score;
    this.time = new g.Time();
    this.getDimensions();
    if( this.winWidth < this.winHeight ) {
      this.rows = this.dimLong;
      this.cols = this.dimShort;
    } else {
      this.rows = this.dimShort;
      this.cols = this.dimLong;
    }
    this.spacing = 1;
    this.grid = new g.Grid( this.cols, this.rows );
    this.resize();
    this.createBoardTiles();
    this.bindEvents();
    this.snake = new g.Snake({
      parentState: this
    });
    this.food = new g.Food({
      parentState: this
    });
  };

  StatePlay.prototype.getDimensions = function() {
    this.winWidth = window.innerWidth;
    this.winHeight = window.innerHeight;
    this.activeWidth = this.winWidth - ( this.winWidth * this.padding );
    this.activeHeight = this.winHeight - ( this.winHeight * this.padding );
  };

  StatePlay.prototype.resize = function() {
    var _this = g.currentState();

    _this.getDimensions();

    _this.stageRatio = _this.rows / _this.cols;

    if( _this.activeWidth > _this.activeHeight / _this.stageRatio ) {
      _this.stageHeight = _this.activeHeight;
      _this.stageElem.style.height = _this.stageHeight + 'px';
      _this.stageWidth = Math.floor( _this.stageHeight /_this.stageRatio );
      _this.stageElem.style.width = _this.stageWidth + 'px';
    } else {
      _this.stageWidth = _this.activeWidth;
      _this.stageElem.style.width = _this.stageWidth + 'px';
      _this.stageHeight = Math.floor( _this.stageWidth * _this.stageRatio );
      _this.stageElem.style.height = _this.stageHeight + 'px';
    }

    _this.tileWidth = ~~( _this.stageWidth / _this.cols );
    _this.tileHeight = ~~( _this.stageHeight / _this.rows );
    _this.dimAvg = ( _this.activeWidth + _this.activeHeight ) / 2;
    _this.spacing = Math.max( 1, ~~( _this.dimAvg * 0.0025 ) );

    _this.stageElem.style.marginTop = ( -_this.stageElem.offsetHeight / 2 ) + _this.headerHeight / 2 + 'px';

    _this.boardTiles.each( 'updateDimensions' );
    _this.snake !== undefined && _this.snake.updateDimensions();
    _this.food !== undefined && _this.food.updateDimensions();
  };

  StatePlay.prototype.createBoardTiles = function() {
    for( var y = 0; y < this.rows; y++ ) {
      for( var x = 0; x < this.cols; x++ ) {
        this.boardTiles.add( new g.BoardTile({
          parentState: this,
          parentGroup: this.boardTiles,
          col: x,
          row: y,
          x: x * this.tileWidth,
          y: y * this.tileHeight,
          w: this.tileWidth - this.spacing,
          h: this.tileHeight - this.spacing
        }));
      }
    }
  };

  StatePlay.prototype.upOn = function() { g.currentState().keys.up = 1; }
  StatePlay.prototype.downOn = function() { g.currentState().keys.down = 1; }
  StatePlay.prototype.rightOn = function() { g.currentState().keys.right = 1; }
  StatePlay.prototype.leftOn = function() { g.currentState().keys.left = 1; }
  StatePlay.prototype.upOff = function() { g.currentState().keys.up = 0; }
  StatePlay.prototype.downOff = function() { g.currentState().keys.down = 0; }
  StatePlay.prototype.rightOff = function() { g.currentState().keys.right = 0; }
  StatePlay.prototype.leftOff = function() { g.currentState().keys.left = 0; }

  StatePlay.prototype.keydown = function( e ) {
    e.preventDefault();
    var e = ( e.keyCode ? e.keyCode : e.which ),
      _this = g.currentState();
    if( e === 38 || e === 87 ) { _this.upOn(); }
    if( e === 39 || e === 68 ) { _this.rightOn(); }
    if( e === 40 || e === 83 ) { _this.downOn(); }
    if( e === 37 || e === 65 ) { _this.leftOn(); }
  };

  StatePlay.prototype.bindEvents = function() {
    var _this = g.currentState();
    window.addEventListener( 'keydown', _this.keydown, false );
    window.addEventListener( 'resize', _this.resize, false );
  };

  StatePlay.prototype.step = function() {
    this.boardTiles.each( 'update' );
    this.boardTiles.each( 'render' );
    this.snake.update();
    this.snake.render();
    this.food.update();
    this.food.render();
    this.time.update();
  };

  StatePlay.prototype.exit = function() {
    window.removeEventListener( 'keydown', this.keydown, false );
    window.removeEventListener( 'resize', this.resize, false );
    this.stageElem.innerHTML = '';
    this.grid.tiles = null;
    this.time = null;
  };

  g.addState( new StatePlay() );

})();

/*================================================

Game

================================================*/

(function(){ 'use strict';

  g.config = {
    title: 'Snakely',
    debug: window.location.hash == '#debug' ? 1 : 0,
    state: 'play'
  };

  g.setState( g.config.state );

  g.time = new g.Time();

  g.step = function() {
    requestAnimationFrame( g.step );
    g.states[ g.state ].step();
    g.time.update();
  };

  window.addEventListener( 'load', g.step, false );

})();
    `
  },
  {
    name:"Planet Defense",
    html:`<!DOCTYPE html>
<html lang="en" >
  <head>
    <meta charset="UTF-8">
    <title>Planet defense game</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">

  </head>
  <body>
      <canvas id="canvas"></canvas>
  </body>
</html>
    `,
    css: ` 
    html {
      overflow: hidden;
      height: 100%;
      background: #191919;
      width: 100%;
  }
  
  #canvas {
      background: url('https://marclopezavila.github.io/planet-defense-game/img/space.jpg') no-repeat;
      width: 100%;
      height: 100%;
      background-size: cover;
  }
  
  #canvas.playing {
      cursor: url('https://marclopezavila.github.io/planet-defense-game/img/aim_red.png') 17.5 17.5,auto !important;
  }

    `,
    javascript:`


    window.addEventListener("DOMContentLoaded", game);

    //General sprite load
    var sprite = new Image();
    var spriteExplosion = new Image();
    sprite.src = 'https://marclopezavila.github.io/planet-defense-game/img/sprite.png';
    
    window.onload = function() {
        spriteExplosion.src = 'https://marclopezavila.github.io/planet-defense-game/img/explosion.png';
    };
    
    //Game
    function game() {
    
        //Canvas
        var canvas = document.getElementById('canvas'),
            ctx    = canvas.getContext('2d'),
            cH     = ctx.canvas.height = window.innerHeight,
            cW     = ctx.canvas.width  = window.innerWidth ;
    
        //Game
        var bullets    = [],
            asteroids  = [],
            explosions = [],
            destroyed  = 0,
            record     = 0,
            count      = 0,
            playing    = false,
            gameOver   = false,
            _planet    = {deg: 0};
    
        //Player
        var player = {
            posX   : -35,
            posY   : -(100+82),
            width  : 70,
            height : 79,
            deg    : 0
        };
    
        canvas.addEventListener('click', action);
        canvas.addEventListener('mousemove', action);
        window.addEventListener("resize", update);
    
        function update() {
            cH = ctx.canvas.height = window.innerHeight;
            cW = ctx.canvas.width  = window.innerWidth ;
        }
    
        function move(e) {
            player.deg = Math.atan2(e.offsetX - (cW/2), -(e.offsetY - (cH/2)));
        }
    
        function action(e) {
            e.preventDefault();
            if(playing) {
                var bullet = {
                    x: -8,
                    y: -179,
                    sizeX : 2,
                    sizeY : 10,
                    realX : e.offsetX,
                    realY : e.offsetY,
                    dirX  : e.offsetX,
                    dirY  : e.offsetY,
                    deg   : Math.atan2(e.offsetX - (cW/2), -(e.offsetY - (cH/2))),
                    destroyed: false
                };
    
                bullets.push(bullet);
            } else {
                var dist;
                if(gameOver) {
                    dist = Math.sqrt(((e.offsetX - cW/2) * (e.offsetX - cW/2)) + ((e.offsetY - (cH/2 + 45 + 22)) * (e.offsetY - (cH/2+ 45 + 22))));
                    if (dist < 27) {
                        if(e.type == 'click') {
                            gameOver   = false;
                            count      = 0;
                            bullets    = [];
                            asteroids  = [];
                            explosions = [];
                            destroyed  = 0;
                            player.deg = 0;
                            canvas.removeEventListener('contextmenu', action);
                            canvas.removeEventListener('mousemove', move);
                            canvas.style.cursor = "default";
                        } else {
                            canvas.style.cursor = "pointer";
                        }
                    } else {
                        canvas.style.cursor = "default";
                    }
                } else {
                    dist = Math.sqrt(((e.offsetX - cW/2) * (e.offsetX - cW/2)) + ((e.offsetY - cH/2) * (e.offsetY - cH/2)));
    
                    if (dist < 27) {
                        if(e.type == 'click') {
                            playing = true;
                            canvas.removeEventListener("mousemove", action);
                            canvas.addEventListener('contextmenu', action);
                            canvas.addEventListener('mousemove', move);
                            canvas.setAttribute("class", "playing");
                            canvas.style.cursor = "default";
                        } else {
                            canvas.style.cursor = "pointer";
                        }
                    } else {
                        canvas.style.cursor = "default";
                    }
                }
            }
        }
    
        function fire() {
            var distance;
    
            for(var i = 0; i < bullets.length; i++) {
                if(!bullets[i].destroyed) {
                    ctx.save();
                    ctx.translate(cW/2,cH/2);
                    ctx.rotate(bullets[i].deg);
    
                    ctx.drawImage(
                        sprite,
                        211,
                        100,
                        50,
                        75,
                        bullets[i].x,
                        bullets[i].y -= 20,
                        19,
                        30
                    );
    
                    ctx.restore();
    
                    //Real coords
                    bullets[i].realX = (0) - (bullets[i].y + 10) * Math.sin(bullets[i].deg);
                    bullets[i].realY = (0) + (bullets[i].y + 10) * Math.cos(bullets[i].deg);
    
                    bullets[i].realX += cW/2;
                    bullets[i].realY += cH/2;
    
                    //Collision
                    for(var j = 0; j < asteroids.length; j++) {
                        if(!asteroids[j].destroyed) {
                            distance = Math.sqrt(Math.pow(
                                    asteroids[j].realX - bullets[i].realX, 2) +
                                Math.pow(asteroids[j].realY - bullets[i].realY, 2)
                            );
    
                            if (distance < (((asteroids[j].width/asteroids[j].size) / 2) - 4) + ((19 / 2) - 4)) {
                                destroyed += 1;
                                asteroids[j].destroyed = true;
                                bullets[i].destroyed   = true;
                                explosions.push(asteroids[j]);
                            }
                        }
                    }
                }
            }
        }
    
        function planet() {
            ctx.save();
            ctx.fillStyle   = 'white';
            ctx.shadowBlur    = 100;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.shadowColor   = "#999";
    
            ctx.arc(
                (cW/2),
                (cH/2),
                100,
                0,
                Math.PI * 2
            );
            ctx.fill();
    
            //Planet rotation
            ctx.translate(cW/2,cH/2);
            ctx.rotate((_planet.deg += 0.1) * (Math.PI / 180));
            ctx.drawImage(sprite, 0, 0, 200, 200, -100, -100, 200,200);
            ctx.restore();
        }
    
        function _player() {
    
            ctx.save();
            ctx.translate(cW/2,cH/2);
    
            ctx.rotate(player.deg);
            ctx.drawImage(
                sprite,
                200,
                0,
                player.width,
                player.height,
                player.posX,
                player.posY,
                player.width,
                player.height
            );
    
            ctx.restore();
    
            if(bullets.length - destroyed && playing) {
                fire();
            }
        }
    
        function newAsteroid() {
    
            var type = random(1,4),
                coordsX,
                coordsY;
    
            switch(type){
                case 1:
                    coordsX = random(0, cW);
                    coordsY = 0 - 150;
                    break;
                case 2:
                    coordsX = cW + 150;
                    coordsY = random(0, cH);
                    break;
                case 3:
                    coordsX = random(0, cW);
                    coordsY = cH + 150;
                    break;
                case 4:
                    coordsX = 0 - 150;
                    coordsY = random(0, cH);
                    break;
            }
    
            var asteroid = {
                x: 278,
                y: 0,
                state: 0,
                stateX: 0,
                width: 134,
                height: 123,
                realX: coordsX,
                realY: coordsY,
                moveY: 0,
                coordsX: coordsX,
                coordsY: coordsY,
                size: random(1, 3),
                deg: Math.atan2(coordsX  - (cW/2), -(coordsY - (cH/2))),
                destroyed: false
            };
            asteroids.push(asteroid);
        }
    
        function _asteroids() {
            var distance;
    
            for(var i = 0; i < asteroids.length; i++) {
                if (!asteroids[i].destroyed) {
                    ctx.save();
                    ctx.translate(asteroids[i].coordsX, asteroids[i].coordsY);
                    ctx.rotate(asteroids[i].deg);
    
                    ctx.drawImage(
                        sprite,
                        asteroids[i].x,
                        asteroids[i].y,
                        asteroids[i].width,
                        asteroids[i].height,
                        -(asteroids[i].width / asteroids[i].size) / 2,
                        asteroids[i].moveY += 1/(asteroids[i].size),
                        asteroids[i].width / asteroids[i].size,
                        asteroids[i].height / asteroids[i].size
                    );
    
                    ctx.restore();
    
                    //Real Coords
                    asteroids[i].realX = (0) - (asteroids[i].moveY + ((asteroids[i].height / asteroids[i].size)/2)) * Math.sin(asteroids[i].deg);
                    asteroids[i].realY = (0) + (asteroids[i].moveY + ((asteroids[i].height / asteroids[i].size)/2)) * Math.cos(asteroids[i].deg);
    
                    asteroids[i].realX += asteroids[i].coordsX;
                    asteroids[i].realY += asteroids[i].coordsY;
    
                    //Game over
                    distance = Math.sqrt(Math.pow(asteroids[i].realX -  cW/2, 2) + Math.pow(asteroids[i].realY - cH/2, 2));
                    if (distance < (((asteroids[i].width/asteroids[i].size) / 2) - 4) + 100) {
                        gameOver = true;
                        playing  = false;
                        canvas.addEventListener('mousemove', action);
                    }
                } else if(!asteroids[i].extinct) {
                    explosion(asteroids[i]);
                }
            }
    
            if(asteroids.length - destroyed < 10 + (Math.floor(destroyed/6))) {
                newAsteroid();
            }
        }
    
        function explosion(asteroid) {
            ctx.save();
            ctx.translate(asteroid.realX, asteroid.realY);
            ctx.rotate(asteroid.deg);
    
            var spriteY,
                spriteX = 256;
            if(asteroid.state == 0) {
                spriteY = 0;
                spriteX = 0;
            } else if (asteroid.state < 8) {
                spriteY = 0;
            } else if(asteroid.state < 16) {
                spriteY = 256;
            } else if(asteroid.state < 24) {
                spriteY = 512;
            } else {
                spriteY = 768;
            }
    
            if(asteroid.state == 8 || asteroid.state == 16 || asteroid.state == 24) {
                asteroid.stateX = 0;
            }
    
            ctx.drawImage(
                spriteExplosion,
                asteroid.stateX += spriteX,
                spriteY,
                256,
                256,
                - (asteroid.width / asteroid.size)/2,
                -(asteroid.height / asteroid.size)/2,
                asteroid.width / asteroid.size,
                asteroid.height / asteroid.size
            );
            asteroid.state += 1;
    
            if(asteroid.state == 31) {
                asteroid.extinct = true;
            }
    
            ctx.restore();
        }
    
        function start() {
            if(!gameOver) {
                //Clear
                ctx.clearRect(0, 0, cW, cH);
                ctx.beginPath();
    
                //Planet
                planet();
    
                //Player
                _player();
    
                if(playing) {
                    _asteroids();
    
                    ctx.font = "20px Verdana";
                    ctx.fillStyle = "white";
                    ctx.textBaseline = 'middle';
                    ctx.textAlign = "left";
                    ctx.fillText('Highest Score: '+record+'', 20, 30);
    
                    ctx.font = "40px Verdana";
                    ctx.fillStyle = "white";
                    ctx.strokeStyle = "black";
                    ctx.textAlign = "center";
                    ctx.textBaseline = 'middle';
                    ctx.strokeText(''+destroyed+'', cW/2,cH/2);
                    ctx.fillText(''+destroyed+'', cW/2,cH/2);
    
                } else {
                    ctx.drawImage(sprite, 428, 12, 70, 70, cW/2 - 35, cH/2 - 35, 70,70);
                }
            } else if(count < 1) {
                count = 1;
                ctx.fillStyle = 'rgba(0,0,0,0.75)';
                ctx.rect(0,0, cW,cH);
                ctx.fill();
    
                ctx.font = "60px Verdana";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.fillText("GAME OVER",cW/2,cH/2 - 150);
    
                ctx.font = "20px Verdana";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.fillText("Total destroyed: "+ destroyed, cW/2,cH/2 + 140);
    
                record = destroyed > record ? destroyed : record;
    
                ctx.font = "20px Verdana";
                ctx.fillStyle = "white";
                ctx.textAlign = "center";
                ctx.fillText("RECORD: "+ record, cW/2,cH/2 + 185);
    
                ctx.drawImage(sprite, 500, 18, 70, 70, cW/2 - 35, cH/2 + 40, 70,70);
    
                canvas.removeAttribute('class');
            }
        }
    
        function init() {
            window.requestAnimationFrame(init);
            start();
        }
    
        init();
    
        //Utils
        function random(from, to) {
            return Math.floor(Math.random() * (to - from + 1)) + from;
        }
    
        if(~window.location.href.indexOf('full')) {
            var full = document.getElementsByTagName('a');
            full[0].setAttribute('style', 'display: none');
        }
    }



    
    `
  }
]


export default Examples