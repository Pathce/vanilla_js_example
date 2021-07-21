"use strict";

let ask = (question, yes, no) => {
    if (question) yes()
    else no();
}

ask(
    false,
    () => console.log('ok'),
    () => console.log('cancel')
);