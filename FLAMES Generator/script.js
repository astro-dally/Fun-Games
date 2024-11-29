function calculateFlames() {
    const name1 = document.querySelector(".name1")
    const name2 = document.querySelector(".name2")

    //if both are empty
    if (name1.value === "" && name2.value === "") {
        document.querySelector(".result").innerHTML = "Please Enter Both Names🧐"
        return;
    }
    //the list of the flames
    let list = ["f", "l", "a", "m", "e", "s"]
    let length = name1.value.length + name2.value.length
    let a = 0
    while (list.length > 1) {
        let modulo = (length % list.length) - a
        if (modulo === 0) {
            a = 0
            list.splice(list.length - 1, 1)

        } else {
            a = list.length - modulo
            list.splice(modulo - 1, 1)
        }
        // console.log(list)
    }

    let result;
    console.log(list[0], length)
    switch (list[0]) {
        case "f":
            result = "Friends🫂"
            break
        case "l":
            result = "Love❤️"
            break
        case "a":
            result = "Affection💖"
            break
        case "m":
            result = "Marriage👰🤵"
            break
        case "e":
            result = "Enemies😈"
            break
        case "s":
            result = "Sister👧"
            break
        default:
            result = "No Results"
            break

    }
    document.querySelector(".result").innerHTML = result
}
document.querySelector(".Result").addEventListener("click", calculateFlames)