

const toggle = document.getElementById('darkModeToggle');

if(toggle){

if(localStorage.getItem('darkMode') === 'enabled'){
    document.body.classList.add('dark-mode');
}

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
}

// Quiz Functions
function gradeQuiz(){
    let score = 0;
    let total = 5;
    let output = "";

    let q1 = document.getElementById("q1").value.toLowerCase();
    if(q1.includes("hypertext transfer protocol")){
        score++;
    }

    let q2 = document.querySelector('input[name="q2"]:checked');
    if(q2 && q2.value === "b") score++;

    let q3 = document.querySelector('input[name="q3"]:checked');
    if(q3 && q3.value === "a") score++;

    let q4 = document.querySelector('input[name="q4"]:checked');
    if(q4 && q4.value === "b") score++;

    let q5 = document.querySelectorAll('input[name="q5"]:checked');
    let answers = Array.from(q5).map(el => el.value);

    if(answers.includes("a") && answers.includes("b") && !answers.includes("c")){
        score++;
    }

    let pass = score >= 3 ? "PASS" : "FAIL";

    document.getElementById("results").innerHTML =
    `<h2>${pass}</h2>
     <h3>Score: ${score}/${total}</h3>`;
}

function resetQuiz(){
    document.getElementById("results").innerHTML = "";
}
