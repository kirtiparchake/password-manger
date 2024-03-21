const submitbtn = document.querySelector('.sub');
const table = document.querySelector('.table');
const midddlediv = document.querySelector('.mid');
const tableContainer = document.querySelector('table');
const button = document.querySelector('.table');
const copiedText = document.querySelector('.copied');
const eyeOn = document.querySelector('.ri-eye-fill')
const eyeOff = document.querySelector('#eyeoff')
const websiteData = [];

submitbtn.addEventListener('click', function(){
    const websiteinput = document.querySelector('.web input');
    const userinput = document.querySelector('.user input');
    const passinput = document.querySelector('.pass input');

    const website = websiteinput.value.trim();
    const username = userinput.value.trim();
    const password = passinput.value.trim();
    
    websiteData.push({website, username, password});
    showDataOnDom();
    button.style.display = 'none';
    saveTolocalStorage();
    websiteinput.value ="";
    userinput.value ="";
   passinput.value ="";
});

function showDataOnDom(){
    tableContainer.innerHTML = '';

    if(websiteData.length > 0){
        const newrow = document.createElement("tr");
        newrow.innerHTML = 
        `<th>Website</th>
        <th>Username</th>
        <th>Password</th>
        <th>Delete</th>
        `;
        
        tableContainer.appendChild(newrow);
    }
    websiteData.forEach((data, index)=>{
        const newrow = document.createElement("tr");
        newrow.innerHTML =
       `<td>${data.website}<i class="ri-clipboard-fill" onclick="copyToClipboard('${data.website}')"></i> </td>
        <td>${data.username} <i class="ri-clipboard-fill" onclick="copyToClipboard('${data.username}')"></i></td>
        <td>${data.password} <i class="ri-clipboard-fill" onclick="copyToClipboard('${data.password}')"></i></td>
        <td><i class="ri-delete-bin-5-fill" onclick="deleteItem(${index})"></i></td>`;
        
        tableContainer.appendChild(newrow);
    });
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    copiedText.style.display = 'inline';
    console.log('clicked', text)
    setTimeout(() => {
        copiedText.style.display = 'none';
    }, 1500);
}

function deleteItem (index){
    websiteData.splice(index, 1);
    showDataOnDom();
    button.style.display = 'block';
    saveTolocalStorage();
}

function saveTolocalStorage(){
    localStorage.setItem('storedPasswords', JSON.stringify(websiteData))
}


