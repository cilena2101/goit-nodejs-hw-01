# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"     
url: https://monosnap.com/file/w4UPvSjibDrBqRCYQpukWjlTIqBYD3

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
url: https://monosnap.com/file/xOi8IHrdw7DzdQoNqEZuIge6ndui3x

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
url: https://monosnap.com/file/hdDxQ5LbvOZXbllT1vBFUVgHFP2dD2

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
url: https://monosnap.com/file/uZlPfO2SAKSt3XpUsRnDthFBYapiqN
