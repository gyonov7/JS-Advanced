function extract(content) {

    content = document.getElementById('content').textContent;
    let pattern = /\(([^)]+)\)/g;

    let match = pattern.exec(content);
let result = [];
    while(match!=null){
        result.push(match[1]);

        match = pattern.exec(content);
    }
    return result.join('; ');
}