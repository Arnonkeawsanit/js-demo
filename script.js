
// >80 A
// 70 - 79 B
// 60-69 C
// 50-59 D
// <50 F

function grade(score) {
    if (score > 100) {
        console.log("ERROR")
   
    }else if (score >= 80) {
        console.log("A")
    
    }else if (score >= 70) {
        console.log("B")
    
    }else if (score >= 60) {
        console.log("C") 
    
    }else if (score >= 50) {
        console.log("D")
    
    }else if (score >= 0 )  {
        console.log("F")
    
    }else if (score < 0) {
        console.log("ERROR")
    }

}

grade(69.5)
let foo = 71
grade(foo)
grade(-1)