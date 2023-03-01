var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["c3d46db5-7411-4c8b-a731-e077e7ca152b","d2145d8f-7d78-417f-b72d-7911d7d319d5","3ee6c76d-0a05-456d-9165-56a0c1a8a6c3","c24e7663-83c1-49ca-aba9-ca790c2c1990","36466657-0576-47ed-b8ec-168850a7245c","dd4c25cf-ca53-4911-82c2-ccc4ffc2ea92","a5dd470d-b63e-4212-bb55-381e757b2de9","ac8eaf3e-0388-4a4c-9e09-0f6c74018235"],"propsByKey":{"c3d46db5-7411-4c8b-a731-e077e7ca152b":{"name":"brownspider_1","sourceUrl":null,"frameSize":{"x":263,"y":397},"frameCount":2,"looping":true,"frameDelay":20,"version":"i2EmP9yJEMlL2CeeQSuafS7EL.2kZHHf","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":526,"y":397},"rootRelativePath":"assets/c3d46db5-7411-4c8b-a731-e077e7ca152b.png"},"d2145d8f-7d78-417f-b72d-7911d7d319d5":{"name":"5a830437abc3d121aba71238.png_1","sourceUrl":"assets/v3/animations/q1pJhCSMQ2buP9v4PXK99mSi42I6AixPpeDHey4_U8s/d2145d8f-7d78-417f-b72d-7911d7d319d5.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"EBlErC.ZQAHkQa6c2GKhCoin5XWB_Et2","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/q1pJhCSMQ2buP9v4PXK99mSi42I6AixPpeDHey4_U8s/d2145d8f-7d78-417f-b72d-7911d7d319d5.png"},"3ee6c76d-0a05-456d-9165-56a0c1a8a6c3":{"name":"cobra","sourceUrl":null,"frameSize":{"x":394,"y":116},"frameCount":6,"looping":true,"frameDelay":4,"version":"CvGo9uQ24CX.wWSdNN8C5AR03RG4yURq","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":394,"y":696},"rootRelativePath":"assets/3ee6c76d-0a05-456d-9165-56a0c1a8a6c3.png"},"c24e7663-83c1-49ca-aba9-ca790c2c1990":{"name":"Smile","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"sieiyn.Mf1zZyQ0Z0FsElxk3CHYHYIoT","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/c24e7663-83c1-49ca-aba9-ca790c2c1990.png"},"36466657-0576-47ed-b8ec-168850a7245c":{"name":"win","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"WqhRF_.zda1srCtuzowcLx14kuNSao4L","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/36466657-0576-47ed-b8ec-168850a7245c.png"},"dd4c25cf-ca53-4911-82c2-ccc4ffc2ea92":{"name":"Key","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"tfo6SxZkcyAwk28Fkxr2kwrZMPuQIcQG","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/dd4c25cf-ca53-4911-82c2-ccc4ffc2ea92.png"},"a5dd470d-b63e-4212-bb55-381e757b2de9":{"name":"door","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"f9iDwgWc71tKfMdr2n57NN3n6niWXtRD","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a5dd470d-b63e-4212-bb55-381e757b2de9.png"},"ac8eaf3e-0388-4a4c-9e09-0f6c74018235":{"name":"player","sourceUrl":null,"frameSize":{"x":52,"y":80},"frameCount":7,"looping":true,"frameDelay":3,"version":"yLA9ug2Ul.FPkCXivyjQN3CQewwI2_Q.","loadedFromSource":true,"saved":true,"sourceSize":{"x":156,"y":240},"rootRelativePath":"assets/ac8eaf3e-0388-4a4c-9e09-0f6c74018235.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var reset_sprite = createSprite(800, 20000);
var reset_sprite2 = createSprite(900, 20000);

var dark = createSprite(395, 270, 40, 55);
dark.shapeColor = "black";
var dark1 = createSprite(39, 355, 74, 10);
dark1.shapeColor = "black";
dark1.bounciness = 1;
dark1.velocityY = 6;

var win = createSprite(370, 370, 20, 20);
win.shapeColor = "white";
var door = createSprite(95, 378);
door.setAnimation("door");
door.scale = 0.45;
var win = createSprite(370, 370, 20, 20);
win.shapeColor = "white";
var door2 = createSprite(96, 269);
door2.setAnimation("door");
door2.scale = 0.50;
var win_2 = createSprite(393, 360, 20, 20);
win_2.setAnimation("win");

var Key_ = createSprite(350, 200);
Key_.setAnimation("Key");
Key_.scale = 0.5;
var Key_2 = createSprite(350, 200);
Key_2.setAnimation("Key");
Key_2.scale = 0.5;
Key_2.visible = 0;

var game_over = createSprite(340, 70, 20, 20);
game_over.shapeColor = "black";
var eyes = createSprite(335, 65, 5, 5);
eyes.shapeColor = "red";
var eyes_ = createSprite(345, 65, 5, 5);
eyes_.shapeColor = "red";
var sprite = createSprite(352, 73);
sprite.setAnimation("Smile");

var wall_1 = createSprite(90, 222, 5, 40);
wall_1.shapeColor = "navy";

var wall_2 = createSprite(100, 15, 5, 30);
wall_2.shapeColor = "navy";

var wall_3 = createSprite(20, 90, 60, 80);
wall_3.shapeColor = "navy";

var wall_4 = createSprite(70, 127, 80, 5);
wall_4.shapeColor = "navy";

var wall_5 = createSprite(160, 70, 5, 80);
wall_5.shapeColor = "navy";

var wall_6 =createSprite(200, 70, 5, 80);
wall_6.shapeColor = "navy";

var wall_7 = createSprite(180, 85, 40, 5);
wall_7.shapeColor = "navy";

var wall_8 = createSprite(240, 32, 85, 5);
wall_8.shapeColor = "navy";

var wall_9 = createSprite(280, 84, 5, 100);
wall_9.shapeColor = "navy";


var wall_10 = createSprite(340, 134, 125, 5);
wall_10.shapeColor = "navy";

var wall_11 = createSprite(220, 110, 45, 5);
wall_11.shapeColor = "navy";


var wall_12 = createSprite(80, 200, 5, 80);
wall_12.shapeColor = "navy";

var wall_13 = createSprite(280, 160, 5, 80);
wall_13.shapeColor = "navy";


var wall_14 = createSprite(80, 325, 5, 60);
wall_14.shapeColor = "navy";

var wall_15 = createSprite(240, 240, 325, 5);
wall_15.shapeColor = "navy";


var wall_16 = createSprite(240, 295, 325, 5);
wall_16.shapeColor = "navy";


var wall_17 = createSprite(140, 370, 5, 60);
wall_17.shapeColor = "navy";

var wall_18 = createSprite(215, 325, 5, 60);
wall_18.shapeColor = "navy";

var wall_19 = createSprite(270, 370, 5, 60);
wall_19.shapeColor = "navy";

var wall_20 = createSprite(140, 220, 5, 40);
wall_20.shapeColor = "navy";

var wall_21 = createSprite(240, 250, 5, 15);
wall_21.shapeColor = "navy";

var wall_22 = createSprite(150, 287, 5, 15);
wall_22.shapeColor = "navy";







var player = createSprite(40, 40);
player.setAnimation("player");
player.scale = 0.4;
var nothing = createSprite(40, 40, 20, 10);
nothing.visible = 0;
function draw() {
  background("darkred");
  drawSprites();
  player.collide(wall_1);
  player.collide(wall_2);
  player.collide(wall_3);
  player.collide(wall_4);
  player.collide(wall_5);
  player.collide(wall_6);
  player.collide(wall_7);
  player.collide(wall_8);
  player.collide(wall_9);
  player.collide(wall_10);
  player.collide(wall_11);
  player.collide(wall_12);
  player.collide(wall_13);
  player.collide(wall_14);
  player.collide(wall_15);
  player.collide(wall_16);
  player.collide(wall_17);
  player.collide(wall_18);
  player.collide(wall_19);
  player.collide(wall_20);
  player.collide(wall_21);
  player.collide(wall_22);
  player.collide(door);
  player.collide(door2);
  if (player.isTouching(nothing)) {
    camera.x = player.x;
    camera.y = player.y;
    camera.zoom = 2;
    nothing.x = player.x;
    nothing.y = player.y;
  }
  if (player.isTouching(Key_)) {
    door2.x = 1000;
    door2.y = 2000;
    door.x = 2000;
    door.y = 1000;
    Key_.x = player.x;
    Key_.y = player.y;
    Key_.visible = 0;
    if (keyDown("r")) {
      stopSound("assets/category_collect/collect_item_bling_4.mp3");
      playSound("assets/category_alerts/airy_bell_notification.mp3", false);
      nothing.x = player.x;
      nothing.y = player.y;
      Key_2.x = 350;
      Key_2.y = 200;
      player.x = 40;
      player.y = 40;
      nothing.x = 40;
      nothing.y = 40;
      Key_.x = 350;
      Key_.y = 200;
      Key_.visible = 1;
      door2.x = 96;
      door2.y = 269;
      door.x = 95;
      door.y = 378;
      if (keyDown("r")) {
        return Key_;
      }
      if (keyDown("r")) {
        return door2;
      }
      if (keyDown("r")) {
        return door;
      }
    }
  }
  if (keyDown("w")) {
    player.y = player.y - 5;
    playSound("assets/category_app/snap.mp3", false);
  }
  if (keyDown("a")) {
    player.x = player.x - 5;
    playSound("assets/category_app/snap.mp3", false);
  }
  if (keyDown("d")) {
    player.x = player.x + 5;
    playSound("assets/category_app/snap.mp3", false);
  }
  if (keyDown("s")) {
    player.y = player.y + 5;
    playSound("assets/category_app/snap.mp3", false);
  }
  if (player.isTouching(win)) {
    textSize(4);
    textFont("Arial");
    fill("yellow");
    text("VOCÊ VENCEU!", 355, 359);
    stopSound("assets/category_background/synthesize.mp3");
    playSpeech("VOCÊ VENCEU!PARABÉNS!!!", "male", "Português (Brasil)");
    textSize(4);
    textFont("Arial");
    fill("yellow");
    text("PARABÉNS!!!", 358, 385);
    camera.x = 370;
    camera.y = 370;
    camera.zoom = 10;
    player.x = 370;
    player.y = 370;
    player.scale = 0.02;
    player.visible = 0;
  }
  createEdgeSprites();
  player.collide(edges);
  dark1.bounceOff(edges);
  dark1.bounceOff(wall_3);
  if (player.isTouching(game_over)) {
    playSound("assets/category_space/Southern_ring_SFX.mp3", true);
    playSound("assets/category_animals/dinosaur.mp3", false);
    playSound("assets/category_animals/crocodile.mp3", true);
    playSound("assets/category_hits/vibrant_game_deep_hit.mp3", true);
    playSpeech("................game over. tente novamente apertando r", "male", "Português (Brasil)");
    camera.x = 340;
    camera.y = 70;
    camera.zoom = 15;
    player.x = 800;
    player.y = 20000;
    game_over.scale = 4;
    eyes.scale = 1.5;
    sprite.scale = 1;
    sprite.x = sprite.x + 3;
    sprite.y = sprite.y + 3;
    eyes_.scale = 1.5;
    sprite.scale = 1.25;
    background("red");
  }
  if (player.isTouching(reset_sprite2)) {
    playSound("assets/category_alerts/airy_bell_notification.mp3", false);
    stopSound("assets/category_hits/vibrant_game_deep_hit.mp3");
    stopSound("assets/category_space/Southern_ring_SFX.mp3");
    stopSound("assets/category_animals/crocodile.mp3");
    stopSound("assets/category_animals/dinosaur.mp3");
    eyes.scale = 1;
    eyes_.scale = 1;
    sprite.x = sprite.x - 3;
    sprite.y = sprite.y - 1.5;
    game_over.scale = 1;
    camera.x = player.x;
    camera.y = player.y;
    camera.zoom = 2;
    player.x = 40;
    player.y = 40;
    nothing.x = player.x;
    nothing.y = player.y;
  }
  if (player.isTouching(reset_sprite)) {
    if (keyDown("r")) {
      
    }
    if (keyDown("r")) {
      player.x = reset_sprite2.x;
      door2.x = 96;
      door2.y = 269;
      door.x = 95;
      door.y = 378;
      Key_.x = 350;
      Key_.y = 200;
      Key_.visible = 1;
      if (1 == 1) {
        return Key_2;
      }
      return Key_;
    }
  }
  if (player.isTouching(nothing)) {
    camera.x = player.x;
    camera.y = player.y;
    camera.zoom = 2;
    nothing.x = player.x;
    nothing.y = player.y;
  }
  if (player.isTouching(Key_2)) {
    Key_2.x = 10000000;
    Key_2.y = 10000000;
    playSound("assets/category_collect/collect_item_bling_4.mp3", false);
  }
  if (player.isTouching(dark1)) {
    player.x = 335;
    player.y = 60;
  }
  if (player.isTouching(dark)) {
    player.x = 335;
    player.y = 60;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
