# Simple MemoryGame
## Objective
My objective on this project is to create a simple memory game in order
to familiarize myself with the JavaScript language and DOM. Before this
project I had no experience in web development. So during this project I
will allow myself to play around with Javascript and DOM.

## What should the program do
Display given amount of pairs of cards.

Count and display  the amount of guesses the user has done.

Count the users points.

Keep track of the time it took for the user to complete the game.

## Things I should do:
- Turn array/object containing images of the cards into a JSON file

## Learning material
https://eloquentjavascript.net/


# Learning Diary

## 9.1.2025
For a couple of days I have been now just playing around. I have learned the
basics of how to manipulate DOM objects. Also I have learned some of the 
basics of JavaScript.

Also I realized that although I have done the JYU Web publishing course, I seem to have forgotten mostly 
everything I have previously learned about HTML and CSS. However the good part seems to be that I am now much
more fluent at reading the documentation from the MDN Web docs which makes the refreshing of my
memory faster.

So far It seems to me that I am mostly just accumulating questions. But 
from now on I will do this project and update this learning diary after each session.

## 10.1.2025
Goal for today is to make cards in memory game appear in the game board in random order. 
I started this already little bit yesterday.

Would have been nice if JS had some sort of inbuilt method for shuffling arrays...Now it seems I have 
created some sort of infinite loop in my own shuffling algorithm :D

Tomorrow I have to learn how to do unit testing in JS. Debugging without any unit tests is such a pain in the butt...also
I have to learn how to properly debug these web apps in the browser or in the IDE.

Little bit frustrating day today.

Also found out that it is really helpful to think this sort of program in terms how game like this would play out in the
real world...maybe I could even do more abstraction like with using objects like dealer or player or deck or etc. Have to also
find out how JS supports objects.

## 11.1.2025
Learned basics of writing Jest unit tests. I will try to incorporate them into
the project and untangle the mess I made yesterday.

...I was able to install jest but untangling and rearranging more functions into the utils
directory will have to be done tomorrow.

## 12.1.2025
Moved functions to util and now source code is much clearer. However now I have
issues I cannot yet comprehend with how those util functions need to be imported so 
that the rest of the program can use them...time to comprehend that.

Apparently some of my code is in Node.JS syntax when it should be in
ES6 syntax...and somehow that is now messing also with my unittests.

Have to stop because baby is crying but tomorrow I have to start from learning about modules and how 
they are different in that ECMASCRIPT or in Node.js and what version I am actually using now.

## 21.1.2025
So there is a difference between CommonJS modules and ES6 modules. If you try to use them mixing and matching
that doesn't seem to work. Now my project uses only ES6 modules. And because of that the unit testing framework is now 
Mocha because that seems to support those ES6 modules more fluently.

However that still doesn't help the fact that the game logic makes no sense...