 require('style.css');
 
 const filesScripts = [
    'components/Display/index',
    'components/Button/index',
    'components/Calc/index',
    'App'
];



(function () {
    filesScripts.forEach(srcScript => {
        require(srcScript);
    })
})()


