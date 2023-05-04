function addStudent()
{ 
    var rollno=document.sample.rollno.value; 
    var name=document.sample.name.value;
    var bookcode=document.sample.bookcode.value; 
    var tr = document.createElement('tr');
    var timestamp = new Date().toLocaleString();
    
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    
    
    td1.innerHTML=rollno;
    td2.innerHTML=name;
    td3.innerHTML=bookcode;
    td4.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">'
    td5.innerHTML='<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn btn-primary">'
    td6.innerHTML = timestamp;

    
    document.getElementById("tbl").appendChild(tr);
}

function UpStud(stud){
     var rollno=document.sample.rollno.value; 
    var name=document.sample.name.value;
    var bookcode=document.sample.bookcode.value;  
    var s =stud.parentNode.parentNode;
    var tr =document.createElement('tr');
    var timestamp = new Date().toLocaleString();
    
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    
    td1.innerHTML='<input type="number" name="rollno1">';
    td2.innerHTML='<input type="text" name="name1">';
    td3.innerHTML='<input type="text" name="bookcode1">';
    td4.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">'
    td5.innerHTML='<input type="button" name="up" value="Update" onclick="addUpStud(this);" class="btn btn-primary">'
    td6.innerHTML = timestamp;

    document.getElementById("tbl").replaceChild(tr, s);
}

function addUpStud(stud){
    var rollno=document.sample.rollno1.value; 
    var name=document.sample.name1.value;
    var bookcode=document.sample.bookcode1.value; 
    var s = stud.parentNode.parentNode;
    var tr = document.createElement('tr');
    var timestamp = new Date().toLocaleString();
    
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var td4 = tr.appendChild(document.createElement('td'));
    var td5 = tr.appendChild(document.createElement('td'));
    var td6 = tr.appendChild(document.createElement('td'));
    
    td1.innerHTML=rollno;
    td2.innerHTML=name;
    td3.innerHTML=bookcode;
    td4.innerHTML='<input type="button" name="del" value="Delete" onclick="delStudent(this);" class="btn btn-danger">'
    td5.innerHTML='<input type="button" name="up" value="Update" onclick="UpStud(this);" class="btn btn-primary">'
    td6.innerHTML = timestamp; 
    
    document.getElementById("tbl").replaceChild(tr, s);
}

function delStudent(Stud){
    var s=Stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}
