function isTouching(obj1,obj2)
{
        if(obj1.x-obj2.x<=obj2.width/2+obj1.width/2
            && obj2.x-obj1.x<=obj2.width/2+obj1.width/2
            && obj1.y-obj2.y<=obj2.height/2+obj1.height/2
            && obj2.y-obj1.y<=obj2.height/2+obj1.height/2
            )
        {
            return true;
        }
        else{
            return false;
        }
}

function bounceOff(B1,B2)
{

        if (B1.x - B2.x < B2.width/2 + B1.width/2
            && B2.x - B1.x < B2.width/2 + B1.width/2) {
        B1.velocityXB2= B1.velocityX * (-1);
        B2.velocityX = B2.velocityX * (-1);
        }
        if (B1.y - B2.y < B2.height/2 + B1.height/2
        && B2.y - B1.y < B2.height/2 + B1.height/2){
        B1.velocityY = B1.velocityY * (-1);
        B2.velocityY = B2.velocityY * (-1);
}
}