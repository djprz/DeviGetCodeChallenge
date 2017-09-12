# DeviGetCodeChallenge


Installation

npm install

Start stand alone server

$ java -jar -Dwebdriver.chrome.driver=node_modules/chromedriver/lib/chromedriver/chromedriver.exe ../selenium-server-standalone-3.0.1.jar

Run some feature file:

$ wdio --junit ./features/google_search.feature

And generate report xml with junit.