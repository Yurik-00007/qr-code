# React + Vite

https://www.youtube.com/watch?v=NDPiaUfsnLA&t=1219s

 Создадим приложение с qr-code
1. Устанавливаем nodejs https://nodejs.org/en/download/prebuilt-installer
1.1. Я поставил I want the v20.15.1 (LTS) version of Node.js for Windows running x64
1.2. И нажать кнопку зеленую кнопку Download Node.js v20.15.1
2. Далее нудно будет создать папку где будет лежать моя программа D:\secondMonday\qrCode
3. Правой кнопкой мыши внутри папки и из контекстного меню выбираем Open in Terminal
4. Это банально открывает Windows PowerShell
5. Т.к. у меня стоит nvm. Для управления несколькими версиями Node.js на одной машине лучше всего использовать Node 
Version Manager (NVM). NVM позволяет легко устанавливать, переключаться и управлять различными версиями Node.js.
6. Я просмотрел список установленных nodejs -> nvm ls
7. И установил нужную мне версию-> nvm install 20.13.1
8. Выбрал версию-> nvm use 20.13-> текущая версия была установлена  
9. Проверяем версию ->  node -v -> v20.13.1
10. Далее нужно установить git->https://git-scm.com/download/win -> 64-bit Git for Windows Setup.
11. Чтобы удостовериться что dct установлено -> git -v ->git version 2.43.0.windows.1(версия не принципиальна она может быть любая)
12. Также понадобиться редактор кода WebStorm 2024.1.5 available
13. Будем пользоваться react для этого для него есть много библиотек, которые лежат в npm ->https://www.npmjs.com/
14. Возьмем одну из библиотек которая будет генерировать этот qr-code
15. Также понадобиться аккаунт на github->https://github.com/ -> с помощью него мы будем размещать наше приложения для всеобщего пользования
16. собирать проект будем при помощи vite->https://vitejs.dev/guide/
17. Нужно проверить версию npm для того чтобы команда сработала ->npm -v->10.5.2
18. Проект будет на простом js без typescript. Пишем команду и меняем ее -> npm create vite@latest my-vue-app -- --template vue
на ->npm create vite . -- --template react ->@latest-не нужно он и так установит последний версию, my-vue-app-имя 
ненужно потому что будем устанавливать в текущую папку(. текущая папка), vue-не нужно потому что будет react.
19. Теперь нужно установить node modules для этого нужно установить -> npm i
20. Эта команда установит все зависимости которые указаны в package.json а именно dependencies и devDependencies
21. Удалим крышечки у каждой зависимости чтобы в дальнейшем библиотека не обновлялась до новой версии
    "dependencies": { "react": "^18.3.1", "react-dom": "^18.3.1" }, -> нужно удалить ^. После чего рекомендуют удалить 
node_modules и заново установит npm i
22. Чтобы запустить скрипт ->npm run dev 
23. После чего в консоли будет указан адрес http://localhost:5173/ можно кликнуть по нему и наше приложение запуститься
24. Давайте удалим не нужные файлы из проекта: assets, App.css, App.jsx, index.css.
25. В файле main.jsx изменим 
ReactDOM.createRoot(document.getElementById('root')).render( <div> test </div>,)
26. Установим библиотеку -> npm install qrcode.react или npm i qrcode.react
27. Если нужна определенная версия пишем так npm install qrcode.react@3.1.0 или npm i qrcode.react@3.1.0
28. Для того чтобы удалить библиотеку npm uninstall qrcode.react или npm uni qrcode.react
29. для установки qr reader-a можно использовать эту библиотеку npm i @yudiel/react-qr-scanner@2.0.4
30. Найти можно ее вот так-> npm react qr code scaner ->в google.com


