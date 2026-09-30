// Scroll to BMI section

function scrollToBMI() {

    document.getElementById("bmi").scrollIntoView({
        behavior: "smooth"
    });

}


// BMI Calculator

function calculateBMI() {

    let height = document.getElementById("height").value;

    let weight = document.getElementById("weight").value;

    let result = document.getElementById("bmiResult");


    if (height === "" || weight === "") {

        result.innerHTML =
            "⚠️ Please enter height and weight.";

        return;
    }


    height = Number(height);

    weight = Number(weight);


    if (height <= 0 || weight <= 0) {

        result.innerHTML =
            "⚠️ Please enter valid values.";

        return;
    }


    let heightMeter = height / 100;

    let bmi = weight / (heightMeter * heightMeter);

    bmi = bmi.toFixed(2);


    let category;


    if (bmi < 18.5) {

        category = "Underweight";

    } else if (bmi < 25) {

        category = "Normal Weight";

    } else if (bmi < 30) {

        category = "Overweight";

    } else {

        category = "Obese";

    }


    result.innerHTML =
        `Your BMI: <strong>${bmi}</strong><br>
         Category: <strong>${category}</strong>`;

}


// Workout

function startWorkout(level) {

    alert(
        "🔥 " + level +
        " workout started!\n\n" +
        "Stay consistent and keep going!"
    );

}


// Progress

let progressValue = 0;


function increaseProgress() {

    progressValue += 20;


    if (progressValue > 100) {

        progressValue = 100;

    }


    document.getElementById("progress").style.width =
        progressValue + "%";


    document.getElementById("progressText").innerText =
        progressValue + "% completed";


    if (progressValue === 100) {

        alert(
            "🎉 Congratulations!\n\n" +
            "You completed your daily workout goal!"
        );

    }

}