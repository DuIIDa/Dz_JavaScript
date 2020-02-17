let date = new Date;
let newDate = new Date('December 31, 2020')

const weekDay = () => {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let day = date.getDay();
    return days[day];
};

const dayCheck = (hours) =>{
    if(hours > 4 && hours < 12){
        return 'Доброе утро!';
    }else if(hours > 12 && hours < 18){
        return 'Добрый день!';
    }else{
        return 'Добрый вечер!';
    }
};

const newYers = () => {
    const msPerDay = 24*60*60*1000;
    let daysLeft = Math.round((newDate.getTime() -  date.getTime())/msPerDay);

    let ds = String(daysLeft);
    //Вырезаем последнею цифру
    ds = parseInt(ds.substr(ds.length-1))
    //Склоняем слово ДЕНЬ
    if(daysLeft>4&&daysLeft<21){
        return `${daysLeft} Дней`;
    }
    else if(ds==1) {
        return `${daysLeft} День`;
    }
    else if(ds==2||ds==3||ds==4){
        return `${daysLeft} Деня`;
    }
    else{
        return `${daysLeft} Дней`;
    }

}

const timer = () => {
        date = new Date;

        document.getElementById("Fulltime").innerHTML = (`
        ${dayCheck(date.getHours())}<br>
        Сегодня ${weekDay()}<br>
        Текущее время: ${date.toLocaleTimeString()}<br>
        До нового года осталось: ${newYers()}
        `);

}

setInterval(timer, 1000);