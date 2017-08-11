var i = 0;
const interface_H1 = ["Новая тренировка:", "Sample Text1", "Sample Text2", "Sample Text3"];
const interface_p = ["Удобный счетчик действий и все такое.", "Sample Text1", "Sample Text2", "Sample Text3"];


function MoveToLeft()
{
    if(i > 0)
    {i--;
    document.getElementById("interface_img").setAttribute("src", "img/" + (i+1) + ".png");
    document.getElementById("interface_H1").innerHTML = interface_H1[i];
    document.getElementById("interface_p").innerHTML = interface_p[i];

    }
    else
    {
        i = 3;
        document.getElementById("interface_img").setAttribute("src", "img/" + (i+1) + ".png");
        document.getElementById("interface_H1").innerHTML = interface_H1[i];
        document.getElementById("interface_p").innerHTML = interface_p[i];

    }


}

function MoveToRight()
{
    if(i < 3)
    {i++;
        document.getElementById("interface_img").setAttribute("src", "img/" + (i+1) + ".png");
        document.getElementById("interface_H1").innerHTML = interface_H1[i];
        document.getElementById("interface_p").innerHTML = interface_p[i];
    }
    else
    {
        i = 0;
        document.getElementById("interface_img").setAttribute("src", "img/" + (i+1) + ".png");
        document.getElementById("interface_H1").innerHTML = interface_H1[i];
        document.getElementById("interface_p").innerHTML = interface_p[i];
    }

}



function Description() {
    $("#tree").hide();
    $("#main").show();
    document.getElementById('main').style.display = "flex";
    document.getElementById('description_button').style.color = "yellow";
    document.getElementById('tree_button').style.color = "white";
}

function Tree() {
    $("#main").hide();
    $("#tree").show();
    document.getElementById('tree').style.display = "flex";
    document.getElementById('description_button').style.color = "white";
    document.getElementById('tree_button').style.color = "yellow";
}




