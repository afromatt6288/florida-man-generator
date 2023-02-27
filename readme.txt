There are a couple steps that need to be completed in order to view this project properly in the browser. 
This assumes you are running Node on your system... 

Step 1: Have the repository cloned to your system
Step 2: install JSON server on your machine. The below code installs it globally.
      npm install -g json-server
Step 3: run JSON server from within the florida-man-generator folder with the below code.
     json-server -- watch db.json
Step 4: open index.html within your browser through whatever means suits you best. I like to use Live Server...


This webpage is like a daily calendar for "Florida Man" encounters. 
One using this page can enter in a date, and will recieve an article of something a Florida man did, on that date, that was worthy enough to be in the news. 
It will likely not be something positive...

You can also click on the Dice next tothe submit button, and will get an article from a random date. 
To the left you will see a top ten list. That is populated based on the number of likes an article has. You can add likes to an article, and when you refresh the page you will see the new order of the top ten list. 

Due to the size of the database (and the fact this is a student project, not intended for public consumption) we did not populate every single entry with a unique article.
Instead, most of the 366 days have a generic entry

The list below will show the dates that have a non-generic article.
At this time, there are 110 fleshed out entries. 

JANUARY
id: 2 date: 01/02
id: 3 date: 01/03
id: 4 date: 01/04
id: 5 date: 01/05
id: 6 date: 01/06
id: 7 date: 01/07
id: 8 date: 01/08
id: 9 date: 01/09
id: 10 date: 01/10
id: 11 date: 01/11
id: 12 date: 01/12
id: 13 date: 01/13
id: 14 date: 01/14
id: 15 date: 01/15
id: 16 date: 01/16
id: 17 date: 01/17
id: 18 date: 01/18
id: 19 date: 01/19
id: 20 date: 01/20
id: 21 date: 01/21
id: 22 date: 01/22
id: 23 date: 01/23
id: 24 date: 01/24
id: 25 date: 01/25
id: 26 date: 01/26
id: 27 date: 01/27
id: 28 date: 01/28
id: 29 date: 01/29
id: 30 date: 01/30
id: 31 date: 01/31

FEBRUARY

MARCH
id: 62 date: 03/02
id: 82 date: 03/22

APRIL
id: 113 date: 04/22

MAY
id: 122 date: 05/01
id: 126 date: 05/05
id: 127 date: 05/06
id: 131 date: 05/10
id: 133 date: 05/12
id: 135 date: 05/14
id: 139 date: 05/18
id: 144 date: 05/23
id: 147 date: 05/26 

JUNE
id: 166 date: 06/14
id: 169 date: 06/17

JULY (all DONE!)
id: 183 date: 07/01
id: 184 date: 07/02
id: 185 date: 07/03
id: 186 date: 07/04
id: 187 date: 07/05
id: 188 date: 07/06
id: 189 date: 07/07
id: 190 date: 07/08
id: 191 date: 07/09
id: 192 date: 07/10
id: 193 date: 07/11
id: 194 date: 07/12
id: 195 date: 07/13
id: 196 date: 07/14
id: 197 date: 07/15
id: 198 date: 07/16
id: 199 date: 07/17
id: 200 date: 07/18
id: 201 date: 07/19
id: 202 date: 07/20
id: 203 date: 07/21
id: 204 date: 07/22
id: 205 date: 07/23
id: 206 date: 07/24
id: 207 date: 07/25
id: 208 date: 07/26
id: 209 date: 07/27
id: 210 date: 07/28
id: 211 date: 07/29
id: 212 date: 07/30
id: 213 date: 07/31

AUGUST
id: 214 date: 08/01
id: 215 date: 08/02
id: 216 date: 08/03
id: 217 date: 08/04
id: 218 date: 08/05
id: 219 date: 08/06
id: 220 date: 08/07
id: 221 date: 08/08
id: 234 date: 08/21

SEPTEMBER
id: 261 date: 09/17
id: 271 date: 09/27

OCTOBER
id: 300 date: 10/26

NOVEMBER
id: 309 date: 11/04
id: 310 date: 11/05
id: 311 date: 11/06
id: 313 date: 11/08
id: 315 date: 11/10
id: 318 date: 11/13
id: 320 date: 11/15
id: 325 date: 11/20
id: 328 date: 11/23
id: 330 date: 11/25
id: 331 date: 11/26 
id: 333 date: 11/28
id: 335 date: 11/30

DECEMBER
id: 338 date: 12/03
id: 342 date: 12/07
id: 343 date: 12/08
id: 345 date: 12/10
id: 352 date: 12/17
id: 353 date: 12/18
id: 354 date: 12/19
id: 358 date: 12/23
id: 360 date: 12/25
id: 361 date: 12/26
id: 366 date: 12/31