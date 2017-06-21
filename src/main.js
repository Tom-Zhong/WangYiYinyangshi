function checkedBtn(i) {
    switch (i){
        case 0:
            document.getElementById('start').checked = true;
            break;
        case 1:
            document.getElementById('one').checked = true;
            break;
        case 2:
            document.getElementById('two').checked = true;
            break;
        case 3:
            document.getElementById('three').checked = true;
            break;
        case 4:
            document.getElementById('four').checked = true;
            break;
        default:
            break;
    }
}