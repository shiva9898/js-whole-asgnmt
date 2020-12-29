function truncate(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
}

console.log(truncate('the quick brown fox jump over the lazy dog', 4));
