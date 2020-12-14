

var canvas=new fabric.Canvas("myCanvas");
b_width=90;
b_height=90;
player_x=10;
player_y=10;

var player_object="";
var block_object="";
function player_update(){
fabric.Image.fromURL("player.png", function(Img) { 
    player_object = Img;
    player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
      player_object.set({ top:player_y, left:player_x });
       canvas.add(player_object);
});
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img) { 
        player_object = Img;
        player_object.scaleToWidth(b_width);
         player_object.scaleToHeight(b_height);
          player_object.set({ top:player_y, left:player_x });
           canvas.add(block_object);
    });
    }
    window.addEventListener("keydown",mykeydown);
    function mykeydown(e) {
    kypress=e.keyCode;
    console.log(kypress);
    if(e.shiftKey==true&&keypress=='80'){
      b_width=b_width + 10;
      b_height=b_height + 10;
      document.getElementById("span1").innerHTML=b_width;
      document.getElementById("span2").innerHTML=b_height;
      console.log("shift+p");
    }
    if(e.shiftKey==true&&kypress=='77'){
        b_width=b_width - 10;
        b_height=b_height - 10;
        document.getElementById("span1").innerHTML=b_width;
        document.getElementById("span2").innerHTML=b_height;
        console.log("shift+m");
      }
      if(kypress=='38'){
       up();
       console.log("up");   
      }
      if(kypress=='40'){
      down();
        console.log("up");   
       }
       if(kypress=='37'){
        left();
        console.log("up");   
       }
       if(kypress=='39'){
        right();
        console.log("up");   
       }
       if(kypress=='68'){
        new_image('dark_green.png');
        console.log("d");   
       }
       if(kypress=='71'){
        new_image('ground.png');
        console.log("g");
    }
    if(kypress=='76'){
      new_image('light_green.png');
      console.log("l");
    }
    if(kypress=='82'){
      new_image('roof.png');
      console.log("r");
  }
  if(kypress=='84'){
    new_image('trunk.jpg');
    console.log("t");
}
if(kypress=='85'){
  new_image('unique.png');
  console.log("u");
}
if(kypress=='89'){
  new_image('yellow_wall.png');
  console.log("y");
}
    }
function up(){
  if(player_y>=0){
    player_y=player_y-10;
    console.log(player_y);
    canvas.remove(player_object);
    player_update();
  }
}
function down(){
  if(player_y<=850){
    player_y=player_y+10;
    console.log(player_y);
    canvas.remove(player_object);
    player_update();
  }
}
function right(){
  if(player_x<=850){
    player_x=player_x+10;
    console.log(player_x);
    canvas.remove(player_object);
    player_update();
  }
}
function left(){
  if(player_x>=0){
    player_x=player_x-10;
    console.log(player_x);
    canvas.remove(player_object);
    player_update();
  }
}
