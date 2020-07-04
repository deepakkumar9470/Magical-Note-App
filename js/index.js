//addText ,addBtn
//console.log('Deepak Kumar');


showNotes();
let addBtn=document.getElementById('addBtn');
 addBtn.addEventListener('click',function(e){
   let addText=document.getElementById('addText');
    let notes=localStorage.getItem('notes');
    
    if (notes == null) {
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    
    notesObj.push(addText.value);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    addText.value='';
//    console.log(notesObj);
    
    showNotes();
});


function showNotes(){
    let notes=localStorage.getItem('notes');
    
    if (notes == null) {
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    let html='';
    notesObj.forEach(function(element,index){
       html+=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                       <div class="card-body">
                           <h5 class="card-title">Result Note ${index + 1}</h5>
                           <p class="card-text">${element}</p>
                <button id='${index}' onclick='deleteNote(this.id)' class="btn btn-danger">Delete Note</button>
                       </div>
                   </div>`;
    });
    let notesElm=document.getElementById('notes');
     if (notesObj.length !=0){
         notesElm.innerHTML=html;
     }else{
        notesElm.innerHTML=`Nothing to Show`; 
     }
   
    
}


//Deleting Notes

function deleteNote(index){
     let notes=localStorage.getItem('notes');
    
    if (notes == null) {
        notesObj=[];
    }else{
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes',JSON.stringify(notesObj));
    showNotes();
}


// searchText Section
//noteCard

let search=document.getElementById('searchText');
search.addEventListener('input',function(){
   let inputValue=search.value.toLowerCase();
    let noteCard=document.getElementsByClassName('noteCard');
    
    Array.from(noteCard).forEach(function(element){
        let cardText=element.getElementsByTagName('p')[0].innerText;
        
        if(cardText.includes(inputValue)){
            element.style.display='block';
        }else{
            element.style.display='none';
        }
    });
});




















