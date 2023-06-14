function pangrams(s) {
    // Write your code here
if (new Set(s.toLowerCase().replace(/ /g, '')).size === 26) {
    return "pangram"
} else {
    return "not pangram"
}
}