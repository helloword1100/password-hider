const pass=document.querySelector('#pass_id');
const hide=document.querySelector('#hide');


hide.addEventListener('click',function(){
    if(hide.classList.contains('fa-eye-slash'))
    {
        hide.classList.remove('fa-eye-slash')
        hide.classList.add('fa-eye')
       pass.type='text'
    }
    else if(hide.classList.contains('fa-eye'))
    {
        hide.classList.remove('fa-eye')
        hide.classList.add('fa-eye-slash')
        pass.type='password'
       
    }
})

const button=document.getElementById('button');
button.addEventListener('click',function(){
    if(button.classList.contains('fa-sun'))
    {
       document.body.classList.toggle('dark-mode')
       button.classList.remove('light-mode');
       button.classList.remove('fa-sun');
       button.classList.add('fa-moon');
    }
    else if(button.classList.contains('fa-moon'))
    {
        document.body.classList.toggle('dark-mode')
       button.classList.remove('dark-mode');
       button.classList.remove('fa-moon');
       button.classList.add('fa-sun');
    }
    
})