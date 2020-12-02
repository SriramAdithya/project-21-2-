var bullet,wall,thickness;
var speed,weight;

function setup(){
    createCanvas(1600,400)

    speed = random(223,321)
    weight = random(30,52)
    thickness = random(22,83)

    bullet = createSprite(50,200,40,10)
    bullet.velocityX = speed;
    bullet.shapeColor = 'white'

    wall = createSprite(1200,200,thickness,height/2)
    wall.shapeColor = color(80,80,80)


}

function draw (){
    background(0)

    if(hasCollided(bullet,wall)){
        bullet.velocityX = 0;
        var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness)

        if(damage > 10){
            wall.shapeColor = 'green';
        }else{
            wall.shapeColor = 'red';
        }
    }

    drawSprites();
}

function hasCollided(bullet1,wall1){
    let bulletRightEdge = bullet1.x + bullet1.width;
    let wallLeftEdge = wall1 = wall1.x;

    if(bulletRightEdge >= wallLeftEdge){
        return true;

    } else{
        return false;
    }
}