function git() {
    var originalName = document.getElementById("text").value;
    console.log(originalName);

    
    fetch("https://api.github.com/users/" + originalName)
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
            document.getElementById("result").innerHTML = `
                <img src="${data.avatar_url}" alt="user_avatar">
                <h1>${data.name}</h1>
                
                <p><a href="${data.html_url}" target="_blank">View Profile</a></p>
            `;
        });

    
    fetch("https://github.com/MadhumithaBR" + originalName + "/repos")
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
            let repoList = "<h2>Repositories:</h2><ul>";
            data.forEach(repo => {
                repoList += `
                    <li>
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description}
                    </li>`;
            });
            repoList += "</ul>";
            document.getElementById("repos").innerHTML = repoList;
        });
}