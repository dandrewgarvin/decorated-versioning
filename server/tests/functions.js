module.exports = {
    fact: function(num){
        let newNum = 1;
        for (var i = num; i > 0; i--){
            newNum *= i
        }
        return newNum
    },
    addFact: function(num) {
        return num + 300
    },
    log: function(arg){
        return arg
    }
}