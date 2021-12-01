// === Select DOM ===
const monster = document.getElementById('monster');
const user = document.getElementById('user');
const password = document.getElementById('password');
const body = document.querySelector('body');
const width = window.innerWidth/2;
const height = window.innerHeight/2;
let seguirPonteiroMouse = true;


// === Events ===
body.addEventListener('mousemove', (m) => {
    if(seguirPonteiroMouse){
        if(m.clientX < width && m.clientY < height){
            monster.src = "img/idle/2.png";
    
        }else if(m.clientX < width && m.clientY > height){
            monster.src = "img/idle/3.png";
    
        }else if(m.clientX > width && m.clientY < height){
            monster.src = "img/idle/5.png";
    
        }else{
            monster.src = "img/idle/4.png";
        }
    }
    
})

// === USER ===
user.addEventListener('focus', () => {
    seguirPonteiroMouse = false;
})

user.addEventListener('blur', () => {
    seguirPonteiroMouse = true;
})

user.addEventListener('keyup', () => {
    let userLength = user.value.length;

    if(userLength >= 0 && userLength <= 5){
        monster.src = "img/read/1.png";

    }else if(userLength >= 6 && userLength <= 14){
        monster.src = "img/read/2.png";

    }else if(userLength >= 15 && userLength <= 20){
        monster.src = "img/read/3.png";

    }else{
        monster.src = "img/read/4.png";
    }
})



// === PASSWORD ====
password.addEventListener('focus', () => {
    seguirPonteiroMouse = false;
    let cont = 1;

    const coverFace =  setInterval(() => {
        monster.src = `img/cover/${cont}.png`;
        if( cont < 8){
            cont++;
        }else{
            clearInterval(coverFace);
        }
    }, 50);
})

password.addEventListener('blur', () => {
    seguirPonteiroMouse = false;
    let cont = 7;

    const discoverFace =  setInterval(() => {
        monster.src = `img/cover/${cont}.png`;
        if( cont > 1){
            cont--;
        }else{
            clearInterval(discoverFace);
        }
    }, 50);
})