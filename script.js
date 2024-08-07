var Timer = document.getElementById('Timer');
var TimerValue = 30;
var TimerInterval;
var StartButton = document.getElementById('StartButton');
var RestartButton = document.getElementById('RestartButton');
var TextToWrite = document.getElementById('TextToWrite');
var TextWritten = '';
var WritingSpace = document.getElementById('WritingSpace');
var Result = document.getElementById('Result');
var Letter;
var UpdatedText = TextToWrite.textContent.split('');
var InputText = '';

WritingSpace.setAttribute('readOnly', true);

Timer.textContent += TimerValue;



StartButton.addEventListener('click', ()=>{
    if (TimerValue == 30){
        TimerInterval = setInterval(StartTimer, 1000);

        WritingSpace.removeAttribute('readOnly');
        WritingSpace.addEventListener('input', TextWriting);
    }
});

RestartButton.addEventListener('click', RestartTimer);

function StartTimer(){
    if (TimerValue == 0){
        clearInterval(TimerInterval);

        WritingSpace.setAttribute('readOnly', true);
        WritingSpace.removeEventListener('input', TextWriting);

        Result.textContent = `${(TextWritten.length / 30).toFixed(2)} keys per second`;

    } else{
        TimerValue--;
        Timer.textContent = `Time: ${TimerValue}`;
    }
}

function RestartTimer(){
    clearInterval(TimerInterval);

    TimerValue = 30;

    Timer.textContent = 'Time: 30';

    WritingSpace.setAttribute('readOnly', true);
    WritingSpace.removeEventListener('input', TextWriting);
    WritingSpace.value = '';
    
    Result.textContent = '';

    TextToWrite.textContent = TextToWrite.textContent;

    TextWritten = '';
    InputText = '';
    UpdatedText = TextToWrite.textContent.split('');
}


function TextWriting(){
    Letter = UpdatedText[0];
    Letter = String(Letter);

    var LetterMatching = function(){
        if (event.data == Letter && TextWritten == InputText){
            UpdatedText.splice(0, 1);
    
            TextWritten += Letter;
    
            TextToWrite.innerHTML = `<span id="TextWritten">${TextWritten}</span>` + UpdatedText.join('');
        }
    };

    LetterMatching();

    var LettersInputSoFar = function(){
        if (event.inputType == 'deleteContentBackward'){
            InputText = InputText.split('');
            InputText.splice(InputText.length - 1, 1);
            InputText = InputText.join('')
        } else{
            InputText += event.data;
        }
    };

    LettersInputSoFar();
}

