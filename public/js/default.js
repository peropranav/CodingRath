$(document).ready(settingEditor);


function settingEditor() {
    //code here...
    var code = $(".codemirror-textarea")[0];



    var editor = CodeMirror.fromTextArea(code, {
        lineNumbers : true,
        theme:"blackboard"

    });

}

function myFunction()
{
    console.log("hii")
    var x = document.getElementById("themeChoice").value;
    if(x=="light")
    {

    }
}
