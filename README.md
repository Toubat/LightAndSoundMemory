Name: Boquan Yin

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://en.wikipedia.org/wiki/Pitch_(music), https://www.w3schools.com/colors/colors_names.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

Overall, I feel like I didn't encounter some big challenge, and I'm quite enjoyable in it. The only challenge I would say is how to implement the game logic inside guess() function. I decided not looking at answer but implement it by myself. At first, I was quite confused, because the logic here is not traditional code we implement in college study (clicking run button, and the program start running until it finish). Instead, I also need to take user's action into consideration through timestamp, and handle variables dynamically. Besides, the concept of "turn" here is not quite clear for me since I thought one turn is the completion of the entire pattern. Also, this function requires us to plugin several helper functions that we already been defined (starGame(), winGame(), etc), which I thought was a little bit abstract. To figure out this issue, I analyzed condition tree carefully, and I realized that we only need to consider the result of a single action (one click of a particular button from user), and the outcomes of that action. Also, I split each different scenerio apart, considering each of them one by one. The logics become more clear after I going through each possible scenario in my head with corresponding changes to global variables. Being familarized with the logic, I coded it out quickly, added optional functionalities (number of allowed mistakes, more pitch) into guess() function. Finally, I tested it carefully by examing every scenerios when I click buttons. It was surprised that I successfully passed each cases without additional logical errors. Therefore, I realize that when building a game like this, one should always consider all possible cases beforehand, including available user actions and possible changes of variables. Finally, combining all these different options of changes to make a unbreakable logic.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

How are we supposed to build a dynamic webpage that includes requesting external data online, and store them into a database?

How we can actually set those colorful buttons movable so that user can drag them to whatever place they want?

How do we build a project involving multiple webpages and use javascript to nevigate to each page?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) YOUR ANSWER HERE]

The most time-consuming part is building additional feature. Specifically, adding more pitche