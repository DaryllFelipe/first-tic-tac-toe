let emailCheck;
let titleCreated = false;
let storedUser = JSON.parse(localStorage.getItem('userArray'));
let userArray = storedUser;
let activeFirstName;
let activeLastName;
let activeEmail;
let activePassword;
let toDoTitle;
let savedTitle = JSON.parse(localStorage.getItem('savedTitleArray'));
let titleArray = savedTitle;
let savedList = JSON.parse(localStorage.getItem('savedList'));
let listArray = savedList;
let activeTitle;
const mainContainer = document.getElementById('mainContainer');
const actveLink = mainContainer.querySelectorAll('a');
const manageToDo = document.getElementById('manageToDo');
const landingPage = document.getElementById("landingPage");
const signUpPage = document.getElementById("signUp");
const logInPage = document.getElementById("logIn");
const signUpForm = document.getElementById("signUpForm");
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const terms = document.getElementById('terms');
const dashboard = document.getElementById('dashboard');
const settings = document.getElementById('settings');
const accountFirstName = document.getElementById('accountFirstName');
const accountLastName = document.getElementById('accountLastName');
const accountEmail = document.getElementById('accountEmail');
const accountPass = document.getElementById('accountPass');
const btnsubmitAccount = document.getElementById('btnsubmitAccount');
const btnSignUp = document.getElementById("btnSignUp");
const btnLogIn = document.getElementById("btnLogIn");
const btnSubmit = document.getElementById('btnsubmit');
const logInForm = document.getElementById('logInForm');
const btnLogInForm = document.getElementById('btnLogInForm');
const logInEmail = document.getElementById('logInEmail');
const logInPassword = document.getElementById('logInPassword');
const settingsError = document.getElementById('settingsError');
const toDoList = document.getElementById('toDoList');
const btnToDos = document.getElementById('btnToDos');
const toDoNameTitle = document.getElementById('toDoNameTitle');
const yourLists = document.getElementById('yourLists');
const saveName = document.getElementById('saveName');
const listToBeSave = document.getElementById('listToBeSave');
const nameError = document.getElementById('nameError');
const listError = document.getElementById('listError');
const saveTxt = document.getElementById('saveTxt');
const toDoSubmit = document.getElementById('toDoSubmit');
const dashList = document.getElementById('dashList');
toDoSubmit.addEventListener('click', addList);
btnToDos.addEventListener('click', createToDos);
terms.addEventListener('click', termsClick);
btnSignUp.addEventListener("click", signUpPageClick);
btnLogIn.addEventListener("click", logInPageClick);
btnSubmit.addEventListener('click', submit);
btnSubmit.addEventListener('click', ValidateEmail);
btnLogInForm.addEventListener('click', logIn);
btnsubmitAccount.addEventListener('click', saveEdit);
saveName.addEventListener('click', addToDoTitle);

console.log(listArray);
document.body.addEventListener("click", function(e) {
	// e.target was the clicked element
	if(e.target && e.target.nodeName == "A") {
        let linkId = event.target.getAttribute('href');
        linkId = linkId.slice(1,linkId.length);
        for (const x of listArray) {
            if (x.email === accountEmail){
                let clickTodo = document.getElementById(linkId);
                clickTodo.style.display = 'block';
            }
        }
	}
});
function addList(event){
    event.preventDefault();
    if(!titleCreated){
        listError.innerText = 'Enter your ToDo Title first!';
        listError.style.color = 'red';
    }
    else if(yourLists.value === ''){
        listError.innerText = 'Enter your ToDo!';
        listError.style.color = 'red';
    }
    else{
        listArray.push({
            toDoName: toDoTitle,
            email: activeEmail,
            toDo: yourLists.value,
            done: false
        });
        let listP = document.createElement('p');
        listP.innerText = yourLists.value;
        listToBeSave.appendChild(listP);
        console.log(listArray);
        return listArray;
    }
}
function saveToDo(event){
    event.preventDefault();
    if(!titleCreated){
        saveTxt.innerText = "Enter first your ToDo's Title and your ToDo's lists ";
        saveTxt.style.color = 'red';
    }else{
        localStorage.setItem('savedTitleArray' , JSON.stringify(titleArray));
        localStorage.setItem('savedList' , JSON.stringify(listArray));
        activeTitle = document.createElement('a');
        let link = document.createTextNode(searchTitle.toDoTitle);
        activeTitle.appendChild(link);
        activeTitle.setAttribute('href' , '#'+ toDoTitle)
        dashList.appendChild(activeTitle);
        enabledPage(toDoList,signUpPage,settings,landingPage,logInPage,dashboard);
    }

}
function addToDoTitle(event){
    event.preventDefault();
    for (const searchTitle of titleArray) {
        if((searchTitle.toDoName === toDoNameTitle.value ) && (searchTitle.email === activeEmail)){
            console.log('active');
            nameError.innerText = 'ToDo Name already exist!';
            nameError.style.color = 'red';
        }
        else if (toDoNameTitle.value === ""){
            nameError.innerText = 'Enter the NAME of the ToDo!';
            nameError.style.color = 'red';
        }else if((searchTitle.toDoName !== toDoNameTitle.value ) && (searchTitle.email === activeEmail)){
            let nameHeader = document.createElement('h1');
            nameError.innerText = '';
            nameHeader.innerText = toDoNameTitle.value;
            listToBeSave.appendChild(nameHeader);
            titleCreated = true;
            saveName.disabled = true;
            titleArray.push({
                toDoName: toDoNameTitle.value,
                email: activeEmail
            });
            toDoTitle = toDoNameTitle.value;
            console.log(titleArray);
            return {
                titleArray,
            };
        }
    }

}
function enabledPage(page1,page2,page3,page4,page5,page6,){
    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = "none";
    page4.style.display = 'none';
    page5.style.display = 'none';
    page6.style.display = "block";
}
function createToDos(){
    console.log(titleArray);
    enabledPage(dashboard,signUpPage,settings,landingPage,logInPage,toDoList);
}
function saveEdit(event){
    event.preventDefault();
    ValidateEmail(accountEmail);
    if((accountFirstName.value === '') || (accountLastName.value === '') || (accountEmail.value === '') || (accountPass.value === '')){
        settingsError.innerText = "Fill up all the form!";
        settingsError.style.color = 'red';
    }
    else if(!emailCheck){
        settingsError.innerText = "You have entered an invalid email address!";
        settingsError.style.color = 'red';
    }
    else{
        for (const searchUser of userArray) {
            if(searchUser.email === activeEmail){
                searchUser.firstName = accountFirstName.value;
                searchUser.lastName = accountLastName.value;
                searchUser.email = accountEmail.value;
                searchUser.password = accountPass.value;
                activeFirstName = searchUser.firstName;
                activeLastName = searchUser.lastName;
                activeEmail = searchUser.email;
                activePassword = searchUser.password;
                localStorage.setItem('userArray' , JSON.stringify(userArray) );
                alert('Successfully Edited');
                enabledPage(landingPage,signUpPage,settings,toDoList,logInPage,dashboard);

            }
        }

    }
}
function logOut(){
    enabledPage(dashboard,signUpPage,settings,toDoList,logInPage,landingPage);
}
function accountSettigs(){
    accountFirstName.value = activeFirstName;
    accountLastName.value = activeLastName;
    accountEmail.value = activeEmail;
    accountPass.value = activePassword;
    enabledPage(dashboard,signUpPage,landingPage,toDoList,logInPage,settings);
}
function signUpPageClick(){
    enabledPage(dashboard,settings,landingPage,toDoList,logInPage,signUpPage);
}
function logInPageClick(){
    console.log(userArray);
    enabledPage(dashboard,settings,landingPage,toDoList,signUpPage,logInPage);
}
function termsClick(){

    if(terms.checked === true){
        btnSubmit.disabled = false;

    }
    else if (terms.checked === false){
        btnSubmit.disabled = true;

    }
}
function submit(event){
    event.preventDefault();
    let SubmitfirstName = firstName.value;
    let SubmitlastName = lastName.value;
    let Submitemail = email.value;
    let Submitpassword = password.value;
    ValidateEmail(email);
    if((SubmitfirstName === '') || (SubmitlastName === '') || (Submitemail === '') || (Submitpassword === '')){
        let errorSignUp = document.getElementById('errorSignUp');
        errorSignUp.innerText = "Fill up all the form!";
        errorSignUp.style.color = 'red';
    }
    else if(!emailCheck){
        errorSignUp.innerText = "You have entered an invalid email address!";
        errorSignUp.style.color = 'red';
    }
    else{
        userArray.push({
            firstName: SubmitfirstName,
            lastName: SubmitlastName,
            email: Submitemail,
            password:Submitpassword
        });
        signUpForm.reset();
        enabledPage(landingPage,signUpPage,settings,toDoList,logInPage,dashboard);
        localStorage.setItem('userArray' , JSON.stringify(userArray) );
        activeFirstName = SubmitfirstName;
        activeLastName = SubmitlastName;
        activeEmail = Submitemail;
        activePassword = Submitpassword;
        return{
            activeFirstName,
            activeLastName,
            activeEmail,
            activePassword
        }
    }
}
function logIn(){
    event.preventDefault()
    let formEmail = logInEmail.value;
    let formPassword = logInPassword.value;
    ValidateEmail(logInEmail);
    if((formEmail === '') || (formPassword === "")){
        const errorLogIn = document.getElementById('errorLogIn');
        errorLogIn.innerText = "Error!  Email or Password Required!";
        errorLogIn.style.color = 'red';
    }else if(!emailCheck){
        errorLogIn.innerText = "You have entered an invalid email address!";
        errorLogIn.style.color = 'red';
    }else{
        for (const searchUser of userArray) {
            if((searchUser.email === formEmail) && (searchUser.password === formPassword)){
                errorLogIn.innerText = '';
                logInForm.reset();
                activeFirstName = searchUser.firstName;
                activeLastName = searchUser.lastName;
                activeEmail = searchUser.email;
                activePassword = searchUser.password;
                for (const searchTitle of titleArray) {
                    if(searchTitle.email === activeEmail){
                        activeTitle = document.createElement('a');
                        let link = document.createTextNode(searchTitle.toDoName);
                        activeTitle.appendChild(link);
                        activeTitle.setAttribute('href' , '#'+ searchTitle.toDoName)
                        dashList.appendChild(activeTitle);
                    for (const search of listArray) {
                        if(search.toDoName === searchTitle.toDoName){
                                let toDocontainer = document.createElement('div');
                                toDocontainer.setAttribute('id' , search.toDoName)
                                let toDoHeader = document.createElement('h1');
                                toDoHeader.innerText = search.toDoName;
                                toDocontainer.appendChild(toDoHeader);
                                let toDocheckbox = document.createElement('input');
                                toDocheckbox.setAttribute('type' , 'checkbox');
                                let toDoLabel = document.createElement('label');
                                toDoLabel.innerText = search.toDo;
                                if(search.done){
                                    toDocheckbox.checked = true;
                                    toDocontainer.appendChild(toDocheckbox);
                                    toDocontainer.appendChild(toDoLabel);
                                    manageToDo.appendChild(toDocontainer);
                                    toDocontainer.style.display = 'none';
                                }
                                else{
                                    toDocheckbox.checked = false;
                                    toDocontainer.appendChild(toDocheckbox);
                                    toDocontainer.appendChild(toDoLabel);
                                    manageToDo.appendChild(toDocontainer);
                                    toDocontainer.style.display = 'none';
                                }
                            }
                        }
                    }
                }
                enabledPage(landingPage,signUpPage,settings,toDoList,logInPage,dashboard);
                return{
                    activeFirstName,
                    activeLastName,
                    activeEmail,
                    activePassword
                }
            }
            else{
                const errorLogIn = document.getElementById('errorLogIn');
                errorLogIn.innerText = "Error! Invalid Email or Password!";
                errorLogIn.style.color = 'red';
                logInForm.reset();
            }
        }
    }
}
function ValidateEmail(e)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.value))
  {
    return emailCheck = true;
  }
    return emailCheck = false;
}
function dash(){
    enabledPage(landingPage,signUpPage,settings,toDoList,logInPage,dashboard);
}
