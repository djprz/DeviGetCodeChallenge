DeviGet CodeChallenge
===================


Installation
------------

* On ```DeviGetCodeChallenge``` folder install all

    ```npm install```

Run some feature file
---------------------

On ```DeviGetCodeChallenge``` folder

* Start stand alone server 

    ```$ java -jar -Dwebdriver.chrome.driver=node_modules/chromedriver/lib/chromedriver/chromedriver.exe ../selenium-server-standalone-3.0.1.jar```

* Open another console and run all tests:

    ```$ wdio ```


Reporters
---------

The framework generates xml and customized html report with junit-viewer.
There are xml and html reports in folder ./reports
Screen shots are saved in ./errorShots


Problems
---------

Customizing the report I found out that there's no a clean manner of generate the html report using the cucumber json output format.
I found some workarounds to do that but the designer of this framework insists that is not necessary.
Refence: https://github.com/webdriverio/wdio-cucumber-framework/issues/6 .

So if I had to create a customized report I think one of the options is to use Allure but the html output is not displayed in Chrome browser and the features are not recognize as other suite maybe it's a miss configuration in customized.report.js .
Finally, I decided to use the generated xml files by junit and then use them to generate the html report with junit-viewer plugin.

Although I wrote the tests with Gherkin/Cucumber is not fancy to use "wdio-cucumber-reporter" because the framework runs tests in parallel and the steps appears mixed from one scenario to other.

This solution took more time than I expected but it is because I'm a full time employee and I had some personal issues to attend last weekend.

Thanks for taking into account I did this task enjoying what I like doing...testing automation!
