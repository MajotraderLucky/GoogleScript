function summerCalculator() {
    var ss = SpreadsheetApp.openById('Your ID from google sheets');
    var activeSheet = ss.getActiveSheet();

    if (activeSheet.getRange('H2').isChecked()) {

        let numberLine = activeSheet.getRange('G6').getValue();//Ссылка на номер строки, с которой получим данные

        let departure = activeSheet.getRange('C' + numberLine).getValue();
        activeSheet.getRange('B2').setValue(departure);
        let restLastMonth = activeSheet.getRange('F' + numberLine).getValue();
        activeSheet.getRange('E2').setValue(restLastMonth);
        let arrival = activeSheet.getRange('C2').getValue();

        //Рассчитываем остаток топлива на конец месяца

        let currentNorm = 0;
        if (activeSheet.getRange('I3').isChecked()) {
            currentNorm = activeSheet.getRange('I2').getValue();
        } else if (activeSheet.getRange('J3').isChecked()) {
            currentNorm = activeSheet.getRange('J2').getValue();
        } else {
            Browser.msgBox('Некорректно выбрана сезонная норма расхода топлива!');
        }

        let = howTraveled = arrival - departure;//Пройденый путь
        let traveledNorm  = howTraveled * currentNorm;
        let fueled = activeSheet.getRange('D2').getValue();
        let newRest = (restLastMonth + fueled) - traveledNorm;// Итоговый остаток месяца
        activeSheet.getRange('F2').setValue(newRest);
        if (newRest < 60 && newRest > 5) {
            activeSheet.getRange('F2').setBackground('#c4eed3');
        } else if (newRest < 5 || newRest > 60) {
            activeSheet.getRange('F2').setBackground('#eeb5be');
        }
    }
}