- Component URL
    https://designrevision.com/docs/shards-react/component/form-input

- Running method
    1. Download source code
    2. Go to source directory
    3. run 'npm install'
    4. run 'npm start'
        it will open http://localhost:3000

- Build web site for production
    1. npm run-script build
    2. go to "build" directory

- Source Code structure
    1. This project is made by React + bootstrap
    2. Entry Point 
        /src/index.js
    3. Add Left Menu
        /src/data/sidebar-nav-items.js
    4. Add Route for selected Menu
        /src/routes.js

    5. load component on righ right based on selected Route
        /src/views 

    6. Verificaton Page
        /src/views/Verification.js
        Step1: https://prnt.sc/1081yce - "Step1"
        Step2: https://prnt.sc/1081yyy - "Step2"
            QRCode: https://prnt.sc/1081zcd - "QRCodeComponent"
            Email: https://prnt.sc/1081zpe - "EmailComponent"
            SMS: https://prnt.sc/1082032 - "SMSComponent"
        CancelStep: https://prnt.sc/10820zc - "CancelStep"