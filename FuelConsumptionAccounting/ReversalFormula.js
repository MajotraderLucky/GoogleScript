function recount() {
    const ss = SpreadsheetApp.openById('Your ID from google sheets');
    const activeSheet = ss.getActiveSheet();

    if(activeSheet.getRange('H7').isChecked()) {
        let requiredRemainder = activeSheet.getRange('H6').getValue(); // Такой остаток необходимо получить
        let actualRemainder = activeSheet.getRange('F2').getValue();
        let departureKm = activeSheet.getRange('B2').getValue();
        let arrivalKm   = activeSheet.getRange('C2').getValue();
        let monthlyMileage = arrivalKm - departureKm;
        let currentNorm = 0;
        let countFuelRemainder = 0;
        let fueled = activeSheet.getRange('D2').getValue();
        let restLastMonth = activeSheet.getRange('E2').getValue();
        if (activeSheet.getRange('I3').isChecked()) {
            currentNorm = activeSheet.getRange('I2').getValue();
        } else if (activeSheet.getRange('J3').isChecked()) {
            currentNorm = activeSheet.getRange('J2').getValue();
        } else {
            Browser.msgBox('Некорректно выбрана сезонная норма расхода топлива!');
        }
        if (actualRemainder < requiredRemainder) {
            for(; countFuelRemainder < requiredRemainder;) {
                countFuelRemainder = (fueled + restLastMonth) - (monthlyMileage * currentNorm);
                --monthlyMileage;
            }
            activeSheet.getRange('C2').setValue(monthlyMileage + departureKm);
        } else if (actualRemainder > requiredRemainder) {
            for(; true;) {
                countFuelRemainder = (fueled + restLastMonth) - (monthlyMileage * currentNorm);
                ++monthlyMileage;
                if (countFuelRemainder <= requiredRemainder) {
                    break;
                }
            }
            activeSheet.getRange('C2').setValue(monthlyMileage + departureKm);
        }

    }
}
