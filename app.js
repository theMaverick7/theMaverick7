const playBtn  = document.getElementById('playBtn');
const choices = document.getElementById('choices');

playBtn.addEventListener('click',function(){
    choices.classList.add('options');
    playBtn.style.pointerEvents = 'none';
    playBtn.classList.add('disabled');
    playBtn.style.boxShadow = 'none';
})































// const comp = ['rock','paper','scissors'];

// const play = () => {
//     const random = Math.floor(Math.random() * 3);
//     const user = prompt("Enter Your Choice:");
//     const display = check(user,random);
//     console.log(display);
// }

// const check = (user,random) => {

//     const case1 = user === 'rock' && comp[random] === 'paper';
//     const case2 = user === 'rock' && comp[random] === 'scissors';
//     const case3 = user === 'paper' && comp[random] === 'rock';
//     const case4 = user === 'paper' && comp[random] === 'scissors';
//     const case5 = user === 'scissors' && comp[random] === 'rock';
//     const case6 = user === 'scissors' && comp[random] === 'paper';

//     if(user === comp[random])
//     {
//         return 'DRAW';
//     }else if(case1)
//     {
//         return 'Computer Wins';
//     }else if(case2)
//     {
//         return 'You Win';
//     }else if(case3)
//     {
//         return 'You Win';
//     }else if(case4)
//     {
//         return 'Computer Wins';
//     }else if(case5)
//     {
//         return 'Computer Wins';
//     }else if(case6)
//     {
//         return 'You Win';
//     }
// }

// // for(let i = 1; i <=5; i++)
// // {
// //     play();
// // }
