function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`

}

function mondayWork(verb = "go to the office") {
    return `This Monday, I will ${verb}.`
}

let wrapAdjective = function(yo = "*") {
    return function(wavy = "special") {
        return `You are ${yo}${wavy}${yo}!`
    }
}