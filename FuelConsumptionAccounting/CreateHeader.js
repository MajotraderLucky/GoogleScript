function CreateHeaderForCalculator() {
    var ss = SpreadsheetApp.openById('Your ID from google sheets');
    var activeSheet = ss.getActiveSheet();

    //Создаём чекбокс запуска макроса 'CreateHeader'
    let indexRow = 2; //индекс строки
    let indexColumn = 7; //индекс столбика
    let cell = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(indexRow, indexColumn); //берем нашу   ячейку
    let rule = SpreadsheetApp.newDataValidation() //создаем чекбокс
        .requireCheckbox()
        .build();
    cell.setDataValidation(rule);

    activeSheet.getRange('A2:F2').setHorizontalAlignment('center'); //Центруем ячейки

    if(activeSheet.getRange('G2').isChecked()) {

        activeSheet.getRange('A1:M1').setHorizontalAlignment('center');
        activeSheet.getRange('A2:M2').setHorizontalAlignment('center'); //Центруем ячейки
        activeSheet.getRange('G3:I3').setHorizontalAlignment('center');
        activeSheet.getRange('G4:I4').setHorizontalAlignment('center');
        activeSheet.getRange('A1:H1').setBackground('#dfc9c9');
        activeSheet.getRange('G2:H2').setBackground('#dfc9c9');
        activeSheet.getRange('A2:B2').setBackground('#e8ffdc');
        activeSheet.getRange('E2').setBackground('#e8ffdc');
        activeSheet.getRange('I1:J1').setBackground('#dcd7f1');
        activeSheet.getRange('G3:G4').setBackground('#9beee8');
        activeSheet.getRange('H3:H4').setBackground('#eae471');
        activeSheet.getRange('A6:F6').setBackground('#e0dddd');
        activeSheet.getRange('G5:G6').setBackground('#d2eccd');
        activeSheet.getRange('I3:J3').setBackground('#cfc9c9')
        activeSheet.getRange('A1').setValue('Date');
        activeSheet.getRange('B1').setValue('DepartureKm');
        activeSheet.getRange('C1').setValue('ArrivalKm');
        activeSheet.getRange('D1').setValue('Fueled');
        activeSheet.getRange('E1').setValue('RestLastMonth');
        activeSheet.getRange('F1').setValue('NewRest');
        activeSheet.getRange('G1').setValue('CreateHeader');
        activeSheet.getRange('H1').setValue('StartCalculator');
        activeSheet.getRange('I1').setValue('SummerNorm');
        activeSheet.getRange('J1').setValue('WinterNorm');
        activeSheet.getRange('G3').setValue('AddLine');
        activeSheet.getRange('H3').setValue('DeletLine');
        activeSheet.getRange('G5').setValue('NumberLine');
        activeSheet.getRange('A2').setValue([[new Date()]]);

        //Создаём чекбокс запуска макроса 'SummerCalculator'
        let indexRow2 = 2; //индекс строки
        let indexColumn2 = 8; //индекс столбика
        let cell2 = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(indexRow2, indexColumn2); //берем нашу   ячейку
        let rule2 = SpreadsheetApp.newDataValidation() //создаем чекбокс
            .requireCheckbox()
            .build();
        cell2.setDataValidation(rule2);

        //Создаём шапку таблицы, куда будем записывать историю

        activeSheet.getRange('A5:J5').setHorizontalAlignment('center');
        activeSheet.getRange('A5:F5').setBackground('#ffafaf');
        activeSheet.getRange('A5').setValue('Date');
        activeSheet.getRange('B5').setValue('DepartureKm');
        activeSheet.getRange('C5').setValue('ArrivalKm');
        activeSheet.getRange('D5').setValue('Fueled');
        activeSheet.getRange('E5').setValue('RestLastMonth');
        activeSheet.getRange('F5').setValue('NewRest');

        //Создаём чекбокс добавления строки
        let indexRow3 = 4; //индекс строки
        let indexColumn3 = 7; //индекс столбика
        let cell3 = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(indexRow3, indexColumn3); //берем нашу   ячейку
        let rule3 = SpreadsheetApp.newDataValidation() //создаем чекбокс
            .requireCheckbox()
            .build();
        cell3.setDataValidation(rule3);

        //Создаём чекбокс удаления строки
        let indexRow4 = 4; //индекс строки
        let indexColumn4 = 8; //индекс столбика
        let cell4 = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(indexRow4, indexColumn4); //берем нашу   ячейку
        let rule4 = SpreadsheetApp.newDataValidation() //создаем чекбокс
            .requireCheckbox()
            .build();
        cell4.setDataValidation(rule4);

        //Создаём чекбокс летней нормы
        let indexRow5 = 3; //индекс строки
        let indexColumn5 = 9; //индекс столбика
        let cell5 = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(indexRow5, indexColumn5); //берем нашу   ячейку
        let rule5 = SpreadsheetApp.newDataValidation() //создаем чекбокс
            .requireCheckbox()
            .build();
        cell5.setDataValidation(rule5);

        //Создаём чекбокс зимней нормы
        let indexRow6 = 3; //индекс строки
        let indexColumn6 = 10; //индекс столбика
        let cell6 = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(indexRow6, indexColumn6); //берем нашу   ячейку
        let rule6 = SpreadsheetApp.newDataValidation() //создаем чекбокс
            .requireCheckbox()
            .build();
        cell6.setDataValidation(rule6);

        //Создаём чекбокс и поле значения для формулы пересчёта данных по заданному остатку топлива в конце месяца
        activeSheet.getRange('H5').setBackground('#ea8bd4');
        activeSheet.getRange('H6:H7').setBackground('#e7c5df');
        activeSheet.getRange('H5').setValue('Recount');

        let indexRow7 = 7; //индекс строки
        let indexColumn7 = 8; //индекс столбика
        let cell7 = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getRange(indexRow7, indexColumn7); //берем нашу   ячейку
        let rule7 = SpreadsheetApp.newDataValidation() //создаем чекбокс
            .requireCheckbox()
            .build();
        cell7.setDataValidation(rule7);
    }
}

