function lineBreak() {
    var ss = SpreadsheetApp.openById('Your ID from google sheets');
    var activeSheet = ss.getActiveSheet();

    if (activeSheet.getRange('G4').isChecked()) {

        let numberLine = activeSheet.getRange('G6').getValue();//Номер строки, куда будут вноситься данные

        if (numberLine !== 6) {

            let date = activeSheet.getRange('A2').getValue();
            activeSheet.getRange('A' + numberLine).setValue(date);
            activeSheet.getRange('A' + numberLine + ':' + 'F' + numberLine).setHorizontalAlignment('center');
            let departureKm = activeSheet.getRange('B2').getValue();
            activeSheet.getRange('B' + numberLine).setValue(departureKm);
            let arrivalKm = activeSheet.getRange('C2').getValue();
            activeSheet.getRange('C' + numberLine).setValue(arrivalKm);
            let fueled = activeSheet.getRange('D2').getValue();
            activeSheet.getRange('D' + numberLine).setValue(fueled);
            let restLastMonth = activeSheet.getRange('E2').getValue();
            activeSheet.getRange('E' + numberLine).setValue(restLastMonth);
            let newRest = activeSheet.getRange('F2').getValue();
            activeSheet.getRange('F' + numberLine).setValue(newRest);
            activeSheet.getRange('A' + numberLine + ':' + 'F' + numberLine).setBackground('#e0dddd');
        } else {
            Browser.msgBox('Нельзя изменять базовую строку!');
        }
    }
}
