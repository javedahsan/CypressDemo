# CypressDemo Project

## Prerequisite
* Make sure node js is installed.
* Cypress is installed.
* VS code is installed
* Setup Cypress cloud for dashboard if required
* download or clone the project from github

    * https://github.com/javedahsan/CypressDemo.git
## How to Start/run Application:
* Start VScode and import project
  
## Start Executing Testcases:
* open new terminal session or execute the following command from Visual Studio code terminal
        * cd <project location >

* open new terminal session 
        * run the application in following mode:
          * start Test runner
              * ./node_modules/.bin/cypress
                
        * run from command line
              * headliess mode: ./node_modules/.bin/cypress run  --headless
              * or using browsers (Chrome, firefox, Electron and edge)
                  * ./node_modules/.bin/cypress run  --browser chrome
                  * ./node_modules/.bin/cypress run  --browser firefox
                  * ./node_modules/.bin/cypress run  --browser edge
              * or using cyress cloud
                  * npx cypress run --record --key fd9ffbe2-3ebe-49a4-9092-7347bb819599 --spec cypress/integration/examples/*js --headed --browser chrome
* Review the Test Result Report:
    * Test reports are available under folder "reports"
    * View Test report using browser

        file:///<project path>/reports/index.html
      cypress cloud link: https://cloud.cypress.io/projects/b69ohr/runs/6
