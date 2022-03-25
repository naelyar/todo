const todo = document.querySelectorAll('.text');
const input = document.querySelectorAll ('#input');
const todolist = document.querySelectorAll ('#input input');
const button = document.querySelectorAll('#button');



document.querySelector('#click').onclick = function(){
    if(document.querySelector('#index input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#index input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}

