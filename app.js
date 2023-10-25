function moreDesignation() { 
    document.getElementById("hideDesignation").innerHTML = "2nd most active Github user in 2021";
}

function moreDescribe() { 
    document.getElementById("hideDescribe").innerHTML = " I am interested in web development.";
}

function downloadPDF() {
    const url = '';
    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-pdf-file.pdf';
    link.click();
}