## Neiborhood Map Project 

## The Website for review: [Thomson42's live website](https://thomson42.github.io/Map-Project-Beta/)

Hello and welcome to the best combination of politics and geography on the web. Here you will find all the information
nessary to get started in useing and understanding the code I have built here.

## Website layout and functionality
The general layout of the website is designed to give as much space as possible to the google maps DOM, where most of the
interactivity is.For you to use the sight just click on any one of the markers presented in the map and it will bounce
pulling up an infowindow along with it describing the location highliged in blue and outlined in black.

The hamberger button at the top left of the view pulls open a list of all Markers and a search bar. Type in any known 
district into the search bar and any similar districts should automaticly pop up as the only remaining options. Clicking 
any of the districts in the list will result in bringing up those matching dirstrict's marker's info window and close
the list view for better view of the infowindow itself. 

Finaly any viewport that is smaller than 600 pixels wide will adjust the totatl space the menu takes and raises the 
font size for easier viewing.

## Project build Changelog
* [First changes](https://github.com/Thomson42/Map-Project-Beta/commit/2ac442dae971ea3c99bb546efb1b7fc15291936a#diff-994c638c9246366a184723a4b41a0f3f)
  Built the groundwork for the KML layers to render properly. Requireing the building of a KMZ file to display all KML at once 
* [Second changes](https://github.com/Thomson42/Map-Project-Beta/commit/8834d5451e10217075d63325d2bf4283e6113b8d#diff-994c638c9246366a184723a4b41a0f3f)
  Added markers into each of the corosponding KML layers as to build off of thier funtionality and meet requirements.
* [Third changes](https://github.com/Thomson42/Map-Project-Beta/commit/813f9d966dbdd1fa5c340ba9deac9adeae58d4e6#diff-994c638c9246366a184723a4b41a0f3f)
  Started Info Window Testing and implemneting example HTML code into markers.
* [Forth changes](https://github.com/Thomson42/Map-Project-Beta/commit/ae36ead84350718bf74fa45d6187b4755700d364)
  Better DOM element manipulation added
* [Fith changes](https://github.com/Thomson42/Map-Project-Beta/commit/b907e4f976332a1bddf973264559dce33c4ba3e4#diff-994c638c9246366a184723a4b41a0f3f)
  Started trying too implement AJAX functionality with Wikipedia and manipulate the recived data.
* [Final changes](https://github.com/Thomson42/Map-Project-Beta/commit/b1cdc990226c5237690eca4a7a0b3ef81bbb1d4b)
  Incorperated functioning AJAX request into website and added mobile friendly options.
  
## Sources used
[Live search with knockout.js](http://opensoul.org/2011/06/23/live-search-with-knockoutjs/)
A modified version is used to implement the live search bar and list feature.


## Contact info
If you have any questions feel free to email me at [Christopher.thomson42@gmail.com](Christopher.thomson42@gmail.com)
