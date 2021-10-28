function deleteLine() {
    var ss = SpreadsheetApp.openById('Your ID from google sheets');
    var activeSheet = ss.getActiveSheet();

    if (activeSheet.getRange('H4').isChecked()) {

        let numberLine = activeSheet.getRange('G6').getValue();//Номер строки, которая будет удалена

        if (numberLine !== 6) {

            activeSheet.getRange('A' + numberLine + ':' + 'F' + numberLine).clearContent();

        } else {
            Browser.msgBox('Вы пытаетесь удалить базовый диапазон!');
        }
    }
}
