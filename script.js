const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let sWords = ['python', 'javascript', 'c++', 'php','java', 'html', 'reactjs', 'angular', 'swift', 'android','mysql','sql','pearl','nodejs','typscript','mongodb','kotlin','ruby','nosql'];
let newWords='';
let ranWords ="";

const createsNewWords = () => {
    let ranNum= Math.floor(Math.random( )*sWords.length);
    let newTempSwords = sWords[ranNum];
    return newTempSwords;
}

const scrambleWords = (arr) => {
    for(let i = arr.length-1;i>0;i--){
        let temp=arr[i];
        let j = Math.floor(Math.random()*(i+1)); 
        arr[i]=arr[j];
        arr[j]=temp;
    }
    return arr;
}

btn.addEventListener('click',function(){
    if(!play){
        play=true;
        btn.innerHTML = 'Guess';
        guess.classList.toggle('hidden');
        newWords= createsNewWords();
        ranWords= scrambleWords(newWords.split("")).join("");
        msg.innerHTML=`Guess the Word: ${ranWords}`;
    }

    else {
        let inputword= guess.value;
        if(inputword === newWords){
            // console.log('correct');
            play=false;
            msg.innerHTML = `Awesome It's correct. it is ${newWords}`;
            btn.innerHTML = 'Start Again';
            guess.classList.toggle('hidden');
            guess.value = "";
        }
        else {
            // console.log('incorrect');
            msg.innerHTML = `Sorry it's incorrect, try again: ${ranWords}`;
        }
    }
});
