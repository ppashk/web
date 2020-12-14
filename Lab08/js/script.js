var arrFriends = [];

arrFriends[0] = {  
    Name:"Денис",
    Mobile:"+380974848949",
    Data: "03.12.2020"
}
arrFriends[1] = {  
    Name:"Оксана",
    Mobile:"+380674838949",
    Data: "15.12.2020"
}
arrFriends[2] = {  
    Name:"Маргарита",
    Mobile:"",
    Data: "29.11.2020"
}
arrFriends[3] = {  
    Name:"Марта",
    Mobile:"",
    Data: "01.12.2020"
	
}
arrFriends[4] = {  
    Name:"Іван",
    Mobile:"+380922283101",
    Data: "15.12.2020"
}

var html = " ";
function daysDifference(text){
    var currentDate = new Date();
    var date1 = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));

    var timeDiff = Math.abs(currentDate.getTime() - date1.getTime());
    var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
    return {'daysDiff':daysDiff,'date1':date1};
}
function left(text){
    var dates = daysDifference(text);
    var date1 = dates['date1'];
    var daysDiff = dates['daysDiff'];
    return daysDiff;
    
}
function output(item){
    var  textDate = item['Data'];
    var daysleft = left(textDate);
    var noMobile = "Номер відсутній";
        if(daysleft==0){
            html = html + "<tr style='background:red;'>";
        }
		else if(daysleft==3){
			 html = html + "<tr style='background:yellow;'>";
        }
        else{
            html = html + "<tr>";
        }
        for(var key in item){
            if (item['Mobile'] == '' && key == 'Mobile'){
                html = html + "<td>"+noMobile + "</td>";
            }
            else{
                html = html + "<td>"+item[key] + "</td>";
            }
        }
        if(daysleft==0){
            html = html + "<td>"+ "Час для телефонного дзвінка!" + "</td>";
        }
		else if(daysleft==3){
            html = html + "<td>"+ "Час для листівки!" + "</td>";
        }
        else{
            html = html + "<td>"+ daysleft + "</td>";
        }
        html = html + "</tr>";
}
function ras(){
    html = "<table style='b-table'>";
    html = html + "<tr><td>Ім'я:</td>" + " <td>Номер телефону:</td><td>День народження:</td><td>Залишилось:</td></tr>";
    arrFriends.forEach(output);
    html = html + '</table>';
    document.getElementById('result').innerHTML = html;
}