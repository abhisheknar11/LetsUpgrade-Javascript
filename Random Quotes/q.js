let quotes=
["“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”  ―Marilyn Monroe",
"“Be yourself; everyone else is already taken.” ―Oscar Wilde",
"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ―Albert Einstein",
"“So many books, so little time.” ―Frank Zappa",
"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ―Bernard M. Baruch",
"“A room without books is like a body without a soul.” ―Marcus Tullius Cicero",
"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there\'s nobody listening,And live like it's heaven on earth.” ―William W. Purkey",
"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.” ―Dr. Seuss",
"“Be the change that you wish to see in the world.” ―Mahatma Gandhi",
"“In three words I can sum up everything I've learned about life: it goes on.” -Robert Frost",
"“You only live once, but if you do it right, once is enough.” ―Mae West",
"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.” ―J.K. Rowling, Harry Potter and the Goblet of Fire",
"“No one can make you feel inferior without your consent.” ―Eleanor Roosevelt, This is My Story",
"“If you tell the truth, you don't have to remember anything.” ―Mark Twain",
"“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” ―Maya Angelou",
"“A friend is someone who knows all about you and still loves you.” ―Elbert Hubbard",
"“Always forgive your enemies; nothing annoys them so much.” ―Oscar Wilde"
]

function newQ(){

    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('demo').innerText = quotes[randomNumber];
}

newQ();