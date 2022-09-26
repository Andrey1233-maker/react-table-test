### О приложении
----------------

Приложение состоит из сервера и клиента, они расположены в соответсвующих папках в репозитории.

Приложения можно запустить с помощью docker-compose

### Сервер

Сервер запускается на порте 5000

Сервер имеет два роута

GET: /nodes
Возвращает записи, принимает
    - type: тип фильтрации(0(без), 1(меньше), 2(равно), 3(больше))\
    - field: поле, по которому происходит фильтрация(0(без), 1(название), 2(количество), 3(длина))
    - value: значение, по которому фильруется

Пример: GET: http://localhost:5000/nodes?type=1&field=2&value=1

POST: /nodes
Создаёт запись, и возвращает новую, принимает
    - title: название
    - count: количество
    - leight: длина
    - date: дата

Пример POST: http://localhost:5000/nodes
    body: {
        title: 'Запись',
        count: 1,
        leight: 12.1,
        date: '1/1/2001'
    }

### Клиент

Клиент запускается на порте 3000

Клиент состоит из единственной страницы, которая содержит фильр, таблицу и пагнацию, в случае ошибки выскакивает окно, сообщающее об этом.

### База данных

Запускается на порте 6432