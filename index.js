function saturdayFun(txt='roller-skate'){
    const str ='This Saturday, I want to'
    return str + ' ' + txt + '!' 
}
console.log(saturdayFun('bathe my dog'));

function mondayWork(act='go to the office'){
    const str = 'This Monday, I will'
    return str + ' ' + act + '.' 
}
console.log(mondayWork());



function wrapAdjective(ast){
    return function wrapper (adj){
        const str = 'You are'
        let ex = '!'
        return `${str} ${ast}${adj}${ast}${ex}`;
    }
    wrapper('a hard worker')
}
console.log(wrapAdjective('*'));








