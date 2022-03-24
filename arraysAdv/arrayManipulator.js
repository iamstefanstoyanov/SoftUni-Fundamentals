function arrayManipulator(main, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "print") {
            console.log("[ " + main.join(", ") + " ]" );
            break;
        }
        let splitted = arr[i].split(" ")
        let event = splitted.shift();
        if (event === "add") {
            let index = Number(splitted[0]);
            let element = Number(splitted[1]);
            main.splice(index, 0, element);
        } else if (event === "addMany") {
            let index = Number(splitted.shift());
            let element = splitted.map(Number);
            for (let i = 0; i < element.length; i++) {
                main.splice(index, 0, element[i]);
                index++
            }
        } else if (event === 'contains') {
            let element = Number(splitted[0]);
            if (main.includes(element)) {
                console.log(main.indexOf(element))
            } else {
                console.log('-1')
            }
        } else if (event === 'remove') {
            let index = Number(splitted[0]);
            main.splice(index, 1);
        }else if(event === 'shift'){
            let position = Number(splitted[0]);
            for(let i = 0; i < position; i++) {
                let curEl = main.shift();
                main.push(curEl);
            }
        }else if(event === 'sumPairs'){
            for (let i = 0; i < main.length - 1; i++) {
                for (let j = i + 1; j < main.length; j++) {
                    main[i] = main[i] + main[i+1];
                    main.splice(i+1,1);
                    break;
                }
            }
        }
    }
}
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])
arrayManipulator([2, 2, 4, 2, 4],["add 1 4", "sumPairs", "print"])
arrayManipulator([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print'])
arrayManipulator([1, 2, 3, 4, 5],['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])
