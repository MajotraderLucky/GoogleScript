# GoogleScript
The program calculates the fuel consumption

Программа помогает рассчитать остаток топлива в коммерческом автомобиле на конец дня.
"Реверс-формула помогает рассчитать километраж при произвольно заданном остатке топлива.
Например, при перерасходе топлива или при его экономии остаток топлива может принимать
значения превосходящие размер бензобака транспортного средства или уходить в область 
отрицательных значений. Для привидения отчётности в путевом листе к приемлемым значениям
необходимо указать требуемое значение остатка топлива в поле 'recount', и программа
подставит подходящий для произвольно заданного пользователем остатка текущий километраж.

Для расчёта требуются следующие данные:
1- Киллометраж конца прошлого периода.
2- Текущий километраж.
3- Остаток топлива конца прошлого периода.
4- Количество заправленного топлива.
5- Значение летней и зимней норм расхода топлива установленных на предприятии.
6 - Номер строки, над которой будет проводиться операция присваивания значений,
удаления, сохранения строки данных, рассчитанных калькулятором.

Из любого пустого открытого документа Google sheets вызывается редактор скриптов из 
пункта меню "Инструменты". Редактор необходимо переименовать и последовательно создать
пять функций, в которые необходимо вставить код из представленных файлов. В этих функциях
необходимо подставить в поле "preadsheetApp.openById('Your ID from google sheets')" ID
вашего документа 'sheets'.

Сначала необходимо запустить функцию 'CreateHeaders', чтобы создать заголовки колонок,
чекбоксы и раскрасить таблицу. Затем необходимо заполнить незакрашенные поля под 
названными колонками собственными данными. Поставить в поле 'numberline' номер
строки откуда требуется получить значения для рачётов. Не забудьте указать
летнюю и зимнюю норму расхода топлива на предприятии! Затем ставите галочку в 
чекбокс 'StartCalculator', чтобы программа произвела расчёт остатка топлива.

Если остаток превышает размер бензобака (60л) или меньше нуля, вы можете указать
желаемый остаток в графе 'recount' и поставить галочку в чекбокс под ней. 
Текущий километраж будет подобран под значение заданного вручную остатка.
Снова поставьте галочку в чекбоксе 'StartCalculator' и программа пересчитает результат
с новым остатком топлива.

Полученные данные можно сохранить в строке, номер которой необходимо указать в поле
'NumberLine'. Любая сохранённая строка кроме базовой может быть удалена с помощью
функции 'Delete line'. Будет удалена строка, номер которой был указан в поле 'NumberLine'.

Вопросы прошу задавать в телеграмме @majotrading или по почте: majo78@mail.ru
Могу произвести любую доработку алгоритма или создать новые макросы под ваши нужды.

