//Checking a number tto be a palindrome or not 

function palindrome() {
    var a, b, no, temp = 0;
    no = 191;
    b = no;
    while (no > 0) {
        a = no % 10;
        no = parseInt(no / 10);
        temp = temp * 10 + a;
    }
    if (temp == b) {
        console.log("It is a Palindrome Number");
    }
    else {
        console.log("it is not a Palindrome Number");
    }
}

palindrome();