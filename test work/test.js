var testBtn = document.getElementById("testBtn");
var nameInput = document.getElementById("initials");

// var testObject = {
//     name: "",
//     score: 0,
// };

// console.log(testObject);

// var testArray = [];

// testArray.push(testObject);

// console.log(testArray);

// testObject.name = "Alex";
// testObject.score = 12;


score = 0;

var objectArray =[]

testBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var nameText = nameInput.value;

    if (nameText === "") {
        return;
    }

    objectArray.push( {'name':nameText, 'score':score} );
    console.log(objectArray);

    storeNames();
});

function storeNames() {
    // stringify and set key in localstorage to names array
    localStorage.setItem("Array", JSON.stringify(objectArray));
}

objectArray.sort((a,b) => {
    return a.score - b.age;
})

objectArray.forEach((e) => {
    console.log(`${e.name} ${e.score}`);
});