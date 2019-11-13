var banner, direction, pos, leftmarg, rightmarg;
leftmarg = 10;
rightmarg = 200;
function move(){
    direction = 1;
    
    banner = document.getElementById('timeSaver').style;
    banner.left = '10px';
    banner.position = 'fixed';
    
    pos=banner.left;
    pos= pos.match(/\d+/);
    
    
    moveText(pos);
}

function moveText(pos){
    if(pos%5 == 0){
        if(banner.color =='red'){
            banner.color = 'blue';
        }else{
            banner.color = 'red';
        }
    }
    
    if(pos>= rightmarg){
        direction = -1;
    }else if(pos <= leftmarg){
        direction = 1;
    }
    
    pos += direction;
    banner.left = pos+'px';
    
    setTimeout('moveText(' + pos + ')',5);
}
function changeParam(){
    rightmarg = document.getElementById('rightPos').value;
    leftmarg = document.getElementById('leftPos').value;
    moveText(pos);
}