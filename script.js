function function1() {
//    console.log('test');
    /* Sajt */

    let sajt = document.getElementById('inp1').value;
    if(sajt.includes('http') && sajt.includes('https') && sajt.includes(':') && sajt.includes('/') && sajt.includes('.')) {
        console.log('sajt je validan');
        /* Trud */
    
        let trud = document.getElementById('inp2').value;
        trud = parseInt(trud);
        if(trud<0) {
            alert('Moras uneti broj koji je veci od 0!');
        }
        console.log(trud);
    
        /* Funkcionalnost */
    
        let funkcionalnost = document.getElementById('inp3').value;
        funkcionalnost = parseInt(funkcionalnost);
        if(funkcionalnost<0) {
            alert('Moras uneti broj koji je veci od 0!');
        }
        console.log(funkcionalnost);
    
        /* Responsive */
    
        let responsive = document.getElementById('inp4').value;
        responsive = parseInt(responsive);
        if(responsive<0) {
            alert('Moras uneti broj koji je veci od 0!');
        }
        console.log(responsive);
        
        /* Dizajn (UX/UI) */
    
        let dizajn = document.getElementById('inp5').value;
        dizajn = parseInt(dizajn);
        if(dizajn<0) {
            alert('Moras uneti broj koji je veci od 0!');
        }
        console.log(dizajn);
        /* Source code */
    
        let code = document.getElementById('inp6').value;
        code = parseInt(code);
        if(code<0) {
            alert('Moras uneti broj koji je veci od 0!');
        }
        console.log(code);
        /* Skill */
    
        let skill = document.getElementById('inp7').value;
        skill = parseInt(skill);
        if(skill<0) {
            alert('Moras uneti broj koji je veci od 0!');
        }
        console.log(skill);
    
        let prosek = 0;
        let brojac = 6;
        let s = 0;
        s += (trud+responsive+funkcionalnost+dizajn+code+skill);
        prosek = s/brojac;
        if(prosek === NaN) {
            prosek = 0;
        }
        console.log(prosek);
        prosek = prosek.toFixed(1);
        let noviEl = document.createElement('div');
        noviEl.classList = 'novi-el-2';
        noviEl.innerHTML = `<br>Prosecna ocena je: ${prosek}`;
        noviEl.style = 'font-weight: bold; font-size: 20px; font-family: Arial';
        document.querySelector('.kalkulator').appendChild(noviEl);
    
    } else {
        sajt.style = 'border-color: red;';
        let novi_el1 = document.createElement('div');
        novi_el1.classList = 'novi-el-1';
        novi_el1.innerHTML = '<p>Link sajta nije validan</p>';
        novi_el1.style = 'color: white;';
        document.querySelector('.kalkulator').appendChild(novi_el1);
    }

}