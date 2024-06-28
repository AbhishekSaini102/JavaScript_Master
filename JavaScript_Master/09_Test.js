function varTest() {
    if (true) {
        var x = 1;
    }
    console.log(x); // 1, because `var` is function scoped
}

function letTest() {
    if (true) {
        let y = 1;
    }
    console.log(y); // ReferenceError: y is not defined, because `let` is block scoped
}

varTest();
letTest();
