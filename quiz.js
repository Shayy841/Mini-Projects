const questions = [
    {
        'que' : "Am I cute ?!?!?!?!?!",
        'a' : "No U",
        'b' : "Yes <3",
        'c' : "We both <3",
        'd' : "None :(",
        'correct' : 'a'
    },

    {
        'que' : "Patakhe on Diwali ??",
        'a' : "YES !!!!!!!",
        'b' : "NO because of pollution",
        'c' : "Don't care",
        'd' : "None :(",
        'correct' : 'a'
    },

    {
        'que' : "Are you a patakha ??",
        'a' : "Yes <3",
        'b' : "No U",
        'c' : "Yo girl a patakha",
        'd' : "This option is wrong",
        'correct' : 'b'
    }
]


let index = 0;
let total = questions.length
let correct = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInput = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total)
    {
        return endQuiz()
    }
    reset()
    const data = questions[index]
    quesBox.innerText = `${index+1})  ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a; 
    optionInput[1].nextElementSibling.innerText = data.b; 
    optionInput[2].nextElementSibling.innerText = data.c; 
    optionInput[3].nextElementSibling.innerText = data.d; 

}


const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct)
    {
        correct++;
    }
    else
    {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>
{
    let ans;
    optionInput.forEach ((input) =>
    {
        if (input.checked)
        {
          ans = input.value;
        }
    })
    return ans;
}

const reset = () =>
{
    optionInput.forEach(
        (input) => {
        input.checked = false;
        }
    )
}

const endQuiz = () =>
{
    document.getElementById("box").innerHTML = `
    <h3>Thank you for doing this for me <3</h3>
    <h2>${correct}/${total} are correct </h2>
    `
}
loadQuestion();






