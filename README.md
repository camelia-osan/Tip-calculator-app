# Tip-calculator-app
HTML, CSS and JS web project

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).


### Description
The *Tip calculator app* takes three inputs: the bill/total price for all people, the tip percentage that a person wants to leave, and the number of people that the bill is split for. Then, it calculates the tip amount based on the selected tip option, and the resulting value is added to the split total price for the number of people.


### Tools
For this project, I wrote by hand both the structure and the functionality, using *HTML5* and *CSS3* to create the calculator’s body and style it and *JavaScript* to ensure dynamics.



-	HTML

The whole content is fitted in a big container that wraps two other smaller containers – one that contains the logo and one that contains the calculator’s body.
The calculator is divided in two sides: the bill (left side) and the results (right side). 
The bill side has three columns (divs) that represent the user’s inputs: the bill value, the tip amount and the number of people. The tip amount choices (except for the custom choice) are buttons and the other input fields are number text boxes, including the custom tip choice.
The results side has two columns (divs) – one that represents the tip amount calculated for each person and one that represent the total price each person has to pay.

-	CSS

The main container and calculator contents were styled using *Flexbox*. The tip options (the buttons) were styled using *Grid*. 
I used relative measurement units for better screen compatibility and different designs and cursors for interaction effects.
The screen compatibility for phones, tablets and large screens, portrait and landscape is covered by the media queries.

-	JS

The actions were triggered by interacting with inputs due to *addEventListener*. I made a function that ensures the button styling stays on while the user made their selection, even if the button goes out of focus.


I made a function that checks if the inputs are 0, in which case I made the default values for tip amount and total be set to $0.00 and not furthermore calculated. Also, if the user inputs 0, a warning text appears.


The values for the tip amount and total per person are calculated with the following formulas:

$tip amount per person = (bill * (tip / 100)) / number of people$

$total per person = (bill / number of people) + tip amount per person$

, using each user input value and rounding it up to two decimals. The results change accordingly, even if just one of the inputs is modified.


The reset button remains disabled until all inputs are filled or selected.


Also, I added some specific styling in different circumstances with *JS*, for example the inputs border becomes red when the user inputs $0$ and buttons have different colors based on their state.
