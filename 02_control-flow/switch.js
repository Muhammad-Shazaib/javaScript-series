// switch case
// switch (expression) {
//     case value1:
//         // code to be executed if expression is equal to value1
//         break;
//     case value2:
//         // code to be executed if expression is equal to value2
//         break;
//     default:
//         // code to be executed if none of the above cases match
//         break;
// }

let obtainedMarks = +prompt('Enter your obtained marks')
let totalMarks = +prompt('Enter total marks')
let percentage = (obtainedMarks / totalMarks) * 100

switch (true) {
    case (percentage >= 90 && percentage <= 100):
        alert('You got A1 Congrats')
        break;
    case (percentage >= 80 && percentage <= 90):
        alert('You got A+ Congrats')
        break;
    case (percentage >= 70 && percentage <= 80):
        alert('You got A Congrats')
        break;
    case (percentage >= 60 && percentage <= 70):
        alert('You got B Congrats')
        break;
    case (percentage >= 50 && percentage <= 60):
        alert('You got C Congrats')
        break;
    case (percentage >= 40 && percentage <= 50):
        alert('You got D Congrats')
        break;
    case (percentage >= 33 && percentage <= 40):
        alert('You got E Congrats')
        break;
    case (percentage >= 0 && percentage <= 33):
        alert('You are Fail')
        break;

    default:
        alert('none of the above');
}