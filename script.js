const correctAns = ['A','B','D','D','B','B','A'];
let questions = document.querySelectorAll('.question');
let result = document.querySelector('.result')

let form = document.querySelector('.quiz-form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let score = 0;


    let userAns = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value,form.q6.value,form.q7.value];

    userAns.forEach(function(answer, index){
        if(answer === correctAns[index]){
            score = score + 1;
            questions[index].classList.add("correct")
        } else{
            questions[index].classList.add("wrong")
        }
    })

    result.classList.remove("hide");
    result.querySelector("p").innerText = `You Scored ${score}/7`
});