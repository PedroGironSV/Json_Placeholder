const shell = require('shelljs');

function executeTest(){
    reportPath = "./script/report/execution_report.html";
    shell.exec('python -m pytest -v --html='+ reportPath +' ./script/http_requests/JSON_Placeholder_testing.py');
    shell.exec('start '+ reportPath);
}

executeTest();