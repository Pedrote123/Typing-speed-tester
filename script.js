var Timer = document.getElementById('Timer');
var TimerValue = 30;
var TimerInterval;
var StartButton = document.getElementById('StartButton');
var RestartButton = document.getElementById('RestartButton');
var TextToWrite = document.getElementById('TextToWrite');
var TextWritten = '';
var WritingSpace = document.getElementById('WritingSpace');

Timer.textContent += TimerValue;



StartButton.addEventListener('click', ()=>{
    if (TimerValue == 30){
        TimerInterval = setInterval(StartTimer, 1000);
    }
});

RestartButton.addEventListener('click', RestartTimer);


var Letter;
var UpdatedText = TextToWrite.textContent.split('');

//Must fix the matching of the input and the text, cause just detect if the inputed letter is equal, not if is the same text

WritingSpace.addEventListener('input', (e)=>{
    Letter = UpdatedText[0];
    Letter = String(Letter);

    console.log(e.data)

    if (e.data == Letter){
        UpdatedText.splice(0, 1);

        TextWritten += Letter;
    
        TextToWrite.innerHTML = `<span id="TextWritten">${TextWritten}</span>` + UpdatedText.join('');
    }
})



function StartTimer(){
    if (TimerValue == 0){
        clearInterval(TimerInterval);
    } else{
        TimerValue--;
        Timer.textContent = `Time: ${TimerValue}`;
    }
}

function RestartTimer(){
    clearInterval(TimerInterval);

    TimerValue = 30;

    Timer.textContent = 'Time: 30';
}