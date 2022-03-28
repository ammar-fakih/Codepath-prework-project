# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Ammar Fakih

Time spent: 6 hours spent in total

Link to project: https://glitch.com/edit/#!/uttermost-unique-reminder

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* [X] Number of mistakes and rounds are shown on the screen.

## Video Walkthrough (GIF)


![Video Walkthrough 1](https://media.giphy.com/media/WWNciXT92ULusoh6wL/giphy.gif)  
After three mistakes, you lose. Notice that the mistakes counter updates.  

![Video Walkthrough 2](https://media.giphy.com/media/DQPZUM1z9ojeDP58QL/giphy.gif)  
If the timer runs out, you lose  
  
![Video Walkthrough 3](https://media.giphy.com/media/mZOp1AQ81H0L7gyaY0/giphy.gif)  
The speed quickens as the round progresses or after a mistake.


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
* W3 Schools: https://www.w3schools.com/css//css_font_websafe.asp
              https://www.w3schools.com/js/js_timing.asp
* Mozilla Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
* LICEcap: https://www.cockos.com/licecap/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)  
It was challenging for me to set up the timer that shows on the screen. I tried to use the setTimeout function but I realized that I needed a way to show the seconds. I searched the web and a found a page on W3 Schools that shows how to use the setInterval function. This is helpful because you can pass a callback function as a paramater and it will be called for each interval, until the clearInterval function is called. The second challenge was finding where to put the call to setInterval and clearInterval. My first intuition was to put the call to setInterval in the playCluesSequence function, which works because I want the timer to be set each time the buttons light up. However, I ran into bugs when I put the call to clearInterval in the guess function because I was not calling clearInterval for every case where setInterval was called and I ended up getting multiple "You lose" messages in a row because multiple timers were reaching 0. I realized that I can simple call clearInterval right before calling setInterval, as well as in the stop game function. This way, I make sure that before a new timer is set, the old one has been cleared. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)  
After completing this submission, I am curious about how I can automate the markdown and the styling of the page. For example, the buttons in the html file were made by manually duplicating a line. If I were to create even more buttons, it would be very tedious to change the text and id of each one. The styling in the css file would also be tedious to change. I wonder if I can automate this process with javascript. Secondly, since I have experience with React.js, I wonder if there is a benefit to developing with vanilla javascript. I am sure that it very useful to understand how the underlying language works before using a library or framework but beyond that, I wonder if there may be benefits to using vanilla javascript. For example, in my computer systems class, we are learning about how the C language is still used today partly because it is very low-level and gives a lot of power to the developer that higher-level languages do not.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)  
If I had a few more hours to work, I would first like to add more comments so that if someone else works on the code, they can quickly how the code works. For example, I would like to add comments to the guess function that describes the conditionals. Next, I would like to add a feature that stops the player from clicking the buttons while the clue sequence is playing. I would also like to tweak the timer so that it only starts after all the clues have finished playing. I think I might do this by nesting the call to setInterval inside a call to setTimeout. I would also like to give the player the ability to choose the difficulty, which might change how many buttons show on the screen before the game starts, how fast the notes play, and how much time the player has to play their turn. 


## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1qIZWZgZesa5DS5e2_jn_r1VP8Q4WI_Sf/view?usp=sharing)


## License

    Copyright Ammar Fakih

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
